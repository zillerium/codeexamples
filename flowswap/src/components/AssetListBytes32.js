import { useEffect, useState, useContext } from 'react';
import { useContractRead } from 'wagmi';
import { ContractContext } from './ContractContext';
import ShowAssetDetails from './ShowAssetDetails';
import abinft from './abinft';
import { Button, ListGroup, Table } from 'react-bootstrap';

function AssetListBytes32(props) {
  const { contractNftAddress, assetList, assetDetails, setAssetDetails } = useContext(ContractContext);
	const [selAsset, setSelAsset]=useState();
console.log("jjjjjjjjjjjjjjj", assetList);
//           <ContractDetails contractNum={contractNum} />
          //{contractDetails && <ShowContractDetails /> }
  const showAssetDetailsFunc=(c) => {
	  console.log("c=====", c);
	  setSelAsset(c);
	  console.log("ccontarct=====", selAsset);
  }

 /* {selContract && (
           <ContractDetails contractNum={selContract} />
  )}
          {contractDetails && <ShowContractDetails /> }
*/
	//  {contractDetails}
  const dateFormat = {
     dateStyle: 'long',
	  timeStyle: 'short',
	  hour12: true
  }
/*console.log("asset details ==============", assetDetails);
//console.log("asset details 0 kkk ==============", assetDetails.assetNft.value._hex.toString());
console.log("asset details 0 ==============", assetDetails.assetNft.toString());
console.log("asset details 0 ==============", assetDetails.assetIncome.toString());
console.log("asset details 0 ==============", assetDetails.assetNumberShares.toString());
console.log("asset details 0 ==============", assetDetails.assetValue.toString());
console.log("asset details 0 ==============", assetDetails.assetYield.toString());
console.log("asset details 0 ==============", assetDetails.assetRiskRating.toString());
console.log("asset details 0 ==============", assetDetails.currency);
*/


   return (
    <div>
	   <div className="row">
       <div className="col-6">
      <h3>List of Assets:</h3>
      <ListGroup
	   > 
        {props.assets && props.assets.map((assetNum) => (
          <ListGroup.Item key={assetNum}>
            <Button variant="light" onClick={() => showAssetDetailsFunc(assetNum)}>
              {assetNum}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
     </div>

      {selAsset && <ShowAssetDetails address={props.address} assetNum={selAsset} />}

       <div className="col-6">
      {selAsset && assetDetails && JSON.stringify(assetDetails) !== JSON.stringify([{}]) && (
        <div> 

          <h3>Asset Details:  </h3>
	      <Table bordered striped>
            <tbody>
              <tr>
                <td><strong>Bytes32:</strong></td>
                <td>{selAsset}</td>
              </tr>
              <tr>
                <td><strong>Nft:</strong></td>
                <td>{assetDetails?.assetNft?.toString()}</td>
              </tr>
              <tr>
                <td><strong>Value:</strong></td>
                <td>{assetDetails?.assetValue?.toString()}</td>
              </tr>
              <tr>
                <td><strong>Number Shares:</strong></td>
                <td>{assetDetails?.assetNumberShares?.toString()}</td>
              </tr>
              <tr>
                <td><strong>Income:</strong></td>
                <td>{assetDetails?.assetIncome?.toString()}</td>
              </tr>
              <tr>
                <td><strong>Yield:</strong></td>
                <td>{assetDetails?.assetYield?.toString()}</td>
              </tr>
              <tr>
                <td><strong>Risk:</strong></td>
                <td>{assetDetails?.assetRiskRating?.toString()}</td>
              </tr>
              <tr>
                <td><strong>Currency:</strong></td>
                <td>{assetDetails?.currency}</td>
              </tr>
            </tbody>
          </Table>

        </div>
      )}
     </div>
    </div>
    </div>
  );
}

export default AssetListBytes32;
