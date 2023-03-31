import React from "react";
import { Table } from "react-bootstrap";

const AssetFeatures = ({ numBathrooms, numBedrooms, houseType }) => {
  return (
    <Table striped bordered hover>
      <tbody>
        <tr>
          <td>Number of Bathrooms:</td>
          <td>{numBathrooms}</td>
          <td>Number of Bedrooms:</td>
          <td>{numBedrooms}</td>
          <td>House Type:</td>
          <td>{houseType}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AssetFeatures;
