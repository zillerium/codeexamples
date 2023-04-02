import {useContext} from 'react'
import {ContractContext} from './ContractContext'
import AddAsset from './AddAsset'
import AssetForm from './AssetForm';
import AssetCheckboxes from './AssetCheckboxes';
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
      <AssetForm />
      <AssetCheckboxes />
       <AssetDetails />
      <AssetLinks />
<AssetRates />
<AssetRisk />

        </>
    )

}

export default AddAssetMgr;

