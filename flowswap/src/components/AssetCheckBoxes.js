import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function AssetCheckboxes() {
  const {
    hasDoubleGlazing, setHasDoubleGlazing,
    hasTenant, setHasTenant,
    hasGarden, setHasGarden,
    hasParking, setHasParking,
  } = useContext(ContractContext);

  return (
    <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Asset Options</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: "1", marginRight: "5px" }}>
          <input type="checkbox" id="hasDoubleGlazing" checked={hasDoubleGlazing} 
            onChange={(e) => setHasDoubleGlazing(e.target.checked)} style={{ marginRight: "5px" }} />
          <label htmlFor="hasDoubleGlazing">Has Double Glazing</label>
        </div>
        <div style={{ flex: "1", marginLeft: "5px" }}>
          <input type="checkbox" id="hasTenant" checked={hasTenant} 
            onChange={(e) => setHasTenant(e.target.checked)} style={{ marginRight: "5px" }} />
          <label htmlFor="hasTenant">Has Tenant</label>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <div style={{ flex: "1", marginRight: "5px" }}>
          <input type="checkbox" id="hasGarden" checked={hasGarden} 
            onChange={(e) => setHasGarden(e.target.checked)} style={{ marginRight: "5px" }} />
          <label htmlFor="hasGarden">Has Garden</label>
        </div>
        <div style={{ flex: "1", marginLeft: "5px" }}>
          <input type="checkbox" id="hasParking" checked={hasParking} 
            onChange={(e) => setHasParking(e.target.checked)} style={{ marginRight: "5px" }} />
          <label htmlFor="hasParking">Has Parking</label>
        </div>
      </div>
    </div>
  );
}

export default AssetCheckboxes;
