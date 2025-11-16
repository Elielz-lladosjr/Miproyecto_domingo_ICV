// src/components/Card.tsx
import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap'; 
import styles from './card.module.css';

type CardProps = {
  title: string;
  text: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ title, text, img }) => {
  return (
    <BootstrapCard className="h-100 shadow-sm">
      {/* Hacemos que la imagen de la card se ajuste mejor */}
      <BootstrapCard.Img 
        variant="top" 
        src={img} 
        style={{ height: '200px', objectFit: 'cover', background: '#eee' }} 
      />
      <BootstrapCard.Body>
        <BootstrapCard.Title className={styles['card-title']}>
          {title}
        </BootstrapCard.Title>
        <BootstrapCard.Text>
          {text}
        </BootstrapCard.Text>
        <Button variant="primary">Leer más</Button>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;