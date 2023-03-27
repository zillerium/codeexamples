import { useEffect, useState, useContext } from 'react';
import { useContractRead } from 'wagmi';
import { ContractContext } from './ContractContext';
import ContractDetails from './ContractDetails';
import ShowContractDetails from './ShowContractDetails';
import abi from './abi';
import { Button, ListGroup, Table } from 'react-bootstrap';

function ContractList(props) {
  const { contractAddress, contractDetails, buyerContracts } = useContext(ContractContext);
	const [selContract, setSelContract]=useState();
console.log("jjjjjjjjjjjjjjj", buyerContracts);
//           <ContractDetails contractNum={contractNum} />
          //{contractDetails && <ShowContractDetails /> }
console.log("ooooooooooooooooooo contract details ------------", contractDetails);
console.log("ooooooooooooooooooo contract details ------------", contractDetails);
console.log("ooooooooooooooooooo contract details ------------", contractDetails);
console.log("ooooooooooooooooooo contract details ------------", contractDetails);
console.log("ooooooooooooooooooo contract details ------------", contractDetails);
  const showContractDetailsFunc=(c) => {
	  console.log("c=====", c);
	  console.log("c=====", c);
	  console.log("c=====", c);
	  setSelContract(c);
	  console.log("ccontarct=====", selContract);
  }

 /* {selContract && (
           <ContractDetails contractNum={selContract} />
  )}
          {contractDetails && <ShowContractDetails /> }
*/
	//  {contractDetails}
   
   return (
    <div>
      <h3>List of Contracts:</h3>
      <ListGroup>
        {buyerContracts.map((contractNum) => (
          <ListGroup.Item key={contractNum}>
            <Button variant="light" onClick={() => showContractDetailsFunc(contractNum)}>
              {contractNum}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {selContract && <ContractDetails address={address} contractNum={selContract} />}

      {contractDetails && JSON.stringify(contractDetails) !== JSON.stringify([{}]) && (
        <div>
          <h3>Contract Details:</h3>
          <Table bordered striped>
            <tbody>
              <tr>
                <td><strong>Seller:</strong></td>
                <td>{contractDetails.data.seller}</td>
              </tr>
              <tr>
                <td><strong>Buyer:</strong></td>
                <td>{contractDetails.data.buyer}</td>
              </tr>
              <tr>
                <td><strong>Notary:</strong></td>
                <td>{contractDetails.data.notary}</td>
              </tr>
              <tr>
                <td><strong>Dispute:</strong></td>
                <td>{contractDetails.data.dispute}</td>
              </tr>
              <tr>
                <td><strong>Settled:</strong></td>
                <td>{contractDetails.data.settled}</td>
              </tr>
              <tr>
                <td><strong>Release Time:</strong></td>
                <td>{new Date(contractDetails.data.releaseTime).toString()}</td>
              </tr>
              <tr>
                <td><strong>Dispute Release:</strong></td>
                <td>{new Date(contractDetails.data.disputeRelease).toString()}</td>
              </tr>
              <tr>
                <td><strong>Balance:</strong></td>
                <td>{contractDetails.data.balance.toString()}</td>
              </tr>
              <tr>
                <td><strong>Price:</strong></td>
                <td>{contractDetails.data.price.toString()}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default ContractList;
