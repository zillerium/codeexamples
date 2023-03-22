import {useEffect, useState, useContext } from 'react'; 
import {Button, } from 'react-bootstrap';
import {ContractContext} from './ContractContext';
import ApproveContract from './ApproveContract';

function AdminInner(props) {
        const   [approveContract, setApproveContract] = useState(false);
        const   [paymentAmount, setPaymentAmount] = useState();
        const   [erc20ContractAddress, setERC20ContractAddress] = useState();
        const   [contractAddress, setContractAddress] = useState();
        const   [approvedMsg, setApprovedMsg] = useState("not approved");
        
	const isConnectedWallet = props.isConnected;
        const payer = props.address;

useEffect(() => {
		setERC20ContractAddress('0x0FA8781a83E46826621b3BC094Ea2A0212e71B23');
	setContractAddress(process.env.REACT_APP_CONTRACT_ADDR);

	setApproveContract(true);
}, [])
return (
    <div className="container">

        <ContractContext.Provider value={{
                approveContract, setApproveContract,
                paymentAmount, setPaymentAmount,
                erc20ContractAddress, setERC20ContractAddress,
                contractAddress, setContractAddress,
                approvedMsg, setApprovedMsg
        }}>


        <div>
	   <div className="row">
  	       <div className="col-12 text-center">
	           <h2>Register Wallet</h2>
               </div>
   	   </div>

 <div className="row">
             <div className="col-6 ">
        { approveContract && <ApproveContract />        }
        { !approveContract && <Button variant="secondary" disabled> Approve StableCoin Contract</Button>      }
	{approvedMsg}
        </div>
</div>

	</div>
        </ContractContext.Provider>
  </div>
);


}

export default AdminInner;


	





