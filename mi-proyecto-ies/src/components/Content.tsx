
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from './Card'; 
import ImageCarousel from './ImageCarousel'; 
import styles from './content.module.css';

const cardData = [
  {
    title: 'Noticia 1: Halloween',
    text: `El departamento de idiomas organiza el
           tradicional Escape Room de Halloween.`,
    img: '/images/hallowen.jpg'
  },
  {
    title: 'Noticia 2: Concurso',

    text: `Participación de nuestros alumnos de 4º ESO en
           el concurso de robótica regional.`,
    img: '/images/concurso.jpg'
  },
  {
    title: 'Noticia 3: Viaje de Estudios',
   
    text: `Abierto el plazo de inscripción para el viaje
           de fin de curso a Italia. ¡Apúntate!`,
    img: '/images/viaje2.jpg'
  }
];

const Content = () => {
  return (
    <div>
      <h2 className={styles['section-title']}>Noticias del Centro</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {cardData.map((item) => (
          <Col key={item.title}>
            <Card 
              title={item.title} 
              text={item.text} 
              img={item.img} 
            />
          </Col>
        ))}
      </Row>

      <h2 className={`${styles['section-title']} mt-5`}>Galería de Andalucía</h2>
      <ImageCarousel />
    </div>
  );
};

export default Content;