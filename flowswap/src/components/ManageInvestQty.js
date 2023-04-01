import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const ManageInvestQty = ({ quantity, onQuantityChange, onAddToCart, maxQuantity }) => {
  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      onAddToCart();
    }}>
      <Form.Group controlId="quantity" className="d-flex align-items-center">
        <Form.Label column sm="5">Number Shares to Buy:</Form.Label>
        <Col sm="7" className="d-flex align-items-center">
          <Button variant="outline-primary" size="sm" style={{ height: "100%" }} onClick={handleDecrease}>-</Button>
          <Form.Control
            type="number"
            min="1"
            max={maxQuantity}
            value={quantity}
            onChange={(e) => onQuantityChange(parseInt(e.target.value))}
            style={{ width: "80px", margin: "0px 5px", textAlign: "center", height: "100%" }}
          />
          <Button variant="outline-primary" size="sm" style={{ height: "100%" }} onClick={handleIncrease} disabled={quantity >= maxQuantity}>+</Button>
          <Button type="submit" variant="primary" style={{ marginLeft: "10px", height: "100%" }}>
            Invest
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default ManageInvestQty;
