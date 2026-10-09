// Todo o texto do site mora aqui, separado dos componentes.
// Para mudar uma frase, edite este arquivo; o layout não precisa ser tocado.
// Veja docs/estudos/passo-a-passo/02-home.md (fora deste repositório, na pasta do projeto).

export const navegacao = [
  { rotulo: "Quem somos", href: "#quem-somos" },
  { rotulo: "Serviços", href: "#servicos" },
  { rotulo: "Projetos", href: "#projetos" },
  { rotulo: "Planos", href: "#planos" },
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

// PROVISÓRIO: lista montada a partir da experiência do time; revisar.
export const tecnologias = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Flutter",
  "Firebase",
  "Supabase",
  "MongoDB",
];

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

export type TipoMaquete = "landing" | "institucional" | "painel" | "app";

// Modelos de projeto: exemplos do que o cliente pode receber. Não são
// trabalhos de clientes; a seção deixa isso claro no texto de apoio.
export const projetos = {
  rotulo: "Projetos",
  titulo: "O que você pode receber",
  apoio:
    "Quatro modelos para dar uma ideia do resultado. São demonstrações de formato: o seu projeto é desenhado para o seu negócio.",
  itens: [
    {
      id: "landing",
      maquete: "landing" as TipoMaquete,
      titulo: "Landing page",
      tipo: "Site de uma página",
      texto:
        "Uma página direta para apresentar um produto ou serviço e transformar visitas em contatos.",
      tags: ["Design sob medida", "Formulário de contato", "SEO"],
      plano: "presenca",
    },
    {
      id: "institucional",
      maquete: "institucional" as TipoMaquete,
      titulo: "Site institucional",
      tipo: "Site com várias páginas",
      texto:
        "A casa da sua empresa na internet: quem vocês são, o que fazem e como falar com vocês.",
      tags: ["Várias páginas", "Conteúdo editável", "Blog ou catálogo"],
      plano: "negocio",
    },
    {
      id: "painel",
      maquete: "painel" as TipoMaquete,
      titulo: "Painel de gestão",
      tipo: "Sistema web",
      texto:
        "Um sistema com login, cadastros e gráficos para organizar a operação do seu negócio num lugar só.",
      tags: ["Login e permissões", "Banco de dados", "Relatórios"],
      plano: "sob-medida",
    },
    {
      id: "app",
      maquete: "app" as TipoMaquete,
      titulo: "Aplicativo mobile",
      tipo: "App para Android e iOS",
      texto:
        "O seu serviço no bolso do cliente, com uma única base de código para as duas lojas.",
      tags: ["Android e iOS", "Notificações", "Publicação nas lojas"],
      plano: "sob-medida",
    },
  ],
  acao: "Quero um assim",
};

export const planos = {
  rotulo: "Planos",
  titulo: "Um ponto de partida para o seu orçamento",
  apoio:
    "Três formatos para começar a conversa. Todo plano pode ser ajustado ao que você precisa.",
  // PROVISÓRIO: preco: null mostra "Valor a definir". Trocar pelos valores
  // reais, por exemplo preco: "R$ 1.500".
  itens: [
    {
      id: "presenca",
      nome: "Presença",
      paraQuem: "Para estar online com cara profissional.",
      preco: null as string | null,
      itens: [
        "Site de uma página (landing page)",
        "Design sob medida com a sua marca",
        "Funciona bem no celular e no computador",
        "Botão ou formulário de contato",
        "Publicação no seu domínio",
      ],
      destaque: false,
    },
    {
      id: "negocio",
      nome: "Negócio",
      paraQuem: "Para a empresa que quer um site completo.",
      preco: null as string | null,
      itens: [
        "Tudo do plano Presença",
        "Várias páginas: início, serviços, sobre, contato",
        "Blog ou catálogo de produtos",
        "Conteúdo que você mesmo edita",
        "Integração com WhatsApp e redes sociais",
      ],
      destaque: true,
    },
    {
      id: "sob-medida",
      nome: "Sob medida",
      paraQuem: "Para sistemas web e aplicativos.",
      preco: "Sob consulta" as string | null,
      itens: [
        "Levantamento do que o seu negócio precisa",
        "Sistema web ou aplicativo mobile",
        "Login, banco de dados e painel administrativo",
        "Entregas parciais para você acompanhar",
        "Orçamento fechado antes de começar",
      ],
      destaque: false,
    },
  ],
  acao: "Escolher este plano",
  seloDestaque: "Recomendado",
  precoIndefinido: "Valor a definir",
};

export const contato = {
  rotulo: "Contato",
  titulo: "Bora tirar a sua ideia do papel?",
  // {plano} é trocado pelo nome do plano que o visitante escolheu
  tituloComPlano: "Boa escolha. Vamos falar do plano {plano}?",
  texto:
    "Mande um e-mail contando o que você precisa. A gente responde com um caminho claro e um orçamento.",
  email: "vexiom.dev@gmail.com",
  acao: "Enviar e-mail",
  redes: [
    { nome: "Instagram", usuario: "@vexiomdev", href: "https://instagram.com/vexiomdev" },
    { nome: "X (Twitter)", usuario: "@vexiomdev", href: "https://x.com/vexiomdev" },
  ],
};

export const rodape = {
  direitos: "© 2026 Vexiom. Todos os direitos reservados.",
};
