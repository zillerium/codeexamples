import React, { useState, useContext } from "react";
import { Container, Button, Row, Col, Image, Table } from "react-bootstrap";
import { CartContext } from "../CartContext";
import CartTotal from "../components/CartTotal";
import { useParams, Link } from "react-router-dom";

const Cart = (props) => {
  const [search, setSearch] = useState("");
  const { productId } = useParams();
  const cart = useContext(CartContext);

const formatCurrency = (value) => {
  return value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
};




console.log("cart items mmmmmmmmmmmm= ", cart.items);
  return (
    <>
      <div>
        <h1>Investments </h1>
      </div>
      <div>
        <div>
          <div>
            <Table stripod="true" bordered hover>
              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Share Price GBP (USD)</th>
                  <th>No. Shares</th>
                  <th>Tot GBP (USD)</th>
                  <th>Cart</th>
                </tr>
              </thead>
              <tbody>
                {cart.items.length > 0 &&
                  cart.items.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <Link
                            to={{
                              pathname: `/asset/${value.id}`,
                            }}
                          >
                            {value.assetAddress}
                          </Link>
                        </td>
                        <td>
			                              {formatCurrency(value.pricePerShare )} ( 
			                              {formatCurrency(value.pricePerShare * value.usdGbpRate )})
                        </td>
			    <td>{value.numberSharesToBuy}</td>
                        <td>
			                              {formatCurrency(value.pricePerShare * value.numberSharesToBuy)} ( 
			                              {formatCurrency(value.pricePerShare * value.usdGbpRate * value.numberSharesToBuy)})
                        </td>
                        <td>
                          <Button
                            sm="6"
                            onClick={() =>
                              cart.addOneToCart({
                                assetId: value.id,
                              })
                            }
                            className="mx-2"
                          >
                            +
                          </Button>
                          <Button
                            sm="6"
                            onClick={() =>
                              cart.removeOneFromCart({
                                assetId: value.id,
                              })
                            }
                            className="mx-2"
                          >
                            -
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
              <tr>
                <td>Total USD</td>
                <td></td>
                <td></td>
                <td>{cart.getTotalCost().toFixed(2)}</td>
                <td>
                  <Link to="/invest">
                    <Button disabled={cart.items.length === 0}>Invest</Button>
                  </Link>
                </td>
              </tr>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
