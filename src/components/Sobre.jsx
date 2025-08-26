import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";
import { useTheme } from "../contexts/ThemeContext";

export default function Sobre() {
  const { isDark } = useTheme();

  return (
    <section 
      id="sobre" 
      className={`py-24 px-6 sm:px-8 transition-colors duration-300 relative bg-surface
        ${isDark ? "text-gray-100" : "text-gray-800"}`}
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-32 right-32 w-32 h-32 rounded-full blur-3xl transform-gpu
          ${isDark ? "bg-indigo-400 opacity-5" : "bg-indigo-600 opacity-8"}`}></div>
        <div className={`absolute bottom-32 left-32 w-32 h-32 rounded-full blur-2xl transform-gpu
          ${isDark ? "bg-purple-400 opacity-5" : "bg-purple-600 opacity-8"}`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-4 bg-gradient-to-r 
          ${isDark ? "from-indigo-400 to-purple-400" : "from-indigo-700 to-purple-700"} 
          bg-clip-text text-transparent`}>
          Sobre Mim
        </h2>
        
        <p className={`text-center mb-16 text-lg max-w-3xl mx-auto
          ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          Conheça um pouco da minha jornada e paixão pelo desenvolvimento web
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={`h-full rounded-2xl p-6 sm:p-8 
              ${isDark 
                ? "bg-gray-900/30 border border-gray-700/30" 
                : "bg-white/70 border border-gray-200 shadow-lg shadow-gray-200/50"} 
              backdrop-blur-sm highlight-surface`}
            >
              <h3 className={`text-2xl font-semibold mb-4 
                ${isDark ? "text-indigo-400" : "text-indigo-700"}`}>
                Quem Sou
              </h3>
              
              <div className={`prose ${isDark ? "prose-invert" : ""} max-w-none`}> 
                <Typed
                  strings={[  
                    `<p>🚀 Sou um desenvolvedor Front End empolgado por criar soluções Web digitais e inovadoras. Atualmente, atuo como <span class="${isDark ? "text-indigo-400" : "text-indigo-700"} font-semibold">Analista de Suporte</span>, onde aprimoro minhas habilidades técnicas e analíticas.</p>
                    <p>Além disso, gerencio minha própria agência, a <span class="${isDark ? "text-purple-400" : "text-purple-700"} font-semibold">Agência Astro</span>, onde ajudo empreendedores a fortalecer sua presença digital.</p>`
                  ]}
                  typeSpeed={30}
                  loop={false}
                  showCursor={false}
                  className={`text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
              <div className="space-y-6">
              {/* Card de Habilidades */}
              <div className={`rounded-2xl p-6 
                ${isDark 
                  ? "bg-gray-900/30 border border-gray-700/30" 
                  : "bg-white/70 border border-gray-200 shadow-lg shadow-gray-200/50"} 
                backdrop-blur-sm highlight-surface`}
              >
                <h3 className={`text-2xl font-semibold mb-3 
                  ${isDark ? "text-purple-400" : "text-purple-700"}`}>
                  Minha Stack
                </h3>
                <div className={`prose ${isDark ? "prose-invert" : ""} max-w-none`}>
                  <Typed
                    strings={[  
                      `<p>Minha stack principal inclui <span class="${isDark ? "text-indigo-400" : "text-indigo-700"} font-semibold">React</span>, <span class="${isDark ? "text-indigo-400" : "text-indigo-700"} font-semibold">Nest.js</span> e técnicas modernas de <span class="${isDark ? "text-indigo-400" : "text-indigo-700"} font-semibold">UX/UI Design</span> 🎨✨</p>`
                    ]}
                    startDelay={2000}
                    typeSpeed={30}
                    loop={false}
                    showCursor={false}
                    className={`text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
                  />
                </div>
              </div>

              {/* Card de Educação */}
              <div className={`rounded-2xl p-6 
                ${isDark 
                  ? "bg-gray-900/30 border border-gray-700/30" 
                  : "bg-white/70 border border-gray-200 shadow-lg shadow-gray-200/50"} 
                backdrop-blur-sm highlight-surface`}
              >
                <h3 className={`text-2xl font-semibold mb-3 
                  ${isDark ? "text-purple-400" : "text-purple-700"}`}>
                  Formação
                </h3>
                <div className={`prose ${isDark ? "prose-invert" : ""} max-w-none`}>
                  <Typed
                    strings={[  
                      `<p>🎓 Estou cursando <span class="${isDark ? "text-indigo-400" : "text-indigo-700"} font-semibold">Análise e Desenvolvimento de Sistemas</span> na <span class="${isDark ? "text-indigo-400" : "text-indigo-700"} font-semibold">Unicesumar de Maringá</span>, com formatura prevista para 2025.</p>
                      <p>Sempre em busca de novos desafios e objetivos, evoluindo não só como Dev mas como pessoa! 💡💻</p>`
                    ]}
                    startDelay={4000}
                    typeSpeed={30}
                    loop={false}
                    showCursor={false}
                    className={`text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
