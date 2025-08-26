import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0); // Para transições mais suaves
  const { isDark, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  
  // Memoize navigation links para evitar re-renderização
  const navLinks = useMemo(() => {
    return ['Sobre', 'Habilidades', 'Experiência', 'Projetos', 'Contato'];
  }, []);

  // Otimização do evento de scroll com RAF para melhor performance
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Calcular progresso de scroll para transições mais suaves (0-1)
    const progress = Math.min(currentScrollY / 30, 1);
    setScrollProgress(progress);
    
    // Atualizar estado scrolled baseado no progresso
    if (progress > 0.5 && !scrolled) {
      setScrolled(true);
    } else if (progress <= 0.5 && scrolled) {
      setScrolled(false);
    }
    
    lastScrollY.current = currentScrollY;
    ticking.current = false;
  }, [scrolled]);

  // Detectar qual seção está visível na tela com otimização
  const handleSectionVisibility = useCallback(() => {
    const sections = navLinks.map(link => 
      document.getElementById(link.toLowerCase())
    ).filter(Boolean);
    
    if (sections.length) {
      const viewportHeight = window.innerHeight;
      let currentSection = '';
      
      // Otimização: usar Array.find em vez de forEach para parar quando encontrar
      const sectionInView = sections.find(section => {
        const rect = section.getBoundingClientRect();
        const threshold = 0.3; // 30% da seção deve estar visível
        
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
  
  // Otimização com requestAnimationFrame para scroll mais fluido
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
    // Checar seção visível ao carregar
    handleSectionVisibility();
    
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll, handleSectionVisibility]);
  
  // Fechar menu ao clicar fora
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
  
  // Interpolação suave de valores para animações com tamanhos reduzidos
  const logoSize = useMemo(() => {
    // Tamanhos reduzidos para imagem menor e mais adequada para a navbar
    const minSize = { w: 4.5, h: 4.5, sm: { w: 1.75, h: 1.75 } };
    const maxSize = { w: 7, h: 7, sm: { w: 1.25, h: 1.25 }, md: { w: 1.5, h: 1.5 } };
    
    // Se prefere movimento reduzido, pular animações
    if (prefersReducedMotion) {
      return scrolled ? minSize : maxSize;
    }
    
    // Interpolação suave entre tamanhos min e max
    return {
      w: maxSize.w - (maxSize.w - minSize.w) * scrollProgress,
      h: maxSize.h - (maxSize.h - minSize.h) * scrollProgress,
      sm: {
        w: maxSize.sm.w - (maxSize.sm.w - minSize.sm.w) * scrollProgress,
        h: maxSize.sm.h - (maxSize.sm.h - minSize.sm.h) * scrollProgress
      },
      md: {
        w: maxSize.md.w - (maxSize.md.w - minSize.w) * scrollProgress,
        h: maxSize.md.h - (maxSize.md.h - minSize.h) * scrollProgress
      }
    };
  }, [scrollProgress, scrolled, prefersReducedMotion]);
  
  // Classe de texto para títulos
  const titleClass = useMemo(() => {
    const baseSize = scrolled ? 'text-sm sm:text-lg md:text-xl' : 'text-lg sm:text-xl md:text-2xl';
    const textColor = isDark 
      ? 'text-white text-shadow-sm shadow-black/50' 
      : scrolled ? 'text-gray-800' : 'text-gray-900 text-shadow-sm shadow-white/50';
    
    return `font-bold transition-all duration-300 ${baseSize} ${textColor}`;
  }, [scrolled, isDark]);
  
  // Classe de fundo da navbar com transição baseada em progresso
  const navbarClass = useMemo(() => {
    const baseClasses = "fixed w-full z-50 px-4 sm:px-6 py-3 sm:py-4 transition-all will-change-auto";
    
    if (prefersReducedMotion) {
      // Versão simplificada para preferências de movimento reduzido
      return `${baseClasses} ${
        scrolled 
          ? isDark 
            ? 'bg-gray-900/85 backdrop-blur-md shadow-lg border-b border-gray-800/30' 
            : 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200/50'
          : isDark 
            ? 'bg-gray-900/20 backdrop-blur-sm' 
            : 'bg-white/30 backdrop-blur-sm'
      }`;
    }
    
    // Versão com transição suave baseada em progresso
    const bgOpacityDark = Math.min(0.2 + scrollProgress * 0.65, 0.85).toFixed(2);
    const bgOpacityLight = Math.min(0.3 + scrollProgress * 0.6, 0.9).toFixed(2);
    const shadowOpacity = Math.min(scrollProgress * 0.4, 0.3).toFixed(2);
    const borderOpacity = Math.min(scrollProgress * 0.5, 0.5).toFixed(2);
    const blurValue = Math.round(4 + scrollProgress * 8);
    
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
            ? '0 4px 12px rgba(0,0,0,0.2)' 
            : '0 4px 12px rgba(0,0,0,0.1)' 
          : 'none',
        borderBottomWidth: scrolled ? '1px' : '0px',
        backdropFilter: `blur(${4 + scrollProgress * 8}px)`
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        {/* Logo e Informações */}
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
              marginRight: '0.5rem',
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
              className={`text-xs sm:text-sm transition-all duration-300 ${
                isDark 
                  ? 'text-gray-300' 
                  : scrolled ? 'text-gray-600' : 'text-gray-800'
              }`}
              style={{ 
                opacity: scrolled && window.innerWidth < 400 ? 0 : 1,
                maxHeight: scrolled && window.innerWidth < 400 ? '0px' : '20px',
                overflow: 'hidden',
                transform: `translateY(${scrolled && window.innerWidth < 400 ? '-10px' : '0px'})`,
                transformOrigin: 'top'
              }}
            >
              Desenvolvedor Full Stack
            </p>
          </div>
        </div>
        
        {/* Links - Desktop */}
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
        
        {/* Botão de tema e menu mobile */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <motion.button
            onClick={toggleTheme}
            className="rounded-full transition-all duration-300 shadow-sm transform-gpu"
            style={{
              padding: scrolled ? '0.375rem' : '0.5rem',
              backgroundColor: isDark 
                ? scrolled 
                  ? 'rgba(31, 41, 55, 0.8)'
                  : 'rgba(31, 41, 55, 0.7)'
                : scrolled 
                  ? 'rgba(249, 250, 251, 0.9)'
                  : 'rgba(255, 255, 255, 0.7)',
              color: isDark ? '#FBBF24' : '#4338CA',
              border: `1px solid ${
                isDark 
                  ? 'rgba(55, 65, 81, 0.7)'
                  : 'rgba(229, 231, 235, 0.7)'
              }`,
              boxShadow: scrolled 
                ? '0 1px 2px rgba(0,0,0,0.05)'
                : '0 2px 4px rgba(0,0,0,0.1)'
            }}
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            whileHover={{ scale: 1.1, rotate: isDark ? 15 : 0 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-sm sm:text-base" />
          </motion.button>
          
          {/* Menu mobile trigger */}
          <motion.button 
            className="md:hidden rounded-lg transition-all duration-300 transform-gpu"
            style={{
              padding: '0.375rem',
              backgroundColor: isDark 
                ? scrolled 
                  ? 'rgba(31, 41, 55, 0.8)'
                  : 'rgba(31, 41, 55, 0.7)'
                : scrolled 
                  ? 'rgba(249, 250, 251, 0.9)'
                  : 'rgba(255, 255, 255, 0.7)',
              border: `1px solid ${
                isDark 
                  ? 'rgba(55, 65, 81, 0.7)'
                  : 'rgba(229, 231, 235, 0.7)'
              }`,
              boxShadow: scrolled 
                ? '0 1px 2px rgba(0,0,0,0.05)'
                : '0 2px 4px rgba(0,0,0,0.1)'
            }}
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
                    className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 transform-gpu ${
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
