import { useContext } from 'react';
import { ContractContext } from './ContractContext';

function AssetRisk() {
  const {
    assetIncome,
    setAssetIncome,
    assetYield,
    setAssetYield,
    assetRiskRating,
    setAssetRiskRating,
    assetValue,
    setAssetValue,
    currency,
    setCurrency,
    assetNumberShares,
    setAssetNumberShares,
  } = useContext(ContractContext);

  return (
    <div style={{ border: "3px solid green", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
        <div style={{ flex: "1" }}>
          <input type="number" placeholder="Asset Income" value={assetIncome} 
            onChange={(e) => setAssetIncome(e.target.value)} style={{ border: "3px solid green", width: "100%" }} />
        </div>
        <div style={{ flex: "1" }}>
          <input type="number" placeholder="Asset Yield" value={assetYield} 
            onChange={(e) => setAssetYield(e.target.value)} style={{ border: "3px solid green", width: "100%" }} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
        <div style={{ flex: "1" }}>
          <input type="number" placeholder="Asset Risk Rating" value={assetRiskRating} 
            onChange={(e) => setAssetRiskRating(e.target.value)} style={{ border: "3px solid green", width: "100%" }} />
        </div>
        <div style={{ flex: "1" }}>
          <input type="number" placeholder="Asset Value" value={assetValue} 
            onChange={(e) => setAssetValue(e.target.value)} style={{ border: "3px solid green", width: "100%" }} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
        <div style={{ flex: "1" }}>
          <input type="currency" placeholder="Currency" value={currency} 
            onChange={(e) => setCurrency(e.target.value)} style={{ border: "3px solid green", width: "100%" }} />
        </div>
        <div style={{ flex: "1" }}>
          <input type="number" placeholder="Asset Number of Shares" value={assetNumberShares} 
            onChange={(e) => setAssetNumberShares(e.target.value)} style={{ border: "3px solid green", width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default AssetRisk;
