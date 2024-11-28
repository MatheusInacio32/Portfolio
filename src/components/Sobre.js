import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";


export default function Sobre() {
  return (
    <motion.section
      id="sobre"
      className="bg-transparent text-white pt-2 pb-60 px-4 sm:px-8 w-full"
      initial={{ opacity: 0, y: 50 }} // Animação inicial de opacidade e movimento
      whileInView={{ opacity: 1, y: 0 }} // Animação quando o componente entra em vista
      transition={{ duration: 0.5 }} // Tempo de transição
    >
      <h2 className="text-4xl font-semibold mb-5">Sobre Mim</h2>

      {/* Texto com efeito de digitação */}
      <Typed
        strings={[
          "Olá, sou Matheus Nunes Inácio, Programador Full Stack com experiência em desenvolvimento web e automação de sistemas. Atuo como freelancer na Agência Astro, onde uso tecnologias como HTML5, CSS3, JavaScript, React, Python e MySQL para criar soluções digitais. Estou sempre buscando inovação e novas oportunidades de aprendizado para me diferenciar no mercado.",
          "Atualmente, curso Análise e Desenvolvimento de Sistemas na UNICESUMAR, com previsão de conclusão em 2025."
        ]}
        typeSpeed={20} // Velocidade de digitação
        loop={false} // Define para não repetir o texto
        showCursor={false} // Oculta o cursor
        className="text-lg leading-relaxed"
      />
    </motion.section>
  );
}
