// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IUSDCGBPTradingPool {
    function placeBid(uint256 amount, uint256 exchangeRate, uint256 expiration) external;
    function fulfillBid(uint256 bidId) external;
    function updateExchangeRate(uint256 newRate) external;
    function depositUSDC(uint256 amount) external;
    function withdrawUSDC(uint256 amount) external;
    function getUSDCBalance() external view returns (uint256);
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

    // Transfer USDC from seller to trading pool
    require(IERC20(usdcToken).transferFrom(msg.sender, address(this), amount), "Failed to transfer USDC to trading pool");
    usdcBalance += amount;
}

function getBid(uint256 bidId) external view returns (
    uint256 id,
    address seller,
    uint256 amount,
    uint256 exchangeRate,
    uint256 expiration,
    bool fulfilled
) {
    require(bids[bidId].seller != address(0), "Invalid bid ID");

    Bid storage bid = bids[bidId];
    return (bid.id, bid.seller, bid.amount, bid.exchangeRate, bid.expiration, bid.fulfilled);
}



function fulfillBid(uint256 bidId) external {
    require(!bids[bidId].fulfilled, "Bid already fulfilled");
    require(block.timestamp <= bids[bidId].expiration, "Bid has expired");

    uint256 usdcAmount = bids[bidId].amount;
    uint256 gbpAmount = usdcAmount * exchangeRate / 1e18;

    // Check if there is enough liquidity in the trading pool
    require(gbpAmount <= usdcBalance, "Insufficient USDC liquidity");

    // Transfer USDC from buyer to seller
    require(IERC20(usdcToken).transfer(bids[bidId].seller, usdcAmount), "Failed to transfer USDC to seller");

    // Transfer USDC from trading pool to buyer
    require(IERC20(usdcToken).transfer(msg.sender, usdcAmount), "Failed to transfer USDC to buyer");
    usdcBalance -= usdcAmount;

    bids[bidId].fulfilled = true;
    emit BidFulfilled(bidId, msg.sender, usdcAmount, exchangeRate);
}

function updateExchangeRate(uint256 newRate) external {
    require(msg.sender == owner, "Only the owner can update the exchange rate");
    exchangeRate = newRate;
}

function depositUSDC(uint256 amount) external {
    require(IERC20(usdcToken).transferFrom(msg.sender, address(this), amount), "Failed to transfer USDC to trading pool");
    usdcBalance += amount;
}

 

function withdrawUSDC(uint256 amount) external {
    require(msg.sender == owner, "Only the owner can withdraw USDC");
    require(amount <= usdcBalance, "Insufficient USDC balance");

    require(IERC20(usdcToken).transfer(msg.sender, amount), "Failed to transfer USDC to owner");
    usdcBalance -= amount;
}

function getUSDCBalance() external view returns (uint256) {
    return usdcBalance;
}

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./IERC20.sol";

contract USDCGBPTradingPool {
    struct Bid {
        uint256 id;
        address payable seller;
        uint256 amount;
        uint256 exchangeRate;
        uint256 expiration;
        bool fulfilled;
    }

    address public owner;
    address public usdcToken;
    uint256 public exchangeRate;
    uint256 public nextBidId;
    uint256 public usdcBalance;
    mapping(uint256 => Bid) public bids;

    event BidPlaced(uint256 indexed bidId, address indexed seller, uint256 amount, uint256 exchangeRate, uint256 expiration);
    event BidFulfilled(uint256 indexed bidId, address indexed buyer, uint256 usdcAmount, uint256 exchangeRate);

    // Constructor
    constructor(address _owner, address _usdcToken, uint256 _initialRate) {
        owner = _owner;
        usdcToken = _usdcToken;
        exchangeRate = _initialRate;
    }

    //....
}

