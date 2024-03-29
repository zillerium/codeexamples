import {useContext,  useEffect} from 'react'
import {  
          useContractWrite, usePrepareContractWrite} from "wagmi";
import {CartContext} from '../CartContext'
import {ContractContext} from './ContractContext'
import {IpfsContext} from './IpfsContext'
import { BigNumber} from 'bignumber.js';

import {Button} from 'react-bootstrap';
import {TextEncoder} from 'text-encoding';
import bs58 from 'bs58';
import Web3 from 'web3';

import abinft from './abinft';

function AddAsset() {
 const web3 = new Web3();
	 const  {
                addAsset, setAddAsset, contractAddress, 
		assetId, assetValue, assetNumberShares, 
		 assetIncome, assetYield, assetRiskRating, 
		 currency, assetNumberSharesSold, sellerAddress
                } = useContext(ContractContext)

	const {ipfsHash} = useContext(IpfsContext);
        let nftcontractAddress = process.env.REACT_APP_NFT_CONTRACT_ADDR;

//const decoded = bs58.decode(ipfsHash).slice(2);
//let ipfsHashBytes32 = "0x";

//for (const byte of decoded) {
//  ipfsHashBytes32 += byte.toString(16).padStart(2, '0');
//}

const ipfsHashBytes32func = (ipfsHash) => {
  const bytes = bs58.decode(ipfsHash).slice(2);
  return web3.utils.bytesToHex(bytes);
};
const ipfsHashBytes32 = ipfsHashBytes32func(ipfsHash);
console.log("my b32 nuym -== ", ipfsHashBytes32);
       // const bytes = new TextEncoder().encode(ipfsHash);
//	const ipfsHashBytes32 = "0x" + Array.prototype.map.call(
  //           new Uint8Array(32), (_, i) => bytes[i] || 0
//	).map(x=>x.toString(16).padStart(2, "0")).join('');

        let argArr = [ipfsHash, ipfsHashBytes32,  assetValue, assetNumberShares, assetIncome, 
		assetYield*100, assetRiskRating, currency, assetNumberSharesSold, sellerAddress];
  	    console.log("array ---- ", argArr, nftcontractAddress);
            const {config, error} = usePrepareContractWrite({
                   address: nftcontractAddress,
                   abi: abinft,
                   functionName: 'safeMint',
                  // args:[contractNumber],
                   args: argArr
            })
            console.log(config);
            const {data, isLoading, isSuccess, write} = useContractWrite(config)
            if (isLoading) {
                return <div>Loading ...</div>
            }
            console.log(data)

            if (isSuccess) {
//                setAddAsset(true);
		  //blockchainCall(true);
            }
    const addAssetFunc = async () => {
              console.log("------ pay now--");
	    try {
		    console.log("--write", write);
		    console.log("--config", config);
		    console.log("--data", data);
		    console.log("--error", error);
                const res = await write?.();
		    console.log("-- res", res);
	    } catch (err) {
                console.log("---- err");
	    }
    }



    return (
        <>
	    {assetYield}
        <div><Button  variant="primary" onClick={addAssetFunc}>Create Asset NFT </Button></div>
            {error && (<div> error in formatting {error.message} </div>)}
        </>
    )

}



export default AddAsset;

