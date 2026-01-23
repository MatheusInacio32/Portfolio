import { lazy, Suspense } from 'react';
import Navbar from '../../components/Navbar'; 
import Homebar from '../../components/Home';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from '../../contexts/ThemeContext'; 

// Lazy loading para componentes abaixo da dobra (below the fold)
const Sobremim = lazy(() => import('../../components/Sobre'));
const Jornada = lazy(() => import('../../components/Jornada'));
const Formacao = lazy(() => import('../../components/Formacao'));
const Talento = lazy(() => import('../../components/Talento'));
const Projetos = lazy(() => import('../../components/Projetos'));
const Contato = lazy(() => import('../../components/Contato'));

library.add(fas, fab);

// Componente de loading minimalista
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const LandingPage = () => {
  const { isDark } = useTheme();

  return (
    <div className={`w-full min-h-screen overflow-hidden transition-colors duration-0 ${
      isDark ? 'bg-gradient-dark text-dark-text-primary' : 'bg-gradient-light text-light-text-primary'
    }`}>
      {/* Componentes críticos - carregamento imediato */}
      <Navbar />
      <Homebar />
      
      {/* Componentes secundários - lazy loading */}
      <Suspense fallback={<SectionLoader />}>
        <Sobremim/>
        <Jornada />
        <Formacao />
        <Talento />
        <Projetos/>
        <Contato />
      </Suspense>
    </div>
  );
};

export default LandingPage;