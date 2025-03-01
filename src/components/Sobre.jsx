import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";

export default function Sobre() {
  return (
    <motion.section
      id="sobre"
      className="bg-transparent SombraL text-white pt-40 pb-40 px-4 sm:px-8 w-full"
      initial={{ opacity: 0, y: 50 }}     // Animação inicial de opacidade e movimento
      whileInView={{ opacity: 1, y: 0 }}  // Animação quando o componente entra em vista
      transition={{ duration: 0.5 }}      // Tempo de transição
    >
      <h2 className="text-5xl font-semibold mb-5">Sobre Mim 📝</h2>
      <Typed
        strings={[  
          `🚀 Sou um desenvolvedor Front End empolgado por criar soluções Web digitais e inovadoras. Atualmente, atuo como <strong class="text-blue-300 font-semibold">Estagiário de Implantação e Suporte</strong>, onde aprimoro minhas habilidades técnicas e analíticas em um ótimo ambiente com muitos bons profissionais. <br>  
          Além disso, gerencio minha própria agência, a <strong class="text-blue-300 font-semibold">Agência Astro</strong>, onde ajudo empreendedores a fortalecer sua presença digital com sites e landing pages.<br> Minha stack principal inclui <strong class="text-blue-300 font-semibold">React</strong>, <strong class="text-blue-300 font-semibold">Nest.js</strong> e técnicas modernas de <strong class="text-blue-300 font-semibold">UX/UI Design</strong> 🎨✨. <br>
          🎓 Atualmente, estou cursando <strong class="text-blue-300 font-semibold">Análise e Desenvolvimento de Sistemas</strong> na <strong class="text-blue-300 font-semibold">Unicesumar de Maringá</strong>, com previsão de formatura em 2025. Sempre em busca de novos desafios e objetivos! evoluindo não só como Dev mas como pessoa💡💻`,
        ]}
        typeSpeed={20}      // Velocidade de digitação
        loop={false}        // Define para não repetir o texto
        showCursor={false}  // Oculta o cursor
        className="text-lg leading-relaxed"
      />
    </motion.section>
  );
}
