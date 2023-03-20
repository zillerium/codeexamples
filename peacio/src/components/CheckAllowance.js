import {useContext} from 'react'
import {  
	      useContractRead} from "wagmi";
import {ContractContext} from './ContractContext'
import abi from './abi';
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';

function CheckAllowance(props) {

	 const  {
                approveContract, setApproveContract,
                payContract, setPayContract,
                approveEscrowContract, setApproveEscrowContract,
                contractAddress, setContractAddress,
                } = useContext(ContractContext)

        const config = {
                   address: contractAddress,
          abi: abi,
		overrides: {from: props.address},
          functionName: 'checkAllowance',
          //functionName: 'getContractUsdcBalance',
        }

	console.log("checl allowance 2 == ", config, props.address)
        const {data, isLoading, isSuccess} = useContractRead(config)
	if (isLoading) {
             return <div>Loading ...</div>
	}
	console.log("checl allowance == ", data)

        if (isSuccess) {
             setApproveEscrowContract(true);
	     setApproveContract(false);
        }

	return (
    <div >
		        <div><Button variant="primary" >Check Allowance</Button></div>

    </div>
  );
}












export default CheckAllowance;
