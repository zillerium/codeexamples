import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function AssetOwner() {
  const {
    assetOwnerName, setAssetOwnerName,
    assetAddress, setAssetAddress,
    assetPreferredNotary, setAssetPreferredNotary,
  } = useContext(ContractContext);

  return (
    <>
      <div>
        <input type="text" placeholder="Asset Owner Name" value={assetOwnerName} onChange={(e) => setAssetOwnerName(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Asset Address" value={assetAddress} onChange={(e) => setAssetAddress(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Asset Preferred Notary" value={assetPreferredNotary} onChange={(e) => setAssetPreferredNotary(e.target.value)} />
      </div>
    </>
  );
}


export default AssetOwner;
