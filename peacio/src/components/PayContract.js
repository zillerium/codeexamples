import {Web3Button} from '@web3modal/react';
import {useContext, useState, useEffect} from 'react'
import {  
          useContractWrite, usePrepareContractWrite} from "wagmi";
import {CartContext} from '../CartContext'
import {ContractContext} from './ContractContext'
import { BigNumber} from 'bignumber.js';

import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';

import abi from './abi';

function ApproveEscrowContract() {

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
                notary, setNotary,
                contractNumber, setContractNumber,
		 salesRelease, setSalesRelease,
		 disputeRelease, setDisputeRelease
                } = useContext(ContractContext)
	 const cart = useContext(CartContext);
        const payee = cart.seller;
        const title = cart.title;
        const items = cart.items;
console.log("----items --", items);

	const notaries = [{address:'0x9f0BEA7dE67e8Fb333067ed83b468E5082280835'}];
        let totAmount = items.reduce((total,item)=>total+item.price*item.quantity,0);
	const stableCoinAmount = totAmount;
        totAmount = totAmount * (10 ** 6);
        const maxint256 = new BigNumber(2).pow(256).minus(1);

        const genRanNumber = () => {

	  //  const ranNumber = BigNumber.random({crypto:true}).times(maxint256).integerValue();
  //     const ranNumber = new BigNumber(crypto.randomBytes(32).toString('hex'), 16);
	const ranNumber = new BigNumber(Math.floor(Math.random() * maxint256));
            console.log("---- ran number ---- ", ranNumber);
		setContractNumber(ranNumber);
        };
//
	useEffect(()=> {
            genRanNumber();
            const salesRelease = Math.floor(Date.now() / 1000);
            const disputeRelease = salesRelease + 100; // 100 secs for testing
	    setSalesRelease(salesRelease);
	    setDisputeRelease(disputeRelease);
	    setNotary(notaries[0]);
		setContractAddress('0x44f168de1F56c61b93817D5E87e569cEc1f1F8aC');
	}, []);
        let argArr = [contractNumber, paySeller, notary, salesRelease, disputeRelease, totAmount  ];
	console.log("array ---- ", argArr, contractAddress);
        const {config, error} = usePrepareContractWrite({
                   address: contractAddress,
                   abi: abi,
                   functionName: 'approveAndTransferUSDC',
               //    args:[totAmount]
                   args: argArr
        })
        console.log(config);
        const {data, isLoading, isSuccess, write} = useContractWrite(config)
        if (isLoading) {
           return <div>Loading ...</div>
        }
        console.log(data)

        if (isSuccess) {
           setPaySeller(true);
           setPayContract(false);
        }



    return (
        <>
        <div><Button  variant="primary" onClick={()=>write?.()}>Pay to Escrow {stableCoinAmount}</Button></div>
            {error && (<div> error in formatting {error.message} </div>)}
        </>
    )

}












export default ApproveEscrowContract;

