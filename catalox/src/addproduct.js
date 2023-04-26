import {useEffect, useState, useContext } from 'react'; 
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {ContractContext} from './ContractContext';
import ApproveEscrowContract from './ApproveEscrowContract';
import PayContract from './PayContract';
import GetSellers from './GetSellers';
import ApproveContract from './ApproveContract';
import PaySeller from './PaySeller';
import PayContractMgr from './PayContractMgr';
import AddAssetMgr from './AddAssetMgr';



function AssetWalletInner(props) {
        const   [erc20ContractAddress, setERC20ContractAddress] = useState('0x0FA8781a83E46826621b3BC094Ea2A0212e71B23');
        const   [contractAddress, setContractAddress] = useState(process.env.REACT_APP_CONTRACT_ADDR);
        const   [contractDetails, setContractDetails] = useState([{}]);
        const   [notary, setNotary]=useState({address: ''});
        const   [contractNumber, setContractNumber]=useState(0);
  
  const [password, setPassword]=useState("");
	const [correct, setCorrect]=useState(false);
	const [image, setImage]=useState(false);
	const [firstName, setFirstName]=useState("");
	const [lastName, setLastName]=useState("");
	const [manName, setManName] = useState("");
	const [partNumber, setPartNumber] = useState("");
	const [manPartNumber, setManPartNumber] = useState("");
	const [partOption, setPartOption] = useState("");
	const [partDesc, setPartDesc] = useState("");
	const [partShortDesc, setPartShortDesc] = useState("");
	const [partImgUrl, setPartImgUrl] = useState("");
	const [partTechImgUrl, setPartTechImgUrl] = useState("");
	const [partSalePrice, setPartSalePrice] = useState("");
	const [partManPrice, setPartManPrice] = useState("");
	const [currency, setCurrency] = useState("");
	const [merchantId, setMerchantId] = useState("");
	const [merchantName, setMerchantName] = useState("");
	const [deliveryCharge, setDeliveryCharge] = useState("");
	const [search,setSearch] = useState("");


 

	const isConnectedWallet = props.isConnected;
        const payer = props.address;
        const cart = useContext(CartContext);
console.log("yyyyyy - ", process.env.REACT_APP_CONTRACT_ADDR);
console.log("yyyyyy jj - ", process.env);
 
return (
    <div className="container">

 <ContractContext.Provider value={{
	 addAsset, setAddAsset,
    erc20ContractAddress, setERC20ContractAddress,
    contractAddress, setContractAddress,
    contractDetails, setContractDetails,
    notary, setNotary,
    contractNumber, setContractNumber,
    assetNumberSharesSold, setAssetNumberSharesSold,
    usdGbpRate, setUsdGbpRate,
    password, setPassword,
    correct, setCorrect,
    assetId, setAssetId,
    dbKey, setDbKey,
    assetOwnerName, setAssetOwnerName,
    assetAddress, setAssetAddress,
    assetValue, setAssetValue,
    assetNumberShares, setAssetNumberShares,
    hasTenant, setHasTenant,
    hasGarden, setHasGarden,
    hasParking, setHasParking,
    assetImageUrl, setAssetImageUrl,
    currency, setCurrency,
    assetUrl, setAssetUrl,
    assetIncome, setAssetIncome,
    assetYield, setAssetYield,
    assetNumberBathrooms, setAssetNumberBathrooms,
    assetNumberBedrooms, setAssetNumberBedrooms,
    assetHouseType, setAssetHouseType,
    hasDoubleGlazing, setHasDoubleGlazing,
    assetRiskRating, setAssetRiskRating,
    assetPreferredNotary, setAssetPreferredNotary,
    sellerAddress, setSellerAddress,
}}>



        <div>
	   <div className="row">
  	       <div className="col-12 text-center">
               </div>
   	   </div>


	   <div className="row">
               <div className="col-12 text-center">
	{ <AddAssetMgr /> }
	       </div>
           </div>
	</div>
        </ContractContext.Provider>
  </div>
);


}

export default AssetWalletInner;


	




