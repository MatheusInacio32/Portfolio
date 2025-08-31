import Navbar from '../../components/Navbar'; 
import Homebar from '../../components/Home';
import Sobremim from '../../components/Sobre'; 
import Jornada from '../../components/Jornada'; 
import Projetos from '../../components/Projetos'; 
import Contato from '../../components/Contato'; 
import Talento from '../../components/Talento'; 
import Formacao from '../../components/Formacao';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from '../../contexts/ThemeContext'; 

library.add(fas, fab);

const LandingPage = () => {
  const { isDark } = useTheme();

  return (
    <div className={`w-full min-h-screen overflow-hidden transition-colors duration-0 ${
      isDark ? 'bg-gradient-dark text-dark-text-primary' : 'bg-gradient-light text-light-text-primary'
    }`}>
      <Navbar />
      <Homebar />
      <Sobremim/>
      <Jornada />
      <Formacao />
      <Talento />
      <Projetos/>
      <Contato />
    </div>
  );
};

export default LandingPage;