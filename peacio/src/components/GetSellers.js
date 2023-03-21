import {useContext, useState, useEffect} from 'react'
import {CartContext} from '../CartContext'
import {ContractContext} from './ContractContext'

function GetSellers() {

        const  {
                sellerAddress, setSellerAddress,
                contractAmount, setContractAmount,
                } = useContext(ContractContext)
	const cart = useContext(CartContext);
        const items = cart.items;
        console.log("----items --", items);

        let sellers = items.reduce(
		(acc,item)=> {
			if (!acc[item.seller]) {
				acc[item.seller] = {
                            seller: item.seller,
				totAmount: item.price*item.quantity,
				}
			} else {
			    acc[item.seller].totAmount +=item.price*item.quantity;
			}
	        return acc;
		}, {});
	console.log("sellers -- ", sellers);
	let totAmount=0;
	let thisSellerAddr = {address:''};
        Object.entries(sellers).map(([sellerAddress, sellerDetails]) => {
             thisSellerAddr.address = sellerAddress;		
             totAmount = sellerDetails.totAmount;
	})
        setSellerAddress(thisSellerAddr.address);
        setContractAmount(totAmount);
	console.log("seler ---", sellerAddress);

    return (
        <>
        </>
    )

}

export default GetSellers;

