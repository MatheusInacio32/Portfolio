
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // Importando o ícone de seta

export default function Home() {
  return (
    <section
      id="home"
      className="text-white min-h-[120vh] flex flex-col justify-center items-center sm:items-start bg-cover bg-center w-full px-4"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/image3.png)`,
      }}
    >
      {/* Container do conteúdo */}
      <motion.div
        className="text-center sm:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Títulos */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Olá, Bem-Vindo! 👋
        </h1>
        <h2 className="text-3xl md:text-5xl mb-6 leading-relaxed">
          Explore meu <span className="text-blue-400 font-semibold">Portfólio</span> e
          descubra meus <span className="text-blue-400 font-semibold">Projetos</span> e{" "}
          <span className="text-blue-400 font-semibold">Experiências</span>.
        </h2>

        {/* Ícones de redes sociais */}
        <div className="flex justify-center sm:justify-start space-x-4 mt-6">
          <a
            href="https://linkedin.com/in/matheusnunesinacio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-2xl hover:scale-110 transition-transform"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/MatheusInacio32"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:scale-110 transition-transform"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </motion.div>

      {/* Botão de seta animado */}
      <motion.div
        className="absolute bottom-10 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="flex justify-center items-center bg-blue-700 rounded-full p-2"
          animate={{
            y: ["0px", "20px", "0px"], // Animação de subir e descer
          }}
          transition={{
            duration: 1,
            repeat: Infinity, // Faz a animação repetir infinitamente
            repeatType: "loop", // Repetição no formato de loop
            ease: "easeInOut", // Suaviza a animação
          }}
        >
          
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-black text-3xl cursor-pointer"
            onClick={() => {
              document.getElementById("sobre").scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
