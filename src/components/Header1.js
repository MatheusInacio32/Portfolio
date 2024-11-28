import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header1() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 p-4 shadow-md z-10 transition-colors duration-300 ${
        isScrolled ? "bg-blue-600" : "bg-cyan-transparent"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo and Title Section */}
      <div className="text-white flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex flex-col items-center space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-4">
          <img 
            src="/assets/header.png" 
            alt="Matheus Nunes Inácio"
            className="logo rounded-full w-12 h-12 md:w-10 md:h-10" 
          />
          <div className="text-center md:text-left">
            <h1 className="text-lg md:text-2xl font-bold">Matheus Nunes Inácio</h1>
            <p className="text-xs md:text-sm text-teal-400">Front-end Developer</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
        <a href="#home" className="text-xs md:text-sm text-white hover:text-teal-400">
          Início
        </a>
        <a href="#sobre" className="text-xs md:text-sm text-white hover:text-teal-400">
          Sobre Mim
        </a>
        <a href="#habilidades" className="text-xs md:text-sm text-white hover:text-teal-400">
          Habilidades
        </a>
        <a href="#experience" className="text-xs md:text-sm text-white hover:text-teal-400">
          Experiência
        </a>
        <a href="#projetos" className="text-xs md:text-sm text-white hover:text-teal-400">
          Projetos
        </a>
        <a href="#contact" className="text-xs md:text-sm text-white hover:text-teal-400">
          Contato
        </a>
      </nav>
    </motion.header>
  );
}
