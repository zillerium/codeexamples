import { useContext, useState } from 'react';
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

  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");

  const handleMouseEnter = (event, content) => {
    setShowTooltip(true);
    setTooltipContent(content);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setTooltipContent("");
  };

return (
    <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Asset Financials</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ position: "relative", borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginRight: "5px" }}>
            <input type="number" placeholder="Asset Income" value={assetIncome} 
              onChange={(e) => setAssetIncome(e.target.value)} 
              onMouseEnter={(e) => handleMouseEnter(e, assetIncome)} 
              onMouseLeave={handleMouseLeave}
              style={{ border: "none", width: "100%", padding: "5px" }} />
            {showTooltip && <div style={{ position: "absolute", top: "-30px", left: "50%", transform: "translateX(-50%)", background: "white", padding: "5px", borderRadius: "5px", boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)" }}>{tooltipContent}</div>}
          </div>
          <div style={{ position: "relative", borderRadius: "10px", border: "1px solid lightgrey", flex: "1" }}>
            <input type="number" placeholder="Asset Yield" value={assetYield} 
              onChange={(e) => setAssetYield(e.target.value)} 
              onMouseEnter={(e) => handleMouseEnter(e, assetYield)} 
              onMouseLeave={handleMouseLeave}
              style={{ border: "none", width: "100%", padding: "5px" }} />
            {showTooltip && <div style={{ position: "absolute", top: "-30px", left: "50%", transform: "translateX(-50%)", background: "white", padding: "5px", borderRadius: "5px", boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)" }}>{tooltipContent}</div>}
          </div>
        </div>
         


<div style={{ display: "flex", justifyContent: "space-between" }}>
  <div style={{ position: "relative", borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginRight: "5px" }}>
    <input type="number" placeholder="Asset Risk Rating" value={assetRiskRating} 
      onChange={(e) => setAssetRiskRating(e.target.value)} 
      onMouseEnter={(e) => handleMouseEnter(e, assetRiskRating)} 
      onMouseLeave={handleMouseLeave}
      style={{ border: "none", width: "100%", padding: "5px" }} />
    {showTooltip && <div style={{ position: "absolute", top: "-30px", left: "50%", transform: "translateX(-50%)", background: "white", padding: "5px", borderRadius: "5px", boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)" }}>{tooltipContent}</div>}
  </div>
  <div style={{ position: "relative", borderRadius: "10px", border: "1px solid lightgrey", flex: "1" }}>
    <input type="number" placeholder="Asset Value" value={assetValue} 
      onChange={(e) => setAssetValue(e.target.value)} 
      onMouseEnter={(e) => handleMouseEnter(e, assetValue)} 
      onMouseLeave={handleMouseLeave}
      style={{ border: "none", width: "100%", padding: "5px" }} />
    {showTooltip && <div style={{ position: "absolute", top: "-30px", left: "50%", transform: "translateX(-50%)", background: "white", padding: "5px", borderRadius: "5px", boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)" }}>{tooltipContent}</div>}
  </div>
</div>
<div style={{ display: "flex", justifyContent: "space-between" }}>
  <div style={{ position: "relative", borderRadius: "10px", border: "1px solid lightgrey", flex: "1", marginRight: "5px" }}>
    <input type="currency" placeholder="Currency" value={currency} 
      onChange={(e) => setCurrency(e.target.value)} 
      onMouseEnter={(e) => handleMouseEnter(e, currency)} 
      onMouseLeave={handleMouseLeave}
      style={{ border: "none", width: "100%", padding: "5px" }} />
    {showTooltip && <div style={{ position: "absolute", top: "-30px", left: "50%", transform: "translateX(-50%)", background: "white", padding: "5px", borderRadius: "5px", boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)" }}>{tooltipContent}</div>}
  </div>
  <div style={{ position: "relative", borderRadius: "10px", border: "1px solid lightgrey", flex: "1" }}>
    <input type="number" placeholder="Asset Number of Shares" value={assetNumberShares} 
      onChange={(e) => setAssetNumberShares(e.target.value)} 
      onMouseEnter={(e) => handleMouseEnter(e, assetNumberShares)} 
      onMouseLeave={handleMouseLeave}
      style={{ border: "none", width: "100%", padding: "5px" }} />
    {showTooltip && <div style={{ position: "absolute", top: "-30px", left: "50%", transform: "translateX(-50%)", background: "white", padding: "5px", borderRadius: "5px", boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)" }}>{tooltipContent}</div>}
  </div>
</div>
      </div>
    </div>
  );
}

export default AssetRisk;
