import { motion } from "framer-motion";

export default function Projects() {
  const projetos = [
    { id: 1, nome: "Site Agência Astro", link: "https://agenciastro.com.br" },
    { id: 2, nome: "Projeto Gerenciamento de Senhas", link: "#" },
    { id: 3, nome: "Desafio NASA Space Apps", link: "#" }
  ];

  return (
    <section id="projetos" className="bg-transparent to-gray-900 text-white p-8 mb-40 pb-64">
      <h2 className="text-3xl font-semibold mb-8">Projetos em Destaque</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projetos.map((projeto, index) => (
          <motion.div
            key={projeto.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
            initial={{ opacity: 0, y: 50 }} // Inicia com opacidade 0 e deslocamento para baixo
            whileInView={{ opacity: 1, y: 0 }} // Aparece quando entra em vista
            viewport={{ once: false }} // Garante que a animação ocorra sempre que entrar e sair de vista
            transition={{ duration: 0.5, delay: index * 0.2 }} // Atraso sequencial para cada projeto
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl mb-2 font-semibold">{projeto.nome}</h3>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
              Confira aqui
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
