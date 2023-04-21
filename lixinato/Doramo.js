import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyComponent = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <img
            src="https://example.com/my-image.jpg"
            alt="My Image"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <p>Some text goes here...</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="My Video"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/VIDEO_ID_HERE"
              allowFullScreen
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;
