import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './footer.module.css'; 

const Footer = () => {
  return (
    <div className={styles['pie-wrapper']}> 
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
              <a href="#" className={styles['social-icon']}>
                <img src="/images/fb.png" alt="Facebook" width="32" />
              </a>
              <a href="#" className={styles['social-icon']}>
                <img src="/images/ig.png" alt="Instagram" width="32" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;