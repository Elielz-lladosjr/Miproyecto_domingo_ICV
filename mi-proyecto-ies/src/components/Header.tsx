import React from 'react';
import styles from './header.module.css'; 

const Header = () => {
  return (
    <div className={styles['header-wrapper']}>
      

      <h1 className={styles.title}>IES CURA VALERA</h1>
      <p className={styles.subtitle}>Huércal-Overa</p>
    </div>
  );
};

export default Header;