import {ContractContext} from './ContractContext'

import React, {useState, useContext} from 'react';
import {useQuery, useMutation} from 'react-query';
import axios from 'axios';


import AddAsset from './AddAsset'
import AssetOwner from './AssetOwner';
import AssetCheckBoxes from './AssetCheckBoxes';
import AssetDetails from './AssetDetails';
import AssetLinks from './AssetLinks';
import AssetRates from './AssetRates';
import AssetRisk from './AssetRisk';

import {Button} from 'react-bootstrap';

function AddAssetMgr() {

     const  {
                 addAsset, setAddAsset, password, setPassword, correct, setCorrect, assetId, dbKey, assetOwnerName, assetAddress, assetValue,
                 assetNumberShares, hasTenant, hasGarden, hasParking, assetImageUrl, assetUrl,
                 assetIncome, assetYield, assetNumberBathrooms, assetNumberBedrooms, assetHouseType, hasDoubleGlazing,
                 assetRiskRating, assetPreferredNotary, currency, usdGbpRate, assetNumberSharesSold,
                sellerAddress, setSellerAddress,
                paySeller, setPaySeller,
                } = useContext(ContractContext)
     
     const isInputValid = () => {
  // check if all required states are valid
  if (
    assetId > 0 &&
    assetValue > 0 &&
    assetNumberShares > 0 &&
    assetIncome > 0 &&
    assetYield > 0 &&
    assetRiskRating > 0 &&
    currency !== '' &&
    assetNumberSharesSold > 0
  ) {
    return true; // if all are valid, return true
  } else {
    return false; // if any are invalid, return false
  }
};





const [search,setSearch] = useState("");
	const {isLoading, error, data, isFetching, refetch} = useQuery('dogs',
		() => axios ('https://random.dog/woof.json'),
		{
			enabled: false,
		}

		);
const checkPassword = () => {
 if (password == "tiger12") setCorrect(true); else setCorrect(false);
}

const PostData = async  (part) => {
	console.log("part");
	console.log(part);
//	let x = {keyword: user.firstName};
	const response = await axios.post("https://peacioapi.com:3000/addHouseAPI", part);
	return response;
}


const {mutate,  isError} = useMutation(PostData, {
	onSuccess: (successData) => {
		console.log("post was done");

           console.log(successData);
	}
})
const ImageDisplay = () => {
return ( data ? <img src={data.data.url}/> : <p></p>);
}
 console.log("render");
 console.log(error);
 console.log(data);
	if (error) return <h1>{error.message}</h1>
	if (isLoading) return <h1>Loading</h1>
		//console.log(data);

    return (
        <>
  <header>
      <h1>Add Property to DB</h1>
      <p></p>
      <div>
        <input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={checkPassword}>Enable Page</Button>
      </div>

    //    {  sellerAddress && !paySeller && <AddAsset /> }
    //    { paySeller && <div>Contract Paid</div> }
    //    { !paySeller && <div>Contract unPaid</div> }
      <AssetOwner />
      <AssetCheckBoxes />
       <AssetDetails />
      <AssetLinks />
<AssetRates />
<AssetRisk />
<div>
        <Button disabled={!correct} onClick={() => mutate({
          assetId: assetId,
          dbKey: dbKey,
          assetOwnerName: assetOwnerName,
          assetAddress: assetAddress,
          assetValue: assetValue,
          assetNumberShares: assetNumberShares,
          hasTenant: hasTenant,
          hasGarden: hasGarden,
          hasParking: hasParking,
          assetImageUrl: assetImageUrl,
          assetUrl: assetUrl,
          assetIncome: assetIncome,
          assetYield: assetYield,
          assetNumberBathrooms: assetNumberBathrooms,
          assetNumberBedrooms: assetNumberBedrooms,
          assetHouseType: assetHouseType,
          hasDoubleGlazing: hasDoubleGlazing,
          assetRiskRating: assetRiskRating,
          assetPreferredNotary: assetPreferredNotary,
          currency: currency,
		              usdGbpRate: usdGbpRate,
              assetNumberSharesSold: assetNumberSharesSold,
              sellerAddress: sellerAddress,
        })}>
          Add DB Asset
        </Button>
      </div>
	    <div>{!addAsset && <AddAsset />}</div>
    </header>

        </>
    )

}

export default AddAssetMgr;
