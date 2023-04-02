import {useContext} from 'react'
import {ContractContext} from './ContractContext'
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
		 allowanceAmount, setAllowanceAmount,
                sellerAddress, setSellerAddress,
                paySeller, setPaySeller,
                } = useContext(ContractContext)
    return (
        <>

    //    {allowanceAmount}
    //    {  sellerAddress && !paySeller && <AddAsset /> }
    //    { paySeller && <div>Contract Paid</div> }
    //    { !paySeller && <div>Contract unPaid</div> }
      <AssetOwner />
      <AssetCheckBoxes />
       <AssetDetails />
      <AssetLinks />
<AssetRates />
<AssetRisk />

        </>
    )

}

export default AddAssetMgr;

