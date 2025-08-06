import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const experienceData = [
  {
    role: "💜 Lode - We Love Code 💜",
    location: "Maringá, Paraná, Brasil · Presencial",
    img: `${process.env.PUBLIC_URL}/assets/Lode.png`,
    positions: [
      {
        title: "Analista de Suporte",
        contractType: "Tempo integral",
        date: "mar de 2025 – o momento · 1 mês",
        bullets: [
          "**Encaminhamento de chamados**: Registro e classificação dos atendimentos realizados via telefone, direcionando-os ao setor responsável para uma verificação detalhada.",
          "**Configuração de exames**: Realização de ajustes e configurações necessárias para assegurar a precisão dos exames.",
          "**Apoio no envio de lotes**: Assistência aos clientes durante o envio de lotes para a equipe de Apoio, otimizando o fluxo de informações.",
          "**Resolução de problemas de interface**: Solução de questões relacionadas à interface dos equipamentos, proporcionando uma experiência de uso eficiente.",
          "**Calibração de impressoras**: Ajuste e calibração das impressoras de etiquetas conforme as necessidades específicas de cada cliente.",
        ],
      },
      {
        title: "Estagiário de Implantação e Suporte em TI",
        contractType: "Estágio",
        date: "jan de 2025 – mar de 2025 · 3 meses",
        bullets: [
          "Implantação de Sistemas e Suporte ao Cliente",
          "Banco de dados · Servidor Linux · Amazon Web Services · Java SE · PostgreSQL",
          "Servidor Apache · Apache Tomcat",
          "Modelo e Desenvolvimento de Exames",
        ],
      },
    ],
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
    role: "Desenvolvedor React Native",
    company: "Dou Um Help!",
    duration: "2023 - 2024",
    description: `Design de interfaces para aplicativo móvel usando Figma,
    Condução de entrevistas com usuários para identificar dores e necessidades reais,
    Design de interfaces responsivas com foco em usabilidade e acessibilidade,
    Implementação de testes de usabilidade e iterações baseadas em feedback dos usuários.`,
    img: `${process.env.PUBLIC_URL}/assets/koxittas.png`,
  },
];

export default function Exp() {
  const { isDark } = useTheme();
  const renderWithBold = (text) => {
    return {
      __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
    };
  };
  return (
    <section
      id="experience"
      className={`p-8 min-h-screen transition-colors duration-500 
        ${isDark ? "bg-transparent text-gray-100" : "bg-transparent text-gray-900"}`}
    >
      <h2 className="text-4xl font-semibold mb-8 text-center">
        Experiência Profissional
      </h2>
      {experienceData.map((exp, index) => {
        const isLode = exp.positions && exp.positions.length > 0;
        if (isLode) {
          return (
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
                  alt={exp.role}
                  className="w-20 h-20 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  {exp.location && (
                    <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {exp.location}
                    </p>
                  )}
                </div>
              </div>
              <div className="relative mt-6 ml-6 border-l border-gray-300 dark:border-gray-600">
                {exp.positions.map((pos, idx) => (
                  <div key={idx} className="mb-8 ml-4 relative">
                    <span
                      className={`w-3 h-3 absolute -left-5 rounded-full 
                        ${isDark ? "bg-gray-300" : "bg-gray-700"}
                        top-1.5`}
                    />
                    <h4 className="text-lg font-semibold">
                      {pos.title} <span className="font-normal text-sm">({pos.contractType})</span>
                    </h4>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} mb-2`}>
                      {pos.date}
                    </p>
                    <ul className="list-disc ml-6 text-sm space-y-1">
                      {pos.bullets.map((bullet, bulletIdx) => (
                        <li
                          key={bulletIdx}
                          className="leading-relaxed"
                          dangerouslySetInnerHTML={renderWithBold(bullet)}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        }
        return (
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
                alt={exp.company || exp.role}
                className="w-20 h-20 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold">
                  {exp.company ? `${exp.role} | ${exp.company}` : exp.role}
                </h3>
                <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {exp.duration}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm whitespace-pre-line">
              {exp.description}
            </p>
          </motion.div>
        );
      })}
    </section>
  );
}
