import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSun, faMoon, faBars, faXmark, faHome,
  faUser, faRoad, faGraduationCap, faCode,
  faBriefcase, faEnvelope
} from '@fortawesome/free-solid-svg-icons';

// Constantes movidas para fora do componente (evita recriação)
const NAV_SECTIONS = [
  { id: 'home', label: 'Home', icon: faHome },
  { id: 'sobre', label: 'Sobre', icon: faUser },
  { id: 'jornada', label: 'Jornada', icon: faRoad },
  { id: 'formacao', label: 'Formação', icon: faGraduationCap },
  { id: 'habilidades', label: 'Habilidades', icon: faCode },
  { id: 'projetos', label: 'Projetos', icon: faBriefcase },
  { id: 'contato', label: 'Contato', icon: faEnvelope }
];

const MENU_VARIANTS = {
  closed: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.04,
      delayChildren: 0.05
    }
  }
};

const ITEM_VARIANTS = {
  closed: { opacity: 0, scale: 0.8, y: 10 },
  open: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
  }
};

const SPRING_CONFIG = { type: "spring", stiffness: 400, damping: 17 };

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handler de scroll otimizado
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      if (scrollY < 100) {
        setActiveSection('home');
        return;
      }
      
      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const element = document.getElementById(NAV_SECTIONS[i].id);
        if (element && element.getBoundingClientRect().top <= window.innerHeight / 3) {
          setActiveSection(NAV_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside handler
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && 
          navbarRef.current && !navbarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Body overflow control
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Memoized navbar classes
  const navbarClasses = useMemo(() => {
    const base = "fixed w-full top-0 z-[100] transition-all duration-300 backdrop-blur-lg";
    const bg = isDark 
      ? (isScrolled ? "bg-gray-900/95" : "bg-gray-900/60")
      : (isScrolled ? "wtransp" : "bg-white/60");
    const shadow = isScrolled ? "shadow-md" : "";
    return `${base} ${bg} ${shadow}`;
  }, [isDark, isScrolled]);

  // Memoized gradient line style
  const gradientLineStyle = useMemo(() => ({
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
    opacity: 0.85,
    boxShadow: isDark ? '0 1px 2px rgba(79, 70, 229, 0.3)' : '0 1px 3px rgba(99, 102, 241, 0.4)'
  }), [isDark]);

  // Callbacks memoizados
  const handleNavClick = useCallback((sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  // Classes reutilizáveis para botões circulares
  const circleButtonClass = useMemo(() => 
    `w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center backdrop-blur-sm transition-all ${
      isDark 
        ? 'bg-gray-800/80 shadow-md shadow-gray-900/20' 
        : 'bg-indigo-100/90 shadow-md shadow-indigo-300/20'
    }`, [isDark]);

  const iconClass = useMemo(() => 
    `text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-indigo-600'}`, [isDark]);

  return (
    <motion.nav 
      ref={navbarRef}
      className={navbarClasses}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div style={gradientLineStyle} />
      
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 0%; }
          100% { background-position: -200% 0%; }
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Foto - Esquerda (mobile e desktop) */}
          <motion.a 
            href="#home"
            className="flex items-center gap-3 shrink-0 md:flex-1"
            whileHover={{ scale: 1.02 }}
            transition={SPRING_CONFIG}
          >
            <motion.img 
              src={`${process.env.PUBLIC_URL}/assets/header1.png`}
              alt="Matheus Nunes Inácio"
              className={`h-14 w-14 md:h-14 md:w-14 rounded-full object-cover ring-2 ring-offset-2 ring-offset-transparent shadow-lg ${
                isDark ? 'ring-indigo-500/70' : 'ring-indigo-400/70'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            />
            {/* Nome e subtítulo - visível apenas no desktop */}
            <div className="hidden md:block">
              <h1 className={`font-medium text-base lg:text-lg whitespace-nowrap tracking-wide ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Matheus Nunes Inácio
              </h1>
              <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Analista de Suporte
              </p>
            </div>
          </motion.a>

          {/* Nome centralizado - visível apenas no mobile */}
          <div className="flex-1 flex flex-col items-center justify-center md:hidden">
            <h1 className={`font-medium text-sm whitespace-nowrap tracking-wide ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Matheus Nunes Inácio
            </h1>
            <p className={`text-[10px] ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Analista de Suporte
            </p>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            <div className={`rounded-full p-1.5 ${isDark ? 'bg-gray-800/60' : 'bg-gray-100/60'}`}>
              {NAV_SECTIONS.map((section) => (
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
                  transition={SPRING_CONFIG}
                >
                  <FontAwesomeIcon 
                    icon={section.icon} 
                    className={`mr-1.5 ${activeSection === section.id ? 'text-sm' : 'text-xs'}`} 
                  />
                  <span>{section.label}</span>
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Botões à direita */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Botão de tema */}
            <motion.button
              onClick={toggleTheme}
              className={`${circleButtonClass} md:w-12 md:h-12`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              <FontAwesomeIcon 
                icon={isDark ? faSun : faMoon} 
                className={`text-base sm:text-lg ${isDark ? 'text-yellow-300' : 'text-indigo-600'}`} 
              />
            </motion.button>

            {/* Botão menu mobile */}
            <motion.button
              onClick={toggleMenu}
              className={`${circleButtonClass} md:hidden`}
              whileTap={{ scale: 0.92 }}
              aria-expanded={isOpen}
              aria-label="Menu Principal"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className={iconClass} />
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            className={`md:hidden fixed top-20 inset-x-0 max-h-[85vh] overflow-y-auto shadow-2xl z-50 border-t ${
              isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
            }`}
            style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
            variants={MENU_VARIANTS}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div 
              className="px-4 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.2 }}
            >
              {/* Grid de ícones */}
              <div className="grid grid-cols-4 gap-4 sm:gap-5">
                {NAV_SECTIONS.map((section) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex flex-col items-center justify-center"
                    onClick={() => handleNavClick(section.id)}
                    variants={ITEM_VARIANTS}
                    whileTap={{ scale: 0.92 }}
                    style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                  >
                    <div className={`
                      w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center
                      transition-all duration-200 ease-out backdrop-blur-sm
                      ${activeSection === section.id
                        ? isDark 
                          ? 'bg-indigo-600 shadow-md shadow-indigo-500/30' 
                          : 'bg-indigo-500 shadow-md shadow-indigo-400/30'
                        : isDark
                          ? 'bg-gray-800/80 shadow-md shadow-gray-900/20' 
                          : 'bg-indigo-100/90 shadow-md shadow-indigo-300/20'
                      }
                    `}>
                      <FontAwesomeIcon 
                        icon={section.icon} 
                        className={`text-base sm:text-lg transition-colors duration-200 ${
                          activeSection === section.id
                            ? 'text-white'
                            : isDark ? 'text-gray-300' : 'text-indigo-600'
                        }`} 
                      />
                    </div>
                    <span className={`
                      mt-2 text-[10px] sm:text-xs font-medium text-center leading-tight
                      transition-colors duration-200
                      ${activeSection === section.id
                        ? isDark ? 'text-indigo-300' : 'text-indigo-600'
                        : isDark ? 'text-gray-400' : 'text-gray-600'
                      }
                    `}>
                      {section.label}
                    </span>
                  </motion.a>
                ))}
              </div>
              
              {/* Linha decorativa */}
              <div className={`mt-6 pt-4 border-t ${isDark ? 'border-gray-800/50' : 'border-gray-200/50'}`}>
                <p className={`text-center text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                  Navegue pelo portfólio
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
