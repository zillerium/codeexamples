import { useEffect, useState, useContext } from 'react';
import { useContractRead } from 'wagmi';
import { ContractContext } from './ContractContext';
import ShowAssetDetails from './ShowAssetDetails';
import AssetDetailsTable from './AssetDetailsTable';
import abinft from './abinft';
import {BigNumber} from 'bignumber.js';
import {  Button, ListGroup, Table } from 'react-bootstrap';
import {Link, Routes, Route, useNavigate } from 'react-router-dom';

function AssetListBytes32(props) {
  const { assetList } = useContext(ContractContext);
  const [selAsset, setSelAsset] = useState();

  const showAssetDetailsFunc = (c) => {
    console.log("c=====", c);
    setSelAsset(c);
    console.log("ccontarct=====", selAsset);
  };

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h3>List of Assets:</h3>
          <ListGroup> 
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
      </div>

      {selAsset && assetDetails?.assetIncome && JSON.stringify(assetDetails) !== JSON.stringify([{}]) && (
        <div> 
          <h3>Asset Details:  </h3>
          <AssetDetailsTable
            selAsset={selAsset}
            assetDetails={assetDetails}
            assetValueLocale={assetValueLocale}
            assetNumberShares={assetNumberShares}
            assetIncomeLocale={assetIncomeLocale}
          />
        </div>
      )}
    </div>
  );
}
