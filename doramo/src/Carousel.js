import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
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
    backgroundColor: 'rgba(0, 0, 0, 0)',
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ position: 'absolute', top: '45%', left: '-20px', zIndex: '1', cursor: 'pointer' }}
      >
        <ArrowLeft size={30} color="white" />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ position: 'absolute', top: '45%', right: '-20px', zIndex: '1', cursor: 'pointer' }}
      >
        <ArrowRight size={30} color="white" />
      </div>
    );
  };

  return (
    <Slider {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
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

export default Carousel;
