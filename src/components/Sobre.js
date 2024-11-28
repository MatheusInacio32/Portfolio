import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";

export default function Sobre() {
  return (
    <motion.section
      id="sobre"
      className="bg-transparent text-white pt-40 pb-40 px-4 sm:px-8 w-full"
      initial={{ opacity: 0, y: 50 }} // Animação inicial de opacidade e movimento
      whileInView={{ opacity: 1, y: 0 }} // Animação quando o componente entra em vista
      transition={{ duration: 0.5 }} // Tempo de transição
    >
      <h2 className="text-5xl font-semibold mb-5">Sobre Mim 📝</h2>

      {/* Texto com efeito de digitação */}
      <Typed
        strings={[
            `Sou um desenvolvedor Full Stack com experiência em criar soluções digitais inovadoras. 🚀<br /><br />
            Atuo como <strong class="font-semibold">freelancer</strong> na <strong class="text-blue-500 font-semibold">Agência Astro</strong>, desenvolvendo interfaces dinâmicas e soluções escaláveis. Minha principal stack inclui <strong class="text-blue-500 font-semibold">React</strong>, <strong class="text-blue-500 font-semibold">Nest.js</strong>, e práticas modernas de <strong class="text-blue-500 font-semibold">UX Design</strong> 💡<br />
            Sou apaixonado por aprendizado contínuo e adoro me desafiar com novas tecnologias e tendências do mercado de desenvolvimento web.<br />
        🎓  Atualmente, estou cursando <strong class="text-blue-500 font-semibold">Análise e Desenvolvimento de Sistemas</strong> na <strong class="text-blue-500 font-semibold">Unicesumar de Maringá</strong>, com previsão de formatura em 2025.<br />
            Estou empolgado para aplicar meus conhecimentos e crescer ainda mais como profissional! 💼`,
        ]}
        typeSpeed={20} // Velocidade de digitação
        loop={false} // Define para não repetir o texto
        showCursor={false} // Oculta o cursor
        className="text-lg leading-relaxed"
      />
    </motion.section>
  );
}
