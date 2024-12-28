import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Freelancer",
    company: "Agência Astro",
    duration: "Full Stack Developer | 2023 – Presente",
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
  return (
    <section id="experience" className="p-8 bg-transparent text-800 min-h-screen">
      <h2 className="text-4xl text-white font-semibold mb-8 text-center">Experiência Profissional</h2>
      {experienceData.map((exp, index) => (
        <motion.div
          key={index}
          className="mb-8 p-6 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <img
              src={exp.img}
              alt={exp.company}
              className="w-20 h-20 rounded-full mr-4 object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold">{exp.role} | {exp.company}</h3>
              <p className="text-gray-600">{exp.duration}</p>
            </div>
          </div>
          <p className="mt-4">{exp.description}</p>
        </motion.div>
      ))}
    </section>
  );
}
