/**
 * =============================================================================
 *  CONSULTING NOW FLORIANÓPOLIS — COPIA / DADOS CENTRALIZADOS
 * =============================================================================
 *  Edite livremente todos os textos, placeholders e links abaixo sem tocar em
 *  nenhum JSX. As seções da página leem os dados daqui.
 *
 *  TODO (contatos reais):
 *   - Substitua whatsapp (número + DDI), instagramUrl, linkedinUrl e email
 *     pelos dados oficiais da unidade Florianópolis / Grupo InterMaster.
 *   - Troque o icone/imagem da marca se preferir usar o logo.png oficial.
 */

/* ------------------------------------------------------------------ NOVOS */
export const brand = {
  name: "Consulting Now",
  unit: "Florianópolis",
  tagline: "Consultoria em Gestão Empresarial para PMEs",
  whatsapp: "+55 48 9675-4392",
  whatsappLink: "https://wa.me/554896754392",
  email: "contato.florianopolis@consultingnow.com.br",
  instagram: "https://www.instagram.com/consultingnow/",
  linkedin: "https://linkedin.com/company/consultingnow", // TODO: perfil oficial
  footerNote:
    "Unidade franqueada do Grupo InterMaster, consultoria em gestão empresarial para Indústria, Comércio e Serviços em Santa Catarina e região.",
  mark: "CN", // "CN" azul usado como marca quando o logo não for exibido.
};

/* ------------------------------------------------------------------ */
/* HERO                                                               */
/* ------------------------------------------------------------------ */
export const hero = {
  badge: "Consulting Now Florianópolis",
  headline: "Chegou a hora de alavancar os resultados da sua empresa.",
  headlineHighlight: "resultados", // palavra em destaque azul dentro da headline
  subheadline:
    "Consultoria Empresarial em Gestão e Processos para PMEs dos setores de Indústria, Comércio e Serviços. Integrante do Grupo InterMaster, com mais de 32 anos de atuação e mais de 100 unidades distribuídas pelo Brasil.",
  ctaPrimary: "Quero meu diagnóstico gratuito",
  ctaSecondary: "Conheça o método",
  stats: [
    { value: "+30", label: "anos de experiência" },
    { value: "+700", label: "empresas reestruturadas" },
    { value: "+100", label: "unidades no Brasil" },
    { value: "R$ 1 bi", label: "de faturamento gerenciado em projetos (2024)" },
  ],
};

/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/* DORES / PARA QUEM É                                                */
/* ------------------------------------------------------------------ */
export type DoresSegment = {
  id: string;
  titulo: string;
  icone: "industry" | "store" | "briefcase";
  descricao: string;
  dores: string[];
};

export const dores = {
  titulo: "Feito para empresas que sentem o peso da gestão no dia a dia",
  subLinha:
    "Se um destes cenários parece familiar, um diagnóstico estruturado pode ser o primeiro passo para mudar o rumo do seu negócio",
  segmentos: [
    {
      id: "industria",
      titulo: "Indústria",
      icone: "industry",
      descricao:
        "Produção parada, estoque travando o caixa e custos que não mostram a causa.",
      dores: [
        "Custo de produção fora do controle e ociosidade de máquinas",
        "Perdas por falta de padronização de processos internos",
      ],
    },
    {
      id: "comercio",
      titulo: "Comércio",
      icone: "store",
      descricao:
        "Margem apertada e estoque que não vira dinheiro de volta no giro.",
      dores: [
        "Margem de lucro comprimida entre preço e custo real",
        "Giro de estoque lento travando o capital de giro",
      ],
    },
    {
      id: "servicos",
      titulo: "Serviços",
      icone: "briefcase",
      descricao:
        "Preço errado na proposta e equipe que não escala sem depender de você.",
      dores: [
        "Precificação sem base em custo real e entrega de valor",
        "Dificuldade de escalar a equipe e padronizar a entrega",
      ],
    },
  ],
};
/* ------------------------------------------------------------------ */
/* SERVIÇOS                                                            */
/* ------------------------------------------------------------------ */
export type Servico = {
  id: string;
  titulo: string;
  descricao: string;
  icone: "trending-up" | "receipt" | "handshake" | "monitor-cog";
};

