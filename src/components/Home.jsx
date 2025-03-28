import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={`min-h-[110vh] flex flex-col justify-center items-center sm:items-start bg-center w-full px-4 ${
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
        className="text-center sm:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1
          className={`text-4xl md:text-6xl font-bold mb-4 SombraB ${
            isDark ? "text-gray-100" : "text-white sm:text-black sm:text-shadow-none"
          }`}
        >
          Olá, Bem-Vindo!🚀
        </h1>
        <h2 className={`text-3xl md:text-5xl mb-6 leading-relaxed`}>
          Explore meu{" "}
          <span className={`SombraB font-semibold ${isDark ? "text-purple-500" : "text-white"}`}>
            Portfólio📚
          </span>{" "}
          e descubra meus{" "}
          <span className={`font-semibold ${isDark ? "text-purple-500" : "text-blue-700 sm:text-white sm:SombraB"}`}>
            Projetos
          </span>{" "}
          e{" "}
          <span className={`font-semibold ${isDark ? "text-purple-500" : "text-blue-700 sm:text-white sm:SombraB"}`}>
            Experiências
          </span>.
        </h2>

        <div className="flex justify-center sm:justify-start sm:ml-3 space-x-4 mt-6">
          <a
            href="https://linkedin.com/in/matheusnunesinacio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 text-4xl hover:scale-110 transition-transform"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/MatheusInacio32"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl hover:scale-110 transition-transform ${
              isDark ? "text-white" : "text-black"
            }`}
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
          animate={{ y: ["0px", "20px", "0px"] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-white text-3xl cursor-pointer"
            onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
