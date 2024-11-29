import { motion } from "framer-motion";
import Slider from "react-slick";

export default function Projects() {
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
      nome: "Projeto Gerenciamento de Senhas", 
      link: "https://www.youtube.com/watch?v=IB7Aa0YhYOs", 
      imagens: [
        `${process.env.PUBLIC_URL}/assets/senha1.png`, 
        `${process.env.PUBLIC_URL}/assets/senha2.png`, 
        `${process.env.PUBLIC_URL}/assets/senha1.png`
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
    <section id="projetos" className="bg-transparent text-white p-8 mb-40 pb-4">
      <h1 className="text-4xl font-semibold mb-8">Projetos em Destaque</h1>
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
            className="bg-cyan p-4 rounded-lg shadow-lg hover:bg-gray-900 block"
            aria-label={`Confira mais sobre o projeto ${projeto.nome}`}
          >
            <h3 className="text-xl mb-6 font-semibold">{projeto.nome}</h3>

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
