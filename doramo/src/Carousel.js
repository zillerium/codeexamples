import React from 'react';
import Slider from 'react-slick';
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

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <CarouselSlide key={index} image={slide.image} alt={slide.alt} caption={slide.caption} />
      ))}
    </Slider>
  );
};

export default Carousel;
