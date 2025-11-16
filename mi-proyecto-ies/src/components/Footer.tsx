// src/components/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Asegúrate de que esta importación coincide con tu nuevo nombre de archivo
import styles from './footer.module.css'; 

const Footer = () => {
  return (
    <div className={styles['pie-wrapper']}> {/* Puedes dejar esta clase o cambiarla */}
      <Container>
        <Row className="text-center align-items-center">
          
          <Col md={6} className="text-md-start mb-3 mb-md-0">
            <p className="mb-1 fw-bold">IES CURA VALERA</p>
            <p className="mb-1">Avda. Guillermo Reyna, 35</p>
            <p className="mb-1">04600 HUÉRCAL-OVERA (Almería)</p>
          </Col>

          <Col md={6} className="text-md-end">
            <p className="mb-2">Redes Sociales:</p>
            <div>
              {/* Usando tus imágenes de /public */}
              <a href="#" className={styles['social-icon']}>
                <img src="/images/fb.png" alt="Facebook" width="32" />
              </a>
              <a href="#" className={styles['social-icon']}>
                <img src="/images/ig.png" alt="Instagram" width="32" />
              </a>
              {/* Puedes añadir más si tienes los iconos */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;