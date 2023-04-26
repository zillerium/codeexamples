import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function PartCatalogPrice() {
  const {
     partSalePrice, setPartSalePrice,
    partManPrice, setPartManPrice,
    currency, setCurrency,
  } = useContext(ContractContext);

  return (
    <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Asset Owner Details</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "10px", marginBottom: "10px" }}>
     
        <div style={{ borderRadius: "10px", border: "1px solid lightgrey" }}>
          <input type="text" placeholder="Sale Price" value={partSalePrice}
            onChange={(e) => setPartSalePrice(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }}
            title={'Sale Price'} />
        </div>
        <div style={{ borderRadius: "10px", border: "1px solid lightgrey" }}>
          <input type="text" placeholder="Manufacturer Price" value={partManPrice}
            onChange={(e) => setPartManPrice(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }}
            title={'Manufacturer Price'} />
        </div>
        <div style={{ borderRadius: "10px", border: "1px solid lightgrey" }}>
          <input type="text" placeholder="Currency" value={currency}
            onChange={(e) => setCurrency(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }}
            title={'Currency'} />
        </div>
      </div>
    </div>
  );
}

export default PartCatalogPrice;
