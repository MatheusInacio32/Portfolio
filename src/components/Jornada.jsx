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
      className={`py-24 px-4 sm:px-8 transition-colors duration-300 relative bg-surface
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
        <motion.h2 
          className={`text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r 
            ${isDark ? "from-indigo-400 to-purple-400" : "from-indigo-700 to-purple-700"} 
            bg-clip-text text-transparent`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Minha Jornada
        </motion.h2>
        
        <motion.p 
          className={`text-center mb-10 sm:mb-16 text-base sm:text-lg max-w-3xl mx-auto
            ${isDark ? "text-gray-300" : "text-gray-700"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Experiência profissional e trajetória na área de desenvolvimento
        </motion.p>

        <div className="relative">
          {/* Linha vertical decorativa */}
          <div className={`absolute top-0 bottom-0 left-5 sm:left-8 md:left-1/2 w-1 sm:w-1.5 transform md:-translate-x-1/2 rounded-full
            ${isDark ? "bg-gradient-to-b from-indigo-500/40 via-purple-500/40 to-indigo-500/40" : "bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-indigo-500/50"}`}>
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
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1] // Easing suave
                }}
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} bg-surface`}>
                  {/* Indicador de período - layout mobile primeiro */}
                  <div className={`w-full md:w-1/2 mb-6 md:mb-0 text-center pl-0 sm:pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} md:text-right ${index % 2 === 1 ? 'md:text-left' : ''}`}>
                    <motion.span 
                      className={`inline-block px-4 py-2 rounded-full font-medium shadow-md highlight-surface
                        ${isDark 
                          ? "bg-indigo-900/40 text-indigo-300 border border-indigo-700/50" 
                          : "bg-indigo-100 text-indigo-800 border border-indigo-200"
                        }`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>

                  {/* Correção do bug de hover que movia a imagem para a direita */}
                  <div className="absolute left-5 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <motion.div 
                      className={`w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full flex items-center justify-center border-4 shadow-lg transform-gpu
                        ${isDark 
                          ? "border-gray-800 shadow-indigo-600/20" 
                          : "border-white shadow-indigo-500/30"
                        }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      style={{ transformOrigin: 'center' }}  // Garante que a escala seja aplicada a partir do centro
                    >
                      <div className="w-full h-full rounded-full p-0.5 overflow-hidden">
                        <img 
                          src={exp.img} 
                          alt={exp.company} 
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Detalhes da posição */}
                  <div className={`w-full md:w-1/2 pl-16 sm:pl-28 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                    <motion.div 
                      className={`p-4 sm:p-6 rounded-2xl shadow-md transition-all duration-300
                        ${isDark 
                          ? "bg-gray-900/30 border border-gray-700/30" 
                          : "bg-white/80 border border-gray-200"
                        }`}
                      whileHover={{ 
                        boxShadow: isDark 
                          ? "0 4px 20px rgba(79, 70, 229, 0.1)" 
                          : "0 4px 20px rgba(79, 70, 229, 0.15)",
                        y: -5
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <h3 className={`text-xl font-bold mb-1 ${isDark ? "text-indigo-400" : "text-indigo-700"}`}>
                        {exp.role}
                      </h3>
                      <p className={`font-medium mb-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        {exp.company}
                      </p>
                      
                      {isComplex ? (
                        <div className="ml-1 sm:ml-2 mt-4 space-y-4 sm:space-y-6">
                          {exp.positions.map((pos, idx) => (
                            <motion.div 
                              key={idx} 
                              className="relative pl-3 sm:pl-6 border-l-2 border-indigo-500/30"
                              initial={{ opacity: 0, x: -5 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + idx * 0.1 }}
                            >
                              <h4 className={`text-base sm:text-lg font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
                                {pos.title} <span className={`font-normal text-xs sm:text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>({pos.contractType})</span>
                              </h4>
                              <p className={`text-xs sm:text-sm ${isDark ? "text-gray-400" : "text-gray-600"} mb-2`}>
                                {pos.date}
                              </p>
                              <ul className={`space-y-1.5 sm:space-y-2.5 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                {pos.bullets.map((bullet, bulletIdx) => (
                                  <motion.li
                                    key={bulletIdx}
                                    className="leading-relaxed text-xs sm:text-sm"
                                    dangerouslySetInnerHTML={renderWithBold(bullet)}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + bulletIdx * 0.05 }}
                                  />
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <p className={`text-sm sm:text-base whitespace-pre-line leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          {exp.description}
                        </p>
                      )}
                    </motion.div>
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
