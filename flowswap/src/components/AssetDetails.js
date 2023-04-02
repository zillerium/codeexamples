import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function AssetDetails() {
  const {
    assetNumberBathrooms, setAssetNumberBathrooms,
    assetNumberBedrooms, setAssetNumberBedrooms,
    assetHouseType, setAssetHouseType,
  } = useContext(ContractContext);

  return (
    <>
      <div>
        <input type="number" placeholder="Asset Number of Bathrooms" value={assetNumberBathrooms} onChange={(e) => setAssetNumberBathrooms(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Asset Number of Bedrooms" value={assetNumberBedrooms} onChange={(e) => setAssetNumberBedrooms(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Asset House Type" value={assetHouseType} onChange={(e) => setAssetHouseType(e.target.value)} />
      </div>
    </>
  );
}

export default AssetDetails;
