// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./SalesInterface.sol";

contract Sales is SalesInterface {
    struct SalesContract {
        address payable seller;
        address buyer;
        address notary;
        uint releaseTime;
        uint disputeRelease;
        uint256 price;
        uint256 balance;
        bool dispute;
        bool settled;
        uint256 assetId;
        uint256 numberPurchasedShares;
    }

    mapping(uint256 => SalesContract) public salesContracts;
    mapping(address => uint256[]) public buyerContractNumbers;
    mapping(address => uint256[]) public sellerContractNumbers;
    mapping(address => uint256[]) public notaryContractNumbers;
    address public usdcAddress;

    constructor(address _usdcAddress) {
        usdcAddress = _usdcAddress;
    }

function approveAndTransferUSDC(
    uint256 _contractNumber,
    address payable _seller,
    address _notary,
    uint _releaseTime,
    uint _disputeRelease,
    uint256 _price,
    uint256 _assetId
) public override returns(bool) {
    uint256 amount = _price;

    SalesContract memory newSalesContract = SalesContract({
        seller: _seller,
        buyer: msg.sender,
        notary: _notary,
        releaseTime: _releaseTime,
        disputeRelease: _disputeRelease,
        price: _price,
        balance: 0,
        dispute: false,
        settled: false,
        assetId: 0,
        numberPurchasedShares: 0
    });

    salesContracts[_contractNumber] = newSalesContract;
    buyerContractNumbers[msg.sender].push(_contractNumber);
    sellerContractNumbers[_seller].push(_contractNumber);
    notaryContractNumbers[_notary].push(_contractNumber);

    require(IERC20(usdcAddress).approve(address(this), amount), "Approval failed");
    require(IERC20(usdcAddress).transferFrom(msg.sender, address(this), amount), "Transfer failed");
    salesContracts[_contractNumber].balance = amount;

    return true;
}


  function raiseDispute(uint256 _contractNumber) public override {
    SalesContract storage contractToDispute = salesContracts[_contractNumber];
    require(msg.sender == contractToDispute.buyer, "Only buyer can raise dispute");
    require(!contractToDispute.dispute, "Dispute has already been raised");
    require(block.timestamp <= contractToDispute.releaseTime, "Dispute cannot be raised after release time");
    contractToDispute.dispute = true;
}

 function settlementUsdc(uint256 _contractNumber) public override returns(bool) {
    SalesContract storage contractToSettle = salesContracts[_contractNumber];
    require(msg.sender == contractToSettle.buyer, "Only buyer can settle");
    require(!contractToSettle.dispute, "Settlement cannot be made during dispute");
    require(contractToSettle.balance > 0, "No balance available to settle");

    require(IERC20(usdcAddress).transfer(contractToSettle.seller, contractToSettle.balance), "Transfer failed");
    contractToSettle.settled = true;
    contractToSettle.balance = 0;

    return true;
}


function claimUsdc(uint256 contractNumber) public override returns (bool) {
        SalesContract storage contractToClaim = salesContracts[contractNumber];
        require(tx.origin == contractToClaim.seller);
        require(contractToClaim.dispute == false, "cannot claim due to dispute");
        require(block.timestamp >= contractToClaim.releaseTime, "too early to claim");
        require(IERC20(usdcAddress).transfer(contractToClaim.seller, contractToClaim.price), "transfer failed");
        contractToClaim.settled = true;
        contractToClaim.balance = 0;
        return true;
    }


 function disputeSettlement(bool paySeller, uint256 contractNumber) public override {
    SalesContract storage contractToSettle = salesContracts[contractNumber];
    require(tx.origin == contractToSettle.notary, "Only notary can settle dispute");
    require(contractToSettle.dispute == true, "No dispute raised");
    require(block.timestamp <= contractToSettle.disputeRelease, "Dispute release time not reached");

    if (paySeller) {
        require(IERC20(usdcAddress).transferFrom(address(this), contractToSettle.seller, contractToSettle.balance), "Transfer failed");
    } else {
        require(IERC20(usdcAddress).transferFrom(address(this), contractToSettle.buyer, contractToSettle.balance), "Transfer failed");
    }

    contractToSettle.settled = true;
    contractToSettle.balance = 0;
    contractToSettle.dispute = false;
}


function defaultDisputeSettlement(uint256 contractNumber) public override {
    SalesContract storage contractToSettle = salesContracts[contractNumber];
    require(tx.origin == contractToSettle.notary || tx.origin == contractToSettle.seller || tx.origin == contractToSettle.buyer, "Only buyer, seller, or notary can settle default dispute");
    require(block.timestamp > contractToSettle.disputeRelease, "Dispute release time not reached");

    require(IERC20(usdcAddress).transfer(contractToSettle.seller, contractToSettle.balance), "Transfer failed");
    contractToSettle.settled = true;
    contractToSettle.balance = 0;
    contractToSettle.dispute = false;
}


function getSalesContract(uint256 _contractNumber) public view override returns (
        address payable seller,
        address buyer,
        address notary,
        uint releaseTime,
        uint disputeRelease,
        uint256 price,
        uint256 balance,
        bool dispute,
        bool settled,
        uint256 assetId,
        uint256 numberPurchasedShares
    ) {
        SalesContract storage salesContract = salesContracts[_contractNumber];
        return (
            salesContract.seller,
            salesContract.buyer,
            salesContract.notary,
            salesContract.releaseTime,
            salesContract.disputeRelease,
            salesContract.price,
            salesContract.balance,
            salesContract.dispute,
            salesContract.settled,
            salesContract.assetId,
            salesContract.numberPurchasedShares
        );
    }

}
