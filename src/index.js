// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa 'react-dom/client' em vez de 'react-dom'
import App from './app/App';
import reportWebVitals from './app/reportWebVitals';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";


library.add(fas, fab);
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
