import { useState, useContext } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { ContractContext } from './ContractContext';
import GetSellers from './GetSellers';
import SellerInfoContext from './SellerInfoContext';

function WalletInner(props) {
  const [sellerAddress, setSellerAddress] = useState({ address: '' });
  const [contractAmount, setContractAmount] = useState(0);

  const isConnectedWallet = props.isConnected;
  const payer = props.address;
  const cart = useContext(CartContext);

  const calculateSellerInfo = (items) => {
    let sellers = items.reduce((acc, item) => {
      if (!acc[item.seller]) {
        acc[item.seller] = {
          seller: item.seller,
          totAmount: item.price * item.quantity,
        };
      } else {
        acc[item.seller].totAmount += item.price * item.quantity;
      }
      return acc;
    }, {});

    console.log('sellers -- ', sellers);
    let totAmount = 0;
    let thisSellerAddr = { address: '' };
    Object.entries(sellers).map(([sellerAddress, sellerDetails]) => {
      thisSellerAddr.address = sellerAddress;
      totAmount = sellerDetails.totAmount;
    });

    setSellerAddress(thisSellerAddr.address);
    setContractAmount(totAmount);
    console.log('seler ---', sellerAddress);
  };

  return (
    <div className="container">
      <ContractContext.Provider
        value={{
          sellerAddress,
          setSellerAddress,
          contractAmount,
          setContractAmount,
        }}
      >
        <SellerInfoContext.Provider value={calculateSellerInfo}>
          <div>
            <GetSellers />
          </div>
          <div>
            seller addr {sellerAddress.address} end of addr
          </div>
        </SellerInfoContext.Provider>
      </ContractContext.Provider>
    </div>
  );
}

export default WalletInner;
