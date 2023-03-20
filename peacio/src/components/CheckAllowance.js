import {Web3Button} from '@web3modal/react';
import {useContext, useState} from 'react'
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,  useAccount,
	configureChains, createClient, useNetwork, useConnect, chain, useContractWrite, usePrepareContractWrite} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';
import {ContractContext} from './ContractContext'
import bytecode1 from './bytecode';
import abi from './abi';
import abierc20 from './abierc20';
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';

function CheckAllowance() {

	 const  {
                deployContract, setDeployContract,
                approveContract, setApproveContract,
                payContract, setPayContract,
                approveEscrowContract, setApproveEscrowContract,
                paySeller, setPaySeller,
                paymentAmount, setPaymentAmount,
                erc20ContractAddress, setERC20ContractAddress,
                contractAddress, setContractAddress,
                contractDetails, setContractDetails,
                notary, setNotary
                } = useContext(ContractContext)

	console.log("contract debug details ====== ");
	console.log(contractDetails);
        const {config, error} = usePrepareContractWrite({
                   address: contractAddress,
          abi: abi,
          functionName: 'checkAllowance'
        })

        const {data, isLoading, isSuccess, write} = useContractWrite(config)
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
            {error && (<div> error in formatting {error.message} </div>)}

    </div>
  );
}












export default CheckAllowance;
