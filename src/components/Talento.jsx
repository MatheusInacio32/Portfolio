import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHtml5, faCss3Alt, faJs, faReact, 
  faPython, faJava, faPhp, faNodeJs 
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../contexts/ThemeContext";

const skillsData = [
  { icon: faHtml5, title: "HTML5", description: "Estruturação de conteúdo na web." },
  { icon: faCss3Alt, title: "CSS3", description: "Estilização visual para sites responsivos." },
  { icon: faJs, title: "JavaScript", description: "Interação dinâmica e lógica de programação." },
  { icon: faReact, title: "React", description: "Biblioteca para interfaces modernas e escaláveis." },
  { icon: faPython, title: "Python", description: "Linguagem versátil para back-end e data science." },
  { icon: faJava, title: "Java", description: "Desenvolvimento robusto e escalável para sistemas." },
  { icon: faNodeJs, title: "Next.js", description: "Framework React para aplicações otimizadas." },
  { icon: faPhp, title: "PHP", description: "Back-end dinâmico e integração com bancos de dados." },
];

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section 
      id="habilidades" 
      className={`pt-24 px-6 sm:px-8 pb-16 transition-colors duration-500 
        ${isDark ? "bg-transparent text-gray-100" : "bg-transparent text-gray-900"}`}
    >
      <h2 className="text-5xl font-semibold text-center mb-8">
        Habilidades
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center p-4 sm:p-5 rounded-lg shadow-lg transition-all
              ${isDark ? "bg-gray-800" : "bg-white"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon 
              icon={skill.icon} 
              size="2x" 
              className={`mb-3 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
            />
            <h3 className="text-lg font-medium">
              {skill.title}
            </h3>
            <p className="text-sm text-center mt-1">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
