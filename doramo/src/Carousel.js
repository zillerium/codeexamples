import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import CarouselSlide from './CarouselSlide';

const Carousel = ({ slides }) => {
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
console.log("slides, ", slides);
  return (
    <Slider {...settings}>
      {slides && slides.map((slide, index) => (
        <CarouselSlide key={index} imageSrc={slide.image} imageAlt={slide.alt} caption={slide.caption} />
      ))}
    </Slider>
  );
};

export default Carousel;
