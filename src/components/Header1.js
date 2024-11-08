import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header1() {
  return (
    <motion.header 
      className="bg-gray-800 text-white p-6 shadow-md flex justify-between items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold">Matheus Nunes Inácio</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-teal-400">Inicio</a></li>
          <li><a href="#sobre" className="hover:text-teal-400">Sobre Mim</a></li>
          <li><a href="#habilidades" className="hover:text-teal-400">Habilidades</a></li>
          <li><a href="#experience" className="hover:text-teal-400">Experiência</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contato</a></li>
        </ul>
      </nav>
    </motion.header>
  );
}
