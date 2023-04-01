import React from "react";
import { Card } from "react-bootstrap";

const DataBox = ({ title, data }) => {
  return (
    <Card className="text-center border-0">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="display-6">{data}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DataBox;
