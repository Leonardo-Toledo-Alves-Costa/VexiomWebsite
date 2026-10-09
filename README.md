# Vexiom Website

Site institucional da Vexiom. Next.js 16 (App Router) + React 19 + TypeScript, estilos com CSS Modules.

## Rodar localmente

Requer Node.js 20.9 ou mais novo.

```bash
npm install
npm run dev
```

Abra http://localhost:3000. O servidor de desenvolvimento recarrega a página a cada arquivo salvo.

Para testar a versão de produção, igual à que vai para o ar:

```bash
npm run build
npm run start
```

Outros comandos: `npm run lint` verifica o código com o ESLint.

## Estrutura

```
src/
├── app/            rotas, layout raiz e estilos globais (globals.css)
├── components/     um componente por seção, com o seu .module.css ao lado
└── content/        site.ts, com todos os textos do site
```

Para mudar um texto, edite `src/content/site.ts`. Para mudar cores, edite as variáveis no topo de `src/app/globals.css`.

## Branches

- `main`: versão final, sempre estável.
- `develop`: versão em desenvolvimento; recebe as features prontas.
- `feature/nome-da-feature` e `bugfix/nome-da-correcao`: uma branch por mudança, criada a partir da `develop` e unida de volta nela.
