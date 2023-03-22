import {useContext} from 'react'
import {ContractContext} from './ContractContext'
import ApproveContractNow from './ApproveContractNow'

import { Button, } from 'react-bootstrap';

function ApproveContract() {

	 const  {
                allowanceAmount, setAllowanceAmount,
                approveContract, setApproveContract,
                erc20ContractAddress,
                contractAddress, 
                approvedMsg, setApprovedMsg,
                } = useContext(ContractContext)


	return (
    <div >
		        <div>



        { allowanceAmount==0 && <ApproveContractNow />  }
        { allowanceAmount>0 && <div>Your wallet is already approved</div>  }

		</div>

    </div>
  );
}


export default ApproveContract;
