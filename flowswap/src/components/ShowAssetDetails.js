import React, { useState, useEffect, useContext } from 'react';
import { useContractRead } from 'wagmi';
import abinft from './abinft';
import { ContractContext } from './ContractContext';

function ShowAssetDetails(props) {
  const { contractNftAddress, assetDetails, setAssetDetails } = useContext(ContractContext);

	    console.log("----contract number show adata --------------", props.assetNum);
  const config = {
    address: contractNftAddress,
    abi: abinft,
    overrides: { from: props.address },
    functionName: 'getAsset',
   args: [props.assetNum],
  };

	    console.log("----config show adata --------------", config);
  const { data, isLoading, isSuccess } = useContractRead(config);

  useEffect(() => {
	    console.log("----show adata 7777 state --------------", assetDetails);
	    console.log("----show adata 7777  asset value--------------", data.assetValue);
	    console.log("----show adata 7777 --------------", JSON.stringify(data));
	    console.log("----show adata 7777 type --------------", typeof(JSON.stringify(data)));
    if ((isSuccess)  && (data) ) {
	    console.log("----show adata 1111--------------", data);
	    console.log("----show adata 1111--------------", data);
	    console.log("----show adata 1111--------------", data);
            setAssetDetails(data);
      };
  }, [setAssetDetails]);

  if (isLoading) {
    return <div>Loading contract details...</div>;
  }
	if (isSuccess) {
	
	    console.log("----show adata 8888--------------", data);
	    console.log("----show adata 8888--------------", data);

	}

	 // {contractDetails && <ShowContractDetails /> }
  return (
    <div>
    </div>
  );
}

export default ShowAssetDetails;
