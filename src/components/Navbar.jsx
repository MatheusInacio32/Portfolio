import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 p-4 md:p-5 shadow-md z-50 transition-all duration-300
        ${isDark ? "bg-gray-900 bg-opacity-90" : "purple-navbar"}
        ${isScrolled ? "backdrop-blur-md shadow-lg" : ""}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Container superior para mobile */}
        <div className="w-full flex justify-between items-center md:hidden">
          {/* Logo e Nome */}
          <div className="flex items-center space-x-2">
            <img
              src={`${process.env.PUBLIC_URL}/assets/header1.png`}
              alt="Matheus Nunes Inácio"
              className="rounded-full w-16 h-16 border-1 border-white dark:border-gray-300"
            />
            <div>
              <p className=" text-19px font-bold text-white leading-tight mt-4">Matheus Nunes Inácio</p>
              <p className=" text-sm text-purple-100 dark:text-gray-400 leading-tight">
                Desenvolvedor Full Stack
              </p>
            </div>
          </div>
          {/* Botão de Tema apenas mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-violet-900 dark:hover:bg-yellow-800 transition-colors flex items-center justify-center border border-gray-100 dark:border-gray-300"
            aria-label={`Alternar para tema ${isDark ? "claro" : "escuro"}`}
          >
            <FontAwesomeIcon
              icon={isDark ? faSun : faMoon}
              className="w-6 h-6 text-gray-300 dark:text-gray-200"
            />
          </button>
        </div>

        {/* Logo e Nome para desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <img
            src={`${process.env.PUBLIC_URL}/assets/header1.png`}
            alt="Matheus Nunes Inácio"
            className="rounded-full w-24 h-24 border-2 border-gray-300 dark:border-gray-300"
          />
          <div>
            <h1 className="text-4xl font-bold text-white">Matheus Nunes Inácio</h1>
            <p className="text-base text-purple-300 dark:text-gray-400">
              Desenvolvedor Full Stack
            </p>
          </div>
        </div>
        {/* Navegação */}
        <nav
          className={`mt-3 md:mt-2 flex flex-nowrap justify-center md:justify-end space-x-3 ${
            isScrolled ? 'text-purple-200' : 'text-white'
          }`}
          > 
          <a
            href="#sobre"
            className="hover:text-violet-400 text-[12px] md:text-[19px] lg:text-lg"
          >
            Sobre Mim
          </a>
          <a
            href="#habilidades"
            className="hover:text-violet-400 text-[12px] md:text-[19px] lg:text-lg"
          >
            Habilidades
          </a>
          <a
            href="#experience"
            className="hover:text-violet-400 text-[12px] md:text-[19px] lg:text-lg"
          >
            Experiência
          </a>
          <a
            href="#projetos"
            className="hover:text-violet-400 text-[12px] md:text-[19px] lg:text-lg"
          >
            Projetos
          </a>
          <a
            href="#contact"
            className="hover:text-violet-400 text-[12px] md:text-[19px] lg:text-lg"
          >
            Contato
          </a>
          {/* Botão de Tema apenas desktop */}
          <button
            onClick={toggleTheme}
            className="relative -translate-y-0.5 hidden md:flex p-2 rounded-full hover:bg-blue-800 dark:hover:bg-yellow-900 transition-colors items-center justify-center border-2 border-white dark:border-yellow-400 ml-2 self-center"
            aria-label={`Alternar para tema ${isDark ? "claro" : "escuro"}`}
          >
            <FontAwesomeIcon
              icon={isDark ? faSun : faMoon}
              className="w-5 h-5 text-white dark:text-yellow-400"
            />
          </button>
        </nav>
      </div>
    </motion.header>
  );
}