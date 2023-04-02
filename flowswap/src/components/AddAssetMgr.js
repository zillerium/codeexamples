import {useContext} from 'react'
import {ContractContext} from './ContractContext'
import AddAsset from './AddAsset'

import {Button} from 'react-bootstrap';

function AddAssetMgr() {

	 const  {
		 allowanceAmount, setAllowanceAmount,
                sellerAddress, setSellerAddress,
                paySeller, setPaySeller,
                } = useContext(ContractContext)
    return (
        <>

        {allowanceAmount}
        {  sellerAddress && !paySeller && <AddAsset /> }
        { paySeller && <div>Contract Paid</div> }
        { !paySeller && <div>Contract unPaid</div> }


        </>
    )

}

export default AddAssetMgr;

