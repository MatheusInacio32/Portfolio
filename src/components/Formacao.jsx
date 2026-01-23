import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGraduationCap, faCode, faLaptopCode, faDiagramProject 
} from "@fortawesome/free-solid-svg-icons";

export default function Formacao() {
  const { isDark } = useTheme();

  const formacaoItems = [
    {
      icon: faGraduationCap,
      titulo: "Análise e Desenvolvimento de Sistemas",
      instituicao: "UNICESUMAR - Maringá",
      periodo: "2023 - 2025",
      descricao: "Tecnólogo em desenvolvimento de sistemas com foco em soluções web e aplicações modernas.",
      tags: ["Tecnólogo", "Desenvolvimento Web", "Programação"]
    },
    {
      icon: faCode,
      titulo: "Front End: Princípios Básicos e Integração com Endpoints",
      instituicao: "Digirati Informática, Serviços e Telecomunicações LTDA",
      periodo: "02/2024 - 04/2024",
      descricao: "Formação especializada em desenvolvimento front-end com integração com APIs e endpoints.",
      tags: ["Front-end", "APIs", "Integrações"]
    },
    {
      icon: faDiagramProject,
      titulo: "Scrum Fundamentals Certified",
      instituicao: "SCRUMstudy",
      periodo: "09/2024 - 11/2024",
      descricao: "Certificação em metodologias ágeis com foco em Scrum para gerenciamento de projetos de desenvolvimento.",
      tags: ["Scrum", "Metodologia Ágil", "Gestão de Projetos"]
    },
    {
      icon: faLaptopCode,
      titulo: "Fundamentos do React Native",
      instituicao: "ABED - Associação Brasileira de Educação a Distância",
      periodo: "10/2024 - 11/2024",
      descricao: "Especialização em desenvolvimento de aplicações móveis multiplataforma usando React Native.",
      tags: ["React Native", "Mobile", "JavaScript"]
    }
  ];

  return (
    <section 
      id="formacao" 
      className={`py-24 px-6 sm:px-8 transition-colors duration-300 relative bg-surface
        ${isDark ? "text-gray-100" : "text-gray-800"}`}
    >
      {/* Background decorativo otimizado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-40 right-40 w-40 h-40 rounded-full blur-[80px] transform-gpu will-change-transform
          ${isDark ? "bg-indigo-400/30 opacity-5" : "bg-indigo-600/50 opacity-8"}`}></div>
        <div className={`absolute bottom-40 left-40 w-40 h-40 rounded-full blur-[60px] transform-gpu will-change-transform
          ${isDark ? "bg-purple-400/30 opacity-5" : "bg-purple-600/50 opacity-8"}`}></div>
        <div className={`absolute top-1/4 left-1/4 w-24 h-24 rounded-full blur-[50px] transform-gpu will-change-transform
          ${isDark ? "bg-blue-400/30 opacity-4" : "bg-blue-600/50 opacity-6"}`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div>
          <h2 className={`text-5xl font-bold text-center mb-4 bg-gradient-to-r 
            ${isDark ? "from-indigo-400 to-purple-400" : "from-gray-800 to-gray-950"} 
            bg-clip-text text-transparent`}>
            Formação Acadêmica
          </h2>
          
          <p className={`text-center mb-16 text-lg max-w-3xl mx-auto
            ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Qualificações e conhecimentos que impulsionam minha carreira
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Coluna da imagem do diploma - mais moderna e interativa */}
          <div className="lg:col-span-5">
            <div className={`h-full rounded-2xl p-6 sm:p-8 overflow-hidden
              ${isDark 
                ? "bg-gray-900/30 border border-gray-700/30 hover:border-indigo-500/30" 
                : "bg-white/70 border border-gray-200 shadow-lg shadow-gray-200/50 hover:border-indigo-500/30"} 
              backdrop-blur-sm highlight-surface transition-all duration-300`}
            >
              <div className="flex items-center mb-6">
                <FontAwesomeIcon 
                  icon={faGraduationCap} 
                  className={`text-2xl mr-3 ${isDark ? "text-indigo-400" : "text-indigo-700"}`}
                />
                <h3 className={`text-2xl font-semibold 
                  ${isDark ? "text-indigo-400" : "text-indigo-700"}`}>
                  Diploma de Tecnólogo
                </h3>
              </div>
              
              {/* Container da imagem com efeitos 3D modernos */}
              <div className="relative group rounded-xl overflow-hidden perspective">
                <motion.div 
                  className="relative overflow-hidden rounded-xl transform-gpu will-change-transform"
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5,
                    boxShadow: isDark 
                      ? "0 25px 30px -12px rgba(79, 70, 229, 0.25)" 
                      : "0 25px 30px -12px rgba(79, 70, 229, 0.3)" 
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Gradiente dinâmico no hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 
                    transition-all duration-500 z-0 
                    ${isDark 
                      ? "bg-gradient-to-tr from-indigo-600/20 via-purple-500/10 to-blue-500/20" 
                      : "bg-gradient-to-tr from-indigo-600/15 via-purple-500/10 to-blue-500/15"}`}
                    style={{
                      backgroundSize: "200% 200%",
                      animation: "gradient-animation 3s ease infinite"
                    }}
                  ></div>
                  
                  {/* Imagem do diploma */}
                  <img 
                    src="/assets/diploma.png" 
                    alt="Diploma de Tecnólogo em Análise e Desenvolvimento de Sistemas" 
                    className="w-full h-auto object-cover rounded-xl transform-gpu will-change-transform transition-all 
                             duration-700 group-hover:scale-[1.04] z-10 relative"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Overlay sutil com gradiente melhorado */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  ></motion.div>
                </motion.div>
                
                <div className="mt-5">
                  <p className={`text-sm font-medium
                    ${isDark ? "text-indigo-300" : "text-indigo-700"}`}>
                    Universidade Cesumar - Maringá
                  </p>
                  <p className={`mt-1 text-sm 
                    ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Tecnólogo em Análise e Desenvolvimento de Sistemas
                  </p>
                  <p className={`mt-3 text-xs font-semibold px-3 py-1 inline-block rounded-full
                    ${isDark 
                      ? "bg-indigo-900/40 text-indigo-400 border border-indigo-800/50" 
                      : "bg-indigo-100 text-indigo-700 border border-indigo-200"}`}>
                    Conclusão: 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coluna com os items de formação */}
          <div className="lg:col-span-7">
            <div className="space-y-5">
              {formacaoItems.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 
                    ${isDark 
                      ? "bg-gray-900/30 border border-gray-700/30 hover:border-indigo-400/50" 
                      : "bg-white/70 border border-gray-200 shadow-lg shadow-gray-200/50 hover:border-indigo-500/50"} 
                    backdrop-blur-sm highlight-surface transition-all duration-300 hover:scale-[1.01]`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <div className={`p-3 rounded-xl mr-4 mb-4 sm:mb-0 flex-shrink-0
                      ${isDark 
                        ? "bg-gradient-to-br from-indigo-500/20 to-purple-500/20" 
                        : "bg-gradient-to-br from-indigo-200/80 to-purple-200/80"}`}>
                      <FontAwesomeIcon 
                        icon={item.icon} 
                        className={`text-xl
                          ${isDark ? "text-indigo-400" : "text-indigo-700"}`}
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-1 
                        ${isDark ? "text-gray-100" : "text-gray-900"}`}>
                        {item.titulo}
                      </h3>
                      
                      <div className="flex flex-wrap items-center mb-2 gap-y-1">
                        <span className={`text-sm font-medium ${isDark ? "text-purple-400" : "text-purple-700"}`}>
                          {item.instituicao}
                        </span>
                        <span className={`mx-2 text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>•</span>
                        <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          {item.periodo}
                        </span>
                      </div>
                      
                      <p className={`text-sm leading-relaxed mb-3
                        ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        {item.descricao}
                      </p>
                      
                      {/* Tags para destacar habilidades/tecnologias */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`text-xs px-2 py-1 rounded-full
                              ${isDark 
                                ? "bg-indigo-900/40 text-indigo-300 border border-indigo-800/50" 
                                : "bg-indigo-50 text-indigo-700 border border-indigo-200"}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS para animação de gradiente */}
      <style jsx>{`
        @keyframes gradient-animation {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
