import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Welcome = () => {
  return (
    <div className="container">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Lixinato</h1>
          <p className="text-center lead">Blockchain solutions in Defi and decentralized ecommerce. Use the links below to find out more.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center mb-4">
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img
              src="doramoscreen.png"
              alt="Doramo"
              className="img-fluid w-100"
            />
          </a>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center mb-4">
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img
              src="fsscreen2.png"
              alt="Image 2"
              className="img-fluid w-100"
            />
          </a>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center mb-4">
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img
              src="catalox2.png"
              alt="Image 3"
              className="img-fluid w-100"
            />
          </a>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center mb-4">
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img
              src="peacioscreen.png"
              alt="Image 4"
              className="img-fluid w-100"
            />
          </a>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="d-flex justify-content-start mb-4 align-items-center">
          <img
            src="chainerascreen.png"
            alt="Blockchain Consultancy"
            className="img-fluid"
          />
          <span className="ml-2">Blockchain Consultancy</span>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={6} lg={6} className="d-flex justify-content-center mb-4">
          <span>Visit <a href="https://chainera.network" target="_blank" rel="noopener noreferrer">chainera.network</a> for more information</span>
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;
