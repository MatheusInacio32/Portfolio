// src/app/App.js
import '../styles/tailwind.css';
import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Portifolio from '../pages/Portifolio';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

library.add(fas, fab);

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Portifolio />} />
    </Routes>
  </Router>
  );
}

export default App;
