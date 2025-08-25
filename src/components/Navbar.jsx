import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Estado para rastrear a seção atual (pode ser expandido em uma implementação futura)
  const [activeSection, setActiveSection] = useState('');
  const { isDark, toggleTheme } = useTheme();

  // Memoize navigation links para evitar re-renderização
  const navLinks = useMemo(() => {
    return ['Sobre', 'Habilidades', 'Experiência', 'Projetos', 'Contato'];
  }, []);

  // Otimização do evento de scroll com throttling
  const handleScroll = useCallback(() => {
    if (!scrolled && window.scrollY > 20) {
      setScrolled(true);
    } else if (scrolled && window.scrollY <= 20) {
      setScrolled(false);
    }
  }, [scrolled]);

  // Detectar qual seção está visível na tela
  const handleSectionVisibility = useCallback(() => {
    const sections = navLinks.map(link => 
      document.getElementById(link.toLowerCase())
    ).filter(Boolean);
    
    if (sections.length) {
      const viewportHeight = window.innerHeight;
      const sectionInView = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2;
      });
      
      if (sectionInView) {
        setActiveSection(sectionInView.id);
      } else if (window.scrollY < 100) {
        setActiveSection('home');
      }
    }
  }, [navLinks]);
  
  useEffect(() => {
    let scrollTimer;
    const throttledScroll = () => {
      if (!scrollTimer) {
        scrollTimer = setTimeout(() => {
          handleScroll();
          handleSectionVisibility();
          scrollTimer = null;
        }, 100); // Throttle de 100ms para melhor performance
      }
    };
    
    window.addEventListener("scroll", throttledScroll, { passive: true });
    // Checar seção visível ao carregar
    handleSectionVisibility();
    
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, [handleScroll, handleSectionVisibility]);
  
  // Memoize navbar class baseado no scroll e tema
  const navbarClass = useMemo(() => {
    return `fixed w-full z-50 px-6 py-4 transition-all duration-300 ${
      scrolled 
        ? isDark 
          ? 'bg-gray-900/85 backdrop-blur-md shadow-lg border-b border-gray-800/30' 
          : 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200/50'
        : isDark 
          ? 'bg-gray-900/20 backdrop-blur-sm' 
          : 'bg-white/30 backdrop-blur-sm'
    }`;
  }, [scrolled, isDark]);

  return (
    <motion.nav
      className={navbarClass}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      layoutId="navbar"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        {/* Logo e Informações */}
        <div className="flex items-center">
          <motion.img
            src={`${process.env.PUBLIC_URL}/assets/header1.png`}
            alt="Matheus Nunes Inácio"
            className={`rounded-full shadow-sm transition-all duration-300 mr-2 sm:mr-3 transform-gpu
              ${scrolled ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16'}
              ${isDark 
                ? 'border-2 border-gray-800 hover:border-indigo-600/50' 
                : 'border-2 border-gray-100 hover:border-indigo-500/30'
              }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="transition-all duration-300">
            <h1 className={`font-bold transition-colors duration-300 
              ${scrolled ? 'text-sm sm:text-lg md:text-xl' : 'text-lg sm:text-xl md:text-2xl'}
              ${isDark 
                ? 'text-white text-shadow-sm shadow-black/50' 
                : scrolled ? 'text-gray-800' : 'text-gray-900 text-shadow-sm shadow-white/50'
              }`}>
              Matheus Nunes Inácio
            </h1>
            <p className={`text-xs sm:text-sm transition-colors duration-300
              ${isDark 
                ? 'text-gray-300' 
                : scrolled ? 'text-gray-600' : 'text-gray-800'
              }
              ${scrolled ? 'hidden xs:block' : ''}`}>
              Desenvolvedor Full Stack
            </p>
          </div>
        </div>
        
        {/* Links - Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium px-3 py-2 rounded-lg transition-all duration-200 transform-gpu ${
                  isActive
                    ? isDark 
                      ? 'text-indigo-400 bg-indigo-900/30 border border-indigo-800/30' 
                      : 'text-indigo-700 bg-indigo-50 border border-indigo-200/50'
                    : scrolled
                      ? isDark 
                        ? 'text-gray-300 hover:text-indigo-400 hover:bg-indigo-900/20' 
                        : 'text-gray-700 hover:text-indigo-700 hover:bg-indigo-50/80'
                      : isDark 
                        ? 'text-gray-100 hover:text-indigo-400 hover:bg-indigo-900/30 text-shadow-sm shadow-black/50' 
                        : 'text-gray-900 hover:text-indigo-700 hover:bg-white/60 text-shadow-sm shadow-white/30'
                }`}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item}
              </motion.a>
            );
          })}
        </div>
        
        {/* Botão de tema e menu mobile */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <motion.button
            onClick={toggleTheme}
            className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 shadow-sm ${
              scrolled
                ? isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400 border border-gray-700' 
                  : 'bg-gray-50 hover:bg-gray-100 text-indigo-700 border border-gray-200'
                : isDark 
                  ? 'bg-gray-800/70 hover:bg-gray-700 text-yellow-400 border border-gray-700/70 shadow-md' 
                  : 'bg-white/70 hover:bg-white text-indigo-700 border border-gray-200/70 shadow-md'
            }`}
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            whileHover={{ scale: 1.1, rotate: isDark ? 15 : 0 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-sm sm:text-base" />
          </motion.button>
          
          {/* Menu mobile trigger */}
          <motion.button 
            className={`md:hidden p-1.5 sm:p-2 rounded-lg ${
              scrolled
                ? isDark 
                  ? 'bg-gray-800/80 hover:bg-gray-700 border border-gray-700' 
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                : isDark 
                  ? 'bg-gray-800/70 hover:bg-gray-700 border border-gray-700/70 shadow-md' 
                  : 'bg-white/70 hover:bg-white border border-gray-200/70 shadow-md'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon 
              icon={isOpen ? faXmark : faBars} 
              className={`text-sm sm:text-base ${isDark 
                ? 'text-gray-200' 
                : scrolled ? 'text-gray-700' : 'text-gray-900'}`} 
            />
          </motion.button>
        </div>
      </div>
      
      {/* Menu mobile com AnimatePresence para transições suaves */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={`md:hidden absolute top-full left-0 w-full py-4 px-6 ${
              isDark 
                ? 'bg-gray-900/95 border-b border-gray-800/30' 
                : 'bg-white/95 border-b border-gray-200/50'
            } backdrop-blur-md shadow-lg`}
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-3 px-4 rounded-lg transition-colors duration-200 transform-gpu ${
                    isDark 
                      ? 'text-gray-300 hover:text-indigo-400 hover:bg-indigo-900/20' 
                      : 'text-gray-700 hover:text-indigo-700 hover:bg-indigo-50/80'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ 
                    delay: index * 0.05,
                    duration: 0.2
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
