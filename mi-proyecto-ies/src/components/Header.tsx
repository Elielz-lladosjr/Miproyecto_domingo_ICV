// src/components/Header.tsx
import React from 'react';
import styles from './header.module.css'; // Importa los estilos

const Header = () => {
  return (
    // Este div usará la imagen de fondo gracias al CSS
    <div className={styles['header-wrapper']}>
      
      {/* ¡HEMOS BORRADO LA LÍNEA <img ... /> DE AQUÍ! */}

      <h1 className={styles.title}>IES CURA VALERA</h1>
      <p className={styles.subtitle}>Huércal-Overa</p>
    </div>
  );
};

export default Header;