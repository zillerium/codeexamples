import React, { useState, useEffect, useContext } from 'react';
import { ContractContext } from './ContractContext';
import { useContractRead } from 'wagmi';

function OrderListInner(props) {
  const { contractAddress, setContractDetails } = useContext(ContractContext);

  const config = {
    address: contractAddress,
    abi: abi,
    functionName: 'getBuyerContractsByAddress',
  };

  const { data, isLoading, isSuccess } = useContractRead(config);

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        const contracts = [];
        data.forEach((contract) => {
          const [
            seller,
            buyer,
            amount,
            salesRelease,
            disputeRelease,
            notary,
            status,
          ] = contract;
          contracts.push({
            seller,
            buyer,
            amount: amount.toString(),
            salesRelease: salesRelease.toString(),
            disputeRelease: disputeRelease.toString(),
            notary,
            status: status.toString(),
          });
        });
        setContractDetails(contracts);
      }
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {contractDetails.map((contract, index) => (
        <div key={index}>
          <p>Contract Number: {index}</p>
          <p>Seller: {contract.seller}</p>
          <p>Buyer: {contract.buyer}</p>
          <p>Amount: {contract.amount}</p>
          <p>Sales Release: {contract.salesRelease}</p>
          <p>Dispute Release: {contract.disputeRelease}</p>
          <p>Notary: {contract.notary}</p>
          <p>Status: {contract.status}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderListInner;
