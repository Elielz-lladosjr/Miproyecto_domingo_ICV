import React from 'react';
import Sidebar from './Sidebar';   
import Content from './Content';   
import styles from './body.module.css';

const Body = () => {
  return (
    <div className={styles['body-grid']}>
      
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>

      <section className={styles.content}>
        <Content />
      </section>

    </div>
  );
};

export default Body;