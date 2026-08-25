import { FICHAS } from './fichas';
import { CORPOS } from './corpos';
import { SEO, SEO_CATEGORIAS } from './seo';
import { FAQS } from './faqs';
import { LOCAL } from './local';
export type Procedimento = {
  slug: string;
  nome: string;
  categoria: CategoriaSlug;
  /** frase curta usada em listas e no menu */
  resumo: string;
  /** frase-conceito editorial, aparece como abertura da página */
  conceito: string;
  /** parágrafos do corpo, PENDENTE de revisão clínica da Dra. */
  descricao: string[];
  indicacoes: string[];
  duracao?: string;
  sessoes?: string;
  resultado?: string;
  faq: { p: string; r: string }[];
  /** títulos/meta de SEO */
  seo: { title: string; description: string };
  destaque?: boolean;
};

export type CategoriaSlug = 'facial' | 'corporal' | 'pele' | 'capilar' | 'vascular' | 'bem-estar';

export type Categoria = {
  slug: CategoriaSlug;
  nome: string;
  conceito: string;
  descricao: string;
  seo: { title: string; description: string };
};

export const CATEGORIAS: Categoria[] = [
  {
    slug: 'facial',
    nome: 'Facial',
    conceito: 'Proporção antes de volume.',
    descricao:
      'Harmonização, preenchimentos, toxina e bioestimuladores conduzidos a partir do estudo das proporções do seu rosto, e não de um protocolo pronto.',
    seo: {
      title: 'Procedimentos Faciais | Dra. Fernanda Paz, Guarujá',
      description:
        'Harmonização facial, preenchimentos, toxina botulínica, rinomodelação e bioestimuladores no Guarujá. Avaliação individual com biomédica esteta.',
    },
  },
  {
    slug: 'corporal',
    nome: 'Corporal',
    conceito: 'O corpo responde a método.',
    descricao:
      'Contorno, firmeza e definição tratados com protocolos combinados e acompanhamento de evolução ao longo das sessões.',
    seo: {
      title: 'Procedimentos Corporais | Dra. Fernanda Paz, Guarujá',
      description:
        'Bioestimuladores, flacidez, gordura localizada, celulite, estrias e definição abdominal no Guarujá. Avaliação individual.',
    },
  },
  {
    slug: 'pele',
    nome: 'Pele',
    conceito: 'Pele saudável aparece antes de qualquer maquiagem.',
    descricao:
      'Melasma, manchas, textura e viço tratados com diagnóstico da sua pele e um plano de manutenção que continua em casa.',
    seo: {
      title: 'Tratamentos de Pele | Dra. Fernanda Paz, Guarujá',
      description:
        'Melasma, manchas, rejuvenescimento, hidratação profunda e peelings no Guarujá. Plano de skincare personalizado.',
    },
  },
  {
    slug: 'capilar',
    nome: 'Capilar',
    conceito: 'Queda tem causa. Tratamento começa por ela.',
    descricao:
      'Intradermoterapia, microagulhamento e protocolos para queda, alopecias e calvície inicial, com avaliação do couro cabeludo.',
    seo: {
      title: 'Tratamento Capilar | Dra. Fernanda Paz, Guarujá',
      description:
        'Intradermoterapia (MMP), microagulhamento capilar e tratamento de queda, alopecia e calvície inicial no Guarujá.',
    },
  },
  {
    slug: 'vascular',
    nome: 'Vascular',
    conceito: 'Vasinhos não precisam ser permanentes.',
    descricao: 'Escleroterapia, também chamada de PEIM, para vasinhos de membros inferiores, sessão a sessão.',
    seo: {
      title: 'Tratamento de Vasinhos (Escleroterapia) | Dra. Fernanda Paz, Guarujá',
      description: 'Escleroterapia para vasinhos nas pernas no Guarujá. Também conhecida como PEIM. Avaliação individual com biomédica esteta.',
    },
  },
  {
    slug: 'bem-estar',
    nome: 'Emagrecimento & bem-estar',
    conceito: 'O que sustenta o resultado vem de dentro.',
    descricao: 'Soroterapia e protocolos de suporte que acompanham o processo de emagrecimento e de energia.',
    seo: {
      title: 'Soroterapia e Bem-estar | Dra. Fernanda Paz, Guarujá',
      description: 'Soroterapia e protocolos de suporte ao emagrecimento e à disposição no Guarujá.',
    },
  },
];

