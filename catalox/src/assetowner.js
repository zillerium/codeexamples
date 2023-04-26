import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function PartCatalogDet() {
  const {
   manName, setManName,
    partNumber, setPartNumber,
    manPartNumber, setManPartNumber,
    partOption, setPartOption,
    partDesc, setPartDesc,
    partShortDesc, setPartShortDesc,
  } = useContext(ContractContext);
  
  
return (
  <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
    <h3 style={{ textAlign: "center" }}>Asset Owner Details</h3>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "10px", marginBottom: "10px" }}>
      <input type="text" placeholder="Asset Owner Name" value={assetOwnerName} 
        onChange={(e) => setAssetOwnerName(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }} 
        title={'Asset Owner Name'} />
      <input type="text" placeholder="Asset Address" value={assetAddress} 
        onChange={(e) => setAssetAddress(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }} 
        title={'Asset Street Address'} />
      <input type="text" placeholder="Asset Preferred Notary" value={assetPreferredNotary}
        onChange={(e) => setAssetPreferredNotary(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Notary Address'} />
      <input type="text" placeholder="Seller Address" value={sellerAddress}
        onChange={(e) => setSellerAddress(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Seller Blockchain Address'} />
      <input type="text" placeholder="Manufacturer Name" value={manName}
        onChange={(e) => setManName(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Manufacturer Name'} />
      <input type="text" placeholder="Part Number" value={partNumber}
        onChange={(e) => setPartNumber(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Part Number'} />
      <input type="text" placeholder="Manufacturer Part Number" value={manPartNumber}
        onChange={(e) => setManPartNumber(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Manufacturer Part Number'} />
      <input type="text" placeholder="Part Option" value={partOption}
        onChange={(e) => setPartOption(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Part Option'} />
      <input type="text" placeholder="Part Description" value={partDesc}
        onChange={(e) => setPartDesc(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Part Description'} />
      <input type="text" placeholder="Part Short Description" value={partShortDesc}
        onChange={(e) => setPartShortDesc(e.target.value)} style={{ border: "1px solid lightgrey", borderRadius: "10px", padding: "5px" }}
        title={'Part Short Description'} />
    </div>
  </div>
);

}

export default PartCatalogDet;
