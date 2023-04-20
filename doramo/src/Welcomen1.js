import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Welcome to Doramo</h1>
          <p className="lead text-center">
            Tokenization of assets
          </p>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/houses.jpg"
                alt="Houses"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/fineart.jpg"
                alt="Fine Art"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/cars.jpg"
                alt="Cars"
              />
            </Carousel.Item>
          </Carousel>
          <div className="d-flex justify-content-center mt-5">
            <ul className="list-group">
              <li className="list-group-item">Add Asset</li>
              <li className="list-group-item">List Asset</li>
              <li className="list-group-item">
                Click on the link to see the page
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
