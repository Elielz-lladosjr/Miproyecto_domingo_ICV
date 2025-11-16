// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation'; // <-- NUEVO
import Body from './components/Body';
import Footer from './components/Footer';     // <-- Renombrado
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      
      <header className="app-header">
        <Header />
      </header>

      <nav className="app-nav">
        <Navigation /> 
      </nav>

      <main className="app-body">
        <Body /> 
      </main>

      <footer className="app-footer">
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;