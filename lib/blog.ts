export type Artigo = {
  slug: string;
  titulo: string;
  categoria: string;
  resumo: string;
  leitura: string;
  data: string;
  /** capa 4:5 do artigo. Sem foto atribuída, entra a capa abstrata. */
  imagem?: string | null;
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
    imagem: '/images/blog/botox.jpg',
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
    imagem: '/images/blog/melasma.jpg',
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
    imagem: '/images/blog/abdominal.jpg',
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
    imagem: '/images/blog/labios-detalhe.jpg',
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
    imagem: '/images/blog/perfil-facial.jpg',
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
    imagem: '/images/blog/lipo-enzimatica.jpg',
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
    imagem: '/images/blog/capilar.jpg',
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
  {
    slug: 'quando-comecar-tratamentos-para-o-verao',
    titulo: 'Quer estar pronta no verão? A conta começa agora',
    categoria: 'Corporal',
    resumo:
      'Quase todo tratamento que muda alguma coisa de verdade leva meses. Novembro é tarde para começar.',
    leitura: '6 min',
    data: '2026-08-25',
    imagem: '/images/blog/verao.jpg',
    corpo: [
      {
        tipo: 'p',
        texto:
          'Todo ano acontece a mesma coisa: a procura dispara em novembro, quando a viagem já está marcada. E aí boa parte do que a pessoa quer simplesmente não cabe no tempo que sobrou — não porque o procedimento seja ruim, mas porque o corpo tem um ritmo próprio de resposta que ninguém acelera.',
      },
      { tipo: 'h2', texto: 'O tempo real de cada frente' },
      {
        tipo: 'lista',
        itens: [
          'Bioestimulador de colágeno: o resultado se constrói ao longo de 3 a 6 meses, porque quem produz o colágeno é o seu organismo',
          'Protocolo para estrias e flacidez: sessões seriadas, geralmente ao longo de 3 a 4 meses',
          'Lipo enzimática: protocolo com intervalo entre as sessões, tipicamente 2 a 3 meses até fechar',
          'Tratamento capilar: os primeiros sinais aparecem por volta de 3 meses, porque o cabelo cresce no ritmo dele',
          'Toxina botulínica: efeito pleno em cerca de 15 dias — essa sim cabe em cima da hora',
          'Preenchimento: resultado imediato, mas com inchaço nos primeiros dias, então não se faz na véspera de evento',
        ],
      },
      {
        tipo: 'destaque',
        texto:
          'Fim de agosto é o último mês confortável para quem quer resultado consolidado em dezembro.',
      },
      { tipo: 'h2', texto: 'Por que o inverno é a estação certa para pele' },
      {
        tipo: 'p',
        texto:
          'Peelings, lasers e procedimentos que renovam a pele deixam ela temporariamente mais sensível ao sol, e sol em pele em recuperação é o caminho mais curto para mancha. Por isso esses tratamentos se concentram nos meses de sol mais fraco — e a janela vai fechando conforme a primavera chega.',
      },
      {
        tipo: 'p',
        texto:
          'Aqui no litoral esse ponto pesa mais do que em cidade de interior: mesmo em dia nublado, a reverberação da areia e da água aumenta bastante a exposição. Quem mora ou passa o fim de semana na praia precisa antecipar mais do que a média.',
      },
      { tipo: 'h2', texto: 'Fazer tudo de uma vez não compensa o atraso' },
      {
        tipo: 'p',
        texto:
          'A tentação de empilhar procedimentos para recuperar o tempo perdido costuma sair pior: alguns não podem ser feitos na mesma região em sequência curta, e outros precisam do resultado do anterior estabilizado para serem avaliados corretamente. Chegar tarde e acelerar não devolve os meses — só aumenta o risco.',
      },
      {
        tipo: 'p',
        texto:
          'A conversa mais honesta que existe nessa época é dizer o que dá e o que não dá no tempo disponível, e montar o plano a partir daí.',
      },
    ],
    faq: [
      {
        p: 'Quando devo começar os tratamentos para o verão?',
        r: 'Depende do procedimento. Bioestimulador pede de 3 a 6 meses, protocolos corporais para estrias e flacidez de 3 a 4 meses, lipo enzimática de 2 a 3 meses. Toxina botulínica tem efeito pleno em cerca de 15 dias. Para resultado consolidado em dezembro, agosto e setembro são os meses de começar.',
      },
      {
        p: 'Posso fazer peeling perto do verão?',
        r: 'Procedimentos que renovam a pele a deixam temporariamente mais sensível ao sol, o que aumenta o risco de mancha. Por isso são concentrados nos meses de sol mais fraco. Em cidade litorânea a antecipação precisa ser ainda maior, pela reverberação da areia e da água.',
      },
      {
        p: 'Dá para acelerar fazendo vários procedimentos juntos?',
        r: 'Não com segurança. Alguns procedimentos não podem ser feitos na mesma região em sequência curta e outros exigem que o resultado do anterior esteja estabilizado para serem avaliados. Empilhar tratamentos para recuperar tempo aumenta risco sem devolver os meses.',
      },
    ],
    seo: {
      title: 'Quando começar os tratamentos estéticos para o verão | Guarujá',
      description:
        'Bioestimulador leva de 3 a 6 meses, protocolos corporais de 3 a 4. Veja o tempo real de cada tratamento e quando começar para estar pronta no verão. Guarujá, SP.',
    },
  },
  {
    slug: 'preenchimento-e-sol-pode-ir-para-a-praia',
    titulo: 'Fiz preenchimento. Posso ir para a praia?',
    categoria: 'Facial',
    resumo:
      'A pergunta de quem mora no litoral. A resposta tem prazo, e tem um detalhe sobre calor que quase ninguém comenta.',
    leitura: '4 min',
    data: '2026-08-23',
    imagem: '/images/blog/praia.jpg',
    corpo: [
      {
        tipo: 'p',
        texto:
          'Em cidade de praia essa dúvida aparece em quase toda consulta, e ela é legítima: não adianta orientar como se a pessoa morasse longe do mar e fosse ver sol só nas férias.',
      },
      { tipo: 'h2', texto: 'Os primeiros dias' },
      {
        tipo: 'p',
        texto:
          'Logo após o preenchimento a região está com edema e com pequenos pontos de entrada da agulha ou cânula ainda cicatrizando. Sol forte nesse momento favorece inchaço e, na pele com tendência a manchar, aumenta o risco de hiperpigmentação justamente onde houve trauma.',
      },
      {
        tipo: 'lista',
        itens: [
          'Evitar exposição solar direta e prolongada nos primeiros dias',
          'Evitar mar e piscina enquanto os pontos de entrada não estiverem fechados, pela questão de contaminação',
          'Protetor solar sempre, reaplicado — e isso vale para o ano inteiro, não só no pós',
          'Nada de esfregar, massagear ou apoiar a região com força',
        ],
      },
      {
        tipo: 'destaque',
        texto:
          'Calor intenso é diferente de sol. Sauna, banho muito quente e exposição prolongada ao calor aumentam o edema nos primeiros dias.',
      },
      { tipo: 'h2', texto: 'Sol degrada o preenchimento?' },
      {
        tipo: 'p',
        texto:
          'Não da forma dramática que circula por aí, mas o sol crônico e sem proteção acelera a degradação do ácido hialurônico e, principalmente, envelhece a pele ao redor. O produto até pode estar lá, e o conjunto parecer pior — porque a qualidade da pele caiu.',
      },
      { tipo: 'h2', texto: 'O prazo depende do caso' },
      {
        tipo: 'p',
        texto:
          'Quantidade aplicada, região tratada, se houve hematoma e o seu tipo de pele mudam a orientação. Por isso o prazo exato vem de quem aplicou, e vale mais do que qualquer regra geral de internet — inclusive esta.',
      },
    ],
    faq: [
      {
        p: 'Posso tomar sol depois de fazer preenchimento?',
        r: 'A exposição solar direta e prolongada deve ser evitada nos primeiros dias, enquanto há edema e os pontos de entrada estão cicatrizando, pelo risco de aumentar o inchaço e de manchar a região. O prazo exato é dado por quem aplicou, conforme a região e a quantidade.',
      },
      {
        p: 'Posso entrar no mar ou na piscina depois do preenchimento?',
        r: 'Não enquanto os pontos de entrada da agulha ou cânula não estiverem fechados, pela questão de contaminação. Esse prazo é orientado no pós-procedimento.',
      },
      {
        p: 'O sol faz o preenchimento durar menos?',
        r: 'Exposição solar crônica e sem proteção contribui para a degradação do ácido hialurônico e, sobretudo, envelhece a pele ao redor. O resultado pode parecer pior mesmo com produto ainda presente, porque a qualidade da pele caiu.',
      },
    ],
    seo: {
      title: 'Posso tomar sol e ir à praia depois do preenchimento? | Guarujá',
      description:
        'Sol direto, mar e piscina têm prazo depois do preenchimento. Entenda o risco de mancha, o efeito do calor no inchaço e o que fazer no litoral. Guarujá, SP.',
    },
  },
  {
    slug: 'bioestimulador-de-colageno-o-tempo-que-ele-pede',
    titulo: 'Bioestimulador não é preenchimento (e por isso demora)',
    categoria: 'Facial',
    resumo:
      'Sair da sessão sem ver diferença assusta quem esperava resultado na hora. Mas é exatamente assim que funciona.',
    leitura: '5 min',
    data: '2026-08-20',
    imagem: '/images/blog/bioestimulador.jpg',
    corpo: [
      {
        tipo: 'p',
        texto:
          'Existe uma frustração clássica: a pessoa faz bioestimulador esperando o efeito do preenchimento, se olha no espelho no dia seguinte e acha que não funcionou. Funcionou — só que o resultado ainda nem começou a existir.',
      },
      { tipo: 'h2', texto: 'A diferença de mecanismo' },
      {
        tipo: 'p',
        texto:
          'O preenchimento ocupa espaço: você coloca o produto e ele dá volume ali, na hora. O bioestimulador faz outra coisa — ele provoca o seu organismo a produzir colágeno naquela região. Quem constrói o resultado é você, ao longo de meses, e é por isso que a melhora aparece devagar.',
      },
      {
        tipo: 'destaque',
        texto:
          'Preenchimento entrega volume. Bioestimulador entrega sustentação e qualidade de pele. São objetivos diferentes.',
      },
      { tipo: 'h2', texto: 'A linha do tempo' },
      {
        tipo: 'lista',
        itens: [
          'Primeiros dias: pode haver leve inchaço, que não é o resultado — muita gente confunde',
          'Primeiro mês: pouca ou nenhuma mudança visível, e isso é esperado',
          'A partir de 2 a 3 meses: a melhora de firmeza e de textura começa a aparecer',
          'De 3 a 6 meses: resultado se consolidando, geralmente com mais de uma sessão no protocolo',
        ],
      },
      { tipo: 'h2', texto: 'Quando um, quando o outro' },
      {
        tipo: 'p',
        texto:
          'Se a queixa é perda de projeção ou de volume em uma região específica, preenchimento resolve o que bioestimulador não resolve. Se a queixa é pele que perdeu firmeza, textura opaca, aquele aspecto de "caiu um pouco tudo", o bioestimulador é o caminho. Muitos planos usam os dois, em momentos diferentes.',
      },
      {
        tipo: 'p',
        texto:
          'Escolher errado aqui é caro em tempo: seis meses esperando um resultado que aquele produto nunca ia entregar.',
      },
    ],
    faq: [
      {
        p: 'Qual a diferença entre bioestimulador e preenchimento?',
        r: 'O preenchimento ocupa espaço e dá volume imediato. O bioestimulador estimula o organismo a produzir colágeno, então o resultado se constrói ao longo de meses e entrega sustentação e qualidade de pele, não volume pontual.',
      },
      {
        p: 'Quanto tempo demora para ver resultado do bioestimulador?',
        r: 'A melhora começa a aparecer por volta de 2 a 3 meses e se consolida entre 3 e 6 meses, normalmente com mais de uma sessão no protocolo. Pouca mudança no primeiro mês é esperada.',
      },
      {
        p: 'O inchaço dos primeiros dias é o resultado?',
        r: 'Não. O leve edema inicial é reação ao procedimento e passa. O resultado real é o colágeno que se forma ao longo dos meses seguintes.',
      },
    ],
    seo: {
      title: 'Bioestimulador de colágeno: quanto tempo leva o resultado | Guarujá',
      description:
        'Bioestimulador estimula colágeno e leva de 3 a 6 meses, diferente do preenchimento que dá volume imediato. Entenda a linha do tempo e quando cada um é indicado.',
    },
  },
  {
    slug: 'toxina-botulinica-ou-fios-de-pdo',
    titulo: 'Toxina botulínica ou fios de PDO: quando cada um resolve',
    categoria: 'Facial',
    resumo:
      'Os dois tratam a mesma região com frequência, mas atacam problemas diferentes. Um não substitui o outro.',
    leitura: '5 min',
    data: '2026-08-16',
    imagem: '/images/blog/toxina-pdo.jpg',
    corpo: [
      {
        tipo: 'p',
        texto:
          'A dúvida costuma nascer da região: os dois aparecem em conversa sobre olhar cansado, sobrancelha caída, pés de galinha. Só que um trata movimento e o outro trata sustentação — e confundir isso leva a fazer o procedimento certo para o problema errado.',
      },
      { tipo: 'h2', texto: 'O que a toxina botulínica faz' },
      {
        tipo: 'p',
        texto:
          'Reduz temporariamente a contração de músculos específicos. Ela age sobre a linha que aparece quando você faz a expressão. Se a marca some quando o rosto está em repouso, é candidata a toxina.',
      },
      { tipo: 'h2', texto: 'O que os fios de PDO fazem' },
      {
        tipo: 'p',
        texto:
          'Trabalham sustentação e estímulo de colágeno no trajeto do fio. Atuam sobre o tecido que perdeu firmeza e desceu — algo que a toxina não levanta, porque não é problema de músculo contraindo demais.',
      },
      {
        tipo: 'destaque',
        texto:
          'Marca que aparece só quando você faz expressão: toxina. Estrutura que desceu e fica caída em repouso: sustentação.',
      },
      { tipo: 'h2', texto: 'Por que muitas vezes se usa os dois' },
      {
        tipo: 'p',
        texto:
          'É comum o mesmo rosto ter as duas coisas ao mesmo tempo, e aí a combinação faz sentido: a toxina tira a marca dinâmica e reduz a força que puxa o tecido para baixo, enquanto o fio trabalha a sustentação. Um ajuda o resultado do outro a durar.',
      },
      { tipo: 'h2', texto: 'Duração' },
      {
        tipo: 'lista',
        itens: [
          'Toxina botulínica: efeito temporário, com retorno periódico definido na avaliação',
          'Fios de PDO: o fio é absorvido, mas o colágeno estimulado no trajeto permanece por mais tempo',
          'Nos dois casos, hábitos e características individuais mudam bastante a duração',
        ],
      },
      {
        tipo: 'p',
        texto:
          'Qual dos dois — ou os dois — é decisão da avaliação presencial, olhando o seu rosto em movimento e em repouso. Foto não mostra contração.',
      },
    ],
    faq: [
      {
        p: 'Qual a diferença entre toxina botulínica e fios de PDO?',
        r: 'A toxina reduz temporariamente a contração muscular e trata linhas de expressão. Os fios de PDO trabalham sustentação e estímulo de colágeno, atuando sobre tecido que perdeu firmeza. Tratam problemas diferentes.',
      },
      {
        p: 'Posso fazer os dois juntos?',
        r: 'Sim, é uma combinação comum quando o rosto apresenta as duas questões. A toxina reduz a marca dinâmica e a força que traciona o tecido, enquanto o fio trabalha a sustentação, o que costuma prolongar o resultado.',
      },
      {
        p: 'Como sei qual é o meu caso?',
        r: 'Se a marca aparece apenas quando você faz a expressão e some em repouso, é questão de movimento. Se a estrutura fica caída mesmo com o rosto relaxado, é questão de sustentação. A definição é feita na avaliação presencial, observando o rosto em movimento e em repouso.',
      },
    ],
    seo: {
      title: 'Toxina botulínica ou fios de PDO: qual é o seu caso? | Guarujá',
      description:
        'Toxina trata linha de expressão, fios de PDO tratam sustentação e estimulam colágeno. Entenda a diferença, quando combinar os dois e quanto dura cada um.',
    },
  },
  {
    slug: 'primeiras-48-horas-depois-do-preenchimento',
    titulo: 'As primeiras 48 horas depois do preenchimento',
    categoria: 'Facial',
    resumo:
      'O que é reação esperada, o que é sinal de alerta e a lista do que não fazer — mesmo achando que não tem problema.',
    leitura: '5 min',
    data: '2026-08-13',
    imagem: '/images/blog/pos-48h.jpg',
    corpo: [
      {
        tipo: 'p',
        texto:
          'Boa parte da ansiedade do pós vem de não saber o que é normal. Inchaço, um roxinho, sensação de endurecido — quase tudo isso faz parte, mas ninguém consegue relaxar sem saber onde está a linha.',
      },
      { tipo: 'h2', texto: 'O que é esperado' },
      {
        tipo: 'lista',
        itens: [
          'Edema, principalmente nas primeiras 24 a 48 horas — nos lábios costuma ser mais evidente',
          'Pequenos hematomas nos pontos de entrada, que se resolvem em alguns dias',
          'Sensibilidade ao toque na região',
          'Sensação de que a área está mais firme ou irregular ao tocar, que melhora conforme o edema baixa',
        ],
      },
      {
        tipo: 'destaque',
        texto:
          'Não avalie o resultado nas primeiras 48 horas. O que você está vendo ainda é inchaço, não é o resultado.',
      },
      { tipo: 'h2', texto: 'O que evitar' },
      {
        tipo: 'lista',
        itens: [
          'Atividade física intensa, que aumenta o fluxo e o edema',
          'Calor: sauna, banho muito quente, exposição prolongada ao sol',
          'Álcool, que favorece inchaço e hematoma',
          'Massagear, apertar ou "ajeitar" a região por conta própria',
          'Dormir com o rosto pressionado contra o travesseiro, quando a aplicação foi facial',
        ],
      },
      { tipo: 'h2', texto: 'Quando entrar em contato' },
      {
        tipo: 'p',
        texto:
          'Dor que aumenta em vez de diminuir, palidez ou mudança de cor da pele na região, dor desproporcional, alteração de visão ou qualquer sintoma que foge do padrão descrito acima merecem contato imediato com quem aplicou. Isso não é comum, mas é o tipo de coisa em que tempo importa — não espere para ver se melhora sozinho.',
      },
      {
        tipo: 'p',
        texto:
          'Toda paciente sai da sessão com orientação de pós e com canal aberto para tirar dúvida. Essa parte não é formalidade: é o que permite agir cedo se algo fugir do esperado.',
      },
    ],
    faq: [
      {
        p: 'É normal ficar inchado depois do preenchimento?',
        r: 'Sim. O edema é esperado, especialmente nas primeiras 24 a 48 horas, e nos lábios costuma ser mais evidente. Pequenos hematomas nos pontos de entrada e sensibilidade ao toque também fazem parte.',
      },
      {
        p: 'O que não posso fazer depois do preenchimento?',
        r: 'Nas primeiras 48 horas evite atividade física intensa, calor (sauna, banho muito quente, sol prolongado), álcool, massagear ou apertar a região, e dormir com o rosto pressionado no travesseiro quando a aplicação foi facial.',
      },
      {
        p: 'Quando devo procurar atendimento?',
        r: 'Dor que aumenta em vez de diminuir, palidez ou mudança de cor da pele na região, dor desproporcional ou alteração de visão pedem contato imediato com quem aplicou. São situações incomuns, mas em que agir cedo faz diferença.',
      },
    ],
    seo: {
      title: 'Pós-preenchimento: as primeiras 48 horas | Dra. Fernanda Paz',
      description:
        'Inchaço, hematoma e sensibilidade são esperados depois do preenchimento. Veja o que evitar nas primeiras 48h e quais sinais pedem contato imediato.',
    },
  },
  {
    slug: 'posso-malhar-depois-do-procedimento',
    titulo: 'Posso malhar depois do procedimento?',
    categoria: 'Corporal',
    resumo:
      'A pergunta de quem não quer perder a rotina. A resposta muda conforme o procedimento — e o motivo não é frescura.',
    leitura: '4 min',
    data: '2026-08-09',
    imagem: '/images/blog/treino.jpg',
    corpo: [
      {
        tipo: 'p',
        texto:
          'Quem treina com constância não quer parar, e a orientação de pausar costuma soar exagerada. Só que o motivo é concreto: exercício aumenta frequência cardíaca, pressão e fluxo sanguíneo, e isso interfere diretamente em duas coisas — inchaço e posicionamento do produto recém-aplicado.',
      },
      { tipo: 'h2', texto: 'Por que a pausa existe' },
      {
        tipo: 'lista',
        itens: [
          'Aumento de fluxo intensifica o edema, o que atrasa a leitura do resultado',
          'Aumenta a chance de hematoma nos pontos de entrada',
          'Calor e suor em pele com pontos de entrada abertos elevam o risco de contaminação',
          'Em preenchimento, movimento e pressão na região logo após a aplicação podem interferir na acomodação do produto',
        ],
      },
      {
        tipo: 'destaque',
        texto:
          'A pausa é curta e o prazo varia por procedimento. É bem menos tempo do que a maioria imagina.',
      },
      { tipo: 'h2', texto: 'Não é tudo igual' },
      {
        tipo: 'p',
        texto:
          'Um preenchimento facial, uma aplicação de toxina, um protocolo corporal injetável e um procedimento capilar têm orientações diferentes entre si — e a região tratada também pesa. Treino de pernas depois de um procedimento no rosto não tem o mesmo peso que abdominal depois de um procedimento no abdome.',
      },
      { tipo: 'h2', texto: 'O que costuma ser liberado antes' },
      {
        tipo: 'p',
        texto:
          'Caminhada leve e atividade de baixa intensidade normalmente voltam antes do treino pesado. O que fica por último é o que eleva muito a frequência cardíaca, o que gera muito suor e o que pressiona a região tratada.',
      },
      {
        tipo: 'p',
        texto:
          'Se a rotina de treino é importante para você — e para muita gente é —, diga isso na avaliação. Dá para planejar a data do procedimento em função da sua semana, em vez de descobrir a restrição depois.',
      },
    ],
    faq: [
      {
        p: 'Posso malhar depois de fazer preenchimento?',
        r: 'Atividade física intensa deve ser evitada logo após o procedimento, porque o aumento de fluxo sanguíneo intensifica o edema e a chance de hematoma, e a pressão na região pode interferir na acomodação do produto. O prazo é curto e definido conforme o caso.',
      },
      {
        p: 'Quanto tempo preciso ficar sem treinar?',
        r: 'Varia conforme o procedimento e a região tratada. Caminhada e atividades de baixa intensidade costumam ser liberadas antes do treino pesado. A orientação específica é dada no pós-procedimento.',
      },
      {
        p: 'Posso agendar o procedimento pensando na minha rotina de treino?',
        r: 'Sim, e é recomendável comentar isso na avaliação. Dá para escolher a data considerando sua semana de treino, em vez de descobrir a restrição depois de aplicado.',
      },
    ],
    seo: {
      title: 'Posso malhar depois do procedimento estético? | Guarujá, SP',
      description:
        'Exercício aumenta fluxo sanguíneo, edema e risco de hematoma no pós-procedimento. Entenda o porquê da pausa, quanto tempo dura e o que é liberado antes.',
    },
  },
  {
    slug: 'estrias-brancas-ou-vermelhas-tem-tratamento',
    titulo: 'Estrias brancas e vermelhas não são a mesma coisa',
    categoria: 'Pele',
    resumo:
      'A cor não é detalhe estético: ela diz em que fase a estria está, e isso muda tudo no que dá para esperar.',
    leitura: '5 min',
    data: '2026-08-06',
    imagem: '/images/blog/estrias.jpg',
    corpo: [
      {
        tipo: 'p',
        texto:
          'Quase todo mundo chega perguntando se estria tem tratamento. Tem — mas a primeira pergunta de volta é sobre a cor, porque estria vermelha e estria branca são fases diferentes do mesmo processo, com potencial de resposta bem diferente.',
      },
      { tipo: 'h2', texto: 'Estria vermelha ou arroxeada' },
      {
        tipo: 'p',
        texto:
          'É a fase inicial, ainda inflamatória, com circulação ativa na região. É a melhor janela de tratamento que existe: o tecido ainda está em processo e responde melhor ao estímulo.',
      },
      {
        tipo: 'destaque',
        texto:
          'Estria vermelha é a janela boa. Quanto mais cedo ali dentro, melhor o resultado possível.',
      },
      { tipo: 'h2', texto: 'Estria branca' },
      {
        tipo: 'p',
        texto:
          'É a fase madura, já cicatricial. A resposta existe, mas é mais lenta e mais limitada: o objetivo passa a ser melhorar textura, reduzir a profundidade e atenuar o contraste com a pele ao redor. Prometer sumiço completo de estria branca não é promessa realista.',
      },
      { tipo: 'h2', texto: 'O que muda o resultado' },
      {
        tipo: 'lista',
        itens: [
          'A fase em que a estria está — o fator que mais pesa',
          'Largura e profundidade de cada lesão',
          'Extensão da área a tratar',
          'Constância: o protocolo é seriado, e resultado bom depende de completar as sessões',
          'Cuidado domiciliar entre uma sessão e outra',
        ],
      },
      { tipo: 'h2', texto: 'Expectativa honesta' },
      {
        tipo: 'p',
        texto:
          'O objetivo do tratamento é melhora significativa de aparência e textura, não apagar a estria. Quem promete pele lisa como antes está vendendo algo que a estria — que é uma cicatriz na derme — não permite entregar. E a diferença entre uma coisa e outra é justamente o que faz alguém sair satisfeito ou frustrado.',
      },
    ],
    faq: [
      {
        p: 'Qual a diferença entre estria vermelha e estria branca?',
        r: 'A vermelha ou arroxeada é a fase inicial, ainda inflamatória e com circulação ativa, e é a que melhor responde ao tratamento. A branca é a fase madura, já cicatricial, com resposta mais lenta e mais limitada.',
      },
      {
        p: 'Estria branca tem tratamento?',
        r: 'Tem, mas com objetivo diferente: melhorar textura, reduzir profundidade e atenuar o contraste com a pele ao redor. Sumiço completo não é resultado realista para estria em fase cicatricial.',
      },
      {
        p: 'Quantas sessões são necessárias?',
        r: 'O tratamento é seriado e o número depende da fase, da largura e profundidade das lesões e da extensão da área. Completar o protocolo e manter o cuidado domiciliar entre as sessões pesa diretamente no resultado.',
      },
    ],
    seo: {
      title: 'Estrias brancas e vermelhas: qual tem mais chance de melhorar?',
      description:
        'Estria vermelha está em fase inflamatória e responde melhor ao tratamento. Estria branca é cicatricial e pede expectativa realista. Entenda a diferença. Guarujá, SP.',
    },
  },

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
