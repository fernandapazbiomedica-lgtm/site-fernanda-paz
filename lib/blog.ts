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

export const acharArtigo = (slug: string) => ARTIGOS.find((a) => a.slug === slug);
