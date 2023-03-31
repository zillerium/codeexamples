import React from "react";

const AssetFinancials = ({
  assetValue,
  assetIncome,
  assetYield,
  assetRiskRating,
  assetNumberShares,
}) => {
  return (
    <div>
      <p>Asset Value - {assetValue} GBP</p>
      <p>Income - {assetIncome} GBP</p>
      <p>Yield - {assetYield}%</p>
      <p>Risk - {assetRiskRating}</p>
      <p>Number shares - {assetNumberShares}</p>
    </div>
  );
};

export default AssetFinancials;
