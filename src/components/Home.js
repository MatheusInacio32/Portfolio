import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <section id="home" className="bg-transparent text-white min-h-screen flex flex-col justify-center items-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Matheus Nunes Inácio</h1>
        <p className="text-xl">Programador Full Stack</p>
        <div className="flex space-x-4 mt-6">
          <a href="https://linkedin.com/in/matheusnunesinacio" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-2xl hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/MatheusInacio32" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-white text-2xl hover:scale-110 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
