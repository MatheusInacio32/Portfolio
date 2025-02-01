import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
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
      className={`fixed top-0 left-0 right-0 p-3 md:p-5 shadow-md z-10 transition-colors duration-300 ${
        isScrolled ? "white-navbar" : "purple-navbar"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-6">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/header1.png`}
            alt="Matheus Nunes Inácio"
            className="rounded-full w-18 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border-4 border-dark-black"
            />
          <div>
            <h1 
            className={`text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-shadow
                          ${isScrolled ? 'text-dark-black text-shadow-none' : 'text-white'}
                      `}>Matheus Nunes Inácio
            </h1>
              <p 
                className={`text-sm sm:text-base md:text-lg lg:text-xl 
                            ${isScrolled ? 'text-yellow-800' : 'text-violet-200'}
                          `}>Desenvolvedor Full Stack</p>
          </div>
        </div>

        <nav className={`mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6
          ${isScrolled ? 'text-black' : 'text-white'}`}>
          <a href="#sobre" className="hover:text-violet-700 text-xs sm:text-sm md:text-base lg:text-lg">
            Sobre Mim
          </a>
          <a href="#habilidades" className="hover:text-violet-700 text-xs sm:text-sm md:text-base lg:text-lg">
            Habilidades
          </a>
          <a href="#experience" className="hover:text-violet-700 text-xs sm:text-sm md:text-base lg:text-lg">
            Experiência
          </a>
          <a href="#projetos" className="hover:text-violet-700 text-xs sm:text-sm md:text-base lg:text-lg">
            Projetos
          </a>
          <a href="#contact" className="hover:text-violet-700 text-xs sm:text-sm md:text-base lg:text-lg">
            Contato
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
