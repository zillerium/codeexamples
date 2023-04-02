import React from "react";
import { Button, Link } from "react-bootstrap";

const CartRow = ({ item, formatCurrency, onAddOneToCart, onRemoveOneFromCart }) => {
  const { id, assetAddress, pricePerShare, usdGbpRate, numberSharesToBuy } = item;
  const subTotalGBP = pricePerShare * numberSharesToBuy;
  const subTotalUSD = subTotalGBP * usdGbpRate;

  return (
    <tr>
      <td>
        <Link to={`/asset/${id}`}>{assetAddress}</Link>
      </td>
      <td>
        {formatCurrency(pricePerShare)} (
        {formatCurrency(pricePerShare * usdGbpRate)})
      </td>
      <td>{numberSharesToBuy}</td>
      <td>
        {formatCurrency(subTotalGBP)} ({formatCurrency(subTotalUSD)})
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

{cart.items.length > 0 &&
  cart.items.map((item, key) => (
    <CartRow
      key={key}
      item={item}
      formatCurrency={formatCurrency}
      onAddOneToCart={cart.addOneToCart}
      onRemoveOneFromCart={cart.removeOneFromCart}
    />
  ))
}

