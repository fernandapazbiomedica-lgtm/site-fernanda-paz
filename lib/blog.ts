export type Artigo = {
  slug: string;
  titulo: string;
  categoria: string;
  resumo: string;
  leitura: string;
  data: string;
  imagem?: string;
  /** conteúdo em blocos. PENDENTE de revisão clínica da Dra. */
  corpo: ({ tipo: 'p' | 'h2' | 'destaque' | 'lista' | 'imagem'; texto?: string; itens?: string[]; src?: string; alt?: string } | {
    tipo: 'produtos';
    produtos: Array<{
      nome: string;
      marca: string;
      faixa: 'acessível' | 'intermediário' | 'investimento';
      porque: string;
      href?: string;
      selo?: string;
    }>;
  })[];
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
  {
    slug: 'pele-oleosa-acneica',
    titulo: 'Pele oleosa e acneica: a rotina completa, etapa por etapa',
    categoria: 'Skincare',
    resumo: 'Como montar a rotina em quatro etapas, com opções em faixas de investimento diferentes — e o que procurar em cada passo.',
    leitura: '9 min',
    data: '2026-08-27',
    corpo: [
      {
        tipo: 'p',
        texto: 'Pele oleosa produz sebo demais — e o erro mais comum é tratar isso como sujeira. Quando a rotina vira "dessecante total", a barreira fica comprometida, a pele fica inflamada, e produz MAIS sebo como proteção. É um ciclo que se retroalimenta.'
      },
      {
        tipo: 'imagem',
        src: '/images/blog-content/pele-oleosa.jpg',
        alt: 'Pele oleosa: produção de sebo em excesso'
      },
      {
        tipo: 'destaque',
        texto: 'O objetivo não é secar a pele. É controlar o sebo mantendo a barreira intacta.'
      },
      {
        tipo: 'p',
        texto: 'Abaixo está uma rotina montada por etapa, com opções em faixas de investimento diferentes em cada uma. Escolha um produto por etapa — não precisa de mais.'
      },
      {
        tipo: 'h2',
        texto: 'Etapa 1 · Limpeza'
      },
      {
        tipo: 'p',
        texto: 'Duas vezes ao dia, e só. O limpador certo tira o excesso de sebo sem deixar aquela sensação de repuxo que alguns causam. Se lavar rosto mais de duas vezes por dia, você danifica a barreira.'
      },
      {
        tipo: 'produtos',
        produtos: [
          {
            nome: 'Gel de Limpeza GL-01 200g',
            marca: 'Principia',
            faixa: 'acessível',
            porque: 'Fórmula enxuta e rende muito pelo tamanho. É o ponto de partida de melhor custo por uso da lista.',
            href: 'https://s.shopee.com.br/6L3xYyLYN3',
            selo: 'Melhor custo-benefício'
          },
          {
            nome: 'Effaclar Gel de Limpeza Concentrado 300g',
            marca: 'La Roche-Posay',
            faixa: 'intermediário',
            porque: 'O mais conhecido da categoria, e conhecido por bom motivo. Vale se a sua pele não tolerou bem os anteriores.',
            href: 'https://s.shopee.com.br/7VFuxJpeiR'
          }
        ]
      },
      {
        tipo: 'h2',
        texto: 'Etapa 2 · Tratamento'
      },
      {
        tipo: 'p',
        texto: 'É aqui que a rotina age de verdade. Niacinamida ajuda a regular sebo e a acalmar a vermelhidão; ácido salicílico e glicólico entram nos poros e desobstruem. Escolha UM nesta etapa — combinações muito concentradas de ativos irritam.'
      },
      {
        tipo: 'imagem',
        src: '/images/blog-content/pele-acneica.jpg',
        alt: 'Pele acneica: acne ativa com inflamação e oleosidade'
      },
      {
        tipo: 'produtos',
        produtos: [
          {
            nome: 'Sérum NC-10 30ml',
            marca: 'Principia',
            faixa: 'acessível',
            porque: 'Niacinamida a 10%. Se você vai comprar um único ativo desta lista, comece por este.',
            href: 'https://s.shopee.com.br/4VcJNdN7SC',
            selo: 'Comece por aqui'
          },
          {
            nome: 'Sérum Mix-01 30ml',
            marca: 'Principia',
            faixa: 'acessível',
            porque: 'Combina mais de um ativo no mesmo frasco — simplifica a rotina de quem não quer gerenciar cinco potes.',
            href: 'https://s.shopee.com.br/3g3CO889y4'
          },
          {
            nome: 'Sérum Antiacne Acne Defense 5D 30ml',
            marca: 'Creamy',
            faixa: 'intermediário',
            porque: 'Formulado para quadro de acne ativa, não só para oleosidade. É o passo seguinte quando a niacinamida sozinha não resolve.',
            href: 'https://s.shopee.com.br/7fZL9Y4W0v',
            selo: 'Para acne ativa'
          },
          {
            nome: 'Depore Acne Intense Sérum',
            marca: 'Ada Tina',
            faixa: 'investimento',
            porque: 'Concentração maior e fórmula mais técnica. Faz sentido para quem já tentou o básico sem resposta.',
            href: 'https://s.shopee.com.br/20uyPHzm6A'
          }
        ]
      },
      {
        tipo: 'h2',
        texto: 'Etapa 3 · Hidratação'
      },
      {
        tipo: 'p',
        texto: 'A etapa que quem tem pele oleosa costuma pular — e é justamente ela que impede o efeito rebote. Usar um hidratante adequado não torna a pele mais oleosa. Torna-a mais resistente.'
      },
      {
        tipo: 'produtos',
        produtos: [
          {
            nome: 'Oil Control Loção Hidratante Facial 52g',
            marca: 'CeraVe',
            faixa: 'intermediário',
            porque: 'Hidrata com ceramidas e ainda ajuda no controle de brilho. Resolve a objeção de "hidratante deixa meu rosto oleoso".',
            href: 'https://s.shopee.com.br/8V8S9BlFNT',
            selo: 'Resolve o medo de hidratar'
          }
        ]
      },
      {
        tipo: 'h2',
        texto: 'Etapa 4 · Proteção solar'
      },
      {
        tipo: 'p',
        texto: 'Não é opcional, e em pele acneica é o que decide se a marca vermelha vira mancha escura permanente. A lista de protetores solares que funcionam bem em pele oleosa é longa, mas não cabe aqui. O critério: busque por "dry touch" ou "oil-free", e teste em meia carinha por uma semana antes de comprometer.'
      },
      {
        tipo: 'p',
        texto: 'Esta lista ainda não traz protetor solar. É a peça que falta para a rotina ficar completa — porque é categoria vasta e indicação depende muito da textura individual.'
      },
      {
        tipo: 'h2',
        texto: 'O que a rotina em casa não resolve'
      },
      {
        tipo: 'p',
        texto: 'Skincare controla o quadro; ele não retira o que já ficou. Poro dilatado, cicatriz de acne e mancha escura que ficou depois da inflamação — essas são indicações para consultório.'
      },
      {
        tipo: 'imagem',
        src: '/images/blog-content/poros-dilatados.jpg',
        alt: 'Poros dilatados: resultado da oleosidade não controlada'
      },
      {
        tipo: 'lista',
        itens: [
          'Peelings faciais: renovam a camada superficial e ajudam na textura e nas marcas',
          'Microagulhamento facial: atua sobre cicatriz de acne e qualidade da pele',
          'Skinbooster: hidratação profunda em pele que oleia mas está desidratada por dentro'
        ]
      },
      {
        tipo: 'p',
        texto: 'A escolha entre eles, a ordem e o intervalo saem da avaliação — porque pele oleosa com acne ativa não é "aplique skinbooster e pronto". Cada caso tem sua hora.'
      },
      {
        tipo: 'destaque',
        texto: 'Transparência: os links de produto desta página são links de afiliado. Se você comprar por eles, a clínica pode receber uma comissão sem custo adicional pra você.'
      }
    ],
    faq: [
      {
        p: 'Pele oleosa precisa de hidratante?',
        r: 'Precisa. Pular a hidratação é o erro que mais alimenta o problema: a barreira danificada faz a glândula sebácea trabalhar em dobro. Hidratante oil-free é a solução.'
      },
      {
        p: 'Quanto tempo até ver resultado?',
        r: 'De seis a oito semanas para os ativos mostrarem o que fazem, usando com constância. Trocar de produto toda semana por preguiça de esperar não conta como "tentei".'
      },
      {
        p: 'Posso usar niacinamida e ácido salicílico juntos?',
        r: 'Muita gente usa, mas introduza um de cada vez e com semanas de intervalo. Começar os dois juntos torna impossível saber qual irritou quando a pele reage.'
      },
      {
        p: 'Produto caro funciona melhor?',
        r: 'Nem sempre. O que decide é o ativo, a concentração e a constância de uso. Nesta lista há opções de cem reais que funcionam tanto quanto as de duzentos.'
      },
      {
        p: 'Isso substitui a consulta?',
        r: 'Não. Uma rotina bem montada controla oleosidade e ajuda no quadro leve. Acne moderada a grave, cicatrizes e manchas que ficaram precisam avaliação presencial. Este é um guia, não um diagnóstico.'
      }
    ],
    seo: {
      title: 'Pele oleosa e acneica: rotina completa por etapa | Dra. Fernanda Paz',
      description: 'Rotina de 4 etapas para pele oleosa com acne, com produtos recomendados em faixas de preço. Links de afiliado | Clínica da Fefe, Guarujá.'
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
        texto: 'Produtos Despigmentantes com Resultado'
      },
      {
        tipo: 'p',
        texto: 'Procure por ativos como Vitamina C, Ácido tranexâmico, Niacinamida e Ácido azeláico. Aplicar regularmente melhora o clareamento significativamente. Escolha um por etapa — não combine muitos ativos.'
      },
      {
        tipo: 'produtos',
        produtos: [
          {
            nome: 'Sérum Facial VC-10 30ml',
            marca: 'Principia',
            faixa: 'acessível',
            porque: 'Vitamina C estabilizada a 10%. Antioxidante potente que clareia e restaura brilho. Melhor custo-benefício em vitamina C.',
            href: 'https://s.shopee.com.br/9AO8wXAbxN',
            selo: 'Começa por aqui'
          },
          {
            nome: 'Mela B3 Sérum Antimanchas 30ml',
            marca: 'La Roche-Posay',
            faixa: 'intermediário',
            porque: 'Niacinamida + B3 específico para manchas. Reduz produção de melanina e clareia marcas já instaladas.',
            href: 'https://s.shopee.com.br/qj11OSxHg'
          },
          {
            nome: 'Isdinceutics Melaclear Advanced 30ml',
            marca: 'Isdin',
            faixa: 'intermediário',
            porque: 'Fórmula potente com ativos clareadores concentrados. Para melasma que já foi trabalhado e precisa de potência extra.',
            href: 'https://s.shopee.com.br/4VcJO9wnNx'
          },
          {
            nome: 'Clarivis TX Ultra',
            marca: 'Ada Tina',
            faixa: 'investimento',
            porque: 'Combinação de ácido tranexâmico + retinol. Máxima potência em clareamento e renovação. Para quem já tentou básicos sem resultado.',
            href: 'https://s.shopee.com.br/3VjmCL4bAh'
          },
          {
            nome: 'Anti-Pigment Dual Sérum 30ml',
            marca: 'Eucerin',
            faixa: 'intermediário',
            porque: 'Dupla ação com ativos específicos para manchas e melasma. Textura leve, fácil de usar com outros produtos.',
            href: 'https://s.shopee.com.br/7VFuxZnjIf'
          }
        ]
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
        p: 'Como tirar manchas de melasma rapidamente?',
        r: 'Não existe "rápido" para melasma. Com procedimentos em consultório (laser ou peeling químico) + rotina em casa, 3-6 meses mostram resultado visível. Skincare sozinho é mais lento, mas funciona.'
      },
      {
        p: 'Qual produto é melhor para tirar manchas?',
        r: 'Nenhum produto isolado resolve melasma. A combinação de vitamina C + protetor solar FPS 50+ é o básico. Se quer resultado mais rápido, adicione ácido tranexâmico ou procure por procedimentos.'
      },
      {
        p: 'Melasma tem cura permanente?',
        r: 'Não. Melasma é uma tendência da pele — pode clarear muito, mas a predisposição permanece. O controle é excelente com proteção solar diária e rotina de clareamento consistente.'
      },
      {
        p: 'Posso fazer procedimentos para melasma durante o verão?',
        r: 'Alguns procedimentos intensificam sensibilidade ao sol. É melhor fazer em meses de menor exposição (março-maio ou setembro-outubro). Converse com a dermatologista sobre o melhor período.'
      },
      {
        p: 'Quanto tempo até ver resultado com skincare?',
        r: 'Com rotina consistente (vitamina C + protetor solar diário), 3-4 meses já mostram melhora. Resultado máximo leva 6-8 meses. Se estagnar, é hora de considerar procedimentos.'
      },
      {
        p: 'Protetor solar causa melasma?',
        r: 'Não — o que causa é a falta de protetor. Alguns protetores antigos com avobenzona podiam manchar, mas os atuais são seguros. Escolha um bom protetor e aplique bem para prevenir piorar.'
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
        texto: 'Rotina Completa para Pele Seca'
      },
      {
        tipo: 'p',
        texto: 'A rotina para pele seca deve focar em camadas de hidratação — hidrolato, sérum, creme e selante. Não pule etapas e escolha um produto por categoria.'
      },
      {
        tipo: 'h2',
        texto: 'Etapa 1 · Limpeza Suave'
      },
      {
        tipo: 'p',
        texto: 'Óleos e leites demaquilantes são mais suaves que sabonetes. Removem maquiagem e impurezas sem danificar a barreira lipídica.'
      },
      {
        tipo: 'produtos',
        produtos: [
          {
            nome: 'Óleo de Limpeza Facial 236ml',
            marca: 'CeraVe',
            faixa: 'intermediário',
            porque: 'Remove maquiagem, sebo oxidado e impurezas sem ressecar. Sai com água e deixa a pele macia.',
            href: 'https://s.shopee.com.br/20uyQKIC6I',
            selo: 'Ideal para pele seca'
          },
          {
            nome: 'Limpador Facial Hidratante 200ml',
            marca: 'Creamy',
            faixa: 'acessível',
            porque: 'Leite demaquilante suave com ativos hidratantes. Perfeito para manhã e noite sem irritar.',
            href: 'https://s.shopee.com.br/4VcJOoblZo'
          }
        ]
      },
      {
        tipo: 'h2',
        texto: 'Etapa 2 · Hidratação Intensiva'
      },
      {
        tipo: 'p',
        texto: 'Séruns hidratantes com ácido hialurônico vêm antes do creme para preparar a pele a receber mais umidade.'
      },
      {
        tipo: 'produtos',
        produtos: [
          {
            nome: 'Sérum AH-2 30ml',
            marca: 'Principia',
            faixa: 'acessível',
            porque: 'Ácido hialurônico em dupla molecularidade — penetra e retém água. Melhor custo-benefício da categoria.',
            href: 'https://s.shopee.com.br/AAGg9HWRUG',
            selo: 'Melhor custo-benefício'
          },
          {
            nome: 'Minéral 89 Sérum 30ml',
            marca: 'Vichy',
            faixa: 'intermediário',
            porque: 'Água termal + minerais que recompõem a umidade da pele. Levíssimo mas poderoso.',
            href: 'https://s.shopee.com.br/5LBQPWREz6'
          }
        ]
      },
      {
        tipo: 'h2',
        texto: 'Etapa 3 · Creme Hidratante Rico'
      },
      {
        tipo: 'p',
        texto: 'O creme sela a hidratação e restaura a barreira lipídica. Em pele muito seca, use logo após o sérum enquanto ainda está úmido.'
      },
      {
        tipo: 'produtos',
        produtos: [
          {
            nome: 'Creme Hidratante CH-01 50g',
            marca: 'Principia',
            faixa: 'acessível',
            porque: 'Fórmula densa com ceramidas. Textura rica que absorve bem sem deixar oleoso.',
            href: 'https://s.shopee.com.br/20uyQ6WNFz',
            selo: 'Começa aqui'
          },
          {
            nome: 'Creme Hidratante Facial Pele Seca a Extrasseca 50g',
            marca: 'CeraVe',
            faixa: 'intermediário',
            porque: 'Ceramidas + ácido hialurônico. Específico para pele muito ressecada e irritada.',
            href: 'https://s.shopee.com.br/4fvjb4Bwc2'
          },
          {
            nome: 'Cicaplast Baume B5+ 40ml',
            marca: 'La Roche-Posay',
            faixa: 'intermediário',
            porque: 'Mais um bálsamo que creme. Para pele extremamente seca ou danificada. Uso também em lábios e cutículas.',
            href: 'https://s.shopee.com.br/AKa6Lf7n4R'
          },
          {
            nome: 'Hyalo 90 Ultra Minerals',
            marca: 'Ada Tina',
            faixa: 'investimento',
            porque: 'Concentração máxima de ácido hialurônico + minerais. Para quem já tentou tudo e precisa de resultado rápido.',
            href: 'https://s.shopee.com.br/8fRsMi72pK'
          }
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
          'Produtos com fragrância forte (irritam pele seca)',
          'Trocar de marca toda semana — a pele precisa de tempo para se adaptar'
        ]
      },
      {
        tipo: 'destaque',
        texto: 'Dica importante: se sua pele é muito seca mas o hidratante não ajuda, pode ser um problema de barreira danificada, dermatite atópica ou ressecação patológica — situações que precisam de avaliação clínica, não só skincare.'
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
        p: 'Que tipo de skincare devo usar em pele seca?',
        r: 'Foco em limpeza suave (sem álcool), séruns com ácido hialurônico, cremes ricos com ceramidas, e selante como óleo. Evite ácidos muito concentrados ou esfoliação frequente.'
      },
      {
        p: 'Qual é o melhor produto para pele seca sensível?',
        r: 'Procure por fórmulas sem fragrância, com centella asiática, ácido hialurônico e ceramidas. Marcas como CeraVe, La Roche-Posay e Creamy são seguras para pele reativa.'
      },
      {
        p: 'Pele seca precisa de protetor solar?',
        r: 'Sim, absolutamente. Escolha um em creme ou bastão (stick), não fluidos. O UV danifica ainda mais a barreira já comprometida. Teste marcas formuladas para pele seca.'
      },
      {
        p: 'Posso usar óleos naturais no rosto?',
        r: 'Sim, mas com cuidado. Rosa mosqueta, argan e jojoba em pequena quantidade (2-3 gotas) após o sérum funcionam bem. Comece 1-2 vezes na semana para testar tolerância.'
      },
      {
        p: 'Com que frequência devo fazer máscaras de hidratação?',
        r: '1-2 vezes por semana. Escolha máscaras em creme ou gel que deixam o rosto úmido — evite aquelas que resecam rápido ou formam película.'
      },
      {
        p: 'Quanto tempo até minha pele seca melhorar?',
        r: '4-6 semanas de rotina consistente. A barreira leva tempo para se reconstruir. Se ainda estiver muito seca após 8 semanas, procure dermatologista — pode ser dermatite de contato ou ressecação patológica.'
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
        texto: 'Rotina Anti-Envelhecimento Completa'
      },
      {
        tipo: 'p',
        texto: 'A rotina anti-age combina hidratação profunda, ativos que estimulam colágeno (retinol, vitamina C, peptídeos) e proteção solar rigorosa. Cada etapa é essencial.'
      },
      {
        tipo: 'h2',
        texto: 'Manhã: Proteção e Antioxidantes'
      },
      {
        tipo: 'produtos',
        produtos: [
          {
            nome: 'Sérum Vitamina C 15% + Ferúlico 0,5% 30ml',
            marca: 'Panvel Dermativ',
            faixa: 'investimento',
            porque: 'Vitamina C estabilizada em alta concentração com ferúlico. Potente em antioxidação e clareamento. Melhor custo-benefício de vitamina C forte.',
            href: 'https://s.shopee.com.br/4AzT0zsZmk',
            selo: 'Melhor custo-benefício'
          },
          {
            nome: 'Minéral 89 Sérum 30ml',
            marca: 'Vichy',
            faixa: 'intermediário',
            porque: 'Água termal + minerais que hidratam e tonificam. Base excelente para pele madura - preparação perfeita para hidratante e protetor.',
            href: 'https://s.shopee.com.br/5LBQPWREz6'
          }
        ]
      },
      {
        tipo: 'h2',
        texto: 'Noite: Estimulação de Colágeno'
      },
      {
        tipo: 'produtos',
        produtos: [
          {
            nome: 'Sérum AH-2 30ml',
            marca: 'Principia',
            faixa: 'acessível',
            porque: 'Ácido hialurônico em dupla molecularidade. Prepara a pele para absorver o retinol e hidrata em profundidade.',
            href: 'https://s.shopee.com.br/4VcJPhkPne',
            selo: 'Começa aqui'
          },
          {
            nome: 'Sérum RN-0,3 30ml',
            marca: 'Principia',
            faixa: 'acessível',
            porque: 'Retinol 0,3% — concentração perfeita para começar ou manutenção. Estimula colágeno, reduz rugas sem irritar muito.',
            href: 'https://s.shopee.com.br/70JeOn2NSB'
          },
          {
            nome: 'Sérum Antissinais Retinol 0,3% 30ml',
            marca: 'Sallve',
            faixa: 'intermediário',
            porque: 'Retinol 0,3% com ativos complementares. Melhora rugas e firmeza sem o ressecamento típico de retinóis altos.',
            href: 'https://s.shopee.com.br/3g3CQmlR9W'
          },
          {
            nome: 'Liftactiv Retinol Specialist',
            marca: 'Vichy',
            faixa: 'intermediário',
            porque: 'Retinol + água termal + cafeína. Para quem quer resultado em rugas e firmeza. Textura rica que não resseca.',
            href: 'https://s.shopee.com.br/6q0ECmQXQ2'
          },
          {
            nome: 'Hyalu B5 Sérum 30ml',
            marca: 'La Roche-Posay',
            faixa: 'intermediário',
            porque: 'Ácido hialurônico + panthenol. Hidratação máxima com efecto tensor suave. Ótimo para pele madura ressecada.',
            href: 'https://s.shopee.com.br/qj13HLUrp'
          },
          {
            nome: 'PDRN DNA Concentrate',
            marca: 'Ada Tina',
            faixa: 'investimento',
            porque: 'Ingrediente premium que estimula renovação celular profunda. Para pele muito envelhecida que quer resultado rápido.',
            href: 'https://s.shopee.com.br/AAGgAadJv0'
          }
        ]
      },
      {
        tipo: 'h2',
        texto: 'Hidratação Anti-Idade'
      },
      {
        tipo: 'produtos',
        produtos: [
          {
            nome: 'Neovadiol Peri/Pós-Menopausa',
            marca: 'Vichy',
            faixa: 'intermediário',
            porque: 'Formulado especificamente para pele madura em transição hormonal. Restabelece firmeza e hidratação profunda.',
            href: 'https://s.shopee.com.br/2gAfEkgtLT'
          }
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
        p: 'Que tipo de skincare devo usar se minha pele é madura?',
        r: 'Foco em hidratação profunda, ativos que estimulam colágeno (retinol, vitamina C), proteção solar rigorosa e contorno de olhos. Evite ácidos muito concentrados ou esfoliação frequente.'
      },
      {
        p: 'Retinol é bom para rugas mesmo? Esse produto funciona?',
        r: 'Sim, é comprovado. Retinol estimula colágeno e acelera renovação celular. Começar com 0,3% e aumentar gradualmente garante resultado sem irritação. Demora 8-12 semanas para ver diferença visível.'
      },
      {
        p: 'Com que idade devo começar a usar retinol?',
        r: 'Não existe idade de corte. Se sua pele já tem rugas dinâmicas (aparecem quando faz expressão), comece. Se quer prevenir, pode começar aos 25-30. O importante é começar baixo e aumentar conforme a pele adapta.'
      },
      {
        p: 'Qual é o melhor produto para tirar rugas?',
        r: 'Nenhum isolado resolve rugas. A combinação de protetor solar FPS 50+ + retinol + vitamina C é o básico que funciona. Para rugas profundas, procedimentos em consultório são mais efetivos.'
      },
      {
        p: 'Devo fazer procedimentos se tenho rugas?',
        r: 'Depende da profundidade. Rugas leves respondem bem ao skincare consistente. Rugas profundas (dinâmicas muito marcadas) pedem procedimentos como botox ou microagulhamento. Combinação é o ideal.'
      },
      {
        p: 'Posso parar de usar retinol?',
        r: 'Sim, mas a pele volta a envelhecer. Os resultados conquistados dependem da continuidade. Se quiser pausar, diminua gradualmente e não pare abruptamente.'
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
        texto: 'Prevenção e Tratamento com Skincare'
      },
      {
        tipo: 'p',
        texto: 'Rugas finas e dinâmicas respondem bem ao skincare bem estruturado. O foco é estimular colágeno, proteger do sol e hidratar.'
      },
      {
        tipo: 'produtos',
        produtos: [
          {
            nome: 'Sérum RN-0,3 30ml',
            marca: 'Principia',
            faixa: 'acessível',
            porque: 'Retinol 0,3% — estimula colágeno e reduz rugas finas. Perfeito para começar sem irritar.',
            href: 'https://s.shopee.com.br/70JeOn2NSB',
            selo: 'Começa aqui'
          },
          {
            nome: 'Creme Ác. Glicólico 10% + Niacinamida 30g',
            marca: 'Creamy',
            faixa: 'acessível',
            porque: 'Ácido glicólico suave + niacinamida que suaviza rugas por renovação celular e firmeza.',
            href: 'https://s.shopee.com.br/9V0zNPee80'
          },
          {
            nome: 'Sérum Antissinais Retinol 0,3% 30ml',
            marca: 'Sallve',
            faixa: 'intermediário',
            porque: 'Retinol com ativos complementares que reduzem rugas sem o ressecamento extremo.',
            href: 'https://s.shopee.com.br/3g3CQmlR9W'
          },
          {
            nome: 'Liftactiv Retinol Specialist',
            marca: 'Vichy',
            faixa: 'intermediário',
            porque: 'Retinol + água termal + cafeína. Reduz rugas e tensiona levemente. Textura que não resseca.',
            href: 'https://s.shopee.com.br/6q0ECmQXQ2'
          },
          {
            nome: 'Isdinceutics Retinal Intense',
            marca: 'Isdin',
            faixa: 'investimento',
            porque: 'Retinaldehído (forma mais potente de retinol). Para quem quer máxima potência em redução de rugas.',
            href: 'https://s.shopee.com.br/2BEOeEYhEW'
          },
          {
            nome: 'BioRetinol Absolute',
            marca: 'Ada Tina',
            faixa: 'investimento',
            porque: 'Retinol em forma inovadora com máxima atividade. Para rugas estabelecidas que pedem potência.',
            href: 'https://s.shopee.com.br/9AO8z7gm2I'
          },
          {
            nome: 'CICA B12+ Multirreparador',
            marca: 'Ada Tina',
            faixa: 'intermediário',
            porque: 'B12 + centella que repara barreira enquanto trata rugas. Excelente para pele reativa que envelhece.',
            href: 'https://s.shopee.com.br/6VNNoEdK0m'
          }
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
        p: 'Como tirar linhas de expressão naturalmente?',
        r: 'Protetor solar FPS 50+ diário é essencial (previne piorar). Retinol, vitamina C e hidratação reduzem linhas finas. Rugas profundas precisam de procedimentos para melhor resultado.'
      },
      {
        p: 'Qual produto é bom para suavizar rugas?',
        r: 'Retinol é o ativo comprovado mais eficaz. Comece com 0,3% e use à noite, 3-4x na semana. Demora 8-12 semanas para ver diferença. Vitamina C pela manhã potencializa o resultado.'
      },
      {
        p: 'Retinol é bom mesmo para rugas?',
        r: 'Sim, é comprovado por décadas de pesquisa. Estimula colágeno e acelera renovação. Começar baixo (0,3%) evita irritação. Resultado gradual mas consistente.'
      },
      {
        p: 'Aos 25 anos já preciso de retinol?',
        r: 'Não é obrigatório, mas prevenção é melhor que correção. Se tem exposição solar frequente, começa em concentração baixa para prevenir.'
      },
      {
        p: 'Botox deixa o rosto parado e artificial?',
        r: 'Não quando feito com bom planejamento. A dose respeita sua anatomia — você continua com expressão, a ruga apenas fica menos marcada.'
      },
      {
        p: 'Vale começar botox cedo como prevenção?',
        r: 'Depende. Se rugas já aparecem em repouso, pode fazer sentido. Se são só dinâmicas (aparecem ao fazer expressão), skincare + protetor solar bastam por mais tempo.'
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
        tipo: 'p',
        texto: 'Pele sensível precisa de menos etapas, não de marcas "especiais" caras. O que funciona é clareza de ingredientes, ausência de irritantes e consistência na aplicação.'
      },
      {
        tipo: 'produtos',
        produtos: [
          {
            nome: 'Sensibio H2O Solução Micelar',
            marca: 'Bioderma',
            faixa: 'intermediário',
            porque: 'Limpeza sem sabão, específica para sensível. Remove maquiagem e sujeira sem deixar resíduo irritante.',
            href: 'https://s.shopee.com.br/4LItEOHOpK',
            selo: 'Começa aqui'
          },
          {
            nome: 'Calming Cream Hypskin + Vitamina E 40g',
            marca: 'Creamy',
            faixa: 'acessível',
            porque: 'Creme calmante com centella asiática que reduz vermelhidão. Texto leve mas reconfortante para pele reativa.',
            href: 'https://s.shopee.com.br/7Ad4bUIVxb'
          },
          {
            nome: 'Cicaplast Baume B5+ 40ml',
            marca: 'La Roche-Posay',
            faixa: 'intermediário',
            porque: 'Bálsamo restaurador para pele muito irritada ou reativa. Panthenol + água termal que acalma profundamente.',
            href: 'https://s.shopee.com.br/AAGgB0tDRA'
          },
          {
            nome: 'Tolérance Control Creme Calmante 40ml',
            marca: 'Avène',
            faixa: 'intermediário',
            porque: 'Formulado para pele com rosácea ou reatividade frequente. Restaura barreira sem ingredientes agressivos.',
            href: 'https://s.shopee.com.br/9KhZBbokyf'
          },
          {
            nome: 'Toleriane Sensitive Creme',
            marca: 'La Roche-Posay',
            faixa: 'intermediário',
            porque: 'Creme restaurador com niacinamida e ceramidas. Para pele extremamente sensível que reage frequentemente.',
            href: 'https://s.shopee.com.br/6q0ED26fai'
          },
          {
            nome: 'Sérum Calmante Antirreatividade 30ml',
            marca: 'Ada Tina',
            faixa: 'intermediário',
            porque: 'Sérum que reduz inflamação e irritação. Base perfeita antes do hidratante em pele muito reativa.',
            href: 'https://s.shopee.com.br/7Ad4berw1k'
          },
          {
            nome: 'B12 Ultra Reparador',
            marca: 'Ada Tina',
            faixa: 'intermediário',
            porque: 'B12 que restaura e acalma. Excelente para pele que se irrita facilmente com ingredientes.',
            href: 'https://s.shopee.com.br/7Ad4berw1k'
          },
          {
            nome: 'Azelabio',
            marca: 'Ada Tina',
            faixa: 'intermediário',
            porque: 'Ácido azeláico gentil para pele sensível com rosácea ou acne leve. Reduz vermelhidão sem irritar.',
            href: 'https://s.shopee.com.br/3g3CREiigR'
          }
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
        p: 'Que tipo de skincare é bom para pele sensível?',
        r: 'Procure por: sem fragrância, sem álcool, com ceramidas, centella asiática, niacinamida e ácido hialurônico. Marcas como Bioderma, La Roche-Posay, Creamy e Avène são seguras para sensível.'
      },
      {
        p: 'Qual é o melhor produto para pele sensível que fica vermelha?',
        r: 'Procure por séruns ou cremes com centella asiática, panthenol e niacinamida. Evite vitam C pura, retinol forte e ácidos concentrados. Comece com um produto calmante, não estimulante.'
      },
      {
        p: 'Posso usar retinol em pele sensível?',
        r: 'Sim, mas apenas retinol muito suave (0.03%) aplicado 1-2x semana. Aumentar gradualmente após 4-6 semanas. Pele sensível precisa de tempo para adaptação.'
      },
      {
        p: 'Qual protetor solar é bom para pele sensível?',
        r: 'Protetores minerais (óxido de zinco ou dióxido de titânio) são geralmente melhor tolerados. Alguns químicos podem irritar, então teste sempre em pequena área primeiro.'
      },
      {
        p: 'Quanto tempo leva para barreira de proteção se recuperar?',
        r: '2-4 semanas se você parar com agressores e usar só hidratantes restauradores. O importante é não trocar de produto nesse período - deixa agir.'
      },
      {
        p: 'Minha pele piora com alguns produtos — o que faço?',
        r: 'Pare imediatamente o produto suspeito. Use apenas água morna, limpeza ultra-suave e um hidratante restaurador nos próximos dias. Se não melhorar em 1 semana, procure dermatologista.'
      }
    ],
    seo: {
      title: 'Skincare para Pele Sensível e Reativa | Dra. Fernanda Paz',
      description: 'Rotina gentil, ingredientes calmantes e como restaurar a barreira de proteção de pele sensível. Clínica da Fefe, Guarujá.'
    }
  },
];

export const acharArtigo = (slug: string) => ARTIGOS.find((a) => a.slug === slug);
