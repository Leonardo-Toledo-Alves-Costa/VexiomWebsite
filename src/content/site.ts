// Todo o texto do site mora aqui, separado dos componentes.
// Para mudar uma frase, edite este arquivo; o layout não precisa ser tocado.
// Veja docs/estudos/passo-a-passo/02-home.md (fora deste repositório, na pasta do projeto).

export const navegacao = [
  { rotulo: "Serviços", href: "#servicos" },
  { rotulo: "Como funciona", href: "#como-funciona" },
  { rotulo: "Quem somos", href: "#quem-somos" },
  { rotulo: "Contato", href: "#contato" },
];

export const hero = {
  rotulo: "Software web · Mobile · Tecnologia",
  titulo: "Tecnologia com direção e fundamento.",
  apoio:
    "A Vexiom desenvolve sites, sistemas web e aplicativos sob medida. Vetores dão a direção, axiomas dão a base: é assim que tiramos projetos do papel.",
  acaoPrincipal: { rotulo: "Fale com a gente", href: "#contato" },
  acaoSecundaria: { rotulo: "Ver serviços", href: "#servicos" },
};

export const axiomas = {
  titulo: "Nossos axiomas",
  apoio: "Os princípios de que partimos em todo projeto.",
  itens: [
    {
      codigo: "A1",
      titulo: "Entender antes de construir",
      texto: "Todo projeto começa pelo problema, não pela tecnologia.",
    },
    {
      codigo: "A2",
      titulo: "Simples por projeto",
      texto: "Entregamos a solução mais simples que resolve de verdade.",
    },
    {
      codigo: "A3",
      titulo: "Feito para evoluir",
      texto: "Código organizado hoje é o que permite crescer amanhã.",
    },
  ],
};

export type IconeServico = "web" | "mobile" | "tecnologia";

export const servicos = {
  rotulo: "Serviços",
  titulo: "O que construímos",
  apoio:
    "Começamos pelo software. A visão é crescer para toda a engenharia, um projeto de cada vez.",
  itens: [
    {
      numero: "01",
      icone: "web" as IconeServico,
      titulo: "Software web",
      texto:
        "Sites institucionais, lojas e sistemas sob medida, com a tecnologia certa para cada caso.",
    },
    {
      numero: "02",
      icone: "mobile" as IconeServico,
      titulo: "Aplicativos mobile",
      texto:
        "Apps para Android e iOS a partir de uma única base de código, do protótipo à publicação.",
    },
    {
      numero: "03",
      icone: "tecnologia" as IconeServico,
      titulo: "Tecnologia e engenharia",
      texto:
        "Integrações, automações e consultoria. O começo de uma atuação que vai além do software.",
    },
  ],
};

export const comoFunciona = {
  rotulo: "Como funciona",
  titulo: "Do primeiro oi ao projeto no ar",
  passos: [
    {
      numero: "01",
      titulo: "Conversa",
      texto: "Você conta a ideia ou o problema. A gente faz as perguntas certas.",
    },
    {
      numero: "02",
      titulo: "Proposta",
      texto: "Escopo, prazo e valor por escrito, antes de qualquer linha de código.",
    },
    {
      numero: "03",
      titulo: "Construção",
      texto: "Entregas parciais para você acompanhar e ajustar no caminho.",
    },
    {
      numero: "04",
      titulo: "Entrega",
      texto: "Projeto no ar, com orientação para você usar e evoluir.",
    },
  ],
  acao: { rotulo: "Começar a conversa", href: "#contato" },
};

export const quemSomos = {
  rotulo: "Quem somos",
  titulo: "Três amigos e uma vontade enorme de construir.",
  texto:
    "A Vexiom nasceu na UNIFEI, entre aulas de engenharia e projetos reais de software. Somos jovens, curiosos e levamos a sério o que entregamos.",
  // PROVISÓRIO: trocar pelos nomes e papéis reais dos três sócios.
  equipe: [
    { nome: "Nome do sócio", papel: "Papel na Vexiom" },
    { nome: "Nome do sócio", papel: "Papel na Vexiom" },
    { nome: "Nome do sócio", papel: "Papel na Vexiom" },
  ],
};

export const chamadaFinal = {
  titulo: "Tem um projeto em mente?",
  texto: "Conte a ideia. A gente responde com um caminho claro para tirá-la do papel.",
  // PROVISÓRIO: falta o canal real de contato (WhatsApp, e-mail ou formulário).
  acao: { rotulo: "Fale com a gente", href: "#contato" },
};

export const rodape = {
  direitos: "© 2026 Vexiom. Todos os direitos reservados.",
};
