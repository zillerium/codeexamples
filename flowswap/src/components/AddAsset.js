import {useContext,  useEffect} from 'react'
import {  
          useContractWrite, usePrepareContractWrite} from "wagmi";
import {CartContext} from '../CartContext'
import {ContractContext} from './ContractContext'
import {IpfsContext} from './IpfsContext'
import { BigNumber} from 'bignumber.js';

import {Button} from 'react-bootstrap';

import abi from './abi';
import nftabi from './abi';

function AddAsset() {

	 const  {
                addAsset, setAddAsset, contractAddress, 
		assetId, assetValue, assetNumberShares, 
		 assetIncome, assetYield, assetRiskRating, 
		 currency, assetNumberSharesSold,
                } = useContext(ContractContext)

	const {ipfsHash} = useContext(IpfsContext);
        let nftcontractAddress = process.env.REACT_APP_NFT_CONTRACT_ADDR;
	const bytes32Hash = "0x" + ipfsHash.substring(2).padStart(64, "0");


        let argArr = [assetId, assetValue, assetNumberShares, assetIncome, assetYield*100, assetRiskRating, currency, assetNumberSharesSold];
  	    console.log("array ---- ", argArr, contractAddress);
            const {config, error} = usePrepareContractWrite({
                   address: nftcontractAddress,
                   abi: nftabi,
                   functionName: 'addAsset',
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
        <div><Button  variant="primary" onClick={addAssetFunc}>Add Asset {assetId} </Button></div>
            {error && (<div> error in formatting {error.message} </div>)}
        </>
    )

}



export default AddAsset;

