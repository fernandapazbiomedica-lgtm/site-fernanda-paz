/**
 * Corpo editorial: descrição, indicações e FAQ.
 *
 * Escrito para substituir o texto genérico dos procedimentos que ainda estavam
 * no esqueleto padrão ("é indicado a partir de uma avaliação individual...").
 *
 * ⚠️ PENDENTE DE REVISÃO CLÍNICA. Nenhum prazo, dose ou promessa de resultado
 * foi afirmado aqui: o que existe é explicação de mecanismo e de indicação,
 * escrita a partir da literatura corrente. Precisa passar pela Dra. Fernanda
 * antes de sair do aviso de pendência.
 *
 * Aplicado por cima de PROCEDIMENTOS, junto com FICHAS.
 *
 * nota de arquitetura de SEO
 * Queda capilar, alopecias e calvície inicial são três páginas separadas de
 * propósito. Não é redundância:
 *   · queda capilar   → sintoma. "Está caindo muito cabelo." Busca de aflição.
 *   · alopecias       → diagnóstico. Quem já tem nome para o quadro.
 *   · calvície inicial→ prognóstico. Quem quer impedir o que já começou.
 * São três intenções de busca distintas. Fundir canibaliza as três.
 */

export type Corpo = {
  descricao?: string[];
  indicacoes?: string[];
  faq?: { p: string; r: string }[];
};

