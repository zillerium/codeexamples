import React from "react";
import { Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const CartRow = ({ currency, item, formatCurrency, onAddOneToCart, onRemoveOneFromCart }) => {
  const { id, assetAddress, pricePerShare, usdGbpRate, numberSharesToBuy } = item;

  return (
    <tr>
      <td>
        <Link to={`/asset/${id}`}>{assetAddress}</Link>
      </td>
      <td>
        {formatCurrency(pricePerShare)} {currency}
      </td>
      <td>{numberSharesToBuy}</td>
      <td>
        {formatCurrency(numberSharesToBuy*pricePerShare)} {currency}
      </td>
      <td>
        <Button
          sm="6"
          onClick={() => onAddOneToCart(id)}
          className="mx-2"
        >
          +
        </Button>
        <Button
          sm="6"
          onClick={() => onRemoveOneFromCart(id)}
          className="mx-2"
        >
          -
        </Button>
      </td>
    </tr>
  );
};

export default CartRow;

