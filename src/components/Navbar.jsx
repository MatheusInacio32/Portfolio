import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSun, 
  faMoon, 
  faBars, 
  faXmark, 
  faHome,
  faUser,
  faRoad,
  faGraduationCap,
  faCode,
  faBriefcase,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Define as seções de navegação com seus ícones
  const navSections = [
    { id: 'home', label: 'Home', icon: faHome },
    { id: 'sobre', label: 'Sobre', icon: faUser },
    { id: 'jornada', label: 'Jornada', icon: faRoad },
    { id: 'formacao', label: 'Formação', icon: faGraduationCap },
    { id: 'habilidades', label: 'Habilidades', icon: faCode },
    { id: 'projetos', label: 'Projetos', icon: faBriefcase },
    { id: 'contato', label: 'Contato', icon: faEnvelope }
  ];

  // Monitora a posição de scroll e determina a seção ativa
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Determina seção ativa
      const sections = navSections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(item => item.element);
      
      if (sections.length) {
        // Está no topo da página - ativa a seção Home
        if (window.scrollY < 100) {
          setActiveSection('home');
          return;
        }
        
        // Verifica qual seção está visível
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const rect = section.element.getBoundingClientRect();
          
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Executa uma vez ao carregar para definir a seção inicial
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (e) => {
      if (isOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && 
          !navbarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Define classes dinâmicas baseadas no tema e scroll
  const getNavbarClasses = () => {
    const isScrolled = scrollPosition > 50;
    
    const baseClasses = "fixed w-full top-0 z-[100] transition-all duration-300";
    const themeBg = isDark 
      ? isScrolled ? "bg-gray-900/95" : "bg-gray-900/60"
      : isScrolled ? "wtransp" : "bg-white/60";
    
    const shadowBorder = isScrolled
      ? isDark 
        ? "shadow-md" 
        : "shadow-md"
      : "";
      
    const blurEffect = "backdrop-blur-lg";
    
    return `${baseClasses} ${themeBg} ${shadowBorder} ${blurEffect}`;
  };

  // Estilo inline para a linha de gradiente animada
  const gradientLineStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: isDark 
      ? 'linear-gradient(90deg, #4f46e5, #7c3aed, #8b5cf6, #6366f1, #4f46e5)'
      : 'linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa, #7c3aed, #6366f1)',
    backgroundSize: '200% 100%',
    transform: 'translateY(100%)',
    animation: 'gradientMove 3s linear infinite',
    opacity: '0.85',
    boxShadow: isDark
      ? '0 1px 2px rgba(79, 70, 229, 0.3)'
      : '0 1px 3px rgba(99, 102, 241, 0.4)'
  };
  
  return (
    <>
      <motion.nav 
        ref={navbarRef}
        className={getNavbarClasses()}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Linha de gradiente animada */}
        <div style={gradientLineStyle} />
        
        {/* Estilos da animação */}
        <style jsx>{`
          @keyframes gradientMove {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: -200% 0%;
            }
          }
        `}</style>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo e Nome */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#home" className="flex items-center space-x-3">
                <motion.img 
                  src={`${process.env.PUBLIC_URL}/assets/header1.png`}
                  alt="Matheus Nunes Inácio"
                  className={`h-14 w-14 rounded-full object-cover ring-2 ${
                    isDark ? 'ring-indigo-500/70' : 'ring-indigo-400/70'
                  } ring-offset-2 ring-offset-transparent shadow-lg`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                />
                <div>
                  <h1 className={`font-medium text-lg tracking-wide ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Matheus Nunes Inácio
                  </h1>
                  <p className={`text-xs hidden xs:block ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Desenvolvedor Full Stack
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Menu Desktop */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              <div className={`rounded-full p-1.5 ${
                isDark ? 'bg-gray-800/60' : 'bg-gray-100/60'
              }`}>
                {navSections.map((section) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`relative inline-flex items-center px-3 py-2 text-sm font-medium rounded-full transition-all ${
                      activeSection === section.id
                        ? isDark 
                          ? 'text-white bg-indigo-600 shadow-md shadow-indigo-500/30'
                          : 'text-indigo-800 bg-indigo-100 shadow-md shadow-indigo-300/30'
                        : isDark
                          ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                          : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveSection(section.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <FontAwesomeIcon 
                      icon={section.icon} 
                      className={`mr-1.5 ${section.id === activeSection ? 'text-sm' : 'text-xs'}`} 
                    />
                    <span>{section.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Botões à direita */}
            <div className="flex items-center">
              {/* Botão de tema */}
              <motion.button
                onClick={toggleTheme}
                className={`p-3 rounded-full mr-3 transition-all ${
                  isDark 
                    ? 'bg-gray-800/80 text-yellow-300 hover:bg-gray-700/90 shadow-md shadow-gray-900/20' 
                    : 'bg-indigo-100/90 text-indigo-600 hover:bg-indigo-200/90 shadow-md shadow-indigo-300/20'
                } backdrop-blur-sm`}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
              >
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} size="lg" />
              </motion.button>

              {/* Menu Mobile */}
              <div className="flex md:hidden">
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-3 rounded-full ${
                    isDark 
                      ? 'bg-gray-800/80 text-white hover:bg-gray-700/90 shadow-md shadow-gray-900/20' 
                      : 'bg-indigo-100/90 text-indigo-700 hover:bg-indigo-200/90 shadow-md shadow-indigo-300/20'
                  } backdrop-blur-sm`}
                  whileTap={{ scale: 0.95 }}
                  aria-expanded={isOpen}
                  aria-label="Menu Principal"
                >
                  <FontAwesomeIcon 
                    icon={isOpen ? faXmark : faBars} 
                    className="h-5 w-5" 
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              className={`md:hidden fixed top-20 inset-x-0 max-h-[80vh] overflow-y-auto ${
                isDark ? 'bg-gray-900/95' : 'bg-white/95'
              } backdrop-blur-lg shadow-lg z-50 border-t ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="px-3 pt-2 pb-3 space-y-2">
                {navSections.map((section, index) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block px-4 py-3 rounded-xl flex items-center ${
                      activeSection === section.id
                        ? isDark 
                          ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-600/30 shadow-sm shadow-indigo-500/10' 
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm shadow-indigo-300/10'
                        : isDark
                          ? 'text-gray-300 hover:bg-gray-800 border border-transparent' 
                          : 'text-gray-700 hover:bg-gray-100 border border-transparent'
                    } transition-all duration-200`}
                    onClick={() => {
                      setActiveSection(section.id);
                      setIsOpen(false);
                    }}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FontAwesomeIcon 
                      icon={section.icon} 
                      size="lg"
                      className={`mr-3 ${
                        activeSection === section.id
                          ? isDark ? 'text-indigo-300' : 'text-indigo-600'
                          : isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} 
                    />
                    <span className="font-medium">{section.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
