import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faPython, faJava, faPhoenixFramework } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons/faPhp";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";

const skillsData = [
  { icon: faHtml5, title: "HTML5", description: "Linguagem de marcação para estruturação de conteúdo." },
  { icon: faCss3Alt, title: "CSS3", description: "Estilização visual para sites responsivos." },
  { icon: faJs, title: "JavaScript", description: "Linguagem para interação dinâmica com o usuário." },
  { icon: faReact, title: "React", description: "Biblioteca JavaScript para criar interfaces interativas." },
  { icon: faPython, title: "Python", description: "Linguagem versátil para desenvolvimento de software." },
  { icon: faJava, title: "Java", description: "Linguagem robusta para desenvolvimento backend." },
  { icon: faNodeJs, title: "Next.js", description: "Framework React para aplicações universais e otimizadas." },
  { icon: faPhp, title: "PHP", description: "Linguagem popular para desenvolvimento de back-end dinâmico." },
  { icon: faPhoenixFramework, title: "Playwright", description: "Framework para testes automatizados de aplicações web." },
];

export default function Habilidades() {
  return (
    <div className="bg-transparent text-white pt-24 px-16 pb-16">
      <h2 className="text-5xl font-semibold text-center mb-8">Habilidades</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }} // Inicia com opacidade 0 e deslocado para baixo
            whileInView={{ opacity: 1, y: 0 }} // Torna visível e reposiciona quando entra em vista
            viewport={{ once: false }} // Repete a animação ao rolar para dentro e fora da vista
            transition={{ duration: 0.6, delay: index * 0.1 }} // Atraso em sequência para cada item
          >
            <FontAwesomeIcon icon={skill.icon} size="3x" className="text-blue-400 mb-4" />
            <h3 className="text-xl font-medium">{skill.title}</h3>
            <p className="text-center mt-2">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
