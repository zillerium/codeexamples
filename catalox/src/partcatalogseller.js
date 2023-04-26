import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function PartCatalogSeller() {
  const {
    merchantId, setMerchantId,
    merchantName, setMerchantName,
  } = useContext(ContractContext);

  return (
    <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Asset Owner Details</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "10px", marginBottom: "10px" }}>
        <div style={{ borderRadius: "10px", border: "1px solid lightgrey" }}>
          <input type="text" placeholder="Merchant ID" value={merchantId} 
            onChange={(e) => setMerchantId(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} 
            title={'Merchant ID'} />
        </div>
        <div style={{ borderRadius: "10px", border: "1px solid lightgrey" }}>
          <input type="text" placeholder="Merchant Name" value={merchantName}
            onChange={(e) => setMerchantName(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }}
            title={'Merchant Name'} />
        </div>
      </div>
    </div>
  );
}

export default PartCatalogSeller;
