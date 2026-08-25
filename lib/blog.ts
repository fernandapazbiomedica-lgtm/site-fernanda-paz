export type Artigo = {
  slug: string;
  titulo: string;
  categoria: string;
  resumo: string;
  leitura: string;
  data: string;
  /** capa do artigo — caminho a partir de /public */
  imagem: string;
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
    imagem: '/images/resultados/toxina-fios-pdo.jpg',
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
    imagem: '/images/cat-pele.jpg',
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
    imagem: '/images/resultados/lipo-enzimatica.jpg',
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
  {
    slug: 'quanto-tempo-dura-preenchimento-labial',
    titulo: 'Quanto tempo dura o preenchimento labial?',
    categoria: 'Facial',
    resumo:
      'A resposta varia de 8 a 18 meses, e o que decide onde você cai nessa faixa não é a marca do produto.',
    leitura: '5 min',
    data: '2026-08-24',
    imagem: '/images/resultados/preenchimento-labial-1-depois.jpg',
    corpo: [
      {
        tipo: 'p',
        texto:
          'A pergunta quase sempre vem antes da pergunta real, que é: vou precisar refazer sempre? A duração média do ácido hialurônico nos lábios fica entre 8 e 18 meses, e essa faixa é larga porque ela depende muito mais de você do que do produto.',
      },
      { tipo: 'h2', texto: 'Por que a faixa é tão larga' },
      {
        tipo: 'lista',
        itens: [
          'Metabolismo individual: quem metaboliza mais rápido reabsorve o produto antes',
          'A boca é uma região de movimento constante, o que acelera a reabsorção',
          'Quantidade aplicada: volumes menores se diluem em menos tempo',
          'Tipo de ácido hialurônico e seu grau de reticulação',
          'Tabagismo e exposição solar sem proteção encurtam a duração',
        ],
      },
      {
        tipo: 'destaque',
        texto:
          'O produto não some de uma vez. Ele reduz aos poucos, e é por isso que muita gente não percebe que já saiu.',
      },
      { tipo: 'h2', texto: 'O que acontece quando acaba' },
      {
        tipo: 'p',
        texto:
          'O lábio volta ao que era antes. Não fica flácido, não fica pior e não fica dependente: o ácido hialurônico é reabsorvido pelo próprio organismo, que é a mesma substância que a sua pele já produz. Essa é justamente a vantagem dele sobre preenchedores definitivos.',
      },
      { tipo: 'h2', texto: 'Retoque não é a mesma coisa que refazer' },
      {
        tipo: 'p',
        texto:
          'Muita gente aplica de novo antes de o resultado sair por completo, para manter o volume estável em vez de deixar voltar ao ponto zero. Nesse caso a quantidade usada costuma ser menor, porque parte do produto anterior ainda está lá.',
      },
    ],
    faq: [
      {
        p: 'Quanto tempo dura o preenchimento labial?',
        r: 'Em média de 8 a 18 meses. A variação depende do metabolismo individual, da quantidade aplicada, do tipo de ácido hialurônico usado e de hábitos como tabagismo e exposição solar.',
      },
      {
        p: 'O lábio fica flácido quando o preenchimento acaba?',
        r: 'Não. O ácido hialurônico é reabsorvido gradualmente pelo organismo e o lábio retorna ao aspecto que tinha antes do procedimento. A ideia de que a pele "estica e cai" não se aplica aos volumes usados em preenchimento labial.',
      },
      {
        p: 'Preciso refazer sempre para não ficar estranho?',
        r: 'Não. Se você não reaplicar, o resultado vai reduzindo gradualmente até o lábio voltar ao ponto de partida. Não existe um estado intermediário deformado.',
      },
    ],
    seo: {
      title: 'Quanto tempo dura o preenchimento labial? | Dra. Fernanda Paz',
      description:
        'Preenchimento labial dura de 8 a 18 meses. Entenda o que faz essa variação, o que acontece quando o produto é reabsorvido e quando fazer retoque. Guarujá, SP.',
    },
  },
  {
    slug: 'harmonizacao-facial-nao-e-um-procedimento',
    titulo: 'Harmonização facial não é um procedimento',
    categoria: 'Facial',
    resumo:
      'É um plano. E entender essa diferença é o que separa um resultado natural de um rosto que virou meme.',
    leitura: '6 min',
    data: '2026-08-18',
    imagem: '/images/resultados/harmonizacao-facial.jpg',
    corpo: [
      {
        tipo: 'p',
        texto:
          'Existe uma confusão que começa no próprio nome. Harmonização facial soa como se fosse uma coisa só, que se compra e se aplica. Não é. É um plano de tratamento que combina procedimentos diferentes, em regiões diferentes, muitas vezes em sessões diferentes.',
      },
      { tipo: 'h2', texto: 'O que pode compor um plano' },
      {
        tipo: 'lista',
        itens: [
          'Preenchimento de mento, para equilibrar o perfil',
          'Rinomodelação, para corrigir o ângulo e o dorso nasal sem cirurgia',
          'Preenchimento malar, que sustenta o terço médio',
          'Preenchimento labial, proporcional ao restante do rosto',
          'Toxina botulínica, para tratar a musculatura que compete com o resultado',
          'Bioestimuladores, quando a questão é qualidade de pele e sustentação',
        ],
      },
      {
        tipo: 'destaque',
        texto:
          'Nem todo rosto precisa de tudo. A maioria dos planos usa duas ou três dessas frentes, não seis.',
      },
      { tipo: 'h2', texto: 'Por que alguns resultados ficam artificiais' },
      {
        tipo: 'p',
        texto:
          'O rosto artificial quase nunca é resultado de um único excesso. Ele vem de tratar cada região isoladamente, sem olhar o conjunto: lábio grande num rosto sem projeção de mento, malar volumoso num terço inferior que não acompanha, preenchimento em cima de preenchimento sem esperar o anterior ser reabsorvido.',
      },
      {
        tipo: 'p',
        texto:
          'A avaliação existe justamente para definir a ordem. Em muitos casos o que a pessoa acha que precisa não é a primeira coisa a se fazer, e tratar na sequência errada gasta produto para corrigir um desequilíbrio que outra região estava causando.',
      },
      { tipo: 'h2', texto: 'Quantas sessões' },
      {
        tipo: 'p',
        texto:
          'Depende do plano. Alguns casos resolvem numa sessão, outros são divididos em duas ou três, com intervalo entre elas para avaliar o resultado antes de seguir. Dividir não é estratégia comercial: é o que permite corrigir a rota se a resposta do seu tecido for diferente da esperada.',
      },
    ],
    faq: [
      {
        p: 'Harmonização facial é um procedimento só?',
        r: 'Não. É um plano de tratamento que pode combinar preenchimentos em regiões diferentes, toxina botulínica e bioestimuladores. O que entra no plano depende da avaliação do seu rosto.',
      },
      {
        p: 'Por que alguns resultados ficam artificiais?',
        r: 'Geralmente por tratar cada região isoladamente sem considerar as proporções do rosto inteiro, por aplicar volume em cima de produto anterior ainda não reabsorvido, ou por seguir uma ordem de tratamento que não respeita o que está causando o desequilíbrio.',
      },
      {
        p: 'Quantas sessões são necessárias?',
        r: 'Varia conforme o plano. Casos simples podem resolver em uma sessão; planos mais amplos costumam ser divididos em duas ou três, com intervalo para avaliar a resposta antes de continuar.',
      },
    ],
    seo: {
      title: 'Harmonização facial: o que é e como funciona | Guarujá',
      description:
        'Harmonização facial é um plano de tratamento, não um procedimento único. Entenda o que pode compor o plano, por que alguns resultados ficam artificiais e quantas sessões são necessárias.',
    },
  },
  {
    slug: 'lipo-enzimatica-o-que-esperar',
    titulo: 'Lipo enzimática: o que ela faz e o que ela não faz',
    categoria: 'Corporal',
    resumo:
      'Ela não é lipoaspiração sem corte, e tratar as duas como equivalentes é a origem de quase toda frustração.',
    leitura: '5 min',
    data: '2026-08-11',
    imagem: '/images/resultados/lipo-enzimatica.jpg',
    corpo: [
      {
        tipo: 'p',
        texto:
          'O nome não ajuda. Lipo enzimática carrega a palavra lipo, e a associação imediata é com lipoaspiração. São coisas diferentes, com resultados de escala diferente, e a expectativa desalinhada é o que mais gera decepção.',
      },
      { tipo: 'h2', texto: 'O que ela faz' },
      {
        tipo: 'p',
        texto:
          'A aplicação injetável atua sobre depósitos de gordura localizada, ajudando na quebra e na eliminação dessa gordura pelo próprio organismo. Funciona bem em regiões pontuais que resistem à dieta e ao treino: flancos, abdome inferior, região submentoniana, culote.',
      },
      {
        tipo: 'destaque',
        texto:
          'Gordura localizada é o alvo. Sobrepeso generalizado não é — e nenhuma quantidade de sessões muda isso.',
      },
      { tipo: 'h2', texto: 'O que ela não faz' },
      {
        tipo: 'lista',
        itens: [
          'Não substitui lipoaspiração em casos de grande volume',
          'Não trata flacidez de pele — que às vezes até fica mais aparente quando o volume reduz',
          'Não é método de emagrecimento e não altera o peso na balança de forma relevante',
          'Não dispensa alimentação e atividade física para manter o resultado',
        ],
      },
      { tipo: 'h2', texto: 'Quantas sessões' },
      {
        tipo: 'p',
        texto:
          'Costuma ser um protocolo de sessões seriadas, com intervalo entre elas, e não um resultado de aplicação única. O número exato depende da região, do volume presente e da resposta do seu organismo — que é avaliada ao longo do tratamento, não estimada de antemão pela foto.',
      },
      { tipo: 'h2', texto: 'Quando o caso pede outra coisa' },
      {
        tipo: 'p',
        texto:
          'Se a queixa principal é flacidez e não volume, o caminho é bioestimulador ou tecnologia de sustentação, não lipo enzimática. Se o volume é grande e difuso, a conversa honesta é encaminhar para avaliação com cirurgião plástico. Indicar o procedimento errado só adia o resultado.',
      },
    ],
    faq: [
      {
        p: 'Lipo enzimática é a mesma coisa que lipoaspiração?',
        r: 'Não. A lipo enzimática é injetável, atua sobre gordura localizada em regiões pontuais e tem escala de resultado bem menor. Lipoaspiração é procedimento cirúrgico e trata volumes muito maiores.',
      },
      {
        p: 'Lipo enzimática trata flacidez?',
        r: 'Não. Ela atua sobre o volume de gordura. Em pele já flácida, a redução de volume pode inclusive deixar a flacidez mais evidente. Flacidez pede bioestimulador ou tecnologia de sustentação.',
      },
      {
        p: 'Quantas sessões de lipo enzimática são necessárias?',
        r: 'É um protocolo seriado, com intervalo entre as sessões. O número depende da região tratada, do volume presente e da sua resposta ao longo do tratamento — por isso é definido na avaliação e reajustado durante o processo.',
      },
    ],
    seo: {
      title: 'Lipo enzimática: o que esperar do resultado | Guarujá, SP',
      description:
        'Lipo enzimática trata gordura localizada, não flacidez nem sobrepeso. Entenda o que o procedimento faz, o que não faz e quantas sessões são necessárias.',
    },
  },
  {
    slug: 'queda-de-cabelo-quando-procurar-tratamento',
    titulo: 'Queda de cabelo: quando é normal e quando não é',
    categoria: 'Capilar',
    resumo:
      'Perder fio todo dia é esperado. O que muda o jogo é perceber o momento em que deixou de ser.',
    leitura: '5 min',
    data: '2026-08-04',
    imagem: '/images/resultados/intradermoterapia-capilar.jpg',
    corpo: [
      {
        tipo: 'p',
        texto:
          'Perder entre 50 e 100 fios por dia faz parte do ciclo normal do cabelo. O problema é que ninguém conta fio, e a percepção de que "está caindo muito" costuma chegar tarde — quando já houve redução visível de densidade.',
      },
      { tipo: 'h2', texto: 'Sinais de que passou do esperado' },
      {
        tipo: 'lista',
        itens: [
          'Alargamento da risca central, que fica mais visível ao longo dos meses',
          'Redução perceptível do volume do rabo de cavalo',
          'Entradas que avançam ou linha frontal que recua',
          'Couro cabeludo visível em regiões onde antes não era',
          'Queda que se mantém intensa por mais de três meses seguidos',
        ],
      },
      {
        tipo: 'destaque',
        texto:
          'Folículo em miniaturização responde a tratamento. Folículo já cicatrizado não. O tempo entre um estado e outro é o que está em jogo.',
      },
      { tipo: 'h2', texto: 'Por que a avaliação vem antes' },
      {
        tipo: 'p',
        texto:
          'Queda capilar é sintoma, não diagnóstico. Ela pode vir de alopecia androgenética, de eflúvio telógeno após um evento estressor, de alteração hormonal, de carência nutricional ou de mais de uma dessas coisas ao mesmo tempo. O tratamento que funciona num caso não faz efeito no outro.',
      },
      {
        tipo: 'p',
        texto:
          'É por isso que a avaliação inclui histórico, exame do couro cabeludo e, com frequência, exames laboratoriais. Começar um protocolo sem saber a causa é gastar meses para descobrir que o alvo era outro.',
      },
      { tipo: 'h2', texto: 'O que o tratamento pode oferecer' },
      {
        tipo: 'p',
        texto:
          'A intradermoterapia capilar leva ativos direto ao couro cabeludo, e costuma ser combinada com microagulhamento e cuidado domiciliar. O objetivo é estimular os folículos que ainda estão vivos e desacelerar o processo. Resultados aparecem em meses, não em semanas — o cabelo cresce no ritmo dele.',
      },
    ],
    faq: [
      {
        p: 'Quantos fios por dia é normal perder?',
        r: 'Entre 50 e 100 fios por dia faz parte do ciclo normal de renovação do cabelo. O sinal de alerta não é a queda em si, mas a redução visível de densidade ao longo dos meses.',
      },
      {
        p: 'Quando devo procurar tratamento para queda de cabelo?',
        r: 'Quando houver alargamento da risca, redução do volume, recuo da linha frontal, couro cabeludo visível em áreas onde antes não era, ou queda intensa mantida por mais de três meses. Quanto mais cedo, mais folículos ainda respondem ao tratamento.',
      },
      {
        p: 'Em quanto tempo aparece resultado?',
        r: 'Em meses, não em semanas. O cabelo tem ciclo próprio de crescimento e os primeiros sinais costumam aparecer depois de algumas sessões, com avaliação comparativa ao longo do protocolo.',
      },
    ],
    seo: {
      title: 'Queda de cabelo: quando procurar tratamento | Guarujá, SP',
      description:
        'Perder de 50 a 100 fios por dia é normal. Entenda os sinais de que a queda passou do esperado, por que a causa precisa ser investigada e o que o tratamento capilar oferece.',
    },
  },
];


export const acharArtigo = (slug: string) => ARTIGOS.find((a) => a.slug === slug);
