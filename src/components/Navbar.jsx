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
        isScrolled ? "bg-blue-600" : "bg-cyan-transparent"
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
            className="rounded-full w-18 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 border-2 border-white"
            />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white">
              Matheus Nunes Inácio
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-teal-400">
              Full-Stack Developer
            </p>
          </div>
        </div>

        <nav className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6">
          <a href="#sobre" className="text-xs sm:text-sm md:text-base lg:text-lg text-white hover:text-teal-400">
            Sobre Mim
          </a>
          <a href="#habilidades" className="text-xs sm:text-sm md:text-base lg:text-lg text-white hover:text-teal-400">
            Habilidades
          </a>
          <a href="#experience" className="text-xs sm:text-sm md:text-base lg:text-lg text-white hover:text-teal-400">
            Experiência
          </a>
          <a href="#projetos" className="text-xs sm:text-sm md:text-base lg:text-lg text-white hover:text-teal-400">
            Projetos
          </a>
          <a href="#contact" className="text-xs sm:text-sm md:text-base lg:text-lg text-white hover:text-teal-400">
            Contato
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
