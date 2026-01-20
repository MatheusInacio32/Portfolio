import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Contato() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementação futura do envio de formulário
    console.log("Form data:", formData);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <section 
      id="contato" 
      className={`pt-24 px-6 sm:px-8 pb-16 transition-colors duration-300 relative bg-surface
        ${isDark ? "text-gray-100" : "text-gray-800"}`}
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-32 left-16 w-24 h-24 rounded-full blur-3xl transform-gpu
          ${isDark ? "bg-indigo-400 opacity-5" : "bg-indigo-600 opacity-8"}`}></div>
        <div className={`absolute bottom-32 right-16 w-20 h-20 rounded-full blur-2xl transform-gpu
          ${isDark ? "bg-purple-400 opacity-5" : "bg-purple-600 opacity-8"}`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-4 bg-gradient-to-r 
          ${isDark ? "from-indigo-400 to-purple-400" : "from-indigo-700 to-purple-700"} 
          bg-clip-text text-transparent`}>
          Contato
        </h2>
        
        <p className={`text-center mb-16 text-lg max-w-3xl mx-auto
          ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          Entre em contato para conversarmos sobre seu próximo projeto
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`h-full p-8 rounded-2xl border backdrop-blur-sm highlight-surface
              ${isDark 
                ? "bg-gray-900/20 border-gray-700/30" 
                : "bg-white/70 border-gray-200 shadow-lg shadow-gray-200/50"}`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 
                    ${isDark 
                      ? "bg-indigo-900/30 text-indigo-400" 
                      : "bg-indigo-100 text-indigo-700"}`}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      Email
                    </p>
                    <a 
                      href="mailto:mateusinacio32@gmail.com"
                      className={`hover:underline ${isDark ? "text-indigo-400" : "text-indigo-700"}`}
                    >
                      mateusinacio32@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 
                    ${isDark 
                      ? "bg-indigo-900/30 text-indigo-400" 
                      : "bg-indigo-100 text-indigo-700"}`}>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      Telefone
                    </p>
                    <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                      (44) 99960-9434
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 
                    ${isDark 
                      ? "bg-indigo-900/30 text-indigo-400" 
                      : "bg-indigo-100 text-indigo-700"}`}>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      Localização
                    </p>
                    <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                      Maringá, PR, Brasil
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <p className={`font-medium mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Redes Sociais
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/matheusnunesinacio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors duration-200
                        ${isDark 
                          ? "bg-gray-800 text-blue-400 hover:bg-indigo-900/50" 
                          : "bg-gray-100 text-blue-700 hover:bg-indigo-100"}`}
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a 
                      href="https://github.com/MatheusInacio32"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors duration-200
                        ${isDark 
                          ? "bg-gray-800 text-white hover:bg-indigo-900/50" 
                          : "bg-gray-100 text-gray-800 hover:bg-indigo-100"}`}
                      aria-label="GitHub"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form 
              onSubmit={handleSubmit}
              className={`p-8 rounded-2xl border backdrop-blur-sm
                ${isDark 
                  ? "bg-gray-900/20 border-gray-700/30" 
                  : "bg-white/70 border-gray-200 shadow-lg shadow-gray-200/50"}`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                Envie uma mensagem
              </h3>
              
              <div className="mb-6">
                <label 
                  htmlFor="name" 
                  className={`block mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  Nome
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors duration-200
                    ${isDark 
                      ? "bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
                      : "bg-white border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"} 
                    border outline-none`}
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="email" 
                  className={`block mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  Email
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors duration-200
                    ${isDark 
                      ? "bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
                      : "bg-white border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"} 
                    border outline-none`}
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className={`block mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg transition-colors duration-200
                    ${isDark 
                      ? "bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
                      : "bg-white border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"} 
                    border outline-none resize-none`}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className={`flex items-center justify-center w-full py-3 px-6 rounded-lg font-medium btn
                  shadow-md transform-gpu transition-all duration-300
                  ${isDark 
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-indigo-500/25 hover:-translate-y-1" 
                    : "bg-gradient-to-r from-indigo-700 to-purple-700 text-white hover:shadow-indigo-600/20 hover:-translate-y-1"
                  }`}
              >
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Enviar mensagem
              </button>
            </form>
          </motion.div>
        </div>
        
        {/* Footer */}
        <div className="mt-20 text-center">
          <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
            © {new Date().getFullYear()} Matheus Nunes Inácio - Todos os direitos reservados
          </p>
        </div>
      </div>
    </section>
  );
}
