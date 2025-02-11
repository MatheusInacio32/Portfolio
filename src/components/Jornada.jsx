import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const experienceData = [
  {
    role: "Estagiário de Implantação e Suporte em TI",
    company: "💜Lode - We Love Code💜",
    duration: "2025 – Presente",
    description: `Implantação de Sistemas e Suporte ao Cliente 
                · Banco de dados · Servidor Linux · Amazon Web Services · Java SE · Postgree SQL  
                · Implantação de Sistemas · Suporte · Servidor Apache · Apache Tomcat · Modelo e Desenvolvimento de Exames`,
    img: `${process.env.PUBLIC_URL}/assets/Lode.png`,
  },
  {
    role: "Desenvolvedor Web",
    company: "Agência Astro",
    duration: "Freelancer | 2023 – Presente",
    description: `Desenvolvimento de sites e sistemas para empreendedores, 
                  com foco em melhorar a presença digital e resultados de negócios. 
                  Responsável pelo front-end e back-end, utilizando tecnologias como 
                  HTML5, CSS3, JavaScript (ES6), React, Bootstrap, MySQL. 
                  Otimização contínua de performance e experiência do usuário.`,
    img: `${process.env.PUBLIC_URL}/assets/AstroLogo.png`,
  },
  {
    role: "Apoio Administrativo",
    company: "Nunes & Clemente Consultorias e Atividades Agropecuárias LTDA",
    duration: "2019 – 2020",
    description: `Apoio administrativo em atividades do setor agropecuário, 
                  colaborando com a gestão de processos internos e controles financeiros.`,
    img: `${process.env.PUBLIC_URL}/assets/agro.png`,
  },
  {
    role: "Atendente",
    company: "J.M. Prandi – Salgados",
    duration: "2022 – 2024",
    description: `Gestão de pessoas e de produtos, garantindo a eficiência do atendimento 
                  ao cliente e o controle de estoque de produtos. 
                  Responsável pela organização da equipe e controle de produtos 
                  alimentícios para manter o fluxo de trabalho.`,
    img: `${process.env.PUBLIC_URL}/assets/koxittas.png`,
  },
];

export default function Exp() {
  const { isDark } = useTheme();

  return (
    <section 
      id="experience" 
      className={`p-8 min-h-screen transition-colors duration-500 
        ${isDark ? "bg-transparent text-gray-100" : "bg-transparent text-gray-900"}`}
    >
      <h2 className="text-4xl font-semibold mb-8 text-center">
        Experiência Profissional
      </h2>

      {experienceData.map((exp, index) => (
        <motion.div
          key={index}
          className={`mb-8 p-6 rounded-lg shadow-lg transition-all 
            ${isDark ? "bg-gray-800" : "bg-white"}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-center">
            <img
              src={exp.img}
              alt={exp.company}
              className="w-20 h-20 rounded-full mr-4 object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold">{exp.role} | {exp.company}</h3>
              <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {exp.duration}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm">{exp.description}</p>
        </motion.div>
      ))}
    </section>
  );
}
