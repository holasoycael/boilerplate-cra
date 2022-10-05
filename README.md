# Setup SPA com Crate React App baseado na arquitetura Next.js

Este boilerplate é inspirado no conteúdo do [Willian](https://willianjusten.com.br) e seu [curso](https://reactavancado.com.br).

## 🌟 Quick Start

Na pasta do projeto use o comando abaixo para instalação:
```sh
git clone https://github.com/holasoycael/boilerplate-cra.git . && rm -rf ./.git && git init && git branch -M main && git add . && git commit -m "Initial commit"
```

E agora, é só adicionar seu repositório remote ✨

## Scripts disponíveis

No diretório do projeto, você pode executar:

### `yarn dev`

Levanta um servidor do nosso aplicativo CRA em [localhost:3000](http://localhost:3000) em modo de desenvolvimento.

A página será recarregada se você fizer edições. \
Você também verá quaisquer erros de lint no console.

### `yarn test`

Executa os testes com Jest uma única vez

### `yarn test:watch`

Inicia a cli de testes com o Jest no modo de observação interativa

### `yarn storybook`

Levanta um servidor do Storybook em [localhost:6006](http://localhost:6006)

### `yarn build`

Compila o aplicativo para produção na pasta de biuld.
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.
Seu aplicativo está pronto para ser implantado!

#
### `Tecnologias útilizadas`

  @dependencies
- [Create React App](https://create-react-app.dev)
- [react-router-dom](https://reactrouter.com)
- [styled-components](https://styled-components.com)

@devDependencies
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Storybook](https://storybook.js.org/)
- [Babel](https://babeljs.io)
- [ESlint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
- [Plop](https://plopjs.com/)

>As tecnologias listadas acima no projeto aumentam minha produtividade e simplifica processos dentro da equipe nos dando poderes enorme no ambiente de desenvolviemnto.

#
### `Add .vscode/settings.json folder`
```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

#
### `Arquitetura de projeto`

```
`PROJECT`
├── .husky
│   └── commit-msg
├── .jest
│   └── setup.ts
├── .storybook
│   ├── main.js
│   ├── preview-head.html
│   └── preview.js
├── .vscode
│   └── settings.json
├── generators
│   ├── templates
│   │   ├── index.tsx.hbs
│   │   ├── stories.tsx.hbs
│   │   ├── styles.tsx.hbs
│   │   └── test.tsx.hbs
│   └── plopfile.js
├── node_modules
├── public
│   ├── fonts
│   │   ├── poppins-v12-latin-300.woff2
│   │   ├── poppins-v12-latin-600.woff2
│   │   └── poppins-v12-latin-regular.woff2
│   ├── img
│   │   ├── favicon.ico
│   │   ├── logo192.png
│   │   └── logo512.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── @types
│   │   ├── jest-styled-components.d.ts
│   │   └── styled-components.d.ts
│   ├── app
│   │   └── routes.tsx
│   ├── components
│   │   └── `NAME`
│   │       ├── index.tsx
│   │       ├── stories.tsx
│   │       ├── styles.ts
│   │       └── test.tsx
│   ├── contexts
│   ├── graphql
│   ├── hooks
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── document.tsx
│   │   └── index.tsx
│   ├── services
│   ├── skeleton
│   ├── styles
│   │   ├── global.ts
│   │   └── theme.ts
│   ├── templates
│   │   └── `NAME`
│   │       ├── index.tsx
│   │       ├── styles.tsx
│   │       └── test.tsx
│   ├── typings
│   │   ├── App.tsx
│   │   ├── Contexts.tsx
│   │   └── Data.ts
│   ├── utils
│   └── tests
│       └── helpers.tsx
├── .babelrc
├── .editorconfig
├── .env
├── .eslintrc
├── .gitignore
├── .prettierrc
├── config-overrides.js
├── jest.config.js
├── package.json
├── react-app-env.d.ts
├── README.md
├── tsconfig.json
└── yarn.lock
```
