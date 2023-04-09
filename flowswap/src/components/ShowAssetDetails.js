import React, { useState, useEffect, useContext } from 'react';
import { useContractRead } from 'wagmi';
import abinft from './abinft';
import { ContractContext } from './ContractContext';
import bs58 from 'bs58';

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

const bytes32 = props.assetNum;
const bytes = Uint8Array.from(Buffer.from(bytes32.slice(2), 'hex'));
  useEffect(() => {
	    console.log("----show adata 7777 state --------------", assetDetails);
	    console.log("----show adata 7777  asset value--------------", data.assetValue);
	    console.log("----show adata 7777 --------------", JSON.stringify(data));
	    console.log("----show adata 7777 type --------------", typeof(JSON.stringify(data)));
	   const hashHex = "1220" + bytes32.slice(2);
           const hashBytes = Buffer.from(hashHex, 'hex');
           const ipfsAddr = bs58.encode(hashBytes);

       if ((isSuccess)  && (data) ) {
                 setAssetDetails({...data, ipfsAddr});
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
