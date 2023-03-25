import { useEffect, useState, useContext } from 'react';
import { useContractRead } from 'wagmi';
import { ContractContext } from './ContractContext';
import ContractDetails from './ContractDetails';
import abi from './abi';

function ContractList(props) {
  const { contractAddress } = useContext(ContractContext);
  const [buyerContracts, setBuyerContracts] = useState([]);

  const config = {
    address: contractAddress,
    abi: abi,
    overrides: { from: props.address },
    functionName: 'getBuyerContractsByAddress',
	  args:[props.address]
  };

	console.log("config --------------", config);
	console.log("config --------------", config);
	console.log("config --------------", config);
  const { data, isLoading, isSuccess } = useContractRead(config);
console.log("read adat ---------------------------", data);
console.log("read adat ---------------------------", data);
console.log("read adat ---------------------------", data);
console.log("read adat ---------------------------", data);
  useEffect(() => {
    if (isSuccess) {
      if (data) {
        setBuyerContracts(data[0].map((contract) => contract.toNumber()));
      }
    }
  }, [data, isSuccess]);

  if (isLoading) {
    return <div>Loading contracts...</div>;
  }
//           <ContractDetails contractNum={contractNum} />

  return (
    <div>
      <h3>List of Contracts:</h3>
      <ul>
        {buyerContracts.map((contractNum) => (
          <li key={contractNum}>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContractList;
