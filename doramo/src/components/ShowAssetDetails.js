import React, { useState, useEffect, useContext } from 'react';
import { useContractRead } from 'wagmi';
import abinft from './abinft';
import { ContractContext } from './ContractContext';
import bs58 from 'bs58';
import Web3 from 'web3';
import multihash from 'multihashes';
import {create} from 'ipfs-http-client';

function ShowAssetDetails(props) {
    const { contractNftAddress, assetDetails, setAssetDetails } = useContext(ContractContext);
	const web3 = new Web3();

const bytes32ToIpfs = (bytes32) => {
  const bytes = web3.utils.hexToBytes(bytes32);
  const hashBytes = Buffer.from([18, 32, ...bytes]);
  return bs58.encode(hashBytes);
};


    console.log("----contract number show adata --------------", props.assetNum);
    const walletaddr = props.address;
    console.log("wallet addr ", walletaddr);
    const config = {
       address: contractNftAddress,
       abi: abinft,
       overrides: { from: props.address },
       //    overrides: { walletaddr },
//       functionName: 'ipfsassets',
       functionName: 'nftassets',
       args: [props.assetNum.toLocaleString()],
    };
    console.log("config o == ", config);
    console.log("config o == ", config);

    const ipfs = create();
    console.log("----config show adata --------------", config);
    const { data, isLoading, isSuccess } = useContractRead(config);

//    const bytes32Hash = props.assetNum;
    useEffect(() => {
         if ((isSuccess)  && (data) ) {

          //   const decodedHex = Buffer.from(data?.assetIpfsAddr?.slice(2), 'hex');
           //  const encodedIPFS = bs58.encode(Buffer.concat([Buffer.from([0x12, 0x20]), decodedHex]));
             const encodedIPFS = bytes32ToIpfs(data?.assetIpfsAddr);
          //   console.log("ipfs =========",encodedIPFS); // This will output the original IPFS address
	     console.log("----show adata 7777 state --------------", data);
             setAssetDetails({...data, ipfsAddr:encodedIPFS});
             //setAssetDetails({...data});
         };
     }, [data]);

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
