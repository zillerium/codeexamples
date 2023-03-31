import React from "react";
import { Table } from "react-bootstrap";

const AssetFeatures = ({ features }) => {
console.log("features --- ", features);
	return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Bathrooms</td>
          <td>{features.numBathrooms}</td>
        </tr>
        <tr>
          <td>Number of Bedrooms</td>
          <td>{features.numBedrooms}</td>
        </tr>
        <tr>
          <td>House Type</td>
          <td>{features.houseType}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AssetFeatures;
