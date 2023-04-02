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
    <>
      <div>
        <input type="checkbox" id="hasDoubleGlazing" checked={hasDoubleGlazing} onChange={(e) => setHasDoubleGlazing(e.target.checked)} />
        <label htmlFor="hasDoubleGlazing">Has Double Glazing</label>
      </div>
      <div>
        <input type="checkbox" id="hasTenant" checked={hasTenant} onChange={(e) => setHasTenant(e.target.checked)} />
        <label htmlFor="hasTenant">Has Tenant</label>
      </div>
      <div>
        <input type="checkbox" id="hasGarden" checked={hasGarden} onChange={(e) => setHasGarden(e.target.checked)} />
        <label htmlFor="hasGarden">Has Garden</label>
      </div>
      <div>
        <input type="checkbox" id="hasParking" checked={hasParking} onChange={(e) => setHasParking(e.target.checked)} />
        <label htmlFor="hasParking">Has Parking</label>
      </div>
    </>
  );
}

export default AssetCheckboxes;
