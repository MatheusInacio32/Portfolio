import { motion } from "framer-motion";
import Slider from "react-slick";
import { useTheme } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projetos() {
  const { isDark } = useTheme();

  const projetos = [
    { 
      id: 1, 
      nome: "Desafio NASA Space Apps", 
      descricao: "Participação no hackathon global da NASA, desenvolvendo soluções inovadoras para desafios espaciais.",
      tech: ["React", "Node.js", "APIs NASA"],
      link: "https://www.linkedin.com/posts/matheusnunesinacio_spaceapps-nasa-hackathon-activity-7249222706192076800-Vzaj?utm_source=share&utm_medium=member_desktop", 
      imagens: [
        `${process.env.PUBLIC_URL}/assets/nasa1.jpg`, 
        `${process.env.PUBLIC_URL}/assets/nasa2.jpg`, 
        `${process.env.PUBLIC_URL}/assets/nasa3.jpg`
      ]
    },
    { 
      id: 2, 
      nome: "Site Agência Astro",
      descricao: "Website profissional para a agência de desenvolvimento web, com design moderno e responsivo.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      link: "https://agenciastro.com.br", 
      imagens: [
        `${process.env.PUBLIC_URL}/assets/astro1.png`, 
        `${process.env.PUBLIC_URL}/assets/astro2.png`, 
        `${process.env.PUBLIC_URL}/assets/astro3.png`
      ]
    },
    { 
      id: 3, 
      nome: "Projeto Dou um Help!",
      descricao: "Plataforma de suporte e atendimento ao cliente, com sistema de tickets e gestão de solicitações.",
      tech: ["JavaScript", "Bootstrap", "PHP"],
      link: "https://www.douumhelp.com.br", 
      imagens: [
        `${process.env.PUBLIC_URL}/assets/senha1.png`, 
        `${process.env.PUBLIC_URL}/assets/senha2.png`, 
        `${process.env.PUBLIC_URL}/assets/senha3.png`
      ]
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",
  };

  return (
    <section 
      id="projetos" 
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
          Projetos em Destaque
        </h2>
        
        <p className={`text-center mb-12 text-lg max-w-3xl mx-auto
          ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          Alguns dos meus trabalhos recentes que demonstram minhas habilidades e experiência
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projetos.map((projeto, index) => (
            <motion.div
              key={projeto.id}
              className={`group relative flex flex-col rounded-2xl overflow-hidden shadow-lg border transform-gpu bg-surface
                ${isDark 
                  ? "bg-gray-900/20 border-gray-700/30 hover:shadow-indigo-500/10 hover:border-indigo-500/30" 
                  : "bg-white/70 border-gray-200 hover:shadow-indigo-500/20 hover:border-indigo-500/30"} 
                transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {/* Imagens do projeto */}
              <div className="relative h-56 sm:h-60 md:h-64 w-full overflow-hidden">
                <Slider {...settings} className="slider-container">
                  {projeto.imagens.map((imagem, idx) => (
                    <div key={idx} className="outline-none">
                      <img
                        src={imagem}
                        alt={`Imagem do projeto ${projeto.nome} - Slide ${idx + 1}`}
                        className="w-full h-56 sm:h-60 md:h-64 object-cover"
                        onError={(e) => e.target.src = `${process.env.PUBLIC_URL}/assets/default.jpg`}
                      />
                    </div>
                  ))}
                </Slider>
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDark 
                    ? "from-gray-900/80 to-transparent" 
                    : "from-gray-900/60 to-transparent"
                }`}></div>
              </div>
              
              {/* Conteúdo */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}>
                  {projeto.nome}
                </h3>
                
                <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  {projeto.descricao}
                </p>
                
                {/* Tecnologias */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projeto.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full
                          ${isDark 
                            ? "bg-indigo-900/30 text-indigo-300 border border-indigo-700/40" 
                            : "bg-indigo-100 text-indigo-800 border border-indigo-200"
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Link para o projeto */}
                  <a 
                    href={projeto.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors duration-200 w-fit
                      ${isDark 
                        ? "text-indigo-400 hover:bg-indigo-900/30" 
                        : "text-indigo-700 hover:bg-indigo-100"
                      }`}
                    aria-label={`Ver projeto ${projeto.nome}`}
                  >
                    <span>Ver projeto</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
