import { motion } from "framer-motion";
import Slider from "react-slick";
import { useTheme } from "../contexts/ThemeContext";

export default function Projetos() {
  const { isDark } = useTheme();

  const projetos = [
    { 
      id: 1, 
      nome: "Desafio NASA Space Apps", 
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
      className={`p-8 mb-40 pb-4 transition-colors duration-500 
        ${isDark ? "bg-transparent text-white" : "bg-transparent text-gray-900"}`}
    >
      <h1 className={`text-4xl font-semibold mb-8 text-center 
        ${isDark ? "text-white" : "text-black"}`}
      >
        Projetos em Destaque
      </h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {projetos.map((projeto) => (
          <motion.a
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            key={projeto.id}
            className={`p-4 rounded-lg shadow-lg transition-all 
              ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-200"}`}
            aria-label={`Confira mais sobre o projeto ${projeto.nome}`}
          >
            <h3 className={`text-xl mb-6 font-semibold 
              ${isDark ? "text-white" : "text-black"}`}
            >
              {projeto.nome}
            </h3>

            {/* Carrossel de Imagens */}
            <div className="relative w-full h-full overflow-hidden rounded-lg mb-4">
              <Slider {...settings}>
                {projeto.imagens.map((imagem, index) => (
                  <div key={index}>
                    <img
                      src={imagem}
                      alt={`Imagem do projeto ${projeto.nome} - Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => e.target.src = `${process.env.PUBLIC_URL}/assets/default.jpg`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
