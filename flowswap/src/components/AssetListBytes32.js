import { useEffect, useState, useContext } from 'react';
import { useContractRead } from 'wagmi';
import { ContractContext } from './ContractContext';
import AssetDetails from './AssetDetails';
import abinft from './abinft';
import { Button, ListGroup, Table } from 'react-bootstrap';

function AssetListBytes32(props) {
  const { contractNftAddress, assetList, assetDetails } = useContext(ContractContext);
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

   return (
    <div>
	   <div className="row">
       <div className="col-6">
      <h3>List of Assets:</h3>
      <ListGroup
	   > {props.assets}
        {props.assets && props.assets.map((assetNum) => (
          <ListGroup.Item key={assetNum}>
            <Button variant="light" onClick={() => showAssetDetailsFunc(assetNum)}>
              {assetNum}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
     </div>

      {selAsset && <AssetDetails address={props.address} assetNum={selAsset} />}

       <div className="col-6">
      {selAsset && assetDetails && JSON.stringify(assetDetails) !== JSON.stringify([{}]) && (
        <div>
          <h3>Asset Details: {selAsset} </h3>
          <Table bordered striped>
            <tbody>
              <tr>
                <td><strong>Nft:</strong></td>
                <td>{assetDetails.data.assetNft}</td>
              </tr>
              <tr>
                <td><strong>Value:</strong></td>
                <td>{assetDetails.data.assetValue}</td>
              </tr>
              <tr>
                <td><strong>Number Shares:</strong></td>
                <td>{assetDetails.data.assetNumberShares}</td>
              </tr>
              <tr>
                <td><strong>Income:</strong></td>
                <td>{assetDetails.data.assetIncome}</td>
              </tr>
              <tr>
                <td><strong>Yield:</strong></td>
                <td>{assetDetails.data.assetYield}</td>
              </tr>
              <tr>
                <td><strong>Risk:</strong></td>
                <td>{assetDetails.data.assetRiskRating}</td>
              </tr>
              <tr>
                <td><strong>Currency:</strong></td>
                <td>{assetDetails.data.currency}</td>
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
