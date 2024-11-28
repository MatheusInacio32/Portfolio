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

library.add(fas, fab);

const App = () => {
  return (
      <div className='bg-gradient-to-b from-black to-gray-900'>
        <Navbar />
        <main>
          <div><Home/></div>
          <div><Sobre/></div>
          <div><Habilidades/></div>
          <div><Experience/></div>
          <div><Projects/></div>
          <div><Contact/></div>
        </main>
      </div>
  );
}

export default App;
