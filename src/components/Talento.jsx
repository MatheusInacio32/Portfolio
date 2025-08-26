import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHtml5, faCss3Alt, faJs, faReact, 
  faPython, faJava, faNodeJs, faFigma 
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
  { icon: faFigma, title: "Figma", description: "Design de interfaces e prototipagem colaborativa." },
];

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section 
      id="habilidades" 
      className={`pt-24 px-6 sm:px-8 pb-16 transition-colors duration-300 relative bg-surface
        ${isDark ? "text-gray-100" : "text-gray-800"}`}
    >
      {/* Background decorativo otimizado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-32 left-16 w-24 h-24 rounded-full blur-3xl transform-gpu
          ${isDark ? "bg-indigo-400 opacity-5" : "bg-indigo-600 opacity-8"}`}></div>
        <div className={`absolute bottom-32 right-16 w-20 h-20 rounded-full blur-2xl transform-gpu
          ${isDark ? "bg-purple-400 opacity-5" : "bg-purple-600 opacity-8"}`}></div>
      </div>

      <div className="relative z-10">
        <h2 className={`text-5xl font-bold text-center mb-4 bg-gradient-to-r 
          ${isDark ? "from-indigo-400 to-purple-400" : "from-indigo-700 to-purple-700"} 
          bg-clip-text text-transparent`}>
          Habilidades
        </h2>
        <p className={`text-center mb-12 text-lg
          ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          Tecnologias que domino e utilizo em meus projetos
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className={`group relative flex flex-col items-center p-4 sm:p-6 rounded-2xl shadow-lg 
                  transition-all duration-200 border backdrop-blur-sm overflow-hidden highlight-surface
                  ${isDark 
                    ? "bg-gray-900/20 border-gray-700/30 hover:border-indigo-400/50 hover:shadow-indigo-400/20 hover:bg-gray-900/30" 
                    : "bg-white/70 border-gray-300 hover:border-indigo-500/70 hover:shadow-indigo-500/30 hover:bg-white/90"} 
                  cursor-pointer transform-gpu`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glow effect melhorado */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                transition-opacity duration-200 blur-xl -z-10
                ${isDark ? "bg-gradient-to-br from-indigo-500/15 to-purple-500/15" 
                         : "bg-gradient-to-br from-indigo-500/20 to-purple-500/20"}`}></div>
              
              <div className="relative flex flex-col items-center">
                <div className={`p-3 rounded-2xl mb-4 transition-all duration-200
                  ${isDark 
                    ? "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:from-indigo-500/30 group-hover:to-purple-500/30" 
                    : "bg-gradient-to-br from-indigo-200/80 to-purple-200/80 group-hover:from-indigo-300/90 group-hover:to-purple-300/90"}`}>
                  <FontAwesomeIcon 
                    icon={skill.icon} 
                    size="2x" 
                    className={`transition-colors duration-200
                      ${isDark ? "text-indigo-400 group-hover:text-indigo-300" : "text-indigo-700 group-hover:text-indigo-600"}`}
                  />
                </div>
                
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-200
                  ${isDark ? "text-gray-100 group-hover:text-white" : "text-gray-800 group-hover:text-gray-900"}`}>
                  {skill.title}
                </h3>
                
                <p className={`text-sm text-center leading-relaxed transition-colors duration-200
                  ${isDark ? "text-gray-300 group-hover:text-gray-200" : "text-gray-700 group-hover:text-gray-800"}`}>
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
