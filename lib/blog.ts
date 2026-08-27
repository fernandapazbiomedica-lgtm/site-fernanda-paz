export type Artigo = {
  slug: string;
  titulo: string;
  categoria: string;
  resumo: string;
  leitura: string;
  data: string;
  /** conteúdo em blocos. PENDENTE de revisão clínica da Dra. */
  corpo: { tipo: 'p' | 'h2' | 'destaque' | 'lista'; texto?: string; itens?: string[] }[];
  faq?: { p: string; r: string }[];
  seo: { title: string; description: string };
};

export const ARTIGOS: Artigo[] = [
  {
    slug: 'botox-deixa-o-rosto-congelado',
    titulo: 'Botox deixa o rosto congelado?',
    categoria: 'Facial',
    resumo:
      'A resposta curta é não, e a resposta longa explica exatamente por que algumas pessoas ficam com essa aparência.',
    leitura: '4 min',
    data: '2026-08-21',
    corpo: [
      {
        tipo: 'p',
        texto:
          'É a pergunta que mais aparece na consulta, e ela vem de um lugar legítimo: todo mundo já viu um rosto que parece parado. O que quase ninguém sabe é que esse resultado não vem da toxina botulínica em si: vem de como ela foi usada.',
      },
      { tipo: 'h2', texto: 'O que a toxina realmente faz' },
      {
        tipo: 'p',
        texto:
          'A toxina botulínica reduz temporariamente a contração de músculos específicos. Quando o músculo contrai menos, a pele sobre ele dobra menos, e a linha de expressão marca menos. É um efeito localizado e reversível.',
      },
      {
        tipo: 'destaque',
        texto: 'Rosto congelado não é efeito da toxina. É efeito de dose alta aplicada sem planejamento.',
      },
      { tipo: 'h2', texto: 'De onde vem a aparência artificial' },
      {
        tipo: 'lista',
        itens: [
          'Dose alta demais para a força do músculo daquela pessoa',
          'Aplicação em pontos que não respeitam a anatomia individual',
          'Tratar todos os músculos com a mesma intensidade, sem hierarquia',
          'Ignorar que alguns músculos precisam continuar funcionando para o rosto parecer natural',
        ],
      },
      { tipo: 'h2', texto: 'O que muda quando há planejamento' },
      {
        tipo: 'p',
        texto:
          'A dose é calculada músculo a músculo, considerando a força de contração de cada um no seu rosto. Alguns pontos recebem mais, outros recebem pouco, outros não recebem nada. O objetivo não é eliminar o movimento: é reduzir a marca que ele deixa.',
      },
      {
        tipo: 'p',
        texto:
          'Na prática: você continua franzindo a testa, levantando as sobrancelhas e demonstrando emoção. A diferença é que a marca não fica gravada na pele depois que a expressão passa.',
      },
      { tipo: 'h2', texto: 'E se eu não gostar do resultado?' },
      {
        tipo: 'p',
        texto:
          'O efeito é temporário. Isso funciona como uma proteção: mesmo em um resultado que não agradou, ele se desfaz com o tempo. E o retorno de avaliação existe justamente para ajustar o que for necessário dentro da janela adequada.',
      },
    ],
    faq: [
      {
        p: 'Botox deixa o rosto congelado?',
        r: 'Não quando há planejamento. A aparência congelada vem de dose alta aplicada sem respeitar a anatomia e a força muscular individual. Com dose calculada por músculo, a expressão é preservada e apenas a marca da linha é suavizada.',
      },
      {
        p: 'Quanto tempo dura o efeito da toxina botulínica?',
        r: 'A duração média é de 3 a 4 meses. Ela varia com a força da sua musculatura, o metabolismo e a região aplicada: quem tem musculatura mais forte na testa, por exemplo, costuma sentir o efeito voltar um pouco antes. Se você parar de aplicar, o músculo retoma gradualmente a força que tinha e as linhas voltam ao padrão anterior; não pioram por causa do tratamento.',
      },
      {
        p: 'A partir de que idade posso fazer?',
        r: 'Não existe idade, existe indicação. O que define é como a sua musculatura marca a pele: há quem, aos vinte e poucos, já tenha linha visível em repouso e se beneficie de intervir antes que ela vire vinco fixo, e há quem aos quarenta ainda não precise. Isso é avaliado na consulta, com o rosto em movimento e em repouso.'
      },
    ],
    seo: {
      title: 'Botox deixa o rosto congelado? A resposta de quem aplica',
      description:
        'Entenda por que a toxina botulínica não deixa o rosto congelado e o que realmente causa a aparência artificial. Explicação da Dra. Fernanda Paz, Guarujá.',
    },
  },
  {
    slug: 'o-que-piora-o-melasma',
    titulo: 'O que pode piorar o melasma sem você perceber',
    categoria: 'Pele',
    resumo:
      'Sol é o vilão conhecido. Mas calor, luz de tela e alguns procedimentos comuns também entram na lista.',
    leitura: '5 min',
    data: '2026-08-14',
    corpo: [
      {
        tipo: 'p',
        texto:
          'Melasma é uma das condições mais frustrantes de tratar, não porque não responda, mas porque volta com facilidade quando os gatilhos continuam ativos. E muitos desses gatilhos passam despercebidos na rotina.',
      },
      { tipo: 'h2', texto: 'Sol: o óbvio que ainda é subestimado' },
      {
        tipo: 'p',
        texto:
          'Não se trata só de praia. A exposição acumulada do dia a dia (o trajeto para o trabalho, o intervalo do almoço, a janela do escritório) é o que mais sustenta o quadro. Protetor aplicado uma vez pela manhã não cobre um dia inteiro.',
      },
      { tipo: 'h2', texto: 'Calor: o gatilho que quase ninguém considera' },
      {
        tipo: 'lista',
        itens: [
          'Forno e fogão em uso prolongado',
          'Banho muito quente no rosto',
          'Sauna e ambientes de calor intenso',
          'Secador de cabelo próximo à face',
        ],
      },
      { tipo: 'destaque', texto: 'O calor estimula o melanócito mesmo sem exposição solar direta.' },
      { tipo: 'h2', texto: 'Luz visível, inclusive de telas' },
      {
        tipo: 'p',
        texto:
          'A luz visível de alta energia contribui para o quadro. Por isso a orientação costuma incluir protetor com cor, que oferece uma barreira física adicional que o protetor incolor comum não entrega.',
      },
      { tipo: 'h2', texto: 'Procedimentos agressivos demais' },
      {
        tipo: 'p',
        texto:
          'Pele com melasma responde mal a agressão. Protocolos muito intensos podem gerar inflamação e piorar a mancha em vez de clarear. A escolha do procedimento e da intensidade precisa considerar essa particularidade.',
      },
      { tipo: 'h2', texto: 'Por que manutenção não é opcional' },
      {
        tipo: 'p',
        texto:
          'Melasma é uma condição crônica: ela se controla, não se cura. As sessões em consultório fazem parte do tratamento, mas o resultado se sustenta na rotina domiciliar e na fotoproteção contínua, todos os dias, inclusive nos nublados.',
      },
    ],
    faq: [
      {
        p: 'Melasma tem cura?',
        r: 'Melasma é uma condição crônica que se controla com tratamento e manutenção contínua. É possível clarear significativamente, mas os gatilhos precisam seguir controlados para o resultado se sustentar.',
      },
      {
        p: 'Posso fazer peeling se tenho melasma?',
        r: 'Depende inteiramente do peeling. Protocolo agressivo em pele com melasma costuma inflamar, e pele inflamada produz mais pigmento, então o tratamento acaba escurecendo o que veio clarear. Existem peelings indicados para melasma, escolhidos com concentração menor e intervalo maior, e essa escolha é o cerne do tratamento. É por isso que peeling em melasma não se faz por conta própria nem por indicação de quem não examinou a sua pele.'
      },
    ],
    seo: {
      title: 'O que piora o melasma: 5 gatilhos além do sol',
      description:
        'Calor, luz de tela e procedimentos agressivos também pioram o melasma. Entenda os gatilhos e como controlar. Dra. Fernanda Paz, Guarujá.',
    },
  },
  {
    slug: 'definicao-x-modelacao-abdominal',
    titulo: 'Definição ou modelação abdominal: qual é o seu caso?',
    categoria: 'Corporal',
    resumo:
      'Os nomes são parecidos, o resultado esperado é parecido, mas as indicações são quase opostas.',
    leitura: '4 min',
    data: '2026-08-07',
    corpo: [
      {
        tipo: 'p',
        texto:
          'É comum chegar na consulta pedindo "aquele procedimento do tanquinho" e descobrir que existem dois caminhos diferentes, e que escolher o errado significa não alcançar o resultado esperado.',
      },
      { tipo: 'h2', texto: 'Definição abdominal' },
      {
        tipo: 'p',
        texto:
          'Indicada para quem já tem musculatura abdominal desenvolvida, mas ela não aparece. O trabalho é sobre a camada que cobre o músculo: o objetivo é revelar uma estrutura que já existe.',
      },
      { tipo: 'destaque', texto: 'Definição revela o que já existe. Modelação desenha o que ainda não existe.' },
      { tipo: 'h2', texto: 'Modelação abdominal (efeito tanquinho)' },
      {
        tipo: 'p',
        texto:
          'Indicada para quem ainda não tem a musculatura formada e quer o contorno marcado. O trabalho é sobre criar o desenho e as linhas da região.',
      },
      { tipo: 'h2', texto: 'Como saber qual é o seu caso' },
      {
        tipo: 'lista',
        itens: [
          'Avaliação da musculatura abdominal existente',
          'Análise da camada de gordura superficial',
          'Histórico de treino e rotina de atividade física',
          'Resultado que você espera alcançar',
        ],
      },
      {
        tipo: 'p',
        texto:
          'Essa distinção é feita na avaliação presencial, e não pela foto ou pela descrição do que você quer. É exatamente por isso que a consulta vem antes.',
      },
    ],
    faq: [
      {
        p: 'Qual a diferença entre definição e modelação abdominal?',
        r: 'Definição abdominal evidencia uma musculatura que já está formada mas encoberta. Modelação abdominal cria o desenho e o contorno da região em quem ainda não tem essa musculatura desenvolvida. São indicações praticamente opostas.',
      },
      {
        p: 'Preciso treinar para manter o resultado?',
        r: 'Na definição abdominal, sim: o que o procedimento faz é evidenciar a musculatura que existe, então manter treino e percentual de gordura é o que mantém ela à vista. Ganho de peso posterior encobre o resultado de novo, mesmo ele ainda estando lá. Na modelação, que trabalha desenho e contorno, a dependência do treino é menor, mas a manutenção de peso continua importando.'
      },
    ],
    seo: {
      title: 'Definição x Modelação Abdominal: qual a diferença?',
      description:
        'Definição evidencia a musculatura existente, modelação cria o contorno. Entenda qual procedimento é indicado para o seu caso. Guarujá, SP.',
    },
  },
];

  // SKINCARE GUIDES
  {
    slug: 'pele-oleosa-acneica',
    titulo: 'Rotina para Pele Oleosa e Acneica',
    categoria: 'Skincare',
    resumo: 'Guia completo de cuidados, produtos recomendados e procedimentos para controlar oleosidade e acne',
    leitura: '8 min',
    data: '2026-08-27',
    corpo: [
      {
        tipo: 'h2',
        texto: 'Entendendo a Pele Oleosa'
      },
      {
        tipo: 'p',
        texto: 'A pele oleosa produz excesso de sebo, principalmente na zona T (testa, nariz e queixo). Isso acontece por hiperatividade das glândulas sebáceas, que podem ser estimuladas por fatores genéticos, hormonais ou ambientais.'
      },
      {
        tipo: 'p',
        texto: 'Oleosidade em excesso favorece o acúmulo de bactérias e entupimento de poros, criando o ambiente perfeito para acne. Por isso pele oleosa e acneica costumam andar juntas.'
      },
      {
        tipo: 'destaque',
        texto: 'Limpar profundamente é essencial, mas agressividade demais piora o quadro: a pele inflamada produz mais sebo como proteção.'
      },
      {
        tipo: 'h2',
        texto: 'Rotina Básica de Skincare'
      },
      {
        tipo: 'lista',
        itens: [
          'Limpeza com gel ou espuma próprios para oleosa (2x dia)',
          'Tônico ou essência para balancear pH (opcional mas recomendado)',
          'Hidratante leve, em gel ou sérum (importante: pele oleosa precisa hidratar)',
          'Protetor solar (imprescindível - FPS 30+ mínimo)',
          'Esfoliante suave 1-2x semana (ácidos suaves como AHA/BHA)'
        ]
      },
      {
        tipo: 'h2',
        texto: 'Produtos Recomendados para Pele Oleosa'
      },
      {
        tipo: 'p',
        texto: 'Busque por: Ácido salicílico (BHA), Ácido glicólico (AHA), Niacinamida, Ácido azeláico. Evite: Óleos pesados, manteigas, produtos muito oclusivos.'
      },
      {
        tipo: 'h2',
        texto: 'Quando Procurar Procedimentos?'
      },
      {
        tipo: 'p',
        texto: 'Se a rotina caseira não controla bem a oleosidade ou acne, procedimentos profissionais podem ser muito eficazes. Microagulhamento, peeling químico e skinbooster estimulam renovação de pele e melhoram a textura.'
      },
      {
        tipo: 'destaque',
        texto: 'Procedimentos especializados complementam (não substituem) a rotina. Você continua cuidando em casa diariamente.'
      }
    ],
    faq: [
      {
        p: 'Pele oleosa precisa de hidratante?',
        r: 'Sim! Oleosidade não significa hidratação. Muitas peles oleosas são desidratadas. Um hidratante leve (sérum ou gel) balanceia a hidratação sem deixar a pele pesada.'
      },
      {
        p: 'Com que frequência devo lavar o rosto?',
        r: 'Duas vezes ao dia é o padrão: manhã e noite. Se sua pele fica muito oleosa durante o dia, um enxágue rápido com água é melhor do que lavar novamente, pois múltiplas lavagens irritam.'
      },
      {
        p: 'Posso usar esfoliantes todo dia?',
        r: 'Não. Esfoliação diária danifica a barreira de proteção da pele e causa irritação. Comece com 1-2 vezes por semana e ajuste conforme a tolerância da sua pele.'
      }
    ],
    seo: {
      title: 'Rotina Skincare para Pele Oleosa e Acneica | Dra. Fernanda Paz',
      description: 'Guia completo de skincare para pele oleosa: produtos recomendados, rotina diária, e procedimentos que funcionam. Clínica da Fefe, Guarujá.'
    }
  },
  {
    slug: 'melasma-manchas',
    titulo: 'Tratamento de Melasma e Manchas da Pele',
    categoria: 'Skincare',
    resumo: 'Guia sobre causas, gatilhos, rotina de proteção e procedimentos eficazes para manchas',
    leitura: '7 min',
    data: '2026-08-27',
    corpo: [
      {
        tipo: 'h2',
        texto: 'O que é Melasma?'
      },
      {
        tipo: 'p',
        texto: 'Melasma é manchas simétricas marrom-acinzentadas que aparecem principalmente no rosto. É mais comum em mulheres e em peles morenas/escuras, apesar de poder ocorrer em qualquer fototipo.'
      },
      {
        tipo: 'destaque',
        texto: 'Melasma é uma condição crônica: se controla, não se cura. O foco é clarear ao máximo e depois manter os resultados.'
      },
      {
        tipo: 'h2',
        texto: 'Gatilhos que Pioram o Melasma'
      },
      {
        tipo: 'lista',
        itens: [
          'Exposição solar (mesmo sem queimadura - a exposição acumulada é o maior vilão)',
          'Calor intenso (forno, fogão, sauna, banho muito quente)',
          'Luz visível de alta energia (inclusive de telas)',
          'Inflamação crônica da pele',
          'Alguns medicamentos (antibióticos específicos, contraceptivos)',
          'Fatores hormonais (gravidez, reposição hormonal)'
        ]
      },
      {
        tipo: 'h2',
        texto: 'Rotina de Proteção Diária'
      },
      {
        tipo: 'lista',
        itens: [
          'Protetor solar FPS 50+ todos os dias, inclusive nublados',
          'Reaplicar a cada 2-3 horas se houver exposição solar',
          'Usar protetor com cor ou bloqueador mineral para maior proteção',
          'Chapéus e óculos de sol quando possível',
          'Evitar banhos muito quentes no rosto',
          'Usar antioxidantes (vitamina C, niacinamida) no skincare'
        ]
      },
      {
        tipo: 'h2',
        texto: 'Produtos com Ativos Indicados'
      },
      {
        tipo: 'p',
        texto: 'Procure por: Ácido kójico, Ácido tranexâmico, Niacinamida, Vitamina C estabilizada, Ácido azeláico. Aplicar regularmente melhora o clareamento.'
      },
      {
        tipo: 'h2',
        texto: 'Por Que Procedimentos são Essenciais'
      },
      {
        tipo: 'p',
        texto: 'Skincare caseiro consegue clarear, mas procedimentos em consultório atacam o problema em profundidade. Peeling químico, microagulhamento e laser específicos para pigmentação aceleram muito os resultados.'
      },
      {
        tipo: 'destaque',
        texto: 'A combinação de rotina em casa + procedimentos em consultório é o que funciona melhor para melasma.'
      }
    ],
    faq: [
      {
        p: 'Melasma tem cura?',
        r: 'Não, mas tem controle muito bom. Melasma é uma tendência da sua pele, não uma doença. O foco é clarear o máximo possível e depois manter a proteção diária para o resultado se sustentar.'
      },
      {
        p: 'Posso fazer procedimentos durante verão?',
        r: 'Depende do procedimento. Alguns intensificam a sensibilidade ao sol e exigem proteção extra - ou esperar a época de menor exposição. Isso é avaliado junto com o procedimento escolhido.'
      },
      {
        p: 'Quanto tempo para ver resultado?',
        r: 'Com rotina consistente em casa, alguns meses. Com procedimentos, o resultado é mais rápido e visível, mas ainda requer paciência - melasma não some em uma única sessão.'
      }
    ],
    seo: {
      title: 'Guia de Melasma: Tratamento, Proteção e Procedimentos | Dra. Fernanda Paz',
      description: 'Entenda o melasma, seus gatilhos, rotina de proteção diária e procedimentos que funcionam. Clínica da Fefe, Guarujá, SP.'
    }
  },
  {
    slug: 'pele-seca',
    titulo: 'Cuidados Essenciais para Pele Seca',
    categoria: 'Skincare',
    resumo: 'Como hidratar e restaurar a barreira de proteção de pele ressecada',
    leitura: '6 min',
    data: '2026-08-27',
    corpo: [
      {
        tipo: 'h2',
        texto: 'Por que a Pele Fica Seca?'
      },
      {
        tipo: 'p',
        texto: 'Pele seca ocorre quando há falta de água nas camadas superficiais da pele, ou quando a barreira protetora (camada lipídica) está comprometida. Isso pode ser genético, ambiental ou pelo uso de produtos inadequados.'
      },
      {
        tipo: 'destaque',
        texto: 'Pele seca não é só falta de hidratante - é falta de água NA pele e falta de óleos que a mantêm selada.'
      },
      {
        tipo: 'h2',
        texto: 'Sinais de Pele Seca'
      },
      {
        tipo: 'lista',
        itens: [
          'Sensação de aperto e desconforto, especialmente após lavar',
          'Descamação visível',
          'Textura áspera ao toque',
          'Mais propensa a irritação',
          'Falta de brilho natural',
          'Linhas de expressão mais aparentes'
        ]
      },
      {
        tipo: 'h2',
        texto: 'Rotina Básica para Pele Seca'
      },
      {
        tipo: 'lista',
        itens: [
          'Limpeza suave com leite demaquilante ou óleo de limpeza',
          'Tônico ou hidrolato para preparar a pele',
          'Sérum ou essência hidratante',
          'Hidratante mais rico (creme ou óleo)',
          'Protetor solar (importante - proteção solar não resseca se for o certo)',
          'Ocasional: máscara de hidratação profunda'
        ]
      },
      {
        tipo: 'h2',
        texto: 'O que Evitar'
      },
      {
        tipo: 'lista',
        itens: [
          'Ácidos muito concentrados ou uso frequente',
          'Álcool em produtos de limpeza',
          'Água muito quente no rosto',
          'Múltiplas lavagens do rosto',
          'Produtos com fragrância forte (irritam pele seca)'
        ]
      },
      {
        tipo: 'h2',
        texto: 'Quando Procurar Procedimentos?'
      },
      {
        tipo: 'p',
        texto: 'Se a ressecação é severa e afeta a qualidade de vida, procedimentos como hidratação profunda, skinbooster e rejuvenescimento podem restaurar a umidade em profundidade e melhorar significativamente.'
      }
    ],
    faq: [
      {
        p: 'Pele seca precisa de protetor solar?',
        r: 'Sim, mas escolha um protetor que não resseca. Protetores em spray ou muito fluidos podem piorar. Opte por protetores em creme ou aqueles formulados para pele seca.'
      },
      {
        p: 'Posso usar óleos no rosto?',
        r: 'Depende do seu tipo de pele. Para pele muito seca, óleos vegetais (argan, rosa mosqueta, jojoba) em pequena quantidade podem ser excelentes. Teste com cuidado para não entupir poros.'
      },
      {
        p: 'Com que frequência devo fazer máscaras?',
        r: 'Máscaras de hidratação podem ser usadas 1-2 vezes por semana em pele muito seca. Escolha as que deixam o rosto úmido (não as que secam rápido).'
      }
    ],
    seo: {
      title: 'Rotina Skincare para Pele Seca: Hidratação Profunda | Dra. Fernanda Paz',
      description: 'Como restaurar umidade em pele ressecada. Rotina, produtos recomendados e procedimentos de hidratação. Clínica da Fefe, Guarujá.'
    }
  },
  {
    slug: 'pele-madura-envelhecimento',
    titulo: 'Skincare para Pele Madura: Prevenção e Tratamento',
    categoria: 'Skincare',
    resumo: 'Guia de cuidados, ativos anti-envelhecimento e procedimentos para pele madura',
    leitura: '8 min',
    data: '2026-08-27',
    corpo: [
      {
        tipo: 'h2',
        texto: 'O que Muda na Pele com o Tempo?'
      },
      {
        tipo: 'p',
        texto: 'A pele madura enfrenta diminuição de colágeno, elastina, ácido hialurônico e renovação celular. Resultado: rugas, flacidez, perda de brilho e textura mais áspera.'
      },
      {
        tipo: 'destaque',
        texto: 'O envelhecimento é natural, mas seu ritmo pode ser controlado com proteção solar e ativos específicos desde cedo.'
      },
      {
        tipo: 'h2',
        texto: 'Ativos Anti-Envelhecimento Comprovados'
      },
      {
        tipo: 'lista',
        itens: [
          'Retinol / Retinoides: estimulam colágeno, reduzem rugas',
          'Vitamina C: antioxidante, melhora brilho',
          'Ácido Hialurônico: hidratação profunda',
          'Peptídeos: estimulam firmeza',
          'Antioxidantes (Chá verde, Vitamina E)',
          'Protetor solar: previne fotoenvelhecimento'
        ]
      },
      {
        tipo: 'h2',
        texto: 'Rotina Anti-Envelhecimento'
      },
      {
        tipo: 'lista',
        itens: [
          'Limpeza suave (manhã e noite)',
          'Tônico ou essência',
          'Sérum antioxidante (manhã) ou retinol (noite)',
          'Hidratante com ativos anti-idade',
          'Contorno de olhos (primeira região a envelhecer)',
          'Protetor solar FPS 50+ (manhã)',
          'Ocasional: máscaras noturnas nutritivas'
        ]
      },
      {
        tipo: 'h2',
        texto: 'Procedimentos que Funcionam para Pele Madura'
      },
      {
        tipo: 'p',
        texto: 'Botox, bioestimulador, skinbooster, microagulhamento e fios de sustentação são excelentes para pele madura. Cada um trabalha diferente: toxina reduz rugas de expressão, bioestimulador restaura colágeno, fios sustentam flacidez.'
      },
      {
        tipo: 'destaque',
        texto: 'A combinação de um bom skincare + procedimentos em consultório é o máximo que pode ser alcançado em termos de rejuvenescimento.'
      }
    ],
    faq: [
      {
        p: 'Devo começar retinol depois dos 30?',
        r: 'Depende. Se sua pele já tem rugas visíveis ou se você quer prevenir, sim. Retinol é seguro aos 20 também, como prevenção. O importante é começar com concentração baixa e aumentar gradualmente.'
      },
      {
        p: 'Qual é a melhor idade para começar procedimentos?',
        r: 'Não existe idade certa - existe indicação. Se você tem rugas, flacidez, ou quer prevenir, procedimentos podem ser feitos desde que haja indicação profissional. Muitos começam aos 30-40, outros precisam cedo, outros esperam.'
      },
      {
        p: 'Posso interromper a rotina anti-idade?',
        r: 'Se parar, a pele volta a envelhecer no seu ritmo natural. Não fica pior do que ficaria, mas os resultados conquistados dependem da continuidade.'
      }
    ],
    seo: {
      title: 'Skincare Anti-Envelhecimento: Pele Madura | Dra. Fernanda Paz',
      description: 'Rotina anti-idade, ativos comprovados e procedimentos de rejuvenescimento para pele madura. Clínica da Fefe, Guarujá.'
    }
  },
  {
    slug: 'linhas-expressao-rugas',
    titulo: 'Como Tratar Linhas de Expressão e Rugas',
    categoria: 'Skincare',
    resumo: 'Prevenção, ativos skincare e procedimentos eficazes para rugas',
    leitura: '7 min',
    data: '2026-08-27',
    corpo: [
      {
        tipo: 'h2',
        texto: 'Tipos de Rugas'
      },
      {
        tipo: 'p',
        texto: 'Rugas dinâmicas aparecem quando expressamos (testa, entre as sobrancelhas, ao redor dos olhos). Rugas estáticas ficam visíveis mesmo com o rosto em repouso - já deixaram sua marca na pele.'
      },
      {
        tipo: 'destaque',
        texto: 'Quanto mais cedo intervir nas dinâmicas, melhor - evita que virem estáticas.'
      },
      {
        tipo: 'h2',
        texto: 'Prevenção com Skincare'
      },
      {
        tipo: 'lista',
        itens: [
          'Protetor solar diário: bloqueia fotoenvelhecimento (causa 80% das rugas)',
          'Retinol: estimula colágeno, reduz rugas micro',
          'Vitamina C: antioxidante, protege DNA celular',
          'Hidratação profunda: pele bem hidratada envelhece mais lentamente',
          'Antioxidantes: neutralizam radicais livres',
          'Ácidos suaves: renovam célula, mantêm textura firme'
        ]
      },
      {
        tipo: 'h2',
        texto: 'Procedimentos para Rugas Estabelecidas'
      },
      {
        tipo: 'p',
        texto: 'Se a linha de expressão já fica visível em repouso, procedimentos em consultório trabalham mais profundamente. Botox reduz rugas dinâmicas, bioestimulador restaura colágeno perdido, fios de sustentação elevam áreas caídas.'
      },
      {
        tipo: 'h2',
        texto: 'Expectativas Realistas'
      },
      {
        tipo: 'p',
        texto: 'Rugas muito profundas e antigas não desaparecem completamente, mas melhoram muito. Resultado depende de quanto tempo a ruga se desenvolveu e quanto colágeno ainda tem capacidade de ser restaurado.'
      }
    ],
    faq: [
      {
        p: 'Aos 25 anos já preciso de retinol?',
        r: 'Não é obrigatório, mas se você quer prevenir rugas prematuras e já tem exposição solar frequente, retinol é excelente. Prevenção é sempre melhor que correção depois.'
      },
      {
        p: 'Botox vai deixar meu rosto parado?',
        r: 'Não quando feito com planejamento. A dose é calculada por músculo, respeitando a sua anatomia. Você continua com expressão - a ruga simplesmente fica menos marcada.'
      },
      {
        p: 'Qual procedimento escolher para rugas?',
        r: 'Depende de quanto colágeno você ainda tem (bioestimulador) vs. quanto movimento você quer reduzir (botox). Muitas vezes a combinação funciona melhor. Isso é avaliado na consulta.'
      }
    ],
    seo: {
      title: 'Tratamento de Linhas de Expressão e Rugas | Dra. Fernanda Paz',
      description: 'Prevenção com skincare, ativos recomendados e procedimentos para suavizar rugas. Clínica da Fefe, Guarujá.'
    }
  },
  {
    slug: 'pele-sensivel',
    titulo: 'Rotina para Pele Sensível e Reativa',
    categoria: 'Skincare',
    resumo: 'Como cuidar de pele que reage com facilidade e construir tolerância',
    leitura: '6 min',
    data: '2026-08-27',
    corpo: [
      {
        tipo: 'h2',
        texto: 'O que é Pele Sensível?'
      },
      {
        tipo: 'p',
        texto: 'Pele sensível reage com rapidez a produtos, clima, stress ou até toque. Fica vermelha, queimando, com coceira ou irritação facilmente. Geralmente tem barreira de proteção comprometida.'
      },
      {
        tipo: 'destaque',
        texto: 'Pele sensível não é fraca - é reativa. A estratégia é fortalecer a barreira, não agressão.'
      },
      {
        tipo: 'h2',
        texto: 'O que Causa Sensibilidade'
      },
      {
        tipo: 'lista',
        itens: [
          'Barreira de proteção danificada (lipídeos perdidos)',
          'Uso de produtos muito agressivos ou abrasivos',
          'Exposição solar sem proteção adequada',
          'Clima seco ou muito quente',
          'Ingredientes irritantes (álcool, fragrância, conservantes)',
          'Sensibilidades específicas a ingredientes'
        ]
      },
      {
        tipo: 'h2',
        texto: 'Rotina Gentil e Restauradora'
      },
      {
        tipo: 'lista',
        itens: [
          'Limpeza ultra-suave (água morna, sem sabão agressivo)',
          'Tônico hidratante (não esfoliante)',
          'Sérum calmante com ceramidas ou ácido hialurônico',
          'Hidratante restaurador com lipídeos',
          'Protetor solar mineral (menos irritante que químico)',
          'Evitar: esfoliantes, ácidos fortes, perfumaçã'
        ]
      },
      {
        tipo: 'h2',
        texto: 'Ingredientes Amigos da Pele Sensível'
      },
      {
        tipo: 'lista',
        itens: [
          'Ceramidas: restauram barreira',
          'Ácido hialurônico: hidrata sem irritar',
          'Panthenol: acalma e hidrata',
          'Centella asiática: anti-inflamatória',
          'Aloe vera: calmante natural',
          'Niacinamida: restaura barreira, anti-inflamatória'
        ]
      },
      {
        tipo: 'h2',
        texto: 'Procedimentos Seguros para Pele Sensível'
      },
      {
        tipo: 'p',
        texto: 'Skinbooster é excelente para pele sensível - hidrata profundamente sem agressão. Procedimentos muito intensos devem ser evitados. Sempre com profissional que entenda sensibilidade.'
      }
    ],
    faq: [
      {
        p: 'Posso usar retinol em pele sensível?',
        r: 'Sim, mas começando com retinol muito suave (0.03%) e aplicando apenas 2x semana, aumentando gradualmente. A paciência é essencial - pele sensível precisa de adaptação lenta.'
      },
      {
        p: 'Qual é o melhor protetor para pele sensível?',
        r: 'Protetores minerais (com óxido de zinco ou dióxido de titânio) costumam ser melhor tolerados. Alguns químicos irritam, mas nem todos - é questão de testar com cuidado.'
      },
      {
        p: 'Quanto tempo para a barreira se recuperar?',
        r: 'De 2-4 semanas, dependendo de quanto foi danificada. O importante é parar com produtos irritantes IMEDIATAMENTE e usar apenas hidratantes restauradores enquanto se recupera.'
      }
    ],
    seo: {
      title: 'Skincare para Pele Sensível e Reativa | Dra. Fernanda Paz',
      description: 'Rotina gentil, ingredientes calmantes e como restaurar a barreira de proteção de pele sensível. Clínica da Fefe, Guarujá.'
    }
  },
];

export const acharArtigo = (slug: string) => ARTIGOS.find((a) => a.slug === slug);