export const servicos = {
  titulo: "Como podemos te ajudar",
  subLinha:
    "Soluções rápidas, inteligentes e inovadoras para garantir o sucesso do seu negócio. Um time de consultores com experiências multidisciplinares está preparado para alavancar a sua empresa.",
  itens: [
    {
      id: "gestao-processos",
      titulo: "Consultoria em Gestão e Processos",
      descricao:
        "Alavancagem e reorganização de empresas de pequeno e médio porte, com plano de ação personalizado.",
      icone: "trending-up",
    },
    {
      id: "recuperacao-impostos",
      titulo: "Recuperação de Impostos",
      descricao:
        "Ações que contribuem para a diminuição da carga tributária e a recuperação de créditos pagos indevidamente.",
      icone: "receipt",
    },
    {
      id: "ma",
      titulo: "M&A: Compra, Venda e Fusão de Empresas",
      descricao:
        "Assessoria completa em fusões, aquisições e reestruturações societárias, do valuation ao fechamento.",
      icone: "handshake",
    },
    {
      id: "erp",
      titulo: "ERP e Automação",
      descricao:
        "Otimização e automatização de processos com sistemas integrados, transformando dado em decisão.",
      icone: "monitor-cog",
    },
  ] satisfies Servico[],
  cta: "E muito mais: fale com um consultor",
};

/* METODOLOGIA (2 fases)                                              */
/* ------------------------------------------------------------------ */
export const metodologia = {
  titulo: "Um método claro, em duas fases, pensado para gerar resultado",
  subLinha:
    "Projetos meticulosamente planejados, com uma relação equilibrada entre investimento e retorno. Nossa meta é alcançar o payback em até 12 meses após o início das implantações.",
  fases: [
    {
      numero: "01",
      nome: "Diagnóstico",
      titulo: "Entendemos o seu negócio antes de propor qualquer coisa",
      items: [
        "Avaliação de expectativas e objetivos do sócio / direção",
        "Cronograma detalhado das atividades a realizar",
        "Proposta com prazo de retorno (payback) projetado em até 12 meses",
      ],
      duracao: "Etapa inicial · sem compromisso",
    },
    {
      numero: "02",
      nome: "Projeto",
      titulo: "Implantação acompanhada de perto, mês a mês",
      items: [
        "Implementação conjunta com time do cliente",
        "Reuniões semanais de gestão para acompanhar metas",
        "Avaliação de resultados e ajustes ao longo do caminho",
      ],
      duracao: "Execução e acompanhamento de resultados",
    },
  ],
  cta: "Quero meu diagnóstico gratuito",
};

/* ------------------------------------------------------------------ */
/* OS 5 PILARES                                                       */
/* ------------------------------------------------------------------ */
export type Pilar = {
  id: string;
  titulo: string;
  descricao: string;
  icone: "target" | "clipboard" | "users" | "graduation" | "monitor";
};

export const pilares = {
  titulo: "Os 5 pilares de uma gestão que sustenta o crescimento",
  subLinha:
    "Nossa abordagem fortalece as cinco dimensões que, juntas, definem a saúde de uma empresa de pequeno e médio porte.",
  itens: [
    {
      id: "estrategia",
      titulo: "Estratégia Adequada",
      descricao:
        "Rumo claro, com posicionamento e metas que fazem sentido para o seu porte e mercado.",
      icone: "target",
    },
    {
      id: "processos",
      titulo: "Processos Bem Definidos",
      descricao:
        "Fluxos documentados e padronizados para que a operação não dependa de improviso.",
      icone: "clipboard",
    },
    {
      id: "gestao",
      titulo: "Gestão & Liderança",
      descricao:
        "Lideranças preparadas, rotinas de gestão e tomada de decisão baseada em indicadores.",
      icone: "users",
    },
    {
      id: "gente",
      titulo: "Gente Qualificada",
      descricao:
        "Estrutura de cargos, desenvolvimento e retenção das pessoas certas nos lugares certos.",
      icone: "graduation",
    },
    {
      id: "informacao",
      titulo: "Sistema de Informação",
      descricao:
        "ERP e ferramentas alinhados à operação para transformar dado em decisão.",
      icone: "monitor",
    },
  ],
};
/* ------------------------------------------------------------------ */
/* PROVA SOCIAL (depoimentos placeholder)                             */
/* ------------------------------------------------------------------ */
export type Depoimento = {
  id: string;
  nome: string;
  cargo: string; // cargo · empresa
  texto: string;
};

