import unicesumar from '../assets/logos/unicesumar.png?w=48;96&format=avif;webp;png&as=picture'
import diploma from '../assets/education/diploma.png?w=480;800;1240&format=avif;webp;jpg&as=picture'
import diplomaFull from '../assets/education/diploma.png?w=1800&format=webp'
import nasaThumb from '../assets/certificates/nasa-2024.jpg?w=400;720&format=avif;webp;jpg&as=picture'
import nasaFull from '../assets/certificates/nasa-2024.jpg?format=webp'
import scrumThumb from '../assets/certificates/scrum.jpg?w=400;720&format=avif;webp;jpg&as=picture'
import scrumFull from '../assets/certificates/scrum.jpg?format=webp'

export const degree = {
  title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
  institution: 'UniCesumar',
  location: 'Maringá, PR',
  start: '2023',
  end: '2025',
  note: 'Concluído em julho de 2025, colação de grau em agosto.',
  logo: unicesumar,
  diploma,
  diplomaFull,
  diplomaAlt: 'Diploma de Tecnólogo em Análise e Desenvolvimento de Sistemas pela UniCesumar',
}

// Certificados com imagem (anexadas no LinkedIn). Abrem em tela cheia.
export const certificates = [
  {
    title: 'NASA Space Apps Challenge 2024',
    detail: 'Galactic Problem Solver',
    issuer: 'NASA',
    date: '2024-10',
    credential: 'NSAC-2024-MNI-0822-ST-MGA',
    image: nasaThumb,
    imageFull: nasaFull,
    alt: 'Certificado Galactic Problem Solver do NASA Space Apps Challenge 2024 em nome de Matheus Nunes Inácio',
  },
  {
    title: 'Scrum Fundamentals Certified (SFC)',
    issuer: 'SCRUMstudy',
    date: '2024-11',
    credential: '1056640',
    image: scrumThumb,
    imageFull: scrumFull,
    alt: 'Certificado Scrum Fundamentals Certified da SCRUMstudy em nome de Matheus Inácio',
  },
]

// Cursos sem imagem do certificado.
export const courses = [
  { title: 'Fundamentos do React Native', issuer: 'ABED', date: '2024-11' },
  { title: 'Front End: Princípios Básicos e Integração com Endpoints', issuer: 'Digirati', date: '2024-04' },
]
