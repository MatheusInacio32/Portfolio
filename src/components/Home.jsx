import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={`min-h-[110vh] flex flex-col justify-center items-center sm:items-start bg-center w-full px-4 bg-surface ${
        isDark ? "text-white" : "text-black"
      }`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${
          isDark ? "homedark.svg" : "home.svg"
        })`,
        backgroundSize: "contain",
        backgroundPosition: "100% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="text-center max-w-2xl mx-auto p-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1
          className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight ${
            isDark ? "text-gray-100" : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Olá, Bem-Vindo! <span className="inline-block animate-bounce">🚀</span>
        </motion.h1>
        <motion.h2 
          className={`text-xl md:text-3xl mb-6 leading-relaxed font-light`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          Explore meu{" "}
          <span className={`font-medium ${
            isDark ? "text-purple-400" : "text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text"
          }`}>
            Portfólio
          </span>{" "}
          e descubra meus{" "}
          <span className={`font-medium ${
            isDark ? "text-purple-400" : "text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text"
          }`}>
            Projetos
          </span>{" "}
          e{" "}
          <span className={`font-medium ${
            isDark ? "text-purple-400" : "text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text"
          }`}>
            Experiências
          </span>.
        </motion.h2>

        <motion.div 
          className="flex flex-row space-x-4 items-center justify-center mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#projetos" 
            className={`inline-block px-6 py-2 rounded-full text-white font-medium text-sm md:text-base text-center
              shadow-lg transform-gpu transition-all duration-300
              ${isDark 
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-indigo-500/40 hover:scale-105" 
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-indigo-600/30 hover:scale-105"
              }`}
          >
            Ver Projetos
          </a>
          <a 
            href="#contato" 
            className={`inline-block px-6 py-2 rounded-full font-medium text-sm md:text-base text-center btn
              shadow-md transform-gpu transition-all duration-300
              ${isDark 
                ? "border border-white/30 text-white hover:bg-white/10 hover:shadow-white/5 hover:scale-105" 
                : "bg-white text-indigo-600 hover:shadow-indigo-200/50 hover:scale-105"
              }`}
          >
            Contato
          </a>
        </motion.div>
        
        <motion.div 
          className="flex justify-center space-x-5 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="https://linkedin.com/in/matheusnunesinacio"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl hover:scale-110 transition-transform
              ${isDark 
                ? "text-blue-400 hover:text-blue-300" 
                : "text-blue-700 hover:text-blue-600"
              }`}
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/MatheusInacio32"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl hover:scale-110 transition-transform
              ${isDark 
                ? "text-white hover:text-gray-300" 
                : "text-gray-800 hover:text-gray-700"
              }`}
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </motion.div>
      </motion.div>


      <motion.div
        className="absolute bottom-16 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className={`flex justify-center items-center rounded-full p-3 cursor-pointer shadow-lg
            ${isDark 
              ? "bg-purple-900" 
              : "bg-indigo-600"}`}
          animate={{ y: ["0px", "15px", "0px"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            className="text-white text-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