/** Gera o esqueleto padrão de conteúdo: todo texto clínico segue PENDENTE de revisão da Dra. */
const base = (
  slug: string,
  nome: string,
  categoria: CategoriaSlug,
  resumo: string,
  conceito: string,
  extras: Partial<Procedimento> = {}
): Procedimento => ({
  slug,
  nome,
  categoria,
  resumo,
  conceito,
  descricao: [
    `${nome} é indicado a partir de uma avaliação individual, considerando sua anatomia, seu histórico e o resultado que você espera alcançar.`,
    'O protocolo, o número de sessões e os produtos utilizados são definidos na consulta. Não existe uma resposta única que sirva para todos os casos.',
  ],
  indicacoes: [],
  faq: [],
  seo: {
    title: `${nome} no Guarujá | Dra. Fernanda Paz`,
    description: `${resumo} Avaliação individual com a Dra. Fernanda Paz, biomédica esteta no Guarujá.`,
  },
  ...extras,
});

export const PROCEDIMENTOS: Procedimento[] = [
  // --- FACIAL
  base(
    'harmonizacao-facial',
    'Harmonização Facial',
    'facial',
    'Estudo das proporções do rosto com combinação de técnicas.',
    'A harmonização começa onde termina o excesso.',
    {
      destaque: true,
      descricao: [
        'Harmonização facial não é um procedimento: é um plano. Parte do estudo das proporções do seu rosto para decidir o que precisa de sustentação, o que precisa de volume e, principalmente, o que não precisa de nada.',
        'A combinação de técnicas é definida na avaliação: preenchimentos, toxina botulínica, bioestimuladores e fios podem entrar juntos ou separados, em uma ou em várias sessões.',
        'O objetivo é devolver equilíbrio mantendo os traços que são seus. Um bom resultado é aquele que ninguém consegue nomear.',
      ],
      indicacoes: [
        'Perda de sustentação e contorno com o passar dos anos',
        'Assimetrias que incomodam na foto e no espelho',
        'Terço inferior sem definição de mandíbula ou mento',
        'Desejo de projeção sem aparência artificial',
      ],
      duracao: 'PENDENTE: confirmar com a Dra.',
      sessoes: 'PENDENTE: confirmar com a Dra.',
      resultado: 'PENDENTE: confirmar com a Dra.',
      faq: [
        {
          p: 'Harmonização facial deixa o rosto artificial?',
          r: 'O resultado artificial vem do excesso, não da técnica. Quando o planejamento respeita as proporções do rosto e a dose é conservadora, o resultado é percebido como descanso e equilíbrio, não como intervenção.',
        },
        {
          p: 'É preciso fazer tudo de uma vez?',
          r: 'Não. O plano pode ser executado por etapas, respeitando o intervalo entre procedimentos e o seu tempo. Essa é inclusive a conduta mais comum.',
        },
        {
          p: 'Quanto tempo dura o resultado?',
          r: 'Depende de quais técnicas entraram no seu plano: cada produto tem um tempo próprio de permanência. Isso é informado na avaliação, junto com a previsão de manutenção.',
        },
      ],
      seo: {
        title: 'Harmonização Facial no Guarujá | Dra. Fernanda Paz',
        description:
          'Harmonização facial com estudo de proporções no Guarujá. Preenchimentos, toxina e bioestimuladores planejados de forma individual. Agende sua avaliação.',
      },
    }
  ),
  base('toxina-botulinica', 'Toxina Botulínica', 'facial', 'Suavização de linhas de expressão sem perder o movimento.', 'Expressão preservada, marca suavizada.', {
    destaque: true,
    indicacoes: ['Linhas da testa e da glabela', 'Pés de galinha', 'Sorriso gengival', 'Bruxismo e definição do terço inferior'],
    faq: [
      {
        p: 'Botox deixa o rosto congelado?',
        r: 'Rosto congelado é resultado de dose alta aplicada sem planejamento. A conduta é calcular a dose por músculo, respeitando a sua expressão. Você continua franzindo, sorrindo e demonstrando emoção, só sem marcar tão fundo.',
      },
    ],
  }),
  base('preenchimento-labial', 'Preenchimento Labial', 'facial', 'Definição de contorno e hidratação, no volume que combina com o rosto.', 'Lábios bem definidos, não maiores.', {
    destaque: true,
    indicacoes: ['Contorno mal definido', 'Assimetria entre lábio superior e inferior', 'Lábios ressecados e sem projeção', 'Código de barras no lábio superior'],
    faq: [
      {
        p: 'Vai ficar exagerado?',
        r: 'O volume é decidido junto com você e aplicado de forma gradual. Em muitos casos o objetivo nem é volume: é contorno e hidratação, que mudam a aparência do lábio sem aumentar o tamanho.',
      },
    ],
  }),
  base('preenchimento-mento', 'Preenchimento de Mento', 'facial', 'Projeção do queixo e equilíbrio do perfil.', 'O perfil se resolve no queixo.'),
  base('preenchimento-malar', 'Preenchimento Malar', 'facial', 'Sustentação da maçã do rosto e do terço médio.', 'Sustentação antes de volume.'),
  base('preenchimento-mandibular', 'Preenchimento Mandibular', 'facial', 'Definição do contorno da mandíbula.', 'Contorno é estrutura.'),
  base('bigode-chines', 'Preenchimento do Bigode Chinês', 'facial', 'Suavização do sulco nasogeniano.', 'Menos sulco, mesma expressão.'),
  base('rinomodelacao', 'Rinomodelação', 'facial', 'Ajuste do perfil do nariz sem cirurgia.', 'O nariz reequilibrado em consultório.', { destaque: true }),
  base('bioestimuladores-faciais', 'Bioestimuladores Faciais', 'facial', 'Estímulo de colágeno para firmeza progressiva.', 'Colágeno é construção, não retoque.'),
  base('fios-de-sustentacao', 'Fios de Sustentação', 'facial', 'Reposicionamento de tecidos com efeito lifting.', 'Sustentação sem cirurgia.'),
  base('skinbooster', 'Skinbooster', 'facial', 'Hidratação profunda e qualidade de pele.', 'Viço que começa por dentro.'),
  base('microagulhamento-facial', 'Microagulhamento Facial', 'facial', 'Renovação da textura e estímulo de colágeno.', 'Textura se trata em série.'),
  base('pdrn', 'PDRN', 'facial', 'Bioestimulador regenerativo de ação em qualidade de pele.', 'Regenerar antes de preencher.', {
    destaque: true,
    descricao: [
      'PDRN é a sigla de polidesoxirribonucleotídeo, um ativo de ação regenerativa que atua na qualidade do tecido: hidratação, textura, vascularização e resposta de reparo da pele.',
      'A lógica dele é diferente da de um preenchedor. Preenchedor devolve volume; PDRN trabalha a qualidade do tecido que sustenta esse volume. Por isso ele costuma entrar antes ou junto de outros procedimentos, não no lugar deles.',
      'É aplicado em série. A avaliação define a região, o número de sessões e se ele entra sozinho ou combinado dentro de um plano maior.',
    ],
    indicacoes: [
      'Pele fina, opaca ou com aspecto cansado',
      'Região dos olhos com pele fragilizada',
      'Preparo de pele antes de outros procedimentos',
      'Pós-procedimento, para acelerar a recuperação do tecido',
    ],
    duracao: 'PENDENTE: confirmar com a Dra.',
    sessoes: 'PENDENTE: confirmar com a Dra.',
    resultado: 'PENDENTE: confirmar com a Dra.',
    faq: [
      {
        p: 'PDRN é preenchimento?',
        r: 'Não. Preenchimento devolve volume a uma região; PDRN trabalha a qualidade do tecido (hidratação, textura e capacidade de reparo). São objetivos diferentes, e é comum que os dois entrem no mesmo plano, cada um resolvendo o que o outro não resolve.',
      },
      {
        p: 'Dá para fazer PDRN na região dos olhos?',
        r: 'É uma das áreas em que ele é mais indicado, justamente porque a pele ali é fina e responde bem a estímulo de qualidade em vez de volume. A avaliação confirma se é o caso do seu quadro.',
      },
      {
        p: 'Quantas sessões são necessárias?',
        r: 'Uma sessão, com o resultado aparecendo entre 15 e 30 dias. A necessidade de repetição depende da região tratada e do objetivo, e é reavaliada depois desse período.',
      },
    ],
    seo: {
      title: 'PDRN no Guarujá | Dra. Fernanda Paz',
      description:
        'PDRN: bioestimulador regenerativo para qualidade de pele, textura e hidratação. Avaliação individual com biomédica esteta no Guarujá.',
    },
  }),
  base('cicatrizes-de-acne', 'Tratamento de Cicatrizes de Acne', 'facial', 'Protocolo combinado para relevo e marcas.', 'Marca de acne tem tratamento.'),
  base('peelings-faciais', 'Peelings Faciais', 'facial', 'Renovação celular controlada.', 'Renovação com controle.'),
  base('planejamento-skincare', 'Planejamento de Skincare', 'facial', 'Rotina domiciliar prescrita para a sua pele.', 'O resultado continua em casa.'),

  // --- CORPORAL
  base('bioestimuladores-corporais', 'Bioestimuladores Corporais', 'corporal', 'Firmeza e qualidade de pele em áreas do corpo.', 'Firmeza se constrói em sessões.'),
  base('flacidez', 'Tratamento de Flacidez', 'corporal', 'Protocolos combinados para flacidez de pele e tecido.', 'Flacidez responde a protocolo.'),
  base('estrias', 'Tratamento de Estrias', 'corporal', 'Melhora de textura e coloração das estrias.', 'Estria melhora, com constância.'),
  base('celulite', 'Tratamento de Celulite', 'corporal', 'Abordagem dos graus de celulite por protocolo combinado.', 'Celulite tem grau, e conduta.'),
  base('subcisao', 'Subcisão', 'corporal', 'Liberação de traves fibrosas em depressões da pele.', 'Solta a trave, sobe a pele.'),
  base('gordura-localizada', 'Gordura Localizada', 'corporal', 'Redução de depósitos localizados de gordura.', 'Localizada pede conduta local.'),
  base('papada', 'Tratamento de Papada', 'corporal', 'Redução e definição da região submentoniana.', 'O contorno recomeça no pescoço.'),
  base('lipo-enzimatica', 'Lipo Enzimática', 'corporal', 'Protocolo injetável para contorno corporal.', 'Contorno em série.'),
  base('peelings-corporais', 'Peelings Corporais', 'corporal', 'Renovação da pele em áreas do corpo.', 'Renovação também no corpo.'),
  base('definicao-abdominal', 'Definição Abdominal', 'corporal', 'Evidenciar a musculatura já existente no abdômen.', 'Definição revela o que já existe.', {
    destaque: true,
    descricao: [
      'Definição abdominal é o protocolo indicado para quem já tem musculatura abdominal desenvolvida e quer torná-la mais visível. O trabalho é sobre a camada que cobre o músculo, não sobre o músculo.',
      'É diferente de modelação abdominal. Se a musculatura ainda não está formada, o procedimento indicado é outro, e a avaliação define isso antes de qualquer aplicação.',
    ],
    indicacoes: [
      'Musculatura abdominal já desenvolvida, porém pouco aparente',
      'Camada superficial de gordura cobrindo a definição',
      'Rotina de treino consistente sem o retorno visual esperado',
    ],
    faq: [
      {
        p: 'Qual a diferença entre definição e modelação abdominal?',
        r: 'Definição evidencia uma musculatura que já existe. Modelação trabalha o contorno e o desenho da região em quem ainda não tem essa musculatura formada. São indicações diferentes, com protocolos diferentes, e a avaliação determina qual é o seu caso.',
      },
    ],
    seo: {
      title: 'Definição Abdominal no Guarujá | Dra. Fernanda Paz',
      description:
        'Definição abdominal para evidenciar a musculatura já existente. Entenda a diferença para modelação abdominal e agende sua avaliação no Guarujá.',
    },
  }),
  base('modelacao-abdominal', 'Modelação Abdominal', 'corporal', 'Desenho do contorno abdominal, o efeito tanquinho.', 'Modelação desenha o contorno.', {
    destaque: true,
    descricao: [
      'Modelação abdominal, conhecida como efeito tanquinho, trabalha o desenho e o contorno da região abdominal, criando a marcação das linhas mesmo em quem ainda não tem a musculatura totalmente desenvolvida.',
      'É diferente de definição abdominal. Quando a musculatura já existe e só está encoberta, o protocolo indicado é outro. Essa distinção é feita na avaliação.',
    ],
    indicacoes: [
      'Desejo do contorno marcado sem musculatura formada',
      'Abdômen sem linhas de marcação visíveis',
      'Busca por desenho da região de forma não cirúrgica',
    ],
    faq: [
      {
        p: 'Modelação abdominal é a mesma coisa que definição?',
        r: 'Não. Modelação cria o desenho e o contorno da região. Definição evidencia uma musculatura que já está formada. As indicações são praticamente opostas, e aplicar o protocolo errado não entrega o resultado esperado.',
      },
    ],
    seo: {
      title: 'Modelação Abdominal (Efeito Tanquinho) no Guarujá | Dra. Fernanda Paz',
      description:
        'Modelação abdominal para desenho e contorno da região, o efeito tanquinho. Entenda a diferença para definição abdominal. Guarujá, SP.',
    },
  }),
  base('gluteo', 'Preenchimento de Glúteo', 'corporal', 'Projeção e contorno de glúteo sem cirurgia.', 'Projeção com proporção.'),
  base('microagulhamento-corporal', 'Microagulhamento Corporal', 'corporal', 'Estímulo de colágeno em estrias, cicatrizes e flacidez.', 'A pele do corpo também se refaz.', {
    descricao: [
      'O microagulhamento corporal usa microlesões controladas para acionar a produção de colágeno na região tratada. É o mesmo princípio do facial, aplicado a áreas de pele mais espessa e a demandas diferentes.',
      'No corpo, ele responde principalmente a estrias, cicatrizes e flacidez leve, e costuma ser combinado com ativos aplicados na mesma sessão, o que amplia o alcance do protocolo.',
      'É tratamento em série. Estria antiga e estria recente respondem de formas diferentes, e essa leitura é feita na avaliação.',
    ],
    indicacoes: [
      'Estrias brancas ou avermelhadas em abdômen, coxas, glúteos ou mamas',
      'Cicatrizes de cirurgia ou de acne no corpo',
      'Flacidez leve de pele em regiões localizadas',
      'Textura irregular após perda de peso',
    ],
    duracao: 'PENDENTE: confirmar com a Dra.',
    sessoes: 'PENDENTE: confirmar com a Dra.',
    resultado: 'PENDENTE: confirmar com a Dra.',
    faq: [
      {
        p: 'Microagulhamento resolve estria branca?',
        r: 'Estria branca já é uma cicatriz madura: ela melhora em textura e aparência, mas não desaparece por completo. Estria avermelhada, ainda em fase inflamatória, responde melhor. Essa diferença muda a expectativa e o protocolo, e é avaliada antes de começar.',
      },
      {
        p: 'Quantas sessões são necessárias?',
        r: 'De uma a dez sessões, conforme a região, a extensão e há quanto tempo a lesão existe. O resultado é cumulativo: cada sessão soma à anterior, e a evolução é reavaliada ao longo do protocolo.',
      },
    ],
    seo: {
      title: 'Microagulhamento Corporal no Guarujá | Dra. Fernanda Paz',
      description:
        'Microagulhamento corporal para estrias, cicatrizes e flacidez no Guarujá. Estímulo de colágeno em série, com avaliação individual.',
    },
  }),

  // --- PELE
  base('melasma', 'Tratamento de Melasma', 'pele', 'Protocolo de clareamento e controle do melasma.', 'Melasma se controla, todo dia.', {
    destaque: true,
    indicacoes: ['Manchas acastanhadas simétricas no rosto', 'Piora com sol, calor ou alterações hormonais', 'Histórico de recidiva após tratamentos anteriores'],
    faq: [
      {
        p: 'O que faz o melasma piorar?',
        r: 'Sol e calor são os principais fatores, mas luz visível (inclusive de telas), alterações hormonais e procedimentos agressivos também pioram o quadro. Por isso o tratamento sempre inclui fotoproteção rigorosa e manutenção contínua, não só as sessões em consultório.',
      },
    ],
  }),
  base('manchas', 'Tratamento de Manchas', 'pele', 'Clareamento de manchas por sol, acne ou inflamação.', 'Mancha tem origem, e conduta.'),
  base('hidratacao-profunda', 'Hidratação Profunda', 'pele', 'Reposição de hidratação e barreira cutânea.', 'Pele hidratada reflete diferente.'),
  base('rejuvenescimento', 'Rejuvenescimento', 'pele', 'Protocolos combinados para viço, textura e firmeza.', 'Rejuvenescer é devolver qualidade.'),
  base('peeling-intimo', 'Peeling Íntimo', 'pele', 'Clareamento da região íntima e virilha.', 'Cuidado também aqui.'),

  // --- CAPILAR
  base('intradermoterapia-capilar', 'Intradermoterapia Capilar (MMP)', 'capilar', 'Ativos aplicados diretamente no couro cabeludo.', 'O ativo onde ele precisa agir.', { destaque: true }),
  base('microagulhamento-capilar', 'Microagulhamento Capilar', 'capilar', 'Estímulo do couro cabeludo e absorção de ativos.', 'Estímulo na raiz.'),
  base('queda-capilar', 'Tratamento de Queda Capilar', 'capilar', 'Investigação da causa e protocolo de controle da queda.', 'Queda tem causa.'),
  base('alopecias', 'Tratamento de Alopecias', 'capilar', 'Protocolos para os diferentes tipos de alopecia.', 'Cada alopecia, uma conduta.'),
  base('calvicie-inicial', 'Calvície Inicial', 'capilar', 'Intervenção precoce para desaceleração da calvície.', 'Cedo muda o prognóstico.'),

  // --- VASCULAR
  base(
    'tratamento-de-vasinhos',
    'Tratamento de Vasinhos (Escleroterapia)',
    'vascular',
    'Escleroterapia para vasinhos nas pernas, sessão a sessão.',
    'Vasinhos saem em série.',
    {
      destaque: true,
      descricao: [
        'A escleroterapia, também chamada de PEIM, trata os vasinhos das pernas por aplicação direta, vaso a vaso. A substância aplicada faz o vaso fechar, e o próprio organismo o reabsorve ao longo das semanas seguintes.',
        'É um tratamento em série: os vasos não somem todos na primeira sessão, e a avaliação define quantas sessões o seu caso pede e qual o intervalo entre elas.',
        'Nem todo vasinho é candidato à escleroterapia. Parte dos casos exige investigação vascular antes, e essa distinção é feita na avaliação, não no balcão.',
      ],
      indicacoes: [
        'Vasinhos finos e avermelhados nas pernas e coxas',
        'Telangiectasias que aparecem ou pioram com o tempo',
        'Histórico familiar de vasinhos em membros inferiores',
        'Incômodo estético com a região, com ou sem sintoma associado',
      ],
      duracao: 'PENDENTE: confirmar com a Dra.',
      sessoes: 'PENDENTE: confirmar com a Dra.',
      resultado: 'PENDENTE: confirmar com a Dra.',
      faq: [
        {
          p: 'Escleroterapia e PEIM são a mesma coisa?',
          r: 'Na prática, sim. PEIM é a sigla de Procedimento Estético Injetável em Microvasos, o nome técnico usado entre profissionais. Escleroterapia é como o procedimento é conhecido pela maioria das pacientes. Os dois termos descrevem o mesmo tratamento.',
        },
        {
          p: 'Os vasinhos somem de vez?',
          r: 'O vaso tratado é fechado e reabsorvido, e esse não volta. Mas a predisposição a formar novos vasinhos continua, então é comum haver manutenção ao longo dos anos. Isso não é falha do tratamento: é a natureza do quadro.',
        },
        {
          p: 'Quantas sessões são necessárias?',
          r: 'De uma a dez sessões, conforme a extensão. Na maior parte dos casos a melhora já fica perceptível a partir da terceira sessão.',
        },
      ],
      seo: {
        title: 'Tratamento de Vasinhos (Escleroterapia) no Guarujá | Dra. Fernanda Paz',
        description:
          'Escleroterapia para vasinhos nas pernas no Guarujá, também conhecida como PEIM. Avaliação individual com biomédica esteta. Agende sua consulta.',
      },
    }
  ),

  // --- BEM-ESTAR
  base('soroterapia', 'Soroterapia', 'bem-estar', 'Reposição de vitaminas e minerais por via intravenosa.', 'Suporte de dentro para fora.'),
];

