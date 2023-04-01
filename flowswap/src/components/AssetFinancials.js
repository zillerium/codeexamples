import React from "react";
import { Col, Row } from "react-bootstrap";

const AssetFinancials = ({
  assetValue,
  assetIncome,
  assetYield,
  assetRiskRating,
  assetNumberShares,
}) => {
  return (
    <Row className="my-4">
      <Col md={6} className="text-left">
        <div className="font-weight-bold mb-1">Asset Value</div>
        <div className="font-weight-bold mb-1">Income</div>
        <div className="font-weight-bold mb-1">Yield</div>
        <div className="font-weight-bold mb-1">Risk</div>
        <div className="font-weight-bold mb-1">Number shares</div>
      </Col>
      <Col md={6} className="text-left">
        <div className="mb-1">{assetValue.toLocaleString()} GBP</div>
        <div className="mb-1">{assetIncome.toLocaleString()} GBP</div>
        <div className="mb-1">{assetYield}%</div>
        <div className="mb-1">{assetRiskRating}</div>
        <div className="mb-1">{assetNumberShares.toLocaleString()}</div>
      </Col>
    </Row>
  );
};

export default AssetFinancials;
