import { useEffect, useState, useContext } from 'react';
import { useContractRead } from 'wagmi';
import { ContractContext } from './ContractContext';
import ContractDetails from './ContractDetails';
import abi from './abi';

function ContractList(props) {
  const { contractAddress, buyerContracts } = useContext(ContractContext);
console.log("jjjjjjjjjjjjjjj", buyerContracts);
//           <ContractDetails contractNum={contractNum} />

  return (
    <div>
      <h3>List of Contracts:</h3>
      <ul>
        {buyerContracts.map((contractNum) => (
          <li key={contractNum}>
		{contractNum}
           <ContractDetails contractNum={contractNum} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContractList;
