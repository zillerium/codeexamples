// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface SalesInterface {
    function approveAndTransferUSDC(
        uint256 _contractNumber,
        address payable _seller,
        address _notary,
        uint _releaseTime,
        uint _disputeRelease,
        uint256 _price
    ) external returns(bool);

    function raiseDispute(uint256 _contractNumber) external;

    function settlementUsdc(uint256 _contractNumber) external returns(bool);

    function claimUsdc(uint256 contractNumber) external returns (bool);

    function disputeSettlement(bool paySeller, uint256 contractNumber) external;

    function defaultDisputeSettlement(uint256 contractNumber) external;
    
    function getSalesContract(uint256 _contractNumber) external view returns (
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
    );
}




