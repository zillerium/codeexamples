import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function PartCatalogDel () {
  const {
    deliveryCharge, setDeliveryCharge,
  } = useContext(ContractContext);

  return (
    <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Delivery Details</h3>
      <div style={{ borderRadius: "10px", border: "1px solid lightgrey" }}>
        <input type="text" placeholder="Delivery Charge" value={deliveryCharge} 
          onChange={(e) => setDeliveryCharge(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} 
          title={'Delivery Charge'} />
      </div>
    </div>
  );
}

export default PartCatalogDel;