// --- helpers ---
export const porCategoria = (c: CategoriaSlug) => PROCEDIMENTOS.filter((p) => p.categoria === c);
export const acharCategoria = (slug: string) => CATEGORIAS.find((c) => c.slug === slug);
export const acharProcedimento = (categoria: string, slug: string) =>
  PROCEDIMENTOS.find((p) => p.categoria === categoria && p.slug === slug);
export const destaques = () => PROCEDIMENTOS.filter((p) => p.destaque);
export const totalProcedimentos = PROCEDIMENTOS.length;

/* --- fichas técnicas (duração, sessões, resultado) confirmadas pela Dra. ---
   Aplicadas por cima para não misturar dado clínico com o corpo editorial.
   Editar em lib/fichas.ts. */
for (const c of CATEGORIAS) {
  if (SEO_CATEGORIAS[c.slug]) c.seo = SEO_CATEGORIAS[c.slug];
}

for (const p of PROCEDIMENTOS) {
  Object.assign(p, CORPOS[p.slug] ?? {});
  if (SEO[p.slug]) p.seo = SEO[p.slug];
  if (FAQS[p.slug]) p.faq = [...p.faq, ...FAQS[p.slug]];
  if (LOCAL[p.slug]) p.descricao = [...p.descricao, LOCAL[p.slug]];
  const f = FICHAS[p.slug];
  if (!f) continue;
  const { faqExtra, ...campos } = f;
  Object.assign(p, campos);
  if (faqExtra) p.faq = [...p.faq, ...faqExtra];
}
