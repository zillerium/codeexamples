import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const ManageInvestQty = ({ quantity, onQuantityChange, onAddToCart }) => {
  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
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
        <Col sm="3">
          <Button onClick={handleDecrease}>-</Button>
        </Col>
        <Col sm="2">
          <Form.Control
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => onQuantityChange(parseInt(e.target.value))}
          />
        </Col>
        <Col sm="3">
          <Button onClick={handleIncrease}>+</Button>
        </Col>
        <Col sm="2">
          <Button type="submit">
            Invest
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default ManageInvestQty;
