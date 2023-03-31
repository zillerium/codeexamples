import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Container, Button, Row, Col } from "react-bootstrap";

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

  if (isError) {
    return <h1>Error</h1>;
  }

  if (isLoading) return <h1>Loading ..</h1>;

  const onAddToCart = () => {
    cart.addOneToCart(data.data[0]);
  };

  console.log("data ---- ", data);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>{data.data[0].assetAddress}</h1>
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
            <AssetCheckboxList checkboxes={[
              { label: "Has Tenant", checked: data.data[0].hasTenant },
              { label: "Has Garden", checked: data.data[0].hasGarden },
              { label: "Has Parking", checked: data.data[0].hasParking },
              { label: "Has Double Glazing", checked: data.data[0].hasDoubleGlazing },
            ]} />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <AssetImages imageUrl={data.data[0].assetImageUrl} alt={data.data[0].assetAddress} />
          </Col>
          <Col>
        <AssetFeatures
  numBathrooms={data.data[0].assetNumberBathrooms}
  numBedrooms={data.data[0].assetNumberBedrooms}
  houseType={data.data[0].assetHouseType}
/>

            <hr />
            <p>Asset Owner Name: {data.data[0].assetOwnerName}</p>
            <Button sm="6" onClick={onAddToCart} className="mx-2">
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;

<Form onSubmit={(e) => {
              e.preventDefault();
              onAddToCart();
            }}>
              <Form.Group controlId="quantity">
                <Form.Label>Quantity:</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </Form.Group>
              <Button type="submit" className="mx-2">
                Add to Cart
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
  const onAddToCart = () => {
    cart.addItemsToCart(data.data[0], quantity);
  };

const addItemsToCart = (item, quantity = 1) => {
  const { id } = item;
  const existingItem = cartProducts.find((product) => product.id === id);
  if (existingItem) {
    const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity + quantity,
    };
    setCartProducts(
      cartProducts.map((product) =>
        product.id === id ? updatedItem : product
      )
    );
  } else {
    const newItem = {
      ...item,
      quantity,
    };
    setCartProducts([...cartProducts, newItem]);
  }
};


