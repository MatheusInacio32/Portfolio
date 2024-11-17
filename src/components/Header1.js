import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header1() {
  return (
    <motion.header 
      className="absolute top-0 left-0 right-0 bg-cyan-transparent text-white p-6 shadow-md flex justify-between items-center z-10"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >  
      <div className="flex items-center space-x-4 pl-12 ml-3">
        <img 
          src="/assets/header.png" 
          alt="Matheus Nunes Inácio"
          className="logo rounded-full" 
        />
        <div>
          <h1 className="text-3xl font-bold">Matheus Nunes Inácio</h1>
          <p className="text-sm text-teal-400">Front-end Developer</p>
        </div>
      </div>
      
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-teal-400">Início</a></li>
          <li><a href="#sobre" className="hover:text-teal-400">Sobre Mim</a></li>
          <li><a href="#habilidades" className="hover:text-teal-400">Habilidades</a></li>
          <li><a href="#experience" className="hover:text-teal-400">Experiência</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contato</a></li>
        </ul>
      </nav>
    </motion.header>
  );
}
