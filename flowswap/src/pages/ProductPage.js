import { useParams } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Form, Container, Button, Row, Col } from "react-bootstrap";

import AssetCheckboxList from "../components/AssetCheckboxList";
import AssetFeatures from "../components/AssetFeatures";
import AssetFinancials from "../components/AssetFinancials";
import AssetImages from "../components/AssetImages";
import { CartContext } from "../CartContext";

const ProductPage = () => {

  const { productId } = useParams();
  const cart = useContext(CartContext);
  const baseUrl = `https://peacioapi.com:3000/getHouse/${productId}`;

  const { data, isLoading, isError, refetch } = useQuery(
    ["cat"],
    () => axios.get(baseUrl).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  const onAddToCart = () => {
    cart.addItemsToCart(data.data[0], quantity);
  };


  const [quantity, setQuantity] = useState(1);
const [assetIncomeForQuantity, setAssetIncomeForQuantity] = useState(0);
  const [assetYieldForQuantity, setAssetYieldForQuantity] = useState(0);
  const [assetCostForQuantity, setAssetCostForQuantity] = useState(0);
  const [assetCostPerShare, setAssetCostPerShare] = useState(0);

  const onQuantityChange = (quantity) => {
    setQuantity(quantity);
  };

useEffect(()=> {
    if (data && data.data && data.data[0]) {
      setAssetIncomeForQuantity((data.data[0].assetIncome/data.data[0].assetNumberShares)*quantity);
      setAssetYieldForQuantity(((data.data[0].assetIncome/data.data[0].assetNumberShares)*quantity));
      setAssetCostForQuantity((data.data[0].assetValue/data.data[0].assetNumberShares)*quantity.toFixed(2));
      setAssetCostPerShare((data.data[0].assetValue/data.data[0].assetNumberShares));
    }

}, [data, quantity]);


  if (isError) {
    return <h1>Error</h1>;
  }

  if (isLoading) return <h1>Loading ..</h1>;


  console.log("data ---- ", data);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>{data.data[0].assetAddress}</h1>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <AssetImages imageUrl={data.data[0].assetImageUrl} alt={data.data[0].assetAddress} />
          </Col>
	  <Col>
	  <Row>

        <Col>

           <Form onSubmit={(e) => {
              e.preventDefault();
              onAddToCart();
            }}>
              <Form.Group controlId="quantity" className="d-flex align-items-centered">
                <Form.Label column sm="5">Number Shares to Buy:</Form.Label>
	        <Col sm="2">
                <Form.Control
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => onQuantityChange(parseInt(e.target.value))}
                />
	      </Col>
	  <Col sm="6">
              <Button type="submit" className="mx-4">
                Invest
              </Button>
	  </Col>
              </Form.Group>
            </Form>

          </Col>
	  </Row>

 

 <Row className="mt-4">
        <Col>
          <h4>For {quantity} Shares </h4>
          <DataBox
            title="Income"
            data={`${assetIncomeForQuantity.toFixed(2)} GBP`}
          />
          <DataBox
            title="Cost"
            data={`${assetCostForQuantity.toFixed(2)} GBP`}
          />
          <DataBox
            title="Cost Per Share"
            data={`${assetCostPerShare.toFixed(2)} GBP`}
          />
        </Col>
      </Row>

<Row>
        <Col>
            <AssetFinancials
              assetValue={data.data[0].assetValue}
              assetIncome={data.data[0].assetIncome}
              assetYield={data.data[0].assetYield}
              assetRiskRating={data.data[0].assetRiskRating}
              assetNumberShares={data.data[0].assetNumberShares}
            />
          </Col>
        <Col>
            <AssetCheckboxList checkboxes={[
              { label: "Tenant", checked: data.data[0].hasTenant },
              { label: "Garden", checked: data.data[0].hasGarden },
              { label: "Parking", checked: data.data[0].hasParking },
              { label: "Double Glazing", checked: data.data[0].hasDoubleGlazing },
            ]} />
          </Col>
</Row>

	  <Row>
          <Col>
        <AssetFeatures
  numBathrooms={data.data[0].assetNumberBathrooms}
  numBedrooms={data.data[0].assetNumberBedrooms}
  houseType={data.data[0].assetHouseType}
/>

            <hr />
            <p>Asset Owner Name: {data.data[0].assetOwnerName}</p>
          </Col>
</Row>
	  </Col>
</Row>
      </Container>
    </>
  );
};

export default ProductPage;
