import {useContext} from 'react'
import {
         useContractWrite, usePrepareContractWrite} from "wagmi";
import {ContractContext} from './ContractContext'

import abi from './abi';
import {Button} from 'react-bootstrap';


function PaySeller(props) {

 const  {contractAmount, contractNumber, contractAddress,
                 } = useContext(ContractContext);

         const argsArray = [props.contractNum];

 const {config, error} = usePrepareContractWrite({
                   address: contractAddress,
          abi: abi,
          functionName: 'settlementUsdc',
	   args: argsArray
  })
console.log(config);
                const {data, isLoading, isSuccess, write} = useContractWrite(config)
        if (isLoading) {
             return <div>Loading ...</div>
        }
        console.log(data)



    return (
        <>
        <div><Button  onClick={()=>write?.()}> Settle to seller {props.contractAmount}</Button></div>
            {error && (<div> error in formatting {error.message} </div>)}
        </>
    )

}

export default PaySeller;
