import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const CarouselSlide = ({ imageSrc, imageAlt, caption }) => {
  const captionStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  };
console.log("image src", imageSrc, imageAlt, caption);
  return (
	  <div>
	  <h1>test</h1>
	  <img src={imageSrc} />
    <div className="carousel-item">
      <img className="d-block w-100" src={imageSrc} alt={imageAlt} />
      <div className="carousel-caption">
        <div style={captionStyle}>{caption}</div>
      </div>
    </div>

	  </div>
  );
};

export default CarouselSlide;
