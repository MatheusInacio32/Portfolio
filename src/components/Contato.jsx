import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Contato = () => {
  const linkStyles = "text-green-300 sm:text-blue-800 sm:text-shadow-none SombraL hover:underline";
  const socialIconStyles = "text-teal-400 hover:text-teal-500 transition-colors duration-200 w-8 h-8";
  const fadeIn = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.5 } };

  return (
    <motion.section
      id="contact"
      className="px-4 sm:px-9 bg-transparent text-white sm:text-black w-full"
      {...fadeIn}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start pb-48 space-y-8 sm:space-y-0">
        <div className="text-center sm:text-left">
          <h2 className="text-4xl mb-4 font-semibold">Contato</h2>
          <p className="mb-4 text-lg">Entre em contato comigo através dos seguintes meios:</p>
        </div>

        <ul className="space-y-5 text-center sm:text-right">
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="text-black mr-1" /> 
            Email: <a href="mailto:mateusinacio32@gmail.com" className={linkStyles}>mateusinacio32@gmail.com</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} className="text-black mr-1" /> 
            LinkedIn: <a href="https://linkedin.com/in/matheusnunesinacio" target="_blank" rel="noopener noreferrer" className={linkStyles}>linkedin.com/in/matheusnunesinacio</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} className="text-black mr-1 " /> 
            GitHub: <a href="https://github.com/MatheusInacio32" target="_blank" rel="noopener noreferrer" className={linkStyles}>github.com/MatheusInacio32</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} className="text-green-900  " /> 
            Telefone: (44) 99960-9434
          </li>
        </ul>
      </div>

      <motion.footer
        className="bg-transparent text-white  p-4 text-center mt-auto"
        {...fadeIn}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-200 sm:text-black">© ReactApp - Todos os direitos reservados</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://linkedin.com/in/matheusnunesinacio" target="_blank" rel="noopener noreferrer" className={socialIconStyles} aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 text-blue-300 sm:text-blue-700" />
          </a>
          <a href="https://github.com/MatheusInacio32" target="_blank" rel="noopener noreferrer" className={socialIconStyles} aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub}   className="w-8 h-8 text-black" />
          </a>
        </div>
      </motion.footer>
    </motion.section>
  );
};

export default Contato;
