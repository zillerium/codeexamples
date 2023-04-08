import React, { useState, useEffect, useContext } from 'react';
import { useContractRead } from 'wagmi';
import abinft from './abinft';
import { ContractContext } from './ContractContext';

function AssetDetails(props) {
  const { contractNftAddress, assetDetails, setAssetDetails } = useContext(ContractContext);

	    console.log("----contract number show adata --------------", props.assetNum);
  const config = {
    address: contractNftAddress,
    abi: abinft,
    overrides: { from: props.address },
    functionName: 'getAsset',
   args: [props.assetNum],
  };

  const { data, isLoading, isSuccess } = useContractRead(config);

  useEffect(() => {
    if ((isSuccess)  && (data) ) {
	    console.log("----show adata --------------", data);
      setAssetDetails({data});
      };
  }, [data]);

  if (isLoading) {
    return <div>Loading contract details...</div>;
  }

	 // {contractDetails && <ShowContractDetails /> }
  return (
    <div>
    </div>
  );
}

export default AssetDetails;
