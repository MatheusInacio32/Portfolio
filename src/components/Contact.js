import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="px-4 sm:px-9 bg-transparent text-white w-full"
      initial={{ opacity: 0 }} // Começa com opacidade 0 (invisível)
      whileInView={{ opacity: 1 }} // Torna o componente visível gradualmente
      transition={{ duration: 0.5 }} // Duração da transição (em segundos)
    >
      {/* Contêiner principal ajustado para centralização em dispositivos móveis */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start pb-20 space-y-8 sm:space-y-0">
        {/* Texto e introdução */}
        <div className="text-center sm:text-left">
          <h2 className="text-4xl mb-4 font-semibold">Contato</h2>
          <p className="mb-4 text-lg">Entre em contato comigo através dos seguintes meios:</p>
        </div>

        {/* Lista de contatos */}
        <ul className="space-y-5 text-center sm:text-right">
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" /> 
            Email: <a href="mailto:mateusinacio32@gmail.com" className="text-blue-500 hover:underline">mateusinacio32@gmail.com</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-500" /> 
            LinkedIn: <a href="https://linkedin.com/in/matheusnunesinacio" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/matheusnunesinacio</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} className="text-blue-500" /> 
            GitHub: <a href="https://github.com/MatheusInacio32" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/MatheusInacio32</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} className="text-green-500" /> 
            Telefone: (44) 99960-9434
          </li>
        </ul>
      </div>

      {/* Footer ajustado para centralização */}
      <motion.footer
        className="bg-transparent text-white p-4 text-center mt-auto"
        initial={{ opacity: 0 }} // Começa com opacidade 0 (invisível)
        whileInView={{ opacity: 1 }} // Torna o footer visível
        transition={{ duration: 0.6, delay: 0.5 }} // Duração e delay para a transição
        viewport={{ once: true }} // A animação só roda uma vez quando o footer entra em vista
      >
        <p>© 2024 Matheus Nunes Inácio - Todos os direitos reservados</p>
        
        {/* Ícones sociais */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://linkedin.com/in/matheusnunesinacio" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-500 transition-colors duration-200">
            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
          </a>
          <a href="https://github.com/MatheusInacio32" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-500 transition-colors duration-200">
            <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
          </a>
        </div>
      </motion.footer>
    </motion.section>
  );
};

export default Contact;
