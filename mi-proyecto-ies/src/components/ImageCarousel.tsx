import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './imageCarousel.module.css'; 
const carouselImages = [
  { 
    img: '/images/sevilla.jpg',
    label: 'Sevilla'
  },
  { 
    img: '/images/malaga.jpg', 
    label: 'Malaga'
  },
  { 
    img: '/images/cordoba.jpg',
    label: 'Córdoba'
  }
];

const ImageCarousel = () => {
  return (
    <Carousel interval={3000} fade> 
      {carouselImages.map((item) => (
        <Carousel.Item key={item.label}>
          <img
            className="d-block w-100"
            src={item.img}
            alt={item.label}
            style={{height: '500px', objectFit: 'cover', background: '#ddd'}}
          />
          <Carousel.Caption>
            <h3>{item.label}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;