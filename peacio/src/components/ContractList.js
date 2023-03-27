import { useEffect, useState, useContext } from 'react';
import { useContractRead } from 'wagmi';
import { ContractContext } from './ContractContext';
import ContractDetails from './ContractDetails';
import ShowContractDetails from './ShowContractDetails';
import abi from './abi';

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
      <ul>
        {buyerContracts.map((contractNum) => (
          <li key={contractNum}>
		<button onClick={()=>showContractDetailsFunc(contractNum)}>
		{contractNum}</button>
	  </li>
	))		}

      </ul>				
	  {selContract && <ContractDetails address={props.address} contractNum={selContract}/>}
	  {contractDetails && JSON.stringify(contractDetails) !== JSON.stringify([{}]) && (
                <div>
		  {JSON.stringify(contractDetails)}
		  seller { contractDetails.data.seller}
		  buyer { contractDetails.data.buyer}
		  notary { contractDetails.data.notary}
		  dispute { contractDetails.data.dispute}
		  settled { contractDetails.data.settled}
		  releaseTime { contractDetails.data.releaseTime.toString()}
		  disputeRelease { contractDetails.data.disputeRelease.toString()}
		  balance { contractDetails.data.balance.toString()}
		  price { contractDetails.data.price.toString()}
		  </div>

	  )}
    </div>
  );
}

export default ContractList;
