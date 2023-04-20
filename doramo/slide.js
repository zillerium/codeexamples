import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Welcome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Welcome to Doramo</h1>
          <p className="lead text-center">
            Use this website to add assets to the blockchain.
          </p>
          <Slider {...settings}>
            <div>
              <img
                className="d-block w-100"
                src="/houses.jpg"
                alt="First slide"
              />
            </div>
            <div>
              <img
                className="d-block w-100"
                src="/second-image.jpg"
                alt="Second slide"
              />
            </div>
            <div>
              <img
                className="d-block w-100"
                src="/third-image.jpg"
                alt="Third slide"
              />
            </div>
          </Slider>
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
