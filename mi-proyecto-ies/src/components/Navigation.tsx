import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import styles from './navigation.module.css';

const Navigation = () => {
  const navItems = [
    { name: 'Inicio', icon: 'bi-house-door-fill' },
    { name: 'Servicios', icon: 'bi-grid-fill' },
    { name: 'Contacto', icon: 'bi-person-lines-fill' }
  ];

  return (
    <Navbar bg="light" expand="lg" className={styles.navigation}>
      <Container fluid>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            {navItems.map((item) => (
              <Nav.Link href="#" key={item.name} className="fw-bold fs-5 mx-2">
                <i className={`${item.icon} me-2`}></i>
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;