import {useContext} from 'react'
import {ContractContext} from './ContractContext'

import {Button} from 'react-bootstrap';

function PayContractMgr() {

	 const  {
		 allowanceAmount, setAllowanceAmount,
                sellerAddress, setSellerAddress,
                } = useContext(ContractContext)

    return (
        <>

        {allowanceAmount}
        { allowanceAmount>0 && sellerAddress && <PayContract /> }
        { allowanceAmount==0 && <Button variant="secondary" disabled>4. Pay to Escrow</Button>  }
        { allowanceAmount>0 && !sellerAddress && <Button variant="secondary" disabled>4. Pay to Escrow</Button> }


        </>
    )

}

export default PayContractMgr;

