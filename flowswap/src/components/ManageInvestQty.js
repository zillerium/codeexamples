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
        <Col sm="7" className="d-flex justify-content-start align-items-center">
          <Button variant="outline-primary" size="sm" onClick={handleDecrease}>-</Button>
          <Form.Control
            type="number"
            min="1"
            max="9999"
            value={quantity}
            onChange={(e) => onQuantityChange(parseInt(e.target.value))}
            style={{ width: "50px", margin: "0px 5px", textAlign: "center" }}
          />
          <Button variant="outline-primary" size="sm" onClick={handleIncrease}>+</Button>
          <Button type="submit" variant="primary" style={{ marginLeft: "10px" }}>
            Invest
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default ManageInvestQty;
