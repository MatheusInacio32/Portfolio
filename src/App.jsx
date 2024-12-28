import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/Home/LandingPage';
import PagTest from './pages/Services/Services';
import './styles/global.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/easteregg" element={<PagTest />} />
      </Routes>
    </Router>
  );
}

export default App;
