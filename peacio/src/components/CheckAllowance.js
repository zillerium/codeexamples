import {useContext} from 'react'
import {  
	      useContractRead} from "wagmi";
import {ContractContext} from './ContractContext'
import abi from './abi';
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';

function CheckAllowance() {

	 const  {
                approveContract, setApproveContract,
                payContract, setPayContract,
                approveEscrowContract, setApproveEscrowContract,
                contractAddress, setContractAddress,
                } = useContext(ContractContext)

        const config = {
                   address: contractAddress,
          abi: abi,
          functionName: 'checkAllowance'
        }

        const {data, isLoading, isSuccess, write} = useContractRead(config)
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
		        <div><Button variant="primary" onClick={()=>write?.()}>Check Allowance</Button></div>

    </div>
  );
}












export default CheckAllowance;
