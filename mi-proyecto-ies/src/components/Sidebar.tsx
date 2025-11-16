// src/components/Sidebar.tsx
import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Box } from '@mui/material';
import styles from './sidebar.module.css';

// Definimos el tipo para los héroes
type Hero = {
  label: string;
}

const Sidebar = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  // useEffect para cargar los héroes desde el JSON al montar el componente
  useEffect(() => {
    fetch('/heroes.json') // Carga desde la carpeta /public
      .then(response => response.json())
      .then(data => setHeroes(data))
      .catch(error => console.error("Error al cargar heroes.json:", error));
  }, []); // El array vacío [] significa que solo se ejecuta 1 vez

  return (
    <Box className={styles['sidebar-wrapper']}>
      <h4>Sidebar</h4>
      <hr />
      
      <p className="fw-bold">Héroes de Marvel (MUI):</p>
      <Autocomplete
        disablePortal
        options={heroes}
        sx={{ width: '100%', marginBottom: '20px', backgroundColor: 'white' }}
        renderInput={(params) => <TextField {...params} label="Elige un héroe" />}
      />
      
      <p className="fw-bold">Vídeo de YouTube:</p>
      
      {/* Usamos la clase 'ratio' de Bootstrap para el tamaño adaptable */}
      <div className="ratio ratio-16x9">
        <iframe 
          // --- ¡¡LA PRUEBA DEFINITIVA!! ---
          // "Big Buck Bunny", un vídeo de código abierto que SÍ funciona
          src="https://www.youtube.com/embed/aqz-KE-bpKQ" 
          title="Big Buck Bunny (Official)" 
          allowFullScreen>
        </iframe>
      </div>
    </Box>
  );
};

export default Sidebar;