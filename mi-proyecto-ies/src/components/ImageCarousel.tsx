// src/components/ImageCarousel.tsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './imageCarousel.module.css'; // Importa sus propios estilos

// Las imágenes de Andalucía que tienes en /public/imagenes
const carouselImages = [
  { 
    img: '/images/sevilla.jpg',
    label: 'Sevilla'
  },
  { 
    img: '/images/malaga.jpg', // Asumo que tienes esta imagen
    label: 'Malaga'
  },
  { 
    img: '/images/cordoba.jpg',
    label: 'Córdoba'
  }
];

const ImageCarousel = () => {
  return (
    // interval={3000} hace que cambie cada 3 segundos
    <Carousel interval={3000} fade> 
      {carouselImages.map((item) => (
        <Carousel.Item key={item.label}>
          <img
            className="d-block w-100"
            src={item.img}
            alt={item.label}
            // Añadimos estilos en línea para que la imagen no sea gigante
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

// ¡ESTA LÍNEA ES LA MÁS IMPORTANTE!
export default ImageCarousel;