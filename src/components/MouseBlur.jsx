import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function MouseBlur() {
  const { isDark } = useTheme();
  const spotlightRef = useRef(null);
  const [isDesktopView, setIsDesktopView] = useState(false);

  useEffect(() => {
    const isDesktop = () => window.innerWidth >= 768;
    const spotlight = spotlightRef.current;
    
    if (!spotlight) return;

    // Função para posicionar o spotlight
    const handleMouseMove = (e) => {
      if (!isDesktopView) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      // Usa transform para melhor performance
      spotlight.style.background = `radial-gradient(
        circle ${isDark ? '120px' : '180px'} at ${x}px ${y}px,
        ${isDark 
          ? 'rgba(99,102,241,0.15)'  // Tema escuro - mantido como estava
          : 'rgba(79,70,229,0.25)'   // Tema claro - ainda mais vibrante e visível
        },
        transparent 85%
      )`;
    };

    // Controla a visibilidade baseada no tamanho da tela
    const handleResize = () => {
      const desktop = isDesktop();
      setIsDesktopView(desktop);
      
      // Transição suave de opacidade
      if (desktop) {
        spotlight.style.opacity = '1';
        spotlight.style.display = 'block';
      } else {
        spotlight.style.opacity = '0';
        setTimeout(() => {
          if (!isDesktop()) spotlight.style.display = 'none';
        }, 200);
      }
    };

    // Inicializa o efeito
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize();

    // Limpeza ao desmontar
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark, isDesktopView]);

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="spotlight transform-gpu pointer-events-none fixed inset-0 w-screen h-screen z-0 transition-opacity duration-200"
      style={{
        display: 'none',
        willChange: 'background, transform',  // Otimização para o navegador
        opacity: 0,
      }}
    />
  );
}
