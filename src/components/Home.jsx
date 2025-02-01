import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section
        id="home"
        className="min-h-[110vh] flex flex-col justify-center items-center sm:items-start bg-center w-full px-4 text-black"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/home.svg)`,
          backgroundSize: 'contain', 
          backgroundPosition:'100% center', 
          backgroundRepeat: 'no-repeat',  
        }}
      >
      <motion.div
        className="text-center sm:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
      
        <h1 className={`text-4xl md:text-6xl font-bold mb-4 text-purple-200 SombraB sm:text-black sm:text-shadow-none`}>
          Olá, Bem-Vindo!🚀
        </h1>
        <h2 className="text-3xl md:text-5xl mb-6 leading-relaxed">
          Explore meu   <span className="text-white SombraB font-semibold      ">Portfólio📚</span>  e
          descubra meus <span className="text-violet-100 SombraB font-semibold ">Projetos</span> e{" "}
          <span className="text-violet-100 SombraB font-semibold ">Experiências</span>.
        </h2>

      
        <div className="flex justify-center sm:justify-start sm:ml-3 space-x-4 mt-6">
          <a
            href="https://linkedin.com/in/matheusnunesinacio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 sm:text-blue-700 text-4xl hover:scale-110 transition-transform"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/MatheusInacio32"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-4xl hover:scale-110 transition-transform"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </motion.div>

    
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="flex justify-center items-center bg-purple-900 rounded-full p-2"
          animate={{
            y: ["0px", "20px", "0px"], 
          }}
          transition={{
            duration: 1,
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
          }}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-white text-3xl cursor-pointer"
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
