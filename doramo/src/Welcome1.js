import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from './Carousel';

const Welcome = () => {
  const slides = [
    {
      image: '/houses.jpg',
      alt: 'Real Estate',
      caption: 'Real Estate'
    },
    {
      image: '/fineart.jpg',
      alt: 'Fine Art',
      caption: 'Fine Art'
    },
    {
      image: '/cars.jpg',
      alt: 'Classic Cars',
      caption: 'Classic Cars'
    },
    {
      image: '/exotic.jpg',
      alt: 'Exotic Cars',
      caption: 'Exotic Cars'
    }
  ];

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Welcome to Doramo</h1>
          <p className="lead text-center">
            Tokenization of Assets
          </p>
          <Carousel slides={slides} />
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
