import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import CartProvider from '../CartContext.js'
import AssetForm from './AssetForm';
import ImageDisplay from './ImageDisplay';
import AddPropertyButton from './AddPropertyButton';

const AddApiProduct1 = () => {
  const maxint256 = 10000000000000;
  const ranNumber = Math.floor(Math.random() * maxint256);
  const [password, setPassword] = useState("");
  const [correct, setCorrect] = useState(false);
  const [assetId, setAssetId] = useState(ranNumber);
  const [dbKey, setDbKey] = useState(null);
  const [hasTenant, setHasTenant] = useState(false);
  const [hasGarden, setHasGarden] = useState(false);
  const [hasParking, setHasParking] = useState(false);
  const [assetImageUrl, setAssetImageUrl] = useState(null);
  const [assetUrl, setAssetUrl] = useState(null);
  const [assetNumberSharesSold, setAssetNumberSharesSold] = useState(null);
  const [sellerAddress, setSellerAddress] = useState(null);

  const { isLoading, error, data, isFetching, refetch } = useQuery('dogs',
    () => axios('https://random.dog/woof.json'),
    {
      enabled: false,
    }
  );

  const checkPassword = () => {
    if (password === "tiger12") setCorrect(true); else setCorrect(false);
  }

  const PostData = async (part) => {
    console.log("part");
    console.log(part);
    const response = await axios.post("https://peacioapi.com:3000/addHouseAPI", part);
    return response;
  }

  const { mutate, isError } = useMutation(PostData, {
    onSuccess: (successData) => {
      console.log("post was done");
      console.log(successData);
    }
  })

  return (
    <div>
      <CartProvider>
        <Container>
          <div></div>
        </Container>
      </CartProvider>
      <header>
        <h1>Add Property to DB</h1>
        <p></p>
        <div>
          <input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={checkPassword}>Enable Page</Button>
        </div>
        <AssetForm
          setAssetId={setAssetId}
          setDbKey={setDbKey}
          setHasTenant={setHasTenant}
          setHasGarden={setHasGarden}
          setHasParking={setHasParking}
          setAssetImageUrl={setAssetImageUrl}
          setAssetUrl={setAssetUrl}
          setAssetNumberSharesSold={setAssetNumberSharesSold}
          setSellerAddress={setSellerAddress}
        />
        <ImageDisplay data={data} error={error} isLoading={isLoading} />
        <AddPropertyButton
          correct={correct}
          mutate={mutate}
          assetId={assetId}
          dbKey={dbKey}
          hasTenant={hasTenant}
          hasGarden={hasGarden}
          hasParking={hasParking}
          assetImageUrl={assetImageUrl}
          assetUrl={assetUrl}
          assetNumberSharesSold={assetNumberSharesSold}
          sellerAddress={sellerAddress}
        />
      </header>
    </div>
  );
}

export default AddApiProduct1;
