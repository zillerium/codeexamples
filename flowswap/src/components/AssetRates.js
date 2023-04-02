import React, { useContext } from 'react';
import { ContractContext } from './ContractContext';

function AssetRates() {
  const {
    usdGbpRate, setUsdGbpRate,
    assetNumberSharesSold, setAssetNumberSharesSold,
  } = useContext(ContractContext);

  return (
    <>
      <div>
        <input type="number" placeholder="USD-GBP Rate" value={usdGbpRate} onChange={(e) => setUsdGbpRate(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Number of Shares Sold" value={assetNumberSharesSold} onChange={(e) => setAssetNumberSharesSold(e.target.value)} />
      </div>
    </>
  );
}

export default AssetRates;
