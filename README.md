# Portfólio de Matheus Nunes Inácio

Site pessoal em [matheusinacio.com.br](https://www.matheusinacio.com.br), feito com React 19, Vite e Tailwind CSS 4.
O HTML é gerado na build, então a página aparece antes de o JavaScript carregar.

## Comandos

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:3000
npm run build     # build de produção em build/ (é o que a Vercel roda)
npm run preview   # serve a build localmente
npm run assets    # gera o currículo em PDF e a imagem de prévia do link (precisa do Chrome instalado)
```

## Onde mudar o conteúdo

Todo o texto fica em `src/data/`: `profile.js` (dados pessoais e contato), `experience.js`, `projects.js`,
`education.js` e `skills.js`. Datas usam o formato `AAAA-MM`; um cargo sem `end` é o atual.

Depois de mudar experiência, formação ou foto, rode `npm run assets` para atualizar
`public/curriculo-matheus-nunes-inacio.pdf` e `public/og.png`.

As imagens ficam em `src/assets/` e são convertidas para AVIF e WebP em vários tamanhos na build.