export const depoimentos = {
  titulo: "O que dizem os empresários que já fizeram o diagnóstico",
  subLinha:
    "Empresas de diversos segmentos reestruturaram operação, margem e crescimento com a nossa metodologia.",
  list: [
    {
      id: "dep-01",
      nome: "Ricardo Martins",
      cargo: "Diretor · Grampofix",
      texto:
        "A Consulting Now nos apresentou uma proposta de Diagnóstico seguida de um plano para ajuste e correção das rotas. Ficamos muito felizes com o resultado e recomendamos a todos que necessitem de uma atualização nas modernas práticas de gestão.",
    },
    {
      id: "dep-02",
      nome: "Mário Held e Alexandre Alves",
      cargo: "Sócios Diretores · Maxfalcon",
      texto:
        "O Projeto da Consulting Now ajudou na implantação da área de Gestão de Projetos, bem como a implantação de um sistema que apoiasse o controle dos prazos, a obter indicadores de performance e previsibilidade financeira.",
    },
    {
      id: "dep-03",
      nome: "Carla Carolina",
      cargo: "Diretora Adm. Financeira · GT Express Transportes",
      texto:
        "O resultado foi alcançado, na verdade superado! Pois, antes do encerramento o Projeto já foi pago, tanto com o aumento das receitas, como com a redução dos custos e despesas.",
    },
    {
      id: "dep-04",
      nome: "Sandro Antoun",
      cargo: "Diretor Comercial · Semar Supermercados",
      texto:
        "A Consulting Now foi um divisor de águas na trajetória da nossa empresa. Além de todo profissionalismo e competência da equipe que participou do Projeto, contamos também com uma visão externa e neutra, que nos ajudou a alavancar ainda mais nossos resultados.",
    },
  ],
  numerosDestaque: [
    { valor: "+32", label: "anos de experiência" },
    { valor: "+100", label: "unidades no Brasil" },
    { valor: "12 meses", label: "payback projetado na implantação" },
  ],
};

/* ------------------------------------------------------------------ */
/* CONSULTOR                                                           */
/* ------------------------------------------------------------------ */
export const consultor = {
  eyebrow: "Nosso consultor",
  titulo: "Quem conduz a Consulting Now Florianópolis",
  nome: "André Acosta",
  cargo: "Consultor Representante · Grande Florianópolis e Região Sul",
  credenciais:
    "Diretor Administrativo e Financeiro – CFO · Especialista em Finanças, Controladoria e Gestão de Pessoas · Conselheiro Certificado",
  foto: "/consultor.jpg", // salve a foto em public/consultor.jpg; sem ela, exibe as iniciais
  bio: [
    "Executivo com sólida experiência em Finanças, Controladoria, FP&A e Governança, atuando em grandes empresas nacionais e multinacionais. Vivência em planejamento estratégico e financeiro, otimização de custos, viabilidade econômico-financeira, valuations, M&A e implantação de sistemas ERP (SAP, TOTVS), além do desenvolvimento de equipes de alta performance.",
    "Como consultor representante da Consulting Now na Grande Florianópolis e Região Sul, traduz essa experiência em diagnósticos precisos e implementação lado a lado com o empresário, do primeiro diagnóstico ao resultado consolidado.",
  ],
  focos: [
    {
      icone: "search",
      titulo: "Diagnóstico preciso",
      texto: "Mapeia gargalos e oportunidades antes de propor qualquer solução.",
    },
    {
      icone: "rocket",
      titulo: "Implantação lado a lado",
      texto: "Executa as mudanças junto com a equipe, sem deixar só um relatório.",
    },
    {
      icone: "trending-up",
      titulo: "Acompanhamento contínuo",
      texto: "Rotina de gestão que sustenta resultados no longo prazo.",
    },
  ] as { icone: string; titulo: string; texto: string }[],
  ctaPrimario: "Falar com o André no WhatsApp",
  instagramCta: "Siga a Consulting Now",
};