export const CORPOS: Record<string, Corpo> = {
  // CAPILAR
  'intradermoterapia-capilar': {
    descricao: [
      'A intradermoterapia capilar (também chamada de MMP) entrega os ativos diretamente na camada do couro cabeludo onde o folículo está. É uma via diferente da tópica e da oral: o produto não precisa atravessar a barreira da pele nem passar pelo fígado antes de chegar ao alvo.',
      'A fórmula não é padrão. Ela é montada a partir do que a avaliação identificou: deficiência nutricional, componente hormonal, inflamação do couro cabeludo, ou uma combinação disso. Aplicar o mesmo coquetel em todo mundo é o erro mais comum desse procedimento.',
      'Funciona como parte de um plano, raramente sozinha. Costuma ser combinada com tratamento oral, tópico e com a correção da causa que fez o cabelo cair, porque o ativo sustenta o folículo, mas não resolve o que está por trás.',
    ],
    indicacoes: [
      'Queda de cabelo com causa já identificada na avaliação',
      'Afinamento progressivo do fio, com couro cabeludo aparecendo mais',
      'Necessidade de sustentar o resultado de um tratamento oral em curso',
      'Couro cabeludo com sinal de inflamação ou oleosidade desregulada',
    ],
    faq: [
      {
        p: 'A intradermoterapia capilar dói?',
        r: 'A aplicação é superficial e feita com agulha muito fina, mas o couro cabeludo é uma região sensível, e a maioria descreve como incômodo pontual, não como dor contínua. Medidas de conforto são combinadas antes da sessão.',
      },
      {
        p: 'Posso lavar o cabelo depois?',
        r: 'As orientações de pós-procedimento são passadas na sessão e incluem um intervalo antes da lavagem, para não remover o que acabou de ser aplicado. São simples e fazem diferença no resultado.',
      },
      {
        p: 'Substitui o tratamento oral?',
        r: 'Não. São vias complementares. A intradermoterapia leva o ativo direto ao folículo; o tratamento oral e a correção da causa atuam no que fez o quadro começar. Um sem o outro costuma render menos.',
      },
    ],
  },

  'microagulhamento-capilar': {
    descricao: [
      'O microagulhamento capilar cria microlesões controladas no couro cabeludo. Elas acionam a resposta natural de reparo do tecido (vascularização, fatores de crescimento, estímulo ao folículo) e, ao mesmo tempo, abrem caminho para que os ativos aplicados na sequência sejam absorvidos.',
      'É por isso que ele raramente vem sozinho: a técnica potencializa o que é aplicado junto ou logo depois. A combinação com a fórmula certa é o que define o resultado, mais do que o agulhamento em si.',
      'Como todo estímulo, depende de repetição e de intervalo. Uma sessão isolada não muda o ciclo do fio.',
    ],
    indicacoes: [
      'Afinamento capilar difuso, sem área de calvície instalada',
      'Necessidade de melhorar a absorção dos ativos aplicados',
      'Couro cabeludo com circulação comprometida',
      'Complemento a um protocolo capilar já em andamento',
    ],
    faq: [
      {
        p: 'Microagulhamento capilar faz o cabelo nascer?',
        r: 'Ele estimula o folículo que ainda existe e melhora o ambiente em que o fio cresce. Onde o folículo já se perdeu, não há o que estimular, e essa distinção é feita na avaliação do couro cabeludo, antes de começar.',
      },
      {
        p: 'Qual a diferença para a intradermoterapia?',
        r: 'A intradermoterapia entrega o ativo em profundidade, ponto a ponto. O microagulhamento estimula o tecido e abre a via de absorção. Frequentemente são usados juntos, cada um fazendo uma parte.',
      },
    ],
  },

  'queda-capilar': {
    descricao: [
      'Cabelo cai todo dia: em torno de cem fios é fisiológico. O que exige investigação é a mudança: cair mais do que caía, encontrar fio no travesseiro e no ralo em quantidade diferente, ver o rabo de cavalo mais fino do que era.',
      'Queda é sintoma, não diagnóstico. Ela pode vir de deficiência de ferro ou vitamina D, de alteração de tireoide, de um pós-parto, de um período de estresse agudo, de uma dieta restritiva, de medicação, de quadro hormonal, ou de mais de um desses ao mesmo tempo. Tratar sem saber qual é a causa é tratar no escuro.',
      'Por isso a conduta começa pela investigação: avaliação do couro cabeludo e, quando indicado, exames. Só depois se define o protocolo. É um caminho mais lento no começo e mais eficiente no fim.',
    ],
    indicacoes: [
      'Aumento perceptível da queda em relação ao que era habitual',
      'Rabo de cavalo ou volume da raiz visivelmente mais fino',
      'Queda que começou depois de parto, cirurgia, dieta ou período de estresse',
      'Queda associada a alteração hormonal ou de tireoide',
    ],
    faq: [
      {
        p: 'Quantos fios por dia é normal cair?',
        r: 'A referência mais usada é de até cerca de cem fios por dia, mas o número isolado diz pouco. O que importa é a mudança em relação ao seu padrão. Quem sempre caiu pouco e passou a cair mais tem motivo para investigar, mesmo dentro da faixa considerada normal.',
      },
      {
        p: 'A queda depois do parto é permanente?',
        r: 'O eflúvio pós-parto costuma ser autolimitado e ligado à queda hormonal do puerpério. Isso não significa que deva ser ignorado: acompanhamento e suporte nutricional encurtam o quadro e evitam que ele se some a outra causa que já estivesse presente.',
      },
      {
        p: 'Preciso fazer exame antes de tratar?',
        r: 'Na maior parte dos casos, sim. Queda tem causas que só aparecem em exame: ferro, ferritina, vitamina D, tireoide. Começar um protocolo sem esse mapa é o que faz muita paciente tratar por meses sem resposta.',
      },
    ],
  },

  alopecias: {
    descricao: [
      'Alopecia é o nome que se dá à perda de cabelo quando ela já tem um padrão reconhecível. E não existe uma só: areata, androgenética, de tração, frontal fibrosante e as cicatriciais são quadros diferentes, com causas diferentes e condutas que não se substituem.',
      'A distinção mais importante é entre alopecia cicatricial e não cicatricial. Na não cicatricial o folículo continua ali, adormecido ou fragilizado, e há o que estimular. Na cicatricial o folículo foi substituído por tecido fibroso, e o objetivo passa a ser conter a progressão, porque o que já se perdeu ali não volta.',
      'É essa leitura que determina se o caminho é estímulo, controle de inflamação, correção de causa externa ou encaminhamento. Ela é feita na avaliação do couro cabeludo, antes de qualquer aplicação.',
    ],
    indicacoes: [
      'Falhas circulares e bem delimitadas no couro cabeludo',
      'Recuo da linha frontal do cabelo',
      'Perda de cabelo em região de tração (tranças, apliques, penteados presos)',
      'Área do couro cabeludo com aspecto liso, brilhante ou sem óstios visíveis',
    ],
    faq: [
      {
        p: 'Toda alopecia tem tratamento?',
        r: 'Todas têm conduta, mas nem todas têm reversão. Nas alopecias não cicatriciais o folículo persiste e pode responder a estímulo. Nas cicatriciais, o objetivo realista é estabilizar e impedir que a área aumente. Saber em qual grupo o seu caso está muda tudo, inclusive a expectativa.',
      },
      {
        p: 'Alopecia areata volta depois de tratada?',
        r: 'A areata tem curso imprevisível e episódios de recorrência são possíveis, porque o mecanismo por trás dela é imunológico. O acompanhamento existe justamente para identificar cedo um novo episódio, quando a resposta ao tratamento é melhor.',
      },
      {
        p: 'Usar coque e trança apertados causa alopecia?',
        r: 'A tração mantida por tempo prolongado é uma causa reconhecida de alopecia, sobretudo nas bordas do couro cabeludo. Nas fases iniciais é reversível com a mudança do hábito; mantida por anos, pode evoluir para perda definitiva do folículo.',
      },
    ],
  },

  'calvicie-inicial': {
    descricao: [
      'Calvície, ou alopecia androgenética, é progressiva e tem componente genético. Isso muda a lógica do tratamento: o objetivo não é reverter, é interromper a linha de queda antes que ela desça mais. E quanto mais cedo isso começa, mais folículo existe para preservar.',
      'A fase inicial é justamente a que passa despercebida. O sinal costuma ser o afinamento do fio, não a falha: os cabelos ficam mais finos e mais claros na região afetada (entradas, alto da cabeça, coroa), e o couro cabeludo começa a aparecer sob a luz antes que exista qualquer área calva.',
      'O tratamento é contínuo. Não é uma série que termina: é manutenção, do mesmo jeito que se controla qualquer quadro progressivo. Interromper devolve a evolução ao ponto em que ela estava.',
    ],
    indicacoes: [
      'Fios visivelmente mais finos no alto da cabeça ou nas entradas',
      'Couro cabeludo aparecendo mais sob luz direta',
      'Histórico familiar de calvície, com os primeiros sinais surgindo',
      'Desejo de intervir cedo, antes que exista área de falha instalada',
    ],
    faq: [
      {
        p: 'Dá para reverter a calvície?',
        r: 'O que a intervenção precoce faz é preservar o folículo que ainda funciona e melhorar a qualidade do fio que ainda nasce. Onde o folículo já se perdeu, não há reversão por via clínica. É por isso que o momento de começar importa mais aqui do que em qualquer outro quadro capilar.',
      },
      {
        p: 'Se eu parar o tratamento, perco o que ganhei?',
        r: 'Sim. A calvície é progressiva por natureza, e o tratamento age contendo essa progressão, não eliminando a predisposição. Interrompido, o quadro retoma o curso que teria. Isso é dito na primeira consulta, porque muda a decisão de começar.',
      },
      {
        p: 'Homem e mulher tratam do mesmo jeito?',
        r: 'O mecanismo é o mesmo, mas o padrão de perda e a conduta não são. Na mulher a rarefação costuma ser difusa no alto da cabeça, preservando a linha frontal, e a investigação hormonal tem peso maior. O protocolo é definido a partir disso.',
      },
    ],
  },

  // PELE
  manchas: {
    descricao: [
      'Mancha não é uma coisa só. A que veio do sol, a que sobrou de uma espinha e a que se instalou por alteração hormonal têm profundidades diferentes na pele, e é a profundidade, não a cor, que determina o que funciona.',
      'Mancha superficial responde bem a protocolos de renovação e clareamento. Mancha profunda exige abordagem mais lenta e cuidado redobrado, porque tratamento agressivo em pigmento profundo faz o efeito contrário: inflama e escurece mais.',
      'Duas coisas sustentam qualquer resultado aqui: identificar a origem e manter a fotoproteção. Sem a segunda, o clareamento conquistado em consultório volta, e volta mais rápido do que levou para sair.',
    ],
    indicacoes: [
      'Manchas escuras que sobraram depois de acne ou de inflamação',
      'Manchas de sol em rosto, colo, mãos ou ombros',
      'Tom de pele irregular, sem uniformidade',
      'Manchas que voltaram depois de tratamentos anteriores',
    ],
    faq: [
      {
        p: 'Qual a diferença entre mancha de acne e melasma?',
        r: 'A mancha pós-acne é uma hiperpigmentação inflamatória: aparece onde houve lesão e tende a clarear com o tempo e com tratamento. O melasma é um quadro crônico, geralmente simétrico, com forte componente hormonal e alta taxa de recidiva. As condutas são diferentes, e confundir os dois custa meses.',
      },
      {
        p: 'Por que a mancha voltou depois de clarear?',
        r: 'Quase sempre por exposição: sol, calor e luz visível, incluindo a de telas. O tratamento clareia o pigmento existente, mas não remove o estímulo que o produziu. É por isso que fotoproteção diária não é recomendação de rotina: faz parte do tratamento.',
      },
    ],
  },

  'hidratacao-profunda': {
    descricao: [
      'Hidratação de consultório trabalha em uma camada que o creme não alcança. O produto tópico age na superfície e na barreira cutânea; o protocolo aplicado repõe água e substâncias de retenção na profundidade em que a pele efetivamente perdeu.',
      'A diferença aparece no que se vê: pele desidratada reflete pouca luz, marca linhas finas que não são rugas de verdade e reage mal a maquiagem, que acumula nas dobras. Repor essa água muda o comportamento da pele antes de mudar a estrutura dela.',
      'Não substitui a rotina de casa: sustenta. A pele volta a desidratar se o que a desidratou continuar acontecendo: sol, ar-condicionado, sabonete errado, pouca água.',
    ],
    indicacoes: [
      'Pele opaca, sem reflexo de luz',
      'Linhas finas que aparecem por desidratação e não por perda de colágeno',
      'Maquiagem que acumula ou craquela ao longo do dia',
      'Sensação de repuxamento depois da limpeza',
    ],
    faq: [
      {
        p: 'Pele oleosa também precisa de hidratação?',
        r: 'Precisa, e com frequência é a que mais precisa. Oleosidade e desidratação são coisas distintas: uma é excesso de sebo, a outra é falta de água. Pele oleosa e desidratada ao mesmo tempo é um quadro comum, e muitas vezes a oleosidade aumenta justamente como resposta à falta de água.',
      },
      {
        p: 'Qual a diferença para o skinbooster?',
        r: 'Os dois trabalham hidratação em profundidade e a escolha depende do que a sua pele apresenta. A definição de qual protocolo entra, e se entram combinados, é feita na avaliação.',
      },
    ],
  },

  rejuvenescimento: {
    descricao: [
      'Rejuvenescer não é apagar o tempo: é devolver qualidade ao tecido. A pele envelhecida perde três coisas ao mesmo tempo: água, colágeno e uniformidade de tom. Cada uma responde a um estímulo diferente, e por isso rejuvenescimento quase nunca é um procedimento só.',
      'A ordem importa. Textura e viço respondem primeiro, porque dependem de renovação superficial. Firmeza demora mais, porque depende de colágeno novo, e colágeno leva meses para se organizar, não semanas.',
      'O plano é montado a partir do que a sua pele apresenta hoje, não de um pacote pronto. Combinar procedimentos sem esse mapa costuma entregar menos do que a soma das partes.',
    ],
    indicacoes: [
      'Pele com aspecto cansado, sem viço, apesar de bem cuidada',
      'Linhas finas e perda de firmeza começando a aparecer',
      'Textura irregular e poros mais evidentes',
      'Desejo de prevenir, antes que os sinais se instalem',
    ],
    faq: [
      {
        p: 'Com que idade começar?',
        r: 'Não existe idade: existe indicação. Prevenção em pele jovem tem objetivo diferente de tratamento em pele que já perdeu sustentação, e as duas coisas são legítimas. O que define a conduta é o que a avaliação encontra, não o número no documento.',
      },
      {
        p: 'Quantos procedimentos preciso combinar?',
        r: 'Depende do que a sua pele precisa. Há casos que respondem bem a um protocolo único e casos que pedem combinação em etapas. Fazer tudo de uma vez raramente é a melhor conduta, e nunca é obrigatório.',
      },
    ],
  },

  'peeling-intimo': {
    descricao: [
      'O escurecimento da virilha, da região íntima e da parte interna das coxas costuma ter causa mecânica antes de ter causa estética: atrito de roupa, depilação repetida, fricção da pele com a pele, excesso de peso, e a inflamação de baixo grau que tudo isso mantém.',
      'O peeling clareia o pigmento que já se formou. Mas se o atrito continuar, ele volta. Por isso a conduta inclui identificar o que está causando a fricção, e não só tratar a cor.',
      'É uma região de pele fina e sensível. Protocolo pensado para o rosto não se transfere para cá, e produto usado por conta própria nessa área é uma das causas mais frequentes de piora do quadro.',
    ],
    indicacoes: [
      'Escurecimento de virilha, região íntima ou parte interna das coxas',
      'Manchas por atrito de roupa ou por depilação repetida',
      'Tom irregular após perda de peso',
      'Piora do quadro após uso de produtos por conta própria',
    ],
    faq: [
      {
        p: 'É seguro fazer peeling nessa região?',
        r: 'É, desde que o protocolo seja específico para a área. A pele ali é mais fina e mais reativa que a do rosto, e o que define a segurança é a escolha do ativo, da concentração e do intervalo entre sessões, feita na avaliação, com a região examinada.',
      },
      {
        p: 'O escurecimento volta?',
        r: 'Volta se a causa continuar. Atrito de roupa apertada, depilação frequente e fricção mantida reproduzem o quadro. Por isso a orientação de manutenção faz parte do tratamento, não é um extra.',
      },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════════
   CORPORAL + FACIAL: 2ª leva, 25/08
   Não inclui os 8 destaques (harmonização, toxina, preenchimento labial,
   rinomodelação, bioestimuladores faciais, microagulhamento facial, lipo
   enzimática, intradermoterapia capilar): esses já têm texto aprovado.
   ═══════════════════════════════════════════════════════════════════ */

Object.assign(CORPOS, {
  // FACIAL · preenchimentos por região
  'preenchimento-mento': {
    descricao: [
      'O mento, o queixo, é o ponto que fecha o perfil. Quando ele é curto ou recuado, o nariz parece maior do que é, o contorno da mandíbula se perde e o terço inferior do rosto some. Muita paciente chega pedindo rinomodelação quando o que desequilibra o perfil está embaixo, não em cima.',
      'O preenchimento projeta o queixo na medida em que ele passa a conversar com o nariz e com a boca. É milímetro: aqui o excesso aparece rápido e endurece a expressão.',
      'É um dos procedimentos com maior efeito por volume aplicado. Frequentemente entra dentro de um plano de perfiloplastia, junto de nariz e lábios, porque o perfil se lê inteiro, não por partes.',
    ],
    indicacoes: [
      'Queixo curto ou recuado de perfil',
      'Nariz que parece proeminente por falta de projeção do queixo',
      'Contorno de mandíbula sem definição no ponto do mento',
      'Terço inferior do rosto sem estrutura',
    ],
    faq: [
      {
        p: 'Preenchimento de mento resolve papada?',
        r: 'Melhora a aparência da região porque projeta o queixo e estica a linha entre queixo e pescoço, mas não trata a gordura submentoniana em si. Se houver acúmulo, a conduta combina os dois, e essa leitura é feita na avaliação.',
      },
      {
        p: 'Dá para fazer só o queixo, sem mexer no resto?',
        r: 'Dá, e às vezes é exatamente a indicação. Um mento bem projetado pode reorganizar o perfil inteiro sem que nada mais precise ser tocado. Bom planejamento é saber onde parar.',
      },
    ],
  },

  'preenchimento-malar': {
    descricao: [
      'A região malar, a maçã do rosto, é a viga do terço médio. Quando ela perde sustentação, o que aparece embaixo é consequência: o sulco do bigode chinês aprofunda, o canto da boca cai, a região dos olhos afunda. O rosto não envelhece de baixo para cima; ele desce.',
      'Por isso o preenchimento malar frequentemente resolve queixas que a paciente localiza em outro lugar. Devolver apoio ali levanta o que estava sendo puxado, sem precisar preencher cada sulco individualmente.',
      'O risco aqui é o volume mal colocado, que gera aquele aspecto de rosto inflado. A conduta é sustentação, não enchimento: projeção no ponto de apoio, não volume espalhado.',
    ],
    indicacoes: [
      'Perda de projeção da maçã do rosto',
      'Sulco nasogeniano se aprofundando com o tempo',
      'Aspecto de rosto caído ou cansado no terço médio',
      'Olhar fundo por perda de suporte abaixo dos olhos',
    ],
    faq: [
      {
        p: 'Preenchimento malar deixa o rosto inchado?',
        r: 'O aspecto inflado vem de volume excessivo ou aplicado fora do ponto de sustentação. Quando a técnica trabalha o apoio estrutural em vez de encher a superfície, o resultado é percebido como rosto descansado, não como rosto cheio.',
      },
      {
        p: 'Por que tratar o malar se meu incômodo é o bigode chinês?',
        r: 'Porque em boa parte dos casos o sulco é sintoma, não causa. Ele se aprofunda porque perdeu apoio acima. Preencher o sulco direto sem devolver essa sustentação costuma entregar um resultado pesado e de duração menor.',
      },
    ],
  },

  'preenchimento-mandibular': {
    descricao: [
      'O contorno mandibular é o que separa rosto de pescoço. Quando ele perde definição, o rosto inteiro parece perder forma, e nenhuma quantidade de volume no terço médio compensa isso.',
      'O preenchimento redesenha a linha do ângulo até o mento, devolvendo o traço que define o terço inferior. Em rostos mais arredondados ele cria estrutura; em rostos que perderam firmeza, devolve a que existia.',
      'É técnica de arquitetura, não de volume: a diferença entre um contorno bem feito e um masculinizado está na medida e no ponto exato de aplicação.',
    ],
    indicacoes: [
      'Contorno de mandíbula pouco definido',
      'Perda de firmeza na linha entre rosto e pescoço',
      'Ângulo mandibular sem marcação',
      'Desejo de estrutura no terço inferior sem cirurgia',
    ],
    faq: [
      {
        p: 'O contorno mandibular masculiniza o rosto feminino?',
        r: 'Masculiniza quando a técnica é aplicada com medida masculina. O ângulo, a projeção e a espessura da linha são diferentes conforme o rosto, e isso é definido no planejamento, junto com você.',
      },
      {
        p: 'Serve para quem tem papada?',
        r: 'Melhora a delimitação entre rosto e pescoço, o que disfarça. Mas se houver acúmulo de gordura na região, o contorno sozinho não resolve, e a avaliação define se o caso pede os dois.',
      },
    ],
  },

  'bigode-chines': {
    descricao: [
      'O sulco nasogeniano, o bigode chinês, é a marca que desce do canto do nariz até o canto da boca. Todo mundo tem; o que muda é a profundidade, e ela aumenta conforme o terço médio perde sustentação.',
      'A conduta mais comum é também a mais equivocada: preencher o sulco direto. Isso trata o sintoma no lugar da causa, e o resultado tende a ficar pesado, com aspecto de vinco preenchido em vez de rosto descansado.',
      'Na maior parte dos casos, o que suaviza o sulco de verdade é devolver apoio acima dele. Quando o preenchimento local entra, entra como acabamento, depois que a estrutura foi resolvida.',
    ],
    indicacoes: [
      'Sulco nasogeniano marcado, visível mesmo em repouso',
      'Aspecto de cansaço na região média do rosto',
      'Sulco que se aprofundou nos últimos anos',
      'Insatisfação com resultado de preenchimento local anterior',
    ],
    faq: [
      {
        p: 'Por que não preencher o sulco diretamente?',
        r: 'Porque na maioria dos casos ele é consequência da perda de sustentação acima. Preencher só o vinco combate o efeito e deixa a causa intacta, o que costuma render um resultado com aspecto pesado e menos duradouro. Isso é avaliado antes de decidir a técnica.',
      },
      {
        p: 'É possível eliminar o bigode chinês por completo?',
        r: 'Não, e nem seria desejável. O sulco faz parte da anatomia do rosto e da expressão. O objetivo é suavizar a profundidade, não apagar a marca: rosto sem nenhum sulco lê como rosto artificial.',
      },
    ],
  },

  // FACIAL · demais
  'fios-de-sustentacao': {
    descricao: [
      'Os fios de sustentação reposicionam o tecido que desceu. Diferente do preenchimento, que devolve volume, eles trabalham vetor: puxam o tecido para o ponto onde ele estava e o fixam ali enquanto o organismo forma colágeno ao redor do fio.',
      'Isso define bem a indicação. Fio resolve queda; não resolve falta de volume. Rosto que perdeu sustentação e tecido responde bem; rosto que perdeu estrutura óssea e gordura profunda precisa de outra coisa antes, e às vezes só depois é que o fio entra.',
      'A leitura de quem é candidato é a parte que mais importa. Fio aplicado em pele com flacidez muito avançada não sustenta, e o resultado dura pouco.',
    ],
    indicacoes: [
      'Queda leve a moderada de terço médio ou inferior',
      'Contorno de face perdendo definição',
      'Sobrancelha ou canto do olho descaído',
      'Busca por reposicionamento sem cirurgia',
    ],
    faq: [
      {
        p: 'Fio de sustentação substitui o lifting cirúrgico?',
        r: 'Não. São recursos de intensidade diferente para problemas de intensidade diferente. O fio atua em queda leve a moderada e tem duração limitada; flacidez avançada é indicação cirúrgica, e nesse caso a conduta honesta é dizer isso na avaliação.',
      },
      {
        p: 'Os fios aparecem ou marcam a pele?',
        r: 'Aplicados no plano correto, não. Irregularidade visível costuma indicar profundidade inadequada ou fio mal escolhido para aquele tecido. A escolha do tipo de fio faz parte do planejamento e depende da sua pele.',
      },
    ],
  },

  skinbooster: {
    descricao: [
      'O skinbooster não preenche e não projeta. Ele deposita ácido hialurônico de baixa reticulação dentro da pele para trabalhar qualidade: hidratação profunda, viço, textura e elasticidade.',
      'É a diferença entre corrigir a forma e melhorar o material. Um rosto pode estar com as proporções certas e ainda assim parecer cansado, porque a pele perdeu capacidade de reter água e refletir luz. É esse ponto que o skinbooster ataca.',
      'Costuma entrar antes ou junto de procedimentos estruturais: pele com qualidade sustenta melhor o que for feito em cima dela.',
    ],
    indicacoes: [
      'Pele opaca, sem reflexo de luz',
      'Linhas finas de desidratação',
      'Textura irregular no rosto, pescoço, colo ou mãos',
      'Preparo de pele antes de outros procedimentos',
    ],
    faq: [
      {
        p: 'Skinbooster dá volume?',
        r: 'Não. O produto usado tem reticulação baixa justamente para se integrar à pele em vez de sustentar forma. Quem procura projeção precisa de preenchimento; quem procura qualidade de pele, de skinbooster. São objetivos diferentes e não se substituem.',
      },
      {
        p: 'Qual a diferença para a hidratação profunda?',
        r: 'Os dois trabalham hidratação em camadas que o creme não alcança, com ativos e profundidades diferentes. Qual entra, ou se entram combinados, é definido na avaliação, a partir do que a sua pele apresenta.',
      },
    ],
  },

  'cicatrizes-de-acne': {
    descricao: [
      'Cicatriz de acne não é mancha. Mancha é pigmento e clareia; cicatriz é alteração de relevo, e relevo só muda com estímulo de remodelação do tecido.',
      'Elas também não são todas iguais. As mais superficiais respondem bem a protocolos de renovação. As profundas e retraídas (aquelas que parecem puxadas para dentro) têm uma trave de fibrose no fundo que precisa ser liberada antes de qualquer estímulo, senão a pele não sobe.',
      'É por isso que o tratamento é em série e combinado. Sessão isolada melhora textura de superfície; mudar relevo pede repetição e o protocolo certo para o tipo de cicatriz que você tem.',
    ],
    indicacoes: [
      'Cicatrizes deprimidas ou retraídas no rosto',
      'Textura irregular após acne inflamatória',
      'Poros dilatados e relevo desigual',
      'Acne já controlada, com sequela de relevo',
    ],
    faq: [
      {
        p: 'A cicatriz some por completo?',
        r: 'A meta realista é reduzir profundidade e uniformizar o relevo, não apagar. Cicatriz é tecido remodelado: ele melhora de forma significativa, e a diferença costuma ser grande, mas prometer pele lisa como antes não seria honesto.',
      },
      {
        p: 'Preciso estar com a acne controlada para tratar?',
        r: 'Sim. Tratar relevo com processo inflamatório ativo tende a gerar novas lesões e novas cicatrizes. A ordem é controlar a acne primeiro, e só depois trabalhar a sequela.',
      },
    ],
  },

  'peelings-faciais': {
    descricao: [
      'O peeling provoca uma renovação controlada da pele. A profundidade dessa renovação é o que define tudo: peeling superficial melhora viço e textura com pouco tempo de recuperação; peeling mais profundo alcança mancha e relevo, e exige cuidado e disponibilidade maiores.',
      'Escolher o ativo e a concentração não é escolher o mais forte. É escolher o que a sua pele suporta sem inflamar, porque pele inflamada produz mais pigmento, e o tratamento acaba escurecendo o que veio clarear.',
      'Fototipo, histórico de melasma, uso recente de ácidos e exposição solar prevista entram todos nessa conta, e por isso a definição acontece na avaliação.',
    ],
    indicacoes: [
      'Textura irregular e pele sem viço',
      'Manchas superficiais e tom desigual',
      'Poros dilatados e oleosidade desregulada',
      'Marcas superficiais deixadas por acne',
    ],
    faq: [
      {
        p: 'Peeling sempre descama?',
        r: 'Não. A descamação depende do ativo e da profundidade: há protocolos com renovação discreta, quase sem descamação visível, e outros em que ela é esperada e faz parte. O que vai acontecer na sua pele é informado antes da sessão, não durante.',
      },
      {
        p: 'Posso fazer peeling no verão?',
        r: 'Depende do peeling e da sua disciplina com fotoproteção. Alguns protocolos são perfeitamente viáveis; outros são desaconselhados quando há exposição solar prevista. Essa decisão entra na avaliação junto com a sua rotina.',
      },
    ],
  },

  'planejamento-skincare': {
    descricao: [
      'Grande parte do resultado de qualquer tratamento estético acontece fora do consultório. A sessão é um evento; a pele responde a hábito.',
      'O planejamento de skincare é uma consulta, não um procedimento. Parte do diagnóstico da sua pele para montar a rotina: quais ativos, em que ordem, em qual momento do dia, e por quanto tempo antes de reavaliar. Também define o que sair: rotina cheia de produto costuma render menos que rotina certa.',
      'É a etapa que mais barato custa e que mais frequentemente é ignorada. Sem ela, o consultório fica corrigindo o que a rotina desfaz.',
    ],
    indicacoes: [
      'Rotina montada por conta própria, sem resultado claro',
      'Excesso de produtos ou dúvida sobre a ordem de uso',
      'Pele reativa a ativos usados sem orientação',
      'Preparo ou manutenção de um tratamento em andamento',
    ],
    faq: [
      {
        p: 'Preciso trocar todos os meus produtos?',
        r: 'Quase nunca. O mais comum é reorganizar o que você já tem, ajustar ordem e frequência, e trocar um ou dois itens pontuais. Prescrição que joga fora a rotina inteira costuma dizer mais sobre venda do que sobre pele.',
      },
      {
        p: 'Skincare substitui procedimento?',
        r: 'Não, e o contrário também não. Rotina sustenta e prolonga; procedimento entrega o que rotina sozinha não alcança. Quem tenta um sem o outro costuma repetir sessão com mais frequência do que precisaria.',
      },
    ],
  },

  // CORPORAL
  'bioestimuladores-corporais': {
    descricao: [
      'O bioestimulador não preenche a região onde é aplicado: ele avisa o seu organismo para produzir colágeno ali. O que sustenta o resultado, no fim, é tecido seu.',
      'Isso explica por que o efeito é lento e por que ele dura. Nas primeiras semanas o que se vê é o veículo do produto, que o corpo reabsorve; o resultado real chega depois, quando o colágeno novo já se organizou.',
      'No corpo ele responde principalmente a flacidez de pele: braços, abdômen, coxas, glúteos e a região interna dos joelhos. Não é tratamento de gordura localizada, e essa distinção muda completamente a indicação.',
    ],
    indicacoes: [
      'Flacidez de pele em braços, abdômen, coxas ou glúteos',
      'Perda de firmeza após emagrecimento',
      'Pele corporal com textura frouxa e sem tônus',
      'Manutenção preventiva de firmeza',
    ],
    faq: [
      {
        p: 'Bioestimulador emagrece ou reduz medida?',
        r: 'Não. Ele estimula colágeno e trata firmeza da pele. Gordura localizada é outro alvo, com outro protocolo. Quando as duas queixas existem juntas, o que é comum, os tratamentos são combinados, mas não são a mesma coisa.',
      },
      {
        p: 'Por que o resultado demora tanto?',
        r: 'Porque quem produz o resultado é o seu organismo. O produto dá o estímulo; o colágeno leva semanas para ser sintetizado e organizado. Avaliar o resultado antes desse tempo é avaliar um processo pela metade.',
      },
    ],
  },

  flacidez: {
    descricao: [
      'Flacidez tem duas naturezas, e confundi-las é o motivo mais comum de tratamento que não entrega. Existe a flacidez de pele, em que o tecido perdeu colágeno e elastina e não retorna, e a flacidez muscular, em que o que perdeu tônus está por baixo.',
      'Elas pedem condutas diferentes. Flacidez de pele responde a estímulo de colágeno; flacidez muscular responde a tônus, e nenhum protocolo de consultório substitui o trabalho de fortalecimento.',
      'Na prática a maioria dos casos tem as duas em proporções diferentes, e o plano é montado a partir dessa proporção. É também por isso que a avaliação é feita com a região examinada, e não pela descrição por mensagem.',
    ],
    indicacoes: [
      'Pele frouxa em braços, abdômen, coxas ou face interna dos joelhos',
      'Perda de firmeza após emagrecimento ou gestação',
      'Pele sem retorno ao toque',
      'Flacidez que apareceu junto com a perda de volume',
    ],
    faq: [
      {
        p: 'Como sei se a minha flacidez é de pele ou de músculo?',
        r: 'Pelo exame da região. Há testes simples de retorno e de tônus que distinguem os dois na própria avaliação. É a primeira coisa a ser definida, porque protocolo certo para o tipo errado de flacidez não entrega, e o tempo perdido é de meses.',
      },
      {
        p: 'Preciso emagrecer antes de tratar?',
        r: 'Depende do caso. Se há perda de peso significativa prevista, faz sentido tratar a flacidez depois, porque o emagrecimento altera o quadro. Em perdas pequenas ou já estabilizadas, o tratamento pode caminhar junto.',
      },
    ],
  },

  celulite: {
    descricao: [
      'A celulite não é gordura: é uma alteração estrutural. Traves de tecido fibroso puxam a pele para baixo enquanto a gordura se acomoda entre elas, e é esse conjunto que produz o relevo irregular.',
      'Por isso emagrecer nem sempre melhora, e às vezes até evidencia: quem trata só o volume não mexe na trave que está puxando. A conduta precisa alcançar a fibrose, a circulação local e a qualidade da pele.',
      'Também é um quadro com graus. Celulite que só aparece quando a pele é comprimida e celulite visível em repouso são estágios diferentes, com prognósticos diferentes, e essa classificação é feita na avaliação, porque define a expectativa realista.',
    ],
    indicacoes: [
      'Relevo irregular em glúteos, coxas ou abdômen',
      'Depressões visíveis mesmo em repouso',
      'Celulite que não melhorou com perda de peso',
      'Pele com aspecto acolchoado na região',
    ],
    faq: [
      {
        p: 'Celulite tem cura?',
        r: 'Tem controle e melhora significativa, não cura definitiva. É um quadro com componente estrutural e hormonal, e a predisposição permanece. Tratamento sério trabalha com redução de grau e manutenção. Quem promete eliminação está vendendo, não tratando.',
      },
      {
        p: 'Sou magra e tenho celulite. Faz sentido?',
        r: 'Faz, e é comum. O fator determinante é a organização do tecido conjuntivo e a tração das traves fibrosas, não a quantidade de gordura. Por isso mulheres magras têm celulite e emagrecer não a resolve.',
      },
    ],
  },

  estrias: {
    descricao: [
      'Estria é uma cicatriz. Ela se forma quando a pele é estirada mais rápido do que consegue produzir colágeno: no estirão da adolescência, na gestação, no ganho ou na perda rápida de peso, em quadros hormonais.',
      'A cor diz o tempo, e o tempo diz o prognóstico. Estria avermelhada ou arroxeada é recente, ainda tem vaso e processo inflamatório ativo, e responde melhor. Estria branca é cicatriz madura: melhora em textura e em aparência, mas não desaparece.',
      'Essa é a conversa mais importante antes de começar. Protocolo de dez sessões numa estria branca com expectativa de sumiço é frustração programada, e ela é evitável dizendo a verdade na primeira consulta.',
    ],
    indicacoes: [
      'Estrias avermelhadas ou arroxeadas, recentes',
      'Estrias brancas em abdômen, coxas, glúteos ou mamas',
      'Estrias após gestação ou variação rápida de peso',
      'Relevo e textura irregular associados às estrias',
    ],
    faq: [
      {
        p: 'Estria branca sai?',
        r: 'Não por completo. Ela é cicatriz madura: melhora em textura, em profundidade e em como reflete a luz, o que a torna bem menos perceptível. Mas prometer que some não é possível. Estria vermelha, tratada cedo, tem resultado bastante superior.',
      },
      {
        p: 'Vale a pena tratar se as minhas são antigas?',
        r: 'Vale, desde que a expectativa seja de melhora e não de desaparecimento. Muita paciente fica satisfeita com a mudança de textura e uniformidade. O que não vale é começar acreditando em pele sem marca nenhuma.',
      },
    ],
  },

  'gordura-localizada': {
    descricao: [
      'Gordura localizada é aquele acúmulo que resiste mesmo quando o peso está estável e a rotina de exercício está em dia. Não é falha de disciplina: a distribuição de gordura tem componente genético e hormonal, e algumas regiões respondem menos ao déficit calórico do que outras.',
      'O tratamento de consultório atua exatamente nesse ponto de resistência, região a região. É pontual por natureza: não substitui nem compete com emagrecimento.',
      'Isso também define quem é candidato. Quem procura redução de peso está no lugar errado; quem tem peso estável e uma região específica que não cede está no lugar certo.',
    ],
    indicacoes: [
      'Acúmulo localizado com peso estável',
      'Região que não responde a dieta e exercício',
      'Flancos, abdômen inferior, culote ou face interna das coxas',
      'Assimetria de contorno em uma região específica',
    ],
    faq: [
      {
        p: 'Isso emagrece?',
        r: 'Não. O tratamento age em gordura de uma região delimitada, com foco em contorno. Emagrecimento é processo metabólico e envolve alimentação, atividade e acompanhamento próprio. Quem procura perder peso não encontra a resposta aqui.',
      },
      {
        p: 'A gordura volta?',
        r: 'A região tratada tende a manter o resultado enquanto o peso se mantém. Ganho de peso posterior redistribui gordura pelo corpo, e a área tratada pode voltar a acumular. Manutenção de peso faz parte do resultado.',
      },
    ],
  },

  papada: {
    descricao: [
      'A papada raramente tem uma causa só. Pode ser acúmulo de gordura submentoniana, flacidez de pele, posição da mandíbula, projeção insuficiente do queixo, ou várias dessas ao mesmo tempo.',
      'É o que explica por que tanta gente trata e não melhora: gordura tratada em quem tem flacidez piora o aspecto, porque reduz volume sem devolver firmeza. E papada que na verdade é falta de projeção do mento não responde a nenhum dos dois.',
      'Por isso o exame da região vem antes de qualquer proposta. A boa notícia é que, identificada a causa certa, é uma das áreas com mudança mais evidente no rosto.',
    ],
    indicacoes: [
      'Acúmulo sob o queixo com peso estável',
      'Perda de definição entre rosto e pescoço',
      'Papada que persiste mesmo após emagrecimento',
      'Insatisfação com o perfil de lado',
    ],
    faq: [
      {
        p: 'Por que tratei a papada e não melhorou?',
        r: 'A causa mais frequente é o protocolo ter tratado gordura num quadro que era de flacidez, ou vice-versa. Reduzir volume em pele frouxa pode até acentuar o problema. O primeiro passo aqui é identificar qual é o seu caso, e isso exige examinar a região.',
      },
      {
        p: 'Emagrecer resolve?',
        r: 'Em parte dos casos ajuda muito; em outros, quase nada. Quando a papada tem componente de flacidez ou de posicionamento do queixo, emagrecer não muda o quadro, e às vezes o evidencia.',
      },
    ],
  },

  subcisao: {
    descricao: [
      'A subcisão libera a trave. Em depressões que parecem puxadas para dentro (celulite de grau mais avançado, algumas cicatrizes) existe um cordão de tecido fibroso ancorando a pele no plano profundo. Enquanto ele estiver ali, nenhum estímulo de superfície faz a região subir.',
      'O procedimento rompe essa trave por baixo, liberando a pele. É pontual: trata a depressão específica, não a região inteira.',
      'Costuma ser combinado com estímulo de colágeno na sequência, para que o espaço liberado seja preenchido por tecido novo em vez de voltar a aderir.',
    ],
    indicacoes: [
      'Depressões marcadas em glúteos ou coxas',
      'Celulite com afundamentos visíveis em repouso',
      'Cicatrizes retraídas, ancoradas no plano profundo',
      'Depressões que não responderam a tratamentos de superfície',
    ],
    faq: [
      {
        p: 'A subcisão dói?',
        r: 'É feita com anestesia local na área tratada. O desconforto maior costuma ser nos dias seguintes, com sensibilidade e roxo na região, o que é esperado e faz parte do processo. As orientações de recuperação são passadas antes.',
      },
      {
        p: 'Uma sessão resolve?',
        r: 'Depende de quantas depressões existem e da profundidade de cada uma. Algumas cedem em uma sessão; outras exigem repetição. O número é estimado na avaliação, com a região examinada.',
      },
    ],
  },

  gluteo: {
    descricao: [
      'O preenchimento de glúteo trabalha contorno e projeção pontual, em especial as depressões laterais, a chamada depressão trocantérica, popularizada como hip dips.',
      'Vale dizer o que ela é: uma característica anatômica ligada ao formato da bacia e à distribuição de gordura, presente em boa parte das mulheres. Não é defeito nem sinal de nada. Tratar é uma escolha estética legítima, e não tratar também.',
      'O procedimento devolve volume nos pontos de depressão para suavizar a transição do quadril para a coxa. Não é aumento de glúteo no sentido cirúrgico, e o resultado é de harmonia de contorno.',
    ],
    indicacoes: [
      'Depressão lateral marcada entre quadril e coxa',
      'Assimetria de contorno entre os lados',
      'Perda de projeção após emagrecimento',
      'Busca por harmonia de contorno sem cirurgia',
    ],
    faq: [
      {
        p: 'Hip dips é um problema?',
        r: 'Não. É anatomia: depende do formato da bacia e da distribuição de gordura, e a maioria das mulheres tem em algum grau. Exercício não elimina, porque a causa é óssea e de distribuição, não muscular. Tratar é uma escolha estética, não uma correção necessária.',
      },
      {
        p: 'É a mesma coisa que aumento de glúteo?',
        r: 'Não. Aqui o trabalho é de contorno e projeção pontual, para suavizar depressões. Aumento significativo de volume é procedimento cirúrgico, com outra proposta e outros riscos.',
      },
    ],
  },

  'peelings-corporais': {
    descricao: [
      'A pele do corpo é mais espessa que a do rosto, tem menos glândulas e renova mais devagar. Isso muda tudo no protocolo: ativo, concentração e intervalo entre sessões não se transferem do facial para o corporal.',
      'Ele responde bem a manchas por atrito, escurecimento de axilas, virilha e joelhos, marcas de foliculite e textura irregular. São quadros em que a origem quase sempre é mecânica: roupa, depilação, fricção.',
      'É por isso que o tratamento inclui identificar o que está causando o atrito. Clarear sem remover a causa entrega um resultado que se desfaz.',
    ],
    indicacoes: [
      'Escurecimento de axilas, virilha, joelhos ou cotovelos',
      'Manchas por atrito de roupa ou depilação',
      'Marcas de foliculite ou pelos encravados',
      'Textura áspera em braços e coxas',
    ],
    faq: [
      {
        p: 'Por que a mancha do corpo demora mais que a do rosto?',
        r: 'Porque a pele corporal é mais espessa e tem renovação celular mais lenta. O protocolo respeita esse ritmo, e acelerar com concentração alta costuma inflamar, e pele inflamada escurece mais. Aqui a paciência faz parte da técnica.',
      },
      {
        p: 'Posso usar no corpo o mesmo produto que uso no rosto?',
        r: 'Não é uma boa ideia em nenhuma das direções. A espessura e a sensibilidade são diferentes, e o que funciona numa região pode ser insuficiente ou agressivo demais na outra. A prescrição é feita por região.',
      },
    ],
  },

  // BEM-ESTAR
  soroterapia: {
    descricao: [
      'A soroterapia repõe vitaminas e minerais por via intravenosa, em uma fórmula montada caso a caso. A via endovenosa entrega o nutriente direto na corrente sanguínea, sem depender da absorção intestinal.',
      'Isso define quem se beneficia: pessoas com deficiência identificada, ou com absorção comprometida. Não é suplementação genérica, e não substitui alimentação, sono e acompanhamento clínico.',
      'A fórmula depende do que a avaliação encontrou e, quando indicado, de exames. Protocolo montado sem esse mapa é chute com agulha.',
    ],
    indicacoes: [
      'Deficiência nutricional identificada em exame',
      'Absorção intestinal comprometida',
      'Suporte durante um processo de mudança de hábitos',
      'Cansaço persistente já investigado clinicamente',
    ],
    faq: [
      {
        p: 'Soroterapia emagrece?',
        r: 'Não. A soroterapia repõe nutrientes; emagrecimento depende de alimentação, atividade física e acompanhamento adequado. Ela pode entrar como suporte dentro de um processo já em curso, mas apresentá-la como tratamento de emagrecimento não corresponde ao que ela faz.',
      },
      {
        p: 'Preciso de exames antes?',
        r: 'Na maior parte dos casos, sim. Repor o que não está em falta não traz benefício, e algumas vitaminas se acumulam no organismo. A indicação parte do que foi identificado, não de um protocolo pronto.',
      },
    ],
  },
});

/* melasma: só o corpo. As indicações e o FAQ já existiam e ficam como estão. */
Object.assign(CORPOS, {
  melasma: {
    descricao: [
      'O melasma é um quadro crônico de hiperpigmentação, geralmente simétrico, com forte componente hormonal e genético. Isso significa uma coisa que precisa ser dita antes de começar: ele se controla, não se cura.',
      'O que faz o pigmento voltar não é só o sol. É calor, luz visível (inclusive a de telas), alteração hormonal e procedimento agressivo demais, que inflama e produz mais pigmento do que removeu. Melasma é o quadro em que tratar com força costuma piorar.',
      'Por isso o protocolo tem duas metades do mesmo tamanho: as sessões em consultório e a manutenção diária em casa. Fotoproteção rigorosa aqui não é recomendação de rotina: é parte do tratamento, e sem ela o clareamento conquistado se desfaz.',
    ],
  },
});
