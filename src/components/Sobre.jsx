import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";
import { useTheme } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faMobileScreen, faCode, faDatabase, faTools } from "@fortawesome/free-solid-svg-icons";

export default function Sobre() {
  const { isDark } = useTheme();

  return (
    <section 
      id="sobre" 
      className={`py-24 px-6 sm:px-8 transition-colors duration-300 relative bg-surface
        ${isDark ? "text-gray-100" : "text-gray-800"}`}
    >
      {/* Background decorativo otimizado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-32 right-32 w-32 h-32 rounded-full blur-[60px] transform-gpu will-change-transform
          ${isDark ? "bg-indigo-400 opacity-5" : "bg-indigo-600 opacity-8"}`}></div>
        <div className={`absolute bottom-32 left-32 w-32 h-32 rounded-full blur-[50px] transform-gpu will-change-transform
          ${isDark ? "bg-purple-400 opacity-5" : "bg-purple-600 opacity-8"}`}></div>
        <div className={`absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-[40px] transform-gpu will-change-transform
          ${isDark ? "bg-blue-400 opacity-3" : "bg-blue-600 opacity-5"}`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-5xl font-bold text-center mb-4 bg-gradient-to-r 
            ${isDark ? "from-indigo-400 to-purple-400" : "from-indigo-700 to-purple-700"} 
            bg-clip-text text-transparent`}>
            Sobre Mim
          </h2>
          
          <p className={`text-center mb-16 text-lg max-w-3xl mx-auto
            ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Desenvolvedor Web especializado em interfaces centradas no usuário
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={`h-full rounded-2xl p-6 sm:p-8 
              ${isDark 
                ? "bg-gray-900/30 border border-gray-700/30 hover:border-indigo-400/30" 
                : "bg-white/70 border border-gray-200 shadow-lg shadow-gray-200/50 hover:border-indigo-500/30"} 
              backdrop-blur-sm highlight-surface transition-all duration-300`}
            >
              <h3 className={`text-2xl font-semibold mb-4 
                ${isDark ? "text-indigo-400" : "text-indigo-700"}`}>
                Quem Sou
              </h3>
              
              <div className={`prose ${isDark ? "prose-invert" : ""} max-w-none`}> 
                <Typed
                  strings={[  
                    `<p class="leading-relaxed">🚀 Sou um <span class="${isDark ? "text-indigo-400" : "text-indigo-700"} font-semibold">Desenvolvedor Web</span> com sólida experiência na criação de interfaces digitais centradas no usuário, combinando princípios de design visual com desenvolvimento front-end.</p>
                    <p class="leading-relaxed">Aplico metodologias de <span class="${isDark ? "text-purple-400" : "text-purple-700"} font-semibold">design thinking</span> e pesquisa de usuário para entregar experiências intuitivas e acessíveis. Atualmente, trabalho como <span class="${isDark ? "text-indigo-400" : "text-indigo-700"} font-semibold">Analista de Suporte</span> na LODE Desenvolvimento de Software.</p>`
                  ]}
                  typeSpeed={30}
                  loop={false}
                  showCursor={false}
                  className={`text-base ${isDark ? "text-gray-300" : "text-gray-700"}`}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={`h-full rounded-2xl p-6 sm:p-8
              ${isDark 
                ? "bg-gray-900/30 border border-gray-700/30 hover:border-indigo-400/30" 
                : "bg-white/70 border border-gray-200 shadow-lg shadow-gray-200/50 hover:border-indigo-500/30"} 
              backdrop-blur-sm highlight-surface transition-all duration-300`}
            >
              <h3 className={`text-2xl font-semibold mb-4 
                ${isDark ? "text-purple-400" : "text-purple-700"}`}>
                Especialidades
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: faDesktop,
                    title: "Front-end",
                    desc: "Interfaces responsivas e acessíveis com React, Next.js e Tailwind"
                  },
                  {
                    icon: faMobileScreen,
                    title: "Mobile",
                    desc: "Aplicativos multiplataforma com React Native"
                  },
                  {
                    icon: faCode,
                    title: "UX/UI Design",
                    desc: "Design centrado no usuário com metodologias modernas"
                  },
                  {
                    icon: faDatabase,
                    title: "Banco de Dados",
                    desc: "Modelagem e consultas em MySQL e SQL"
                  }
                ].map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                    className="flex items-start space-x-3"
                  >
                    <div className={`p-2 rounded-lg
                      ${isDark 
                        ? "bg-gradient-to-br from-indigo-500/20 to-purple-500/20" 
                        : "bg-gradient-to-br from-indigo-200/80 to-purple-200/80"}`}>
                      <FontAwesomeIcon 
                        icon={skill.icon} 
                        className={`text-sm
                          ${isDark ? "text-indigo-400" : "text-indigo-700"}`}
                      />
                    </div>
                    <div>
                      <h4 className={`text-base font-medium mb-1 
                        ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                        {skill.title}
                      </h4>
                      <p className={`text-sm 
                        ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        {skill.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
