
import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function MouseBlur() {
  const { isDark } = useTheme();
  const spotlightRef = useRef(null);

  useEffect(() => {
    const isDesktop = () => window.innerWidth >= 768;
    const spotlight = spotlightRef.current;
    
    if (!spotlight) return;

    const handleMouseMove = (e) => {
      if (isDesktop()) {
        spotlight.style.background = `radial-gradient(circle 120px at ${e.clientX}px ${e.clientY}px,${isDark ? 'rgba(99,102,241,0.15)' : 'rgba(37,99,235,0.12)'},transparent 80%)`;
      }
    };

    const handleResize = () => {
      spotlight.style.display = isDesktop() ? 'block' : 'none';
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <div
      ref={spotlightRef}
      className="spotlight"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'none',
      }}
    />
  );
}
