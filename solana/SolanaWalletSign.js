import React, { useState } from 'react';
import SolanaLib from './SolanaLib';

function SolanaWalletSign() {
  const [address, setAddress] = useState('');
  const [secretKey, setSecretKey] = useState('');

  const handleGetAddress = async () => {
    const solana = SolanaLib.init({});
    const address = await solana.getAddress();
    setAddress(address);
  };

  const handleGetSecretKey = () => {
    const solana = SolanaLib.init({});
    const secretKey = solana.getSecretKey();
    setSecretKey(secretKey);
  };

  return (
    <div>
      <button onClick={handleGetAddress}>Get Address</button>
      <p>Address: {address}</p>
      <button onClick={handleGetSecretKey}>Get Secret Key</button>
      <p>Secret Key: {secretKey}</p>
    </div>
  );
}

export default SolanaWalletSign;


