import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function AssetOwner() {
  const {
    assetOwnerName, setAssetOwnerName,
    assetAddress, setAssetAddress,
    assetPreferredNotary, setAssetPreferredNotary,
  } = useContext(ContractContext);

  return (
    <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Asset Owner Details</h3>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <label htmlFor="assetOwnerName" style={{ display: "block" }}>Asset Owner Name:</label>
          <input type="text" placeholder="Asset Owner Name" id="assetOwnerName" value={assetOwnerName} onChange={(e) => setAssetOwnerName(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "5px", padding: "5px" }} />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <label htmlFor="assetAddress" style={{ display: "block" }}>Asset Address:</label>
          <input type="text" placeholder="Asset Address" id="assetAddress" value={assetAddress} onChange={(e) => setAssetAddress(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "5px", padding: "5px" }} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
        <div>
          <label htmlFor="assetPreferredNotary" style={{ display: "block" }}>Asset Preferred Notary:</label>
          <input type="text" placeholder="Asset Preferred Notary" id="assetPreferredNotary" value={assetPreferredNotary} onChange={(e) => setAssetPreferredNotary(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "5px", padding: "5px" }} />
        </div>
        <div style={{ marginLeft: "20px", width: "100%" }}>
          {/* Empty div for spacing purposes */}
        </div>
      </div>
    </div>
  );
}

export default AssetOwner;
