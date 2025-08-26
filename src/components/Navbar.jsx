import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDark, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  
  const navLinks = useMemo(() => {
    return ['Sobre', 'Habilidades', 'Experiência', 'Projetos', 'Contato'];
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const progress = Math.min(currentScrollY / 30, 1);
    setScrollProgress(progress);
    
    if (progress > 0.5 && !scrolled) {
      setScrolled(true);
    } else if (progress <= 0.5 && scrolled) {
      setScrolled(false);
    }
    
    lastScrollY.current = currentScrollY;
    ticking.current = false;
  }, [scrolled]);

  const handleSectionVisibility = useCallback(() => {
    const sections = navLinks.map(link => 
      document.getElementById(link.toLowerCase())
    ).filter(Boolean);
    
    if (sections.length) {
      const viewportHeight = window.innerHeight;
      let currentSection = '';
      
      const sectionInView = sections.find(section => {
        const rect = section.getBoundingClientRect();
        const threshold = 0.3;
        
        return rect.top <= viewportHeight * threshold && 
               rect.bottom >= viewportHeight * (1 - threshold);
      });
      
      if (sectionInView) {
        currentSection = sectionInView.id;
      } else if (window.scrollY < 100) {
        currentSection = 'home';
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    }
  }, [navLinks, activeSection]);
  
  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          handleScroll();
          handleSectionVisibility();
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    handleSectionVisibility();
    
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll, handleSectionVisibility]);
  
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);
  
  const logoSize = useMemo(() => {
    const isMobile = window.innerWidth < 640;
    
    const minSize = { 
      w: isMobile ? 3 : 4.5, 
      h: isMobile ? 3 : 4.5, 
      sm: { w: 2.5, h: 2.5 } 
    };
    
    const maxSize = { 
      w: isMobile ? 4.5 : 7, 
      h: isMobile ? 4.5 : 7, 
      sm: { w: 3, h: 3 }, 
      md: { w: 4, h: 4 } 
    };
    
    if (prefersReducedMotion) {
      return scrolled ? minSize : maxSize;
    }
    
    return {
      w: maxSize.w - (maxSize.w - minSize.w) * scrollProgress,
      h: maxSize.h - (maxSize.h - minSize.h) * scrollProgress,
      sm: {
        w: maxSize.sm.w - (maxSize.sm.w - minSize.sm.w) * scrollProgress,
        h: maxSize.sm.h - (maxSize.sm.h - minSize.sm.h) * scrollProgress
      },
      md: {
        w: (maxSize.md?.w || maxSize.w) - ((maxSize.md?.w || maxSize.w) - minSize.w) * scrollProgress,
        h: (maxSize.md?.h || maxSize.h) - ((maxSize.md?.h || maxSize.h) - minSize.h) * scrollProgress
      }
    };
  }, [scrollProgress, scrolled, prefersReducedMotion]);
  
  const titleClass = useMemo(() => {
    const baseSize = scrolled ? 'text-xs sm:text-sm md:text-lg' : 'text-sm sm:text-lg md:text-xl';
    const textColor = isDark 
      ? 'text-white text-shadow-sm shadow-black/50' 
      : scrolled ? 'text-gray-800' : 'text-gray-900 text-shadow-sm shadow-white/50';
    
    return `font-bold transition-all duration-300 ${baseSize} ${textColor}`;
  }, [scrolled, isDark]);
  
  const navbarClass = useMemo(() => {
    const baseClasses = "fixed w-full z-50 px-3 sm:px-6 py-2 sm:py-4 transition-all will-change-auto";
    
    if (prefersReducedMotion) {
      return `${baseClasses} ${
        scrolled 
          ? isDark 
            ? 'bg-gray-900/95 backdrop-blur-2xl shadow-lg border-b border-gray-800/30' 
            : 'bg-white/95 backdrop-blur-2xl shadow-md border-b border-gray-200/50'
          : isDark 
            ? 'bg-gray-900/90 backdrop-blur-lg' 
            : 'bg-white/90 backdrop-blur-lg'
      }`;
    }

    // Aumentar a opacidade base e a intensidade do blur para destacar o texto
    const bgOpacityDark = Math.min(0.90 + scrollProgress * 0.08, 0.98).toFixed(2);
    const bgOpacityLight = Math.min(0.90 + scrollProgress * 0.08, 0.98).toFixed(2);
    const shadowOpacity = Math.min(scrollProgress * 0.4, 0.35).toFixed(2);
    const borderOpacity = Math.min(scrollProgress * 0.5, 0.6).toFixed(2);
    // Intensidade do blur aumentada (base maior + multiplicador maior)
    const blurValue = Math.round(14 + scrollProgress * 18);
    
    return `${baseClasses} ${
      isDark 
        ? `bg-gray-900/${bgOpacityDark} backdrop-blur-[${blurValue}px] shadow-[0_4px_${Math.round(scrollProgress * 20)}px_rgba(0,0,0,${shadowOpacity})] ${
            scrollProgress > 0.5 ? `border-b border-gray-800/${borderOpacity}` : ''
          }`
        : `bg-white/${bgOpacityLight} backdrop-blur-[${blurValue}px] shadow-[0_4px_${Math.round(scrollProgress * 16)}px_rgba(0,0,0,${shadowOpacity})] ${
            scrollProgress > 0.5 ? `border-b border-gray-200/${borderOpacity}` : ''
          }`
    }`;
  }, [scrolled, isDark, scrollProgress, prefersReducedMotion]);

  return (
    <motion.nav
      className={navbarClass}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ 
          boxShadow: scrolled 
            ? isDark 
              ? '0 4px 12px rgba(0,0,0,0.22)' 
              : '0 4px 12px rgba(0,0,0,0.12)' 
            : 'none',
          borderBottomWidth: scrolled ? '1px' : '0px',
          // usar o mesmo valor calculado para o blur (mais intenso para destacar o texto)
          backdropFilter: `blur(${14 + scrollProgress * 18}px)`
        }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <div className="flex items-center">
          <motion.img
            src={`${process.env.PUBLIC_URL}/assets/header1.png`}
            alt="Matheus Nunes Inácio"
            className={`rounded-full transform-gpu ${
              isDark 
                ? 'border-2 border-gray-800 hover:border-indigo-600/50' 
                : 'border-2 border-gray-100 hover:border-indigo-500/30'
              }`}
            style={{ 
              width: `${logoSize.w}rem`,
              height: `${logoSize.h}rem`,
              marginRight: '0.375rem',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              ['--tw-scale-x']: 1,
              ['--tw-scale-y']: 1
            }}
            whileHover={{ 
              scale: 1.05, 
              transition: { type: "spring", stiffness: 300 } 
            }}
          />
          <div className="transition-all duration-300">
            <h1 className={titleClass}>
              Matheus Nunes Inácio
            </h1>
            <p 
              className={`text-xs hidden xs:block sm:text-sm transition-all duration-300 ${
                isDark 
                  ? 'text-gray-300' 
                  : scrolled ? 'text-gray-600' : 'text-gray-800'
              }`}
              style={{ 
                opacity: scrolled && window.innerWidth < 480 ? 0 : 1,
                maxHeight: scrolled && window.innerWidth < 480 ? '0px' : '20px',
                overflow: 'hidden',
                transform: `translateY(${scrolled && window.innerWidth < 480 ? '-10px' : '0px'})`,
                transformOrigin: 'top'
              }}
            >
              Desenvolvedor Full Stack
            </p>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-4 sm:space-x-6">
          {navLinks.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-200 transform-gpu ${
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
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  boxShadow: isActive 
                    ? isDark 
                      ? '0 2px 8px rgba(79, 70, 229, 0.15)' 
                      : '0 2px 8px rgba(79, 70, 229, 0.1)'
                    : 'none'
                }}
              >
                {item}
              </motion.a>
            );
          })}
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <motion.button
            onClick={toggleTheme}
            className="rounded-md transition-all duration-300 shadow-sm transform-gpu"
            style={{
              padding: '0.5rem 0.75rem',
              backgroundColor: isDark 
                ? scrolled 
                  ? 'rgba(31, 41, 55, 0.9)'
                  : 'rgba(31, 41, 55, 0.8)'
                : scrolled 
                  ? 'rgba(249, 250, 251, 0.95)'
                  : 'rgba(255, 255, 255, 0.9)',
              color: isDark ? '#FBBF24' : '#4338CA',
              border: `1px solid ${
                isDark 
                  ? 'rgba(55, 65, 81, 0.7)'
                  : 'rgba(229, 231, 235, 0.7)'
              }`,
              boxShadow: scrolled 
                ? '0 1px 3px rgba(0,0,0,0.1)'
                : '0 2px 4px rgba(0,0,0,0.1)'
            }}
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: isDark ? 'rgba(31, 41, 55, 1)' : 'rgba(249, 250, 251, 1)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-xs sm:text-sm" />
          </motion.button>
          
          <motion.button 
            className="md:hidden rounded-md transition-all duration-300 transform-gpu"
            style={{
              padding: '0.5rem 0.75rem',
              backgroundColor: isDark 
                ? scrolled 
                  ? 'rgba(31, 41, 55, 0.9)'
                  : 'rgba(31, 41, 55, 0.8)'
                : scrolled 
                  ? 'rgba(249, 250, 251, 0.95)'
                  : 'rgba(255, 255, 255, 0.9)',
              border: `1px solid ${
                isDark 
                  ? 'rgba(55, 65, 81, 0.7)'
                  : 'rgba(229, 231, 235, 0.7)'
              }`,
              boxShadow: scrolled 
                ? '0 1px 3px rgba(0,0,0,0.1)'
                : '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: isDark ? 'rgba(31, 41, 55, 1)' : 'rgba(249, 250, 251, 1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon 
              icon={isOpen ? faXmark : faBars} 
              className={`text-xs sm:text-sm ${isDark 
                ? 'text-gray-200' 
                : scrolled ? 'text-gray-700' : 'text-gray-900'}`} 
            />
          </motion.button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={`md:hidden absolute top-full left-0 w-full py-4 px-4 sm:px-6 ${
              isDark 
                ? 'bg-gray-900/95 border-b border-gray-800/30' 
                : 'bg-white/95 border-b border-gray-200/50'
            } backdrop-blur-md shadow-lg`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.05
            }}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((item, index) => {
                const isActive = activeSection === item.toLowerCase();
                
                return (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 transform-gpu ${
                      isActive
                        ? isDark 
                          ? 'text-indigo-400 bg-indigo-900/30 border border-indigo-800/30' 
                          : 'text-indigo-700 bg-indigo-50 border border-indigo-200/50'
                        : isDark 
                          ? 'text-gray-300 hover:text-indigo-400 hover:bg-indigo-900/20' 
                          : 'text-gray-700 hover:text-indigo-700 hover:bg-indigo-50/80'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.2,
                      delay: index * 0.05
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
