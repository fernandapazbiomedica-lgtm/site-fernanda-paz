/**
 * Fichas técnicas: duração, sessões e tempo de resultado.
 *
 * Base: respostas da Dra. Fernanda Paz em 24/08/2026. Os números são dela.
 * A redação foi trabalhada para dizer, em cada procedimento, o que de fato
 * acontece naquele intervalo, em vez de repetir "entre 15 e 30 dias" em
 * quarenta páginas.
 *
 * Onde a Dra. não definiu prazo, o campo diz que a definição acontece na
 * avaliação. Nada foi inventado.
 *
 * `faqExtra` acrescenta perguntas ao FAQ da página sem sobrescrever as que já
 * existem. Usado onde o prazo precisa de explicação que não cabe na ficha.
 *
 * Este arquivo é aplicado POR CIMA de PROCEDIMENTOS. Sobrescreve apenas
 * duracao / sessoes / resultado e acrescenta faqExtra ao final do FAQ,
 * não encosta em descrição, indicações, benefícios ou contraindicações.
 */

export type Ficha = {
  duracao: string;
  sessoes: string;
  resultado: string;
  faqExtra?: { p: string; r: string }[];
};

/* Preenchimentos com ácido hialurônico se comportam da mesma forma em todas as
   regiões: volume imediato, inchaço, e o desenho real aparecendo quando ele cede.
   O que muda é o que está sendo construído, e é isso que cada texto diz. */
const PREENCHIMENTO = {
  duracao: 'Cerca de 1 hora',
  sessoes: 'Uma sessão',
};

