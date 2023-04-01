// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./AssetInterface.sol";

contract Asset is Ownable, AssetInterface {
    struct AssetStruct {
        uint256 assetId;
        string dbKey;
        uint256 assetValue;
        uint256 assetNumberShares;
        uint256 assetIncome;
        uint256 assetYield;
        uint256 assetRiskRating;
        string currency;
        uint256 assetNumberSharesSold;
    }

    mapping(uint256 => AssetStruct) public assets;

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
    ) external override returns (bool) {
        require(assets[_assetId].assetId == 0, "Asset ID already exists");

        assets[_assetId] = AssetStruct({
            assetId: _assetId,
            dbKey: _dbKey,
            assetValue: _assetValue,
            assetNumberShares: _assetNumberShares,
            assetIncome: _assetIncome,
            assetYield: _assetYield,
            assetRiskRating: _assetRiskRating,
            currency: _currency,
            assetNumberSharesSold: _assetNumberSharesSold
        });
        return true;
    }

    function getAsset(uint256 _assetId) external view override returns (
        uint256 assetId,
        string memory dbKey,
        uint256 assetValue,
        uint256 assetNumberShares,
        uint256 assetIncome,
        uint256 assetYield,
        uint256 assetRiskRating,
        string memory currency,
        uint256 assetNumberSharesSold
    ) {
        AssetStruct storage asset = assets[_assetId];
        return (
            asset.assetId,
            asset.dbKey,
            asset.assetValue,
            asset.assetNumberShares,
            asset.assetIncome,
            asset.assetYield,
            asset.assetRiskRating,
            asset.currency,
            asset.assetNumberSharesSold
        );
    }

    function getNumberSharesSold(uint256 _assetId) external view override returns (uint256) {
        return assets[_assetId].assetNumberSharesSold;
    }

    function updateNumberSharesSold(uint256 _assetId, uint256 _assetNumberSharesSold) external override {
        require(assets[_assetId].assetId > 0, "Asset ID does not exist");

        assets[_assetId].assetNumberSharesSold = _assetNumberSharesSold;
    }
}
