// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface AssetInterface {
    function addAsset(
        uint256 _assetId,
        string memory _dbKey,
        uint256 _assetValue,
        uint256 _assetNumberShares,
        uint256 _assetIncome,
        uint256 _assetYield,
        uint256 _assetRiskRating,
        string memory _currency,
        uint256 _assetNumberSharesSold
    ) external returns (bool);

    function getAsset(uint256 _assetId) external view returns (
        uint256 assetId,
        string memory dbKey,
        uint256 assetValue,
        uint256 assetNumberShares,
        uint256 assetIncome,
        uint256 assetYield,
        uint256 assetRiskRating,
        string memory currency,
        uint256 assetNumberSharesSold
    );

    function getNumberSharesSold(uint256 _assetId) external view returns (uint256);

    function updateNumberSharesSold(uint256 _assetId, uint256 _assetNumberSharesSold) external;
}