/* ------------------------------------------------------------------ */
/* CEO                                                                 */
/* ------------------------------------------------------------------ */
export const ceo = {
  nome: "Vicente Gomes",
  cargo: "CEO · Consulting Now / Grupo InterMaster",
  foto: "/ceo.avif",
  bio:
    "À frente da Consulting Now, do Grupo InterMaster, lidera uma trajetória de 3 décadas e mais de 500 clientes atendidos, com metodologia objetiva e personalizada — corresponsável pela efetiva implementação das soluções propostas.",
};

/* ------------------------------------------------------------------ */
/* FORMULÁRIO                                                         */
/* ------------------------------------------------------------------ */
export const formulario = {
  titulo: "Solicite seu Diagnóstico Empresarial Gratuito",
  subLinha:
    "Preencha o formulário e receba uma avaliação inicial do seu negócio, sem custo e sem compromisso.",
  rotuloBotao: "Solicitar diagnóstico gratuito",
  campos: ["nome", "empresa", "telefone", "email", "setor", "desafio"] as const,
  setores: ["Indústria", "Comércio", "Serviços"] as const,
  sucesso: {
    titulo: "Recebemos sua solicitação!",
    texto:
      "Obrigado pelo interesse. Nossa equipe da unidade Florianópolis vai entrar em contato em breve para agendar sua análise. Para agilizar, você também pode chamar a gente no WhatsApp.",
    ctaWhatsapp: "Falar agora no WhatsApp",
  },
};

/* ------------------------------------------------------------------ */
/* FOOTER                                                             */
/* ------------------------------------------------------------------ */
export const footer = {
  navegacao: [
    { rotulo: "Início", alvo: "#inicio" },
    { rotulo: "Serviços", alvo: "#servicos" },
    { rotulo: "Segmentos", alvo: "#segmentos" },
    { rotulo: "Metodologia", alvo: "#metodologia" },
    { rotulo: "Quem somos", alvo: "#sobre" },
    { rotulo: "Consultor", alvo: "#consultor" },
    { rotulo: "Pilares", alvo: "#pilares" },
    { rotulo: "Depoimentos", alvo: "#depoimentos" },
    { rotulo: "Diagnóstico gratuito", alvo: "#diagnostico" },
  ],
};
/* ------------------------------------------------------------------ */
/* QUEM SOMOS — GRUPO INTERMASTER / CONSULTING NOW                    */
/* ------------------------------------------------------------------ */
export const sobre = {
  eyebrow: "Quem somos",
  titulo: "Uma trajetória de 32 anos e o compromisso de gerar resultado",
  subLinha:
    "Somos parte do Grupo InterMaster, formado pelas empresas InterMaster Consultores e Consulting Now, referência nacional em consultoria empresarial, com mais de 100 unidades distribuídas pelo Brasil.",
  paragrafos: [
    "A Consulting Now é especializada em Consultoria Empresarial em Gestão e Processos. Nossa missão é contribuir para que nossos clientes alcancem seus objetivos econômicos, financeiros e organizacionais, por meio de soluções personalizadas e eficientes.",
    "Ao tornar nossos clientes mais competitivos, focamos na melhoria de Estratégia, Processos, Gestão, Gente e Informações gerenciais, promovendo a geração de lucro e a sustentabilidade dos negócios.",
  ],
  destaques: [
    {
      titulo: "Corresponsáveis pela implantação",
      texto:
        "Além de desenvolver o projeto de reestruturação, nos corresponsabilizamos pela efetiva implantação das soluções propostas, gerando maior eficácia e agilidade na obtenção de resultados.",
    },
    {
      titulo: "Retorno visado em até 12 meses",
      texto:
        "Planejamento cuidadoso para uma relação equilibrada entre investimento e retorno, com o objetivo de alcançar o payback em até 12 meses após o início das implantações.",
    },
  ],
};