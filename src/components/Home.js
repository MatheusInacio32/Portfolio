import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <section 
      id="home" 
      className="bg-transparent text-white min-h-[120vh] flex flex-col justify-center items-start bg-cover bg-center pt-20"
      style={{
        backgroundImage: "url('/assets/image3.png')",
        backgroundSize: 'cover',  // Aplica o efeito de zoom na imagem
        backgroundPosition: 'center',  // Centraliza a imagem
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 pl-20">Hey, I'm Matheus 👋</h1>
        <h1 className="text-4xl md:text-5xl mb-4 pl-20 ml-10">I'm a Front-end Developer.</h1>
        <p className="text-xl">Programador Full Stack</p>
        <div className="flex space-x-4 mt-6 ml-20 pl-2">
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
