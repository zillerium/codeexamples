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
  const showContractDetailsFunc=(c) => {
	  setSelContract(c);
  }

  return (
    <div>
      <h3>List of Contracts:</h3>
      <ul>
        {buyerContracts.map((contractNum) => (
          <li key={contractNum} onClick={()=>showContractDetailsFunc(contractNum)}>
		{contractNum}
	  </li>
	))		}

      </ul>				
  {selContract && (
           <ContractDetails contractNum={selContract} />
          //{contractDetails && <ShowContractDetails /> }

        )}
    </div>
  );
}

export default ContractList;
