import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function PartImageDet() {
  const {
    partTechImgUrl, setPartTechImgUrl,
    partImgUrl, setPartImgUrl,
  } = useContext(ContractContext);

  return (
    <div style={{ border: "2px solid lightgrey", borderRadius: "10px", padding: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Asset Owner Details</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "10px", marginBottom: "10px" }}>
        <div style={{ borderRadius: "10px", border: "1px solid lightgrey" }}>
          <input type="text" placeholder="Part Image Url" value={partImgUrl} 
            onChange={(e) => setPartImgUrl(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }} 
            title={'Part Image Url'} />
        </div>
        <div style={{ borderRadius: "10px", border: "1px solid lightgrey" }}>
          <input type="text" placeholder="Tech Part Image URL" value={partTechImgUrl}
            onChange={(e) => setPartTechImgUrl(e.target.value)} style={{ border: "none", width: "100%", padding: "5px" }}
            title={'Tech Part Image URL'} />
        </div>
      </div>
    </div>
  );
}

export default PartImageDet;
