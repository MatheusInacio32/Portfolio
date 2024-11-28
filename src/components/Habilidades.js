import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faPython, faJava, faPhp, faNodeJs } from "@fortawesome/free-brands-svg-icons";

const skillsData = [
  { icon: faHtml5, title: "HTML5", description: "Linguagem de marcação para estruturação de conteúdo." },
  { icon: faCss3Alt, title: "CSS3", description: "Estilização visual para sites responsivos." },
  { icon: faJs, title: "JavaScript", description: "Linguagem para interação dinâmica com o usuário." },
  { icon: faReact, title: "React", description: "Biblioteca JavaScript para criar interfaces interativas." },
  { icon: faPython, title: "Python", description: "Linguagem versátil para desenvolvimento de software." },
  { icon: faJava, title: "Java", description: "Linguagem robusta para desenvolvimento backend." },
  { icon: faNodeJs, title: "Next.js", description: "Framework React para aplicações universais e otimizadas." },
  { icon: faPhp, title: "PHP", description: "Linguagem popular para desenvolvimento de back-end dinâmico." },
];

export default function Habilidades() {
  return (
    <div className="bg-transparent text-white pt-24 px-6 sm:px-8 pb-16">
      <h2 className="text-5xl font-semibold text-center mb-8">Habilidades</h2>
      <div 
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-3 sm:p-4 bg-gray-800 rounded-md sm:rounded-lg shadow-md sm:shadow-lg"
            initial={{ opacity: 0 }} // Inicia com opacidade 0 (invisível)
            whileInView={{ opacity: 1 }} // Torna visível quando entra em vista
            viewport={{ once: false }} // Permite a animação a cada entrada na viewport
            transition={{ duration: 1.5 }} // Transição de fade in suave
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon icon={skill.icon} size="2x" className="text-blue-400 mb-3" />
            <h3 className="text-base sm:text-xl font-medium">{skill.title}</h3>
            <p className="text-sm sm:text-base text-center mt-1">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
