// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/Home/LandingPage'; // Caminho corrigido
import PagTest from './pages/Services/Services'; // Caminho corrigido
import './styles/global.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from './contexts/ThemeContext'; // Caminho corrigido

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>  
          <Route path="/" element={<LandingPage />} />
          <Route path="/easteregg" element={<PagTest />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;