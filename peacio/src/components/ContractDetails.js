import React, { useState, useEffect, useContext } from 'react';
import { useContractRead } from 'wagmi';
import abi from './abi';
import { ContractContext } from './ContractContext';

function ContractDetails(props) {
  const { contractAddress } = useContext(ContractContext);

  const config = {
    address: contractAddress,
    abi: abi,
    overrides: { from: props.address },
    functionName: 'salesContracts',
   args: [props.index],
  };

  const { data, isLoading, isSuccess } = useContractRead(config);
  const [details, setDetails] = useState({});

  useEffect(() => {
    if ((isSuccess)  && (data) ) {
      const [        buyer,        seller,        notary,        erc20Contract,        paymentAmount,        disputePeriod,        salesPeriod,        salesRelease,        disputeRelease,        status,        sellerApproval,        buyerApproval,      ] = data;

      setDetails({
        buyer,
        seller,
        notary,
        erc20Contract,
        paymentAmount,
        disputePeriod,
        salesPeriod,
        salesRelease,
        disputeRelease,
        status,
        sellerApproval,
        buyerApproval,
      });
    }
  }, [data, isSuccess]);

  if (isLoading) {
    return <div>Loading contract details...</div>;
  }

  return (
    <div>
	  {details && <ShowContractDdetails /> }
      <p>Seller: {details.seller}</p>
      <p>Notary: {details.notary}</p>
      <p>Release Dates:</p>
      <ul>
        <li>Sales: {details.salesRelease.toString()}</li>
        <li>Dispute: {details.disputeRelease.toString()}</li>
      </ul>
      <p>Payment Amount: {details.paymentAmount.toString()}</p>
      <p>Status: {details.status.toString()}</p>
      <p>Seller Approval: {details.sellerApproval.toString()}</p>
      <p>Buyer Approval: {details.buyerApproval.toString()}</p>
    </div>
  );
}

export default ContractDetails;
