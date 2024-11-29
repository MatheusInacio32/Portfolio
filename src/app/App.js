// src/app/App.js
import '../styles/tailwind.css';
import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Sobre from '../components/Sobre';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Habilidades from '../components/Habilidades';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


library.add(fas, fab);

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
             	
          <div><Navbar/></div>
          <div><Home/></div>
          <div><Sobre/></div>
          <div><Habilidades/></div>
          <div><Experience/></div>
          <div><Projects/></div>
          <div><Contact/></div>
        
      </div>
  );
}

export default App;
