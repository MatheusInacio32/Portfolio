import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const experienceData = [
  {
    role: "Analista de Suporte",
    company: "Lode - We Love Code",
    location: "Maringá, Paraná, Brasil · Presencial",
    period: "Mar 2025 – Presente",
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
    period: "2023 – Presente",
    description: `Desenvolvimento de sites e sistemas para empreendedores, 
com foco em melhorar a presença digital e resultados de negócios. 
Responsável pelo front-end e back-end, utilizando tecnologias como 
HTML5, CSS3, JavaScript (ES6), React, Bootstrap, MySQL. 
Otimização contínua de performance e experiência do usuário.`,
    img: `${process.env.PUBLIC_URL}/assets/AstroLogo.png`,
  },
  {
    role: "Desenvolvedor React Native",
    company: "Dou Um Help!",
    period: "2023 - 2024",
    description: `Design de interfaces para aplicativo móvel usando Figma,
Condução de entrevistas com usuários para identificar dores e necessidades reais,
Design de interfaces responsivas com foco em usabilidade e acessibilidade,
Implementação de testes de usabilidade e iterações baseadas em feedback dos usuários.`,
    img: `${process.env.PUBLIC_URL}/assets/koxittas.png`,
  },
  {
    role: "Apoio Administrativo",
    company: "Nunes & Clemente Consultorias",
    period: "2019 – 2020",
    description: `Apoio administrativo em atividades do setor agropecuário, 
colaborando com a gestão de processos internos e controles financeiros.`,
    img: `${process.env.PUBLIC_URL}/assets/agro.png`,
  },
];

export default function Jornada() {
  const { isDark } = useTheme();
  
  const renderWithBold = (text) => {
    return {
      __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
    };
  };
  
  return (
    <section 
      id="experiência" 
      className={`py-24 px-6 sm:px-8 transition-colors duration-300 relative
        ${isDark ? "text-gray-100" : "text-gray-800"}`}
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute bottom-32 left-16 w-24 h-24 rounded-full blur-3xl transform-gpu
          ${isDark ? "bg-indigo-400 opacity-5" : "bg-indigo-600 opacity-8"}`}></div>
        <div className={`absolute top-32 right-16 w-20 h-20 rounded-full blur-2xl transform-gpu
          ${isDark ? "bg-purple-400 opacity-5" : "bg-purple-600 opacity-8"}`}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-4 bg-gradient-to-r 
          ${isDark ? "from-indigo-400 to-purple-400" : "from-indigo-700 to-purple-700"} 
          bg-clip-text text-transparent`}>
          Minha Jornada
        </h2>
        
        <p className={`text-center mb-16 text-lg max-w-3xl mx-auto
          ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          Experiência profissional e trajetória na área de desenvolvimento
        </p>

        <div className="relative">
          {/* Linha vertical decorativa */}
          <div className={`absolute top-0 bottom-0 left-4 sm:left-6 md:left-1/2 w-px transform md:-translate-x-1/2 
            ${isDark ? "bg-gradient-to-b from-indigo-500/30 via-purple-500/30 to-indigo-500/30" : "bg-gradient-to-b from-indigo-500/40 via-purple-500/40 to-indigo-500/40"}`}>
          </div>

          {experienceData.map((exp, index) => {
            const isComplex = exp.positions && exp.positions.length > 0;
            
            return (
              <motion.div
                key={index}
                className="relative mb-16 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Indicador de período - layout mobile primeiro */}
                  <div className={`w-full md:w-1/2 mb-6 md:mb-0 text-center pl-0 sm:pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} md:text-right ${index % 2 === 1 ? 'md:text-left' : ''}`}>
                    <span className={`inline-block px-4 py-2 rounded-full font-medium 
                      ${isDark 
                        ? "bg-indigo-900/30 text-indigo-300 border border-indigo-700/40" 
                        : "bg-indigo-100 text-indigo-800 border border-indigo-200"
                      }`}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Círculo central - maior em mobile */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 rounded-full border-4 ${
                      isDark 
                        ? "border-gray-900 bg-indigo-400" 
                        : "border-white bg-indigo-600"
                      }`}>
                      <img 
                        src={exp.img} 
                        alt={exp.company} 
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Detalhes da posição */}
                  <div className={`w-full md:w-1/2 pl-16 sm:pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className={`p-4 sm:p-6 rounded-2xl shadow-md transition-all duration-300
                      ${isDark 
                        ? "bg-gray-900/30 border border-gray-700/30 hover:shadow-indigo-500/10" 
                        : "bg-white/70 border border-gray-200 hover:shadow-indigo-500/20"
                      }`}>
                      <h3 className={`text-xl font-bold mb-1 ${isDark ? "text-indigo-400" : "text-indigo-700"}`}>
                        {exp.role}
                      </h3>
                      <p className={`font-medium mb-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        {exp.company}
                      </p>
                      
                      {isComplex ? (
                        <div className="ml-1 sm:ml-2 mt-4 space-y-4 sm:space-y-6">
                          {exp.positions.map((pos, idx) => (
                            <div key={idx} className="relative pl-3 sm:pl-6 border-l-2 border-indigo-500/30">
                              <h4 className={`text-base sm:text-lg font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
                                {pos.title} <span className={`font-normal text-xs sm:text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>({pos.contractType})</span>
                              </h4>
                              <p className={`text-xs sm:text-sm ${isDark ? "text-gray-400" : "text-gray-600"} mb-2`}>
                                {pos.date}
                              </p>
                              <ul className={`space-y-1 sm:space-y-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                {pos.bullets.map((bullet, bulletIdx) => (
                                  <li
                                    key={bulletIdx}
                                    className="leading-relaxed text-xs sm:text-sm"
                                    dangerouslySetInnerHTML={renderWithBold(bullet)}
                                  />
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className={`text-sm sm:text-base whitespace-pre-line ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          {exp.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
