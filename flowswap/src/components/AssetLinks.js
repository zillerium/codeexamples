import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function AssetLinks() {
  const {
    assetImageUrl, setAssetImageUrl,
    assetUrl, setAssetUrl,
  } = useContext(ContractContext);

  return (
    <>
      <div>
        <input type="text" placeholder="Asset Image URL" value={assetImageUrl} onChange={(e) => setAssetImageUrl(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Asset URL" value={assetUrl} onChange={(e) => setAssetUrl(e.target.value)} />
      </div>
    </>
  );
}

export default AssetLinks;
