// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IUSDCBTCTradingPool {
    function placeBid(uint256 amount, uint256 exchangeRate, uint256 expiration) external;
    function fulfillBid(uint256 bidId) external;
    function updateExchangeRate(uint256 newRate) external;
    function depositBTC(bytes32 txid, uint256 vout, uint256 amount) external;
    function withdrawBTC(bytes32 txid, uint256 vout, uint256 amount) external;
    function getBTCBalance() external view returns (uint256);
    function getBid(uint256 bidId) external view returns (
        uint256 id,
        address seller,
        uint256 amount,
        uint256 exchangeRate,
        uint256 expiration,
        bool fulfilled
    );
}


function placeBid(uint256 amount, uint256 exchangeRate, uint256 expiration) external {
    require(amount > 0, "Amount must be greater than zero");
    require(exchangeRate > 0, "Exchange rate must be greater than zero");
    require(expiration > block.timestamp, "Expiration must be in the future");

    uint256 bidId = nextBidId++;
    bids[bidId] = Bid(bidId, payable(msg.sender), amount, exchangeRate, expiration, false);
    emit BidPlaced(bidId, msg.sender, amount, exchangeRate, expiration);

    // Transfer WBTC from seller to trading pool
    require(IERC20(wbtcToken).transferFrom(msg.sender, address(this), amount), "Failed to transfer WBTC to trading pool");
    btcBalance += amount;
}

function fulfillBid(uint256 bidId) external {
    Bid storage bid = bids[bidId];
    require(!bid.fulfilled, "Bid has already been fulfilled");
    require(bid.expiration >= block.timestamp, "Bid has expired");

    // Calculate the amount of USDC owed to the bidder
    uint256 usdcOwed = bid.amount * bid.exchangeRate / 1e8;
    require(usdcOwed <= usdcBalance, "Insufficient USDC balance in trading pool");

    // Transfer USDC from trading pool to bidder
    require(IERC20(usdcToken).transfer(bid.bidder, usdcOwed), "Failed to transfer USDC to bidder");

    // Transfer WBTC from trading pool to seller
    require(IERC20(wbtcToken).transfer(bid.seller, bid.amount), "Failed to transfer WBTC to seller");

    // Update the balances of the trading pool and mark the bid as fulfilled
    usdcBalance -= usdcOwed;
    btcBalance -= bid.amount;
    bid.fulfilled = true;
    emit BidFulfilled(bidId, bid.seller, bid.bidder, bid.amount, usdcOwed);
}

function updateExchangeRate(uint256 newRate) external onlyOwner {
    require(newRate > 0, "Exchange rate must be greater than zero");
    exchangeRate = newRate;
    emit ExchangeRateUpdated(newRate);
}

function depositBTC(uint256 amount) external {
    require(amount > 0, "Amount must be greater than zero");

    // Transfer WBTC from depositor to trading pool
    require(IERC20(wbtcToken).transferFrom(msg.sender, address(this), amount), "Failed to transfer WBTC to trading pool");
    btcBalance += amount;
}

function withdrawBTC(uint256 amount) external {
    require(amount > 0, "Amount must be greater than zero");
    require(amount <= btcBalance, "Insufficient BTC balance in trading pool");

    // Transfer WBTC from trading pool to withdrawer
    require(IERC20(wbtcToken).transfer(msg.sender, amount), "Failed to transfer WBTC to withdrawer");
    btcBalance -= amount;
}

function getBTCBalance() external view returns (uint256) {
    return btcBalance;
}


function getBid(uint256 bidId) external view returns (address, uint256, uint256, uint256, bool) {
    Bid storage bid = bids[bidId];
    return (bid.bidder, bid.amount, bid.exchangeRate, bid.expiration, bid.fulfilled);
}

