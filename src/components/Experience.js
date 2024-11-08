import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Operador Site JR",
    company: "Simpress",
    duration: "2024 – Presente",
    description: "Trabalho com manutenção de sites e monitoramento de indicadores, aplicando conhecimentos em programação e suporte técnico."
  },
  {
    role: "Full Stack Developer",
    company: "Freelancer na Agência Astro",
    duration: "2023 – Presente",
    description: "Atuação como desenvolvedor freelancer na Agência Astro, utilizando tecnologias como HTML5, CSS3, JavaScript, React, Python e MySQL."
  },
  // Mais experiências aqui
];

export default function Experience() {
  return (
    <section id="experience" className="p-8 bg-transparent text-800 min-h-screen">
      <h2 className="text-4xl text-white font-semibold mb-8 text-center">Experiência Profissional</h2>
      {experienceData.map((exp, index) => (
        <motion.div
          key={index}
          className="mb-8 p-6 bg-gray-200 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold">{exp.role} | {exp.company}</h3>
          <p className="text-gray-600">{exp.duration}</p>
          <p>{exp.description}</p>
        </motion.div>
      ))}
    </section>
  );
}