export const FICHAS: Record<string, Ficha> = {
  // =========================== FACIAL
  'harmonizacao-facial': {
    duracao: 'De 40 minutos a 2 horas, conforme a quantidade de procedimentos do plano',
    sessoes: 'Uma sessão, com retoque se necessário',
    resultado:
      'A mudança aparece na hora, mas ainda com inchaço. O rosto assenta entre 15 e 30 dias, e é esse o resultado que conta.',
  },
  'toxina-botulinica': {
    duracao: 'Cerca de 30 minutos',
    sessoes: 'Uma sessão',
    resultado:
      'Começa a agir em poucos dias e se completa em até 15. O efeito dura de 3 a 4 meses.',
  },
  'preenchimento-labial': {
    ...PREENCHIMENTO,
    resultado:
      'Volume na hora. O contorno definitivo aparece quando o inchaço cede, entre 15 e 30 dias. Nunca julgue o resultado na primeira semana.',
  },
  'preenchimento-mento': {
    ...PREENCHIMENTO,
    resultado:
      'A projeção do queixo aparece na aplicação. O perfil final se define entre 15 e 30 dias, quando o inchaço sai.',
  },
  'preenchimento-malar': {
    ...PREENCHIMENTO,
    resultado:
      'A sustentação do terço médio é imediata. O contorno natural aparece entre 15 e 30 dias.',
  },
  'preenchimento-mandibular': {
    ...PREENCHIMENTO,
    resultado:
      'A linha de mandíbula aparece na hora. O desenho final se assenta entre 15 e 30 dias.',
  },
  'bigode-chines': {
    ...PREENCHIMENTO,
    resultado:
      'O sulco suaviza na aplicação. O resultado natural, sem peso na região, aparece entre 15 e 30 dias.',
  },
  rinomodelacao: {
    ...PREENCHIMENTO,
    resultado:
      'O novo perfil aparece na hora. Entre 15 e 30 dias o inchaço sai e o traço fica definido.',
  },
  'bioestimuladores-faciais': {
    duracao: 'Cerca de 1 hora',
    sessoes: 'Uma sessão, com reavaliação depois do período de estímulo',
    // Prazos conforme a literatura sobre hidroxiapatita de cálcio (ver faqExtra).
    // PENDENTE de conferência da Dra.: ela usa outros bioestimuladores além de CaHA.
    resultado:
      'Progressivo. O volume que aparece no dia da aplicação não é o resultado: ele sai em 1 a 3 meses. O colágeno novo se firma por volta dos 3 meses e continua a evoluir até cerca de 6.',
    faqExtra: [
      {
        p: 'Por que o resultado do bioestimulador some depois de algumas semanas?',
        r: 'Não some, o que sai é outra coisa. O bioestimulador vem em um gel que dá volume imediato, e esse gel é reabsorvido pelo organismo entre 1 e 3 meses. Muita paciente entende essa fase como perda do resultado e desanima justamente quando o tratamento está começando a funcionar. O resultado real é o colágeno que o seu corpo produz em resposta ao estímulo, e ele se firma por volta dos 3 meses.',
      },
      {
        p: 'Quando o resultado do bioestimulador está completo?',
        r: 'Os estudos sobre hidroxiapatita de cálcio mostram produção de colágeno novo já nas primeiras semanas, com pico por volta de 90 dias e ganho ainda mensurável entre 4 e 7 meses. Na prática, a avaliação de resultado é feita a partir do terceiro mês. Antes disso o processo ainda está em curso.',
      },
    ],
  },
  pdrn: {
    duracao: 'Cerca de 1 hora',
    sessoes: 'Uma sessão, reavaliada depois do primeiro mês',
    resultado:
      'A pele responde de forma gradual. O ganho de qualidade (viço, textura e hidratação) fica visível entre 15 e 30 dias.',
  },
  'fios-de-sustentacao': {
    ...PREENCHIMENTO,
    resultado:
      'O reposicionamento é imediato. Entre 15 e 30 dias o inchaço sai e o resultado fica natural.',
  },
  skinbooster: {
    duracao: 'Cerca de 1 hora',
    sessoes: 'Uma sessão, reavaliada depois do primeiro mês',
    resultado:
      'A pele começa a responder nos primeiros dias. O viço e a hidratação se firmam entre 15 e 30 dias.',
  },
  'microagulhamento-facial': {
    duracao: 'Cerca de 1 hora',
    sessoes: 'Uma sessão, reavaliada depois do primeiro mês',
    resultado:
      'A pele descama nos primeiros dias e se refaz por baixo. A textura nova aparece entre 15 e 30 dias.',
  },
  'cicatrizes-de-acne': {
    duracao: 'Cerca de 1 hora',
    sessoes: 'De 3 a 5 sessões',
    resultado:
      'Cada sessão suaviza um pouco a profundidade da cicatriz. A diferença aparece entre 15 e 30 dias e vai somando ao longo do protocolo.',
  },
  'peelings-faciais': {
    duracao: 'Cerca de 1 hora',
    sessoes: 'Uma sessão, reavaliada depois do primeiro mês',
    resultado:
      'A descamação passa nos primeiros dias. A pele renovada aparece entre 15 e 30 dias.',
  },
  'planejamento-skincare': {
    duracao: 'Cerca de 1 hora',
    sessoes: 'Uma consulta, com reavaliação da rotina ao longo do tempo',
    // A Dra. deixou o campo em branco: é consulta, não procedimento.
    resultado:
      'Depende da rotina prescrita e da constância com que ela é seguida. Não há prazo fixo: pele responde a hábito, não a sessão.',
  },

  // =========================== CORPORAL
  'bioestimuladores-corporais': {
    duracao: 'Cerca de 1 hora',
    sessoes:
      'Uma sessão, com manutenção anual. Em flacidez mais acentuada, três sessões, uma por mês, por três meses.',
    resultado:
      'Progressivo. O volume do dia da aplicação é do veículo e sai em 1 a 3 meses; o colágeno novo se firma por volta dos 3 meses e evolui até cerca de 6.',
    faqExtra: [
      {
        p: 'Em quanto tempo o bioestimulador corporal faz efeito?',
        r: 'O estímulo de colágeno é gradual. Os estudos sobre hidroxiapatita de cálcio mostram colágeno novo já nas primeiras semanas, com pico por volta de 90 dias e ganho ainda mensurável entre 4 e 7 meses. Por isso a avaliação de resultado é feita a partir do terceiro mês, e não na semana seguinte à aplicação.',
      },
    ],
  },
  flacidez: {
    duracao: 'Cerca de 1 hora',
    sessoes: 'De 1 a 3 sessões, conforme o grau de flacidez',
    resultado:
      'Progressivo, acompanhando a produção de colágeno. A firmeza se instala ao longo dos meses seguintes, com avaliação a partir do terceiro.',
  },
  estrias: {
    duracao: 'Cerca de 1 hora',
    sessoes: 'De 1 a 10 sessões, conforme a extensão e há quanto tempo a estria existe',
    resultado:
      'A textura melhora antes da cor. Cada sessão soma à anterior, com diferença perceptível entre 15 e 30 dias.',
  },
  celulite: {
    duracao: 'Cerca de 1 hora',
    sessoes: 'De 1 a 5 sessões',
    resultado:
      'A pele fica mais lisa de forma gradual. A diferença aparece entre 15 e 30 dias por sessão e se acumula ao longo do protocolo.',
  },
  'lipo-enzimatica': {
    duracao: 'Cerca de 30 minutos',
    sessoes: 'Protocolo em série, a quantidade é definida na avaliação, conforme a região e o objetivo',
    resultado:
      'A mudança de medida costuma ficar evidente a partir da quinta sessão. Antes disso o processo já está acontecendo, só não aparece ainda no espelho.',
  },
  'definicao-abdominal': {
    duracao: 'Cerca de 40 minutos',
    sessoes: 'De 1 a 7 sessões',
    resultado:
      'Depende do seu percentual de gordura: quanto menor, mais rápido a musculatura que já existe aparece. A previsão é feita na avaliação, não antes dela.',
  },
  'modelacao-abdominal': {
    duracao: 'De 1 hora a 1 hora e 30',
    sessoes: 'Uma sessão',
    resultado:
      'O desenho aparece na aplicação. O contorno final se assenta entre 15 e 30 dias, quando o inchaço sai.',
  },
  'microagulhamento-corporal': {
    duracao: 'De 1 hora a 1 hora e 30',
    sessoes: 'De 1 a 10 sessões, conforme a região e a extensão',
    resultado:
      'A pele se refaz em camadas. Cada sessão entrega entre 15 e 30 dias, e o ganho é cumulativo ao longo do protocolo.',
  },
  'peelings-corporais': {
    duracao: 'De 1 hora a 1 hora e 30',
    sessoes: 'De 1 a 10 sessões',
    resultado:
      'A descamação passa nos primeiros dias e a pele renovada aparece entre 15 e 30 dias, somando a cada sessão.',
  },
  'gordura-localizada': {
    duracao: 'Cerca de 30 minutos',
    sessoes: 'Protocolo em série, a quantidade é definida na avaliação, conforme a região e o objetivo',
    resultado:
      'A redução de medida costuma ficar evidente a partir da quinta sessão.',
  },
  papada: {
    duracao: 'Cerca de 30 minutos',
    sessoes: 'De 1 a 6 sessões',
    resultado:
      'Depende do seu percentual de gordura corporal. A previsão de sessões e de tempo é feita na avaliação.',
  },
  subcisao: {
    duracao: 'Cerca de 1 hora',
    sessoes: 'De 1 a 5 sessões',
    resultado:
      'A depressão da pele suaviza a cada sessão. A diferença aparece entre 15 e 30 dias e é cumulativa.',
  },
  gluteo: {
    duracao: 'De 1 hora a 1 hora e 30',
    sessoes: 'Uma sessão',
    resultado:
      'A projeção é imediata. O contorno definitivo aparece entre 15 e 30 dias, quando o inchaço cede.',
  },

  // =========================== PELE
  'hidratacao-profunda': {
    duracao: 'Cerca de 1 hora',
    sessoes: 'De 1 a 5 sessões',
    resultado:
      'A pele responde já nos primeiros dias. A hidratação se firma entre 15 e 30 dias e se aprofunda a cada sessão.',
  },
  melasma: {
    duracao: 'Cerca de 1 hora',
    sessoes: 'De 1 a 10 sessões, seguidas de manutenção contínua',
    resultado:
      'Cada sessão clareia um pouco, com diferença visível entre 15 e 30 dias. Melasma se controla: o resultado depende tanto do protocolo quanto da fotoproteção diária.',
  },
  manchas: {
    duracao: 'Cerca de 1 hora',
    sessoes: 'De 1 a 10 sessões, conforme a origem e a profundidade da mancha',
    resultado:
      'O clareamento é gradual. A diferença aparece entre 15 e 30 dias por sessão e soma ao longo do protocolo.',
  },
  rejuvenescimento: {
    duracao: 'Cerca de 1 hora',
    sessoes: 'De 1 a 10 sessões, conforme o plano montado na avaliação',
    resultado:
      'Viço e textura respondem primeiro, entre 15 e 30 dias. Firmeza leva mais tempo, porque depende de colágeno novo.',
  },
  'peeling-intimo': {
    duracao: 'Cerca de 1 hora',
    sessoes: 'De 1 a 10 sessões',
    resultado:
      'O clareamento é gradual, com diferença entre 15 e 30 dias por sessão.',
  },

  // =========================== CAPILAR
  'intradermoterapia-capilar': {
    duracao: 'Cerca de 30 minutos',
    sessoes: 'De 1 a 10 sessões',
    resultado:
      'O fio tem ciclo próprio: nada aparece antes de 3 meses, e isso é esperado. A partir daí, a diferença começa a ser visível.',
  },
  'microagulhamento-capilar': {
    duracao: 'Cerca de 30 minutos',
    sessoes: 'De 1 a 10 sessões',
    resultado:
      'A partir de 3 meses. Esse é o tempo que o ciclo do fio leva para mostrar resposta ao estímulo.',
  },
  'queda-capilar': {
    duracao: 'Cerca de 30 minutos',
    sessoes:
      'Depende da causa identificada na avaliação. Em parte dos casos o tratamento é contínuo.',
    resultado:
      'A partir de 3 meses. Antes disso, o que se observa é a redução da queda: o fio novo vem depois.',
  },
  alopecias: {
    duracao: 'Cerca de 30 minutos',
    sessoes:
      'Depende do tipo de alopecia e da causa. Em parte dos casos o tratamento é contínuo.',
    resultado:
      'A partir de 3 meses, acompanhando o ciclo de crescimento do fio.',
  },
  'calvicie-inicial': {
    duracao: 'Cerca de 30 minutos',
    sessoes: 'Tratamento contínuo, para conter a progressão',
    resultado:
      'A partir de 3 meses. Aqui o objetivo principal não é ganhar fio, é não perder o que ainda existe, e isso se mede em estabilidade, não em antes e depois.',
  },

  // =========================== VASCULAR
  'tratamento-de-vasinhos': {
    duracao: 'Cerca de 1 hora',
    sessoes: 'De 1 a 10 sessões, conforme a extensão',
    resultado:
      'Os vasos saem em série, não de uma vez. Na maior parte dos casos a melhora já fica clara a partir da terceira sessão.',
  },

  // =========================== BEM-ESTAR
  soroterapia: {
    duracao: 'Cerca de 1 hora',
    sessoes: 'Depende do caso e da finalidade da fórmula indicada',
    // ⚠️ A resposta original citava perda de apetite e redução de retenção de
    // líquido já na primeira sessão. Promessa de resultado ligada a emagrecimento
    // isso cai nas regras de publicidade do conselho. Não publicar assim.
    // Texto neutro abaixo, aguardando decisão da Dra.
    resultado:
      'Varia conforme a fórmula indicada e o objetivo do protocolo. A expectativa é definida na avaliação, caso a caso.',
  },
};
