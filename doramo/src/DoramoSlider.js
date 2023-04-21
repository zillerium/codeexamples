import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
   style={{ position: 'absolute', top: '50%', left: 0, zIndex: 1, cursor: 'pointer' }}

    >
      <i className="fas fa-chevron-left "  style={{ fontSize: '24px' }}></i>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick  } = props;
  return (
    <div
      className={className}
      onClick={onClick}
	        style={{ position: 'absolute', top: '50%', right: 0, zIndex: 1, cursor: 'pointer' }}

    >
      <i className="fas fa-chevron-right" style={{ fontSize: '24px' }}></i>
    </div>
  );
};



const DoramoSlider = () => {
	const isMobile = window.innerWidth < 768;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    prevArrow: <PrevArrow   />,	  
    nextArrow: <NextArrow  />	  
  };

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
  };


  return (
          <Slider {...settings}>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/houses.jpg"
                alt="Real Estate"
              />
              <div className="carousel-caption">
                <div style={captionStyle}>Real Estate</div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/fineart.jpg"
                alt="Fine Art"
              />
              <div className="carousel-caption">
                <div style={captionStyle}>Fine Art</div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/cars.jpg"
                alt="Classic Cars"
              />
              <div className="carousel-caption">
                <div style={captionStyle}>Classic Cars</div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/exotic.jpg"
                alt="Exotic Cars"
              />
              <div className="carousel-caption">
                <div style={captionStyle}>Exotic Cars</div>
              </div>
            </div>
          </Slider>
  );
};

export default DoramoSlider;
