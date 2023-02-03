import {useEffect, useState, useContext } from 'react'; 
import {SignClient } from '@walletconnect/sign-client';
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {ContractContext} from './ContractContext';
import ReactPlayer from 'react-player';
import WalletInner from './WalletInner';
import {ethers} from 'ethers';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,   useAccount,configureChains, createClient, useSigner, useNetwork, useConnect, chain} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';
import { 
  init, PhantomConnector, WalletConnectConnector, 
  InjectedConnector, devnet, testnet, mainnetBetaWalletConnect
} from '@walletconnect/solib'
import { connect, watchAddress } from '@walletconnect/solib'
import { getBalance, signMessage } from '@walletconnect/solib'
function SolanaWallet() {
 const ProjectId = process.env.REACT_APP_PROJECT_ID;
console.log("project id -- ", ProjectId);

  init({
  // The different connector methodologies that will be used.
  // PhantomConnector will interact with injected Phantom Wallet using browser
  // extension, while WalletConnectConnector can be used to interact with all
  // wallets that support the WalletConnect protocol.
  connectors: [
    new WalletConnectConnector({
      relayerRegion: 'wss://relay.walletconnect.com',
      metadata: {
        description: 'Test app for solib',
        name: 'Test Solib dApp',
        icons: ['https://avatars.githubusercontent.com/u/37784886'],
        url: 'https://peaciotest.com:3000'
      },
      autoconnect:false,
      qrcode: true
    })
  ],
  // Name of the connector to be used.
  // The connector needs to be registered in the connectors field above.
  // This can be switched later using `switchConnector` function.
  connectorName: WalletConnectConnector.connectorName,
  // The name of the cluster and network to use.
  // Here, `mainnetBeta` refers to the mainnetBeta Solana network, while
  // `WalletConnect` is the RPC server thhat will be used to do the communication
  chosenCluster:devnet(ProjectId)
}, ProjectId)

	console.log("connectors xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ", WalletConnectConnector);

const connectWallet = async()=> {

    await connect();

    const balance = await getBalance();

    // This communicates with the `Connector` or "Wallet" specified in `init`.
    // For example, if `PhantomConnector` is used, it will call Phantom's
    // `signMessage` under the hood. If `WalletConnectConnector` is used, it will
    // communicate using WalletConnect's sign API.
    const signature = await signMessage('Some message to sign')

}
return (
  <div className="container">
       <h1>Solana </h1>
<Button onClick={connectWallet} >Connect Wallet</Button>
  </div>
);


}

export default SolanaWallet;

	





