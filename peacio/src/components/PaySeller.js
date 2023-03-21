import {useContext} from 'react'
import {
         useContractWrite, usePrepareContractWrite} from "wagmi";
import {ContractContext} from './ContractContext'

import abi from './abi';
import {Button} from 'react-bootstrap';


function PaySeller() {

 const  {contractAmount, contractNumber, contractAddress,
                 } = useContext(ContractContext);

         const argsArray = [contractNumber];

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
        <div><Button disabled={!write} onClick={()=>write?.()}>5. Settle to seller {contractAmount}</Button></div>
            {error && (<div> error in formatting {error.message} </div>)}
        </>
    )

}

export default PaySeller;
