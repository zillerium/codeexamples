import {ContractContext} from './ContractContext'

import React, {useState, useContext} from 'react';

import {Button} from 'react-bootstrap';

function AddPdf() {

     const  {
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
                } = useContext(ContractContext)
/*
const showAssetButton = !addAsset && assetId> 0 && assetValue > 0 && assetNumberShares > 0 && assetIncome > 0 &&
                    assetYield > 0 && assetRiskRating > 0 && currency !='';

	    {showAssetButton ? <AddAsset /> : <div><Button  variant="primary" disabled >Add Asset {assetId} </Button>
            </div> }
*/
return ( 
      <>
	{

	}
 

        </>
    )

}

export default AddPdf;

