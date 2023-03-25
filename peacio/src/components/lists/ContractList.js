import { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi';
import { ContractContext } from './ContractContext';
import ContractDetails from './ContractDetails';

function ContractList(props) {
  const { contractAddress, abi } = useContext(ContractContext);
  const [buyerContracts, setBuyerContracts] = useState([]);

  const config = {
    address: contractAddress,
    abi: abi,
    overrides: { from: props.buyerAddress },
    functionName: 'getBuyerContractsByAddress',
  };

  const { data, isLoading, isSuccess } = useContractRead(config);

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

  return (
    <div>
      <h3>List of Contracts:</h3>
      <ul>
        {buyerContracts.map((contractNum) => (
          <li key={contractNum}>
            <ContractDetails contractNum={contractNum} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContractList;
