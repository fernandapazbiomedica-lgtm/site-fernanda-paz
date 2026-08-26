/**
 * Perguntas frequentes: leva adicional.
 *
 * ⚠️ PENDENTE DE REVISÃO CLÍNICA, como todo o resto.
 *
 * === Por que isso é a parte mais rentável do site ===
 * FAQ não é enfeite. É onde a busca de cauda longa entra: ninguém digita
 * "harmonização facial" e converte: digita "botox dói", "quanto tempo demora
 * pra desinchar o preenchimento labial", "pode fazer grávida". Essas são as
 * buscas com intenção real, e são as que alimentam as caixas de "Outras
 * perguntas" do Google.
 *
 * O site já emite schema FAQPage quando a página tem FAQ, então cada pergunta
 * aqui é elegível a resultado enriquecido.
 *
 * === Regras ===
 * · A pergunta é escrita como a paciente digita, não como o profissional fala.
 * · A resposta abre respondendo. Contexto vem depois, nunca antes.
 * · Nenhuma promessa de resultado, nenhuma dose, nenhum nome de produto.
 * · Onde a resposta honesta é "depende", o texto diz de que depende.
 *
 * Aplicado por cima: estas perguntas são ACRESCENTADAS ao FAQ que já existe na
 * página, nunca substituem.
 */

export const FAQS: Record<string, { p: string; r: string }[]> = {
  // ═══════════════════════════════ FACIAL
  'harmonizacao-facial': [
    {
      p: 'Harmonização facial dói?',
      r: 'O desconforto é controlado. Se usa anestésico tópico antes e, em algumas técnicas, anestésico junto do próprio produto. A maioria das pacientes descreve como incômodo suportável, não como dor, e as medidas de conforto são combinadas antes de começar, não durante.',
    },
    {
      p: 'Quanto tempo fico inchada?',
      r: 'O inchaço é maior nas primeiras 48 horas e cede de forma progressiva. Entre 15 e 30 dias o rosto está assentado. Nesse intervalo é normal achar que ficou exagerado, julgar o resultado na primeira semana é o erro mais comum.',
    },
    {
      p: 'Posso trabalhar no dia seguinte?',
      r: 'Na maioria dos casos, sim. Pode haver inchaço visível e, eventualmente, algum roxo em ponto de aplicação. Se você tem um compromisso importante, o ideal é agendar com pelo menos duas semanas de antecedência, isso é planejado junto com você.',
    },
    {
      p: 'Posso fazer grávida ou amamentando?',
      r: 'Não. Procedimentos injetáveis estéticos não são realizados durante a gestação e a amamentação, por precaução, não existem estudos que garantam segurança nesses períodos. A avaliação pode ser feita, e o planejamento fica pronto para depois.',
    },
  ],

  'toxina-botulinica': [
    {
      p: 'Aplicar botox dói?',
      r: 'A agulha é muito fina e a aplicação é rápida. A sensação mais relatada é de uma picada breve, comparável à de um beliscão. Anestésico tópico pode ser usado em quem tem mais sensibilidade, e a sessão inteira leva cerca de 30 minutos.',
    },
    {
      p: 'Quanto tempo demora para fazer efeito?',
      r: 'Os primeiros sinais aparecem entre o terceiro e o quinto dia, e o efeito se completa em até 15 dias. Se algum ponto ainda marcar depois desse prazo, é nele que se avalia a necessidade de retoque, antes disso, o resultado ainda está em formação.',
    },
    {
      p: 'Preciso repetir sempre? O que acontece se eu parar?',
      r: 'A duração média é de 3 a 4 meses. Se você parar, o músculo volta gradualmente à força que tinha e as linhas retornam ao padrão anterior, não pioram por causa do tratamento. O que muda é que, com aplicações regulares, o vinco tende a marcar menos com o tempo.',
    },
    {
      p: 'Existe idade mínima para começar?',
      r: 'Não existe idade, existe indicação. Há quem comece cedo para evitar que a linha vire vinco fixo, e há quem só precise mais tarde. O que define é a marcação da sua musculatura em movimento e em repouso, avaliada na consulta.',
    },
    {
      p: 'Posso me exercitar depois da aplicação?',
      r: 'É orientado evitar atividade física intensa, calor e deitar nas primeiras horas, para reduzir o risco de dispersão do produto. As orientações completas de pós-procedimento são entregues na sessão e são simples de seguir.',
    },
  ],

  'preenchimento-labial': [
    {
      p: 'Preenchimento labial dói?',
      r: 'Se usa anestésico tópico antes, e o próprio produto costuma conter anestésico na composição. A região é sensível, então há incômodo, mas a maioria descreve como bem mais tolerável do que imaginava.',
    },
    {
      p: 'Quanto tempo demora para desinchar?',
      r: 'O inchaço é maior nas primeiras 48 a 72 horas e pode assustar. Ele cede progressivamente, e o contorno definitivo aparece entre 15 e 30 dias. É por isso que a orientação é não julgar o resultado, nem tirar foto, na primeira semana.',
    },
    {
      p: 'Fica com aspecto artificial?',
      r: 'O aspecto artificial vem de volume acima do que o rosto comporta, não da técnica. Quando a quantidade respeita a proporção do seu rosto e o desenho respeita o seu lábio, o resultado é percebido como lábio bonito, não como lábio preenchido.',
    },
    {
      p: 'Quanto tempo dura?',
      r: 'Varia conforme o produto escolhido e o seu metabolismo, pessoas com metabolismo mais acelerado costumam absorver antes. A previsão de manutenção é informada na avaliação, junto com a escolha do produto.',
    },
    {
      p: 'Dá para desfazer se eu não gostar?',
      r: 'Os preenchimentos de ácido hialurônico podem ser dissolvidos com uma enzima específica. É um recurso que existe e traz segurança à decisão, mas a conduta correta é aplicar de forma conservadora desde o início, para que ele não precise ser usado.',
    },
  ],

  'preenchimento-mento': [
    {
      p: 'Quanto tempo dura o preenchimento de queixo?',
      r: 'Costuma ser uma das regiões de maior duração, porque tem menos movimento que lábios ou sulcos. O tempo exato depende do produto escolhido e do seu metabolismo, e é informado na avaliação.',
    },
    {
      p: 'Preciso fazer o nariz junto?',
      r: 'Não necessariamente. Em parte dos casos, projetar o queixo já reequilibra o perfil e o nariz deixa de incomodar sem ser tocado. Essa leitura é feita antes, justamente para evitar procedimento que não era necessário.',
    },
    {
      p: 'Fica com aspecto masculinizado?',
      r: 'Fica se a projeção e o formato seguirem medida masculina. Queixo feminino tem projeção e desenho diferentes, e isso é definido no planejamento a partir das proporções do seu rosto.',
    },
  ],

  'preenchimento-malar': [
    {
      p: 'Quanto tempo dura o preenchimento malar?',
      r: 'A região malar tem pouco movimento, o que favorece a durabilidade. O tempo depende do produto e do seu metabolismo, e a previsão de manutenção entra na avaliação.',
    },
    {
      p: 'Vou ficar com o rosto largo?',
      r: 'Não, se o produto for colocado no ponto de sustentação e não espalhado na superfície. O objetivo é projeção vertical no ponto certo, o que estreita a leitura do rosto em vez de alargar. Rosto largo é sinal de volume mal distribuído.',
    },
    {
      p: 'Posso fazer só de um lado?',
      r: 'Pode, e às vezes é a indicação: assimetrias naturais existem em todo mundo, e corrigir só o lado que precisa é mais elegante do que tratar os dois por simetria de protocolo.',
    },
  ],

  'preenchimento-mandibular': [
    {
      p: 'Homem pode fazer contorno mandibular?',
      r: 'Pode, e é uma das técnicas mais procuradas por homens. O desenho é diferente: ângulo mais marcado, linha mais reta e projeção maior. A medida masculina é definida no planejamento.',
    },
    {
      p: 'Preciso de muito produto?',
      r: 'A quantidade depende do quanto de contorno existe hoje e de quanto se pretende desenhar. É uma região que costuma precisar de mais volume que o rosto médio, e por isso o plano pode ser executado em etapas, respeitando intervalo entre sessões.',
    },
    {
      p: 'Fica inchado por quanto tempo?',
      r: 'O inchaço maior é nas primeiras 48 horas e cede progressivamente. A linha definitiva aparece entre 15 e 30 dias, quando o produto se acomoda ao tecido.',
    },
  ],

  'bigode-chines': [
    {
      p: 'Quanto tempo dura o preenchimento do sulco?',
      r: 'É uma região de muito movimento (fala, sorriso, mastigação) e isso acelera a absorção em comparação a áreas mais estáticas. A previsão é dada na avaliação, junto com a estratégia que sustenta melhor o resultado.',
    },
    {
      p: 'Bigode chinês tem a ver com idade?',
      r: 'Não só. Há quem tenha sulco marcado aos vinte, por anatomia e por padrão de expressão. O que a idade acrescenta é a perda de sustentação acima, que aprofunda um sulco que já existia.',
    },
    {
      p: 'Existe algo que evite o sulco piorar?',
      r: 'Fotoproteção diária, não fumar e manter a qualidade da pele ajudam, porque preservam colágeno. Mas o componente anatômico e de expressão não se controla, e é ele que determina boa parte do quadro.',
    },
  ],

  rinomodelacao: [
    {
      p: 'Rinomodelação substitui a cirurgia de nariz?',
      r: 'Não. Ela corrige de forma diferente: disfarça giba, projeta a ponta, corrige pequenas assimetrias e melhora o ângulo do perfil. O que ela não faz é reduzir o nariz: preenchimento acrescenta, nunca retira. Quem quer nariz menor tem indicação cirúrgica.',
    },
    {
      p: 'É um procedimento seguro?',
      r: 'É um procedimento que exige conhecimento anatômico específico, porque a vascularização da região é delicada. Feito com técnica e produto adequados, tem bom perfil de segurança, mas não é procedimento para se fazer com quem não domina a área.',
    },
    {
      p: 'Quanto tempo dura?',
      r: 'A região tem pouco movimento, o que favorece a duração. O tempo depende do produto escolhido e do seu metabolismo, e é informado na avaliação.',
    },
    {
      p: 'Meu nariz vai ficar maior?',
      r: 'Em volume, tecnicamente sim, o produto acrescenta. Mas a leitura visual costuma ser de nariz mais harmônico e menos evidente, porque o que chama atenção em um nariz raramente é o tamanho: é a irregularidade do perfil.',
    },
  ],

  'bioestimuladores-faciais': [
    {
      p: 'Bioestimulador é a mesma coisa que preenchimento?',
      r: 'Não. Preenchimento devolve volume onde é aplicado, com efeito imediato. Bioestimulador aciona o seu organismo a produzir colágeno, com efeito progressivo. Frequentemente entram no mesmo plano, resolvendo coisas diferentes.',
    },
    {
      p: 'Preciso de quantas sessões?',
      r: 'Depende do grau de flacidez e do produto escolhido. Há casos de sessão única com manutenção anual e casos que pedem uma série. O número é definido na avaliação, e reavaliado depois do período de estímulo.',
    },
    {
      p: 'Fica com nódulos?',
      r: 'É uma intercorrência possível e ligada a técnica, plano de aplicação e cuidado pós-procedimento, inclusive a massagem orientada, quando indicada. Seguir as orientações da primeira semana reduz bastante esse risco.',
    },
  ],

  'fios-de-sustentacao': [
    {
      p: 'Quanto tempo duram os fios?',
      r: 'O fio em si é absorvido pelo organismo ao longo de meses. O que sustenta o resultado depois disso é o colágeno formado ao redor dele. A duração varia com o tipo de fio e com a sua resposta, e é estimada na avaliação.',
    },
    {
      p: 'Dói ou tem recuperação longa?',
      r: 'A aplicação é feita com anestesia local. Nos dias seguintes é comum haver sensibilidade, inchaço e sensação de repuxamento ao abrir a boca, tudo esperado e transitório. As orientações de recuperação são entregues antes.',
    },
    {
      p: 'Pode fazer junto com preenchimento?',
      r: 'Pode, e é combinação frequente: o fio reposiciona, o preenchimento devolve o volume que faltava. A ordem e o intervalo entre eles fazem parte do planejamento.',
    },
  ],

  skinbooster: [
    {
      p: 'Quantas sessões preciso?',
      r: 'Depende do grau de desidratação e da resposta da sua pele. O intervalo e a necessidade de repetição são reavaliados depois do primeiro mês, quando o efeito da sessão já se estabeleceu.',
    },
    {
      p: 'Fica marcado depois da aplicação?',
      r: 'Podem ficar pequenas pápulas nos pontos de aplicação, que se dissolvem em horas ou poucos dias. É esperado e transitório. Roxo pontual também pode ocorrer, sobretudo em pele fina.',
    },
    {
      p: 'Serve para pescoço, colo e mãos?',
      r: 'Serve, e são regiões em que a diferença costuma ser bem visível, justamente porque são áreas que envelhecem cedo e recebem menos cuidado que o rosto.',
    },
  ],

  'microagulhamento-facial': [
    {
      p: 'Microagulhamento dói?',
      r: 'Se usa anestésico tópico antes, aplicado com antecedência suficiente para fazer efeito. A sensação mais relatada é de calor e vibração, não de dor. A intensidade varia com a profundidade escolhida para o seu caso.',
    },
    {
      p: 'Quanto tempo a pele fica vermelha?',
      r: 'A vermelhidão é mais intensa nas primeiras 24 horas e costuma ceder em um a três dias, conforme a profundidade. Descamação leve pode aparecer depois. Vale considerar isso ao agendar perto de um compromisso.',
    },
    {
      p: 'Posso fazer no verão?',
      r: 'Pode, com fotoproteção rigorosa e evitando exposição direta nos dias seguintes. Pele recém-tratada e sol é a combinação que mais gera mancha, e mancha é bem mais trabalhosa de tratar do que a textura que se veio corrigir.',
    },
  ],

  pdrn: [
    {
      p: 'O que é PDRN, exatamente?',
      r: 'É a sigla de polidesoxirribonucleotídeo, um ativo de ação regenerativa que atua na qualidade do tecido: hidratação, textura, vascularização e capacidade de reparo da pele.',
    },
    {
      p: 'PDRN é bioestimulador de colágeno?',
      r: 'Ele tem ação regenerativa e melhora a qualidade do tecido, o que inclui resposta de reparo. Mas a lógica é diferente da dos bioestimuladores clássicos, que trabalham firmeza e sustentação. Frequentemente se complementam dentro de um plano.',
    },
    {
      p: 'Pode ser usado depois de outros procedimentos?',
      r: 'Sim, e essa é uma das indicações: acelerar a recuperação do tecido no pós-procedimento. Quando e como ele entra no seu plano é definido na avaliação.',
    },
  ],

  'cicatrizes-de-acne': [
    {
      p: 'Quantas sessões até ver diferença?',
      r: 'A textura de superfície costuma responder já nas primeiras sessões. Mudança de relevo é cumulativa e aparece ao longo do protocolo, com reavaliação entre as sessões. Cicatriz profunda exige mais tempo que cicatriz superficial.',
    },
    {
      p: 'Tratar cicatriz de acne dói?',
      r: 'Depende da técnica. Protocolos de superfície são bem tolerados com anestésico tópico. Técnicas que trabalham cicatriz retraída em profundidade podem exigir anestesia local. O que será usado no seu caso é explicado antes.',
    },
    {
      p: 'A mancha vermelha que ficou também sai?',
      r: 'A vermelhidão pós-inflamatória tende a clarear com o tempo e responde a protocolo próprio, mas é um alvo diferente do relevo. Frequentemente os dois são tratados no mesmo plano, com técnicas distintas.',
    },
  ],

  'peelings-faciais': [
    {
      p: 'Quantos dias fico descamando?',
      r: 'Varia com a profundidade: há protocolos com descamação discreta, de um a dois dias, e outros em que ela é mais evidente e dura cerca de uma semana. O que esperar do seu é informado antes da sessão, para você agendar com folga.',
    },
    {
      p: 'Posso usar maquiagem depois?',
      r: 'A orientação é aguardar o intervalo indicado para o seu protocolo antes de voltar a maquiar, para não irritar a pele em renovação. Esse prazo entra nas orientações de pós-procedimento.',
    },
    {
      p: 'Peeling afina a pele?',
      r: 'Não. O peeling remove camadas superficiais já mortas e estimula renovação, o que, com o tempo, tende a espessar a pele em vez de afinar. Afinamento é efeito de uso indiscriminado e sem intervalo, não de protocolo conduzido.',
    },
  ],

  'planejamento-skincare': [
    {
      p: 'Preciso comprar produtos caros?',
      r: 'Não. O que define resultado é o ativo certo, na concentração certa, usado com constância, e isso existe em várias faixas de preço. A prescrição considera o que cabe na sua rotina e no seu orçamento, porque rotina que não se sustenta não entrega.',
    },
    {
      p: 'Em quanto tempo vejo diferença na pele?',
      r: 'Textura e viço costumam responder primeiro. Mancha e firmeza levam mais tempo, porque dependem de processos mais lentos. A reavaliação da rotina é marcada justamente para acompanhar essa evolução.',
    },
    {
      p: 'Posso usar ácido todo dia?',
      r: 'Depende do ácido, da concentração e da sua pele. Uso diário sem critério é a causa mais comum de barreira cutânea comprometida: pele que arde, descama e reage a tudo. A frequência entra na prescrição por esse motivo.',
    },
  ],
};

/* ═══════════════════════════════ CORPORAL · PELE · CAPILAR · VASCULAR · BEM-ESTAR */
Object.assign(FAQS, {
  // =========================== CORPORAL
  'bioestimuladores-corporais': [
    { p: 'Bioestimulador corporal dói?', r: 'A aplicação é feita com anestesia local na área tratada. Nos dias seguintes é comum haver sensibilidade ao toque e algum inchaço na região, o que é esperado e transitório. As orientações de recuperação são entregues na sessão.' },
    { p: 'Em quais regiões pode ser aplicado?', r: 'As mais frequentes são braços, abdômen, coxas, glúteos e a face interna dos joelhos, áreas em que a flacidez de pele costuma incomodar mais. A indicação por região é definida no exame.' },
    { p: 'Preciso de massagem depois?', r: 'Em alguns produtos e regiões a massagem no pós-procedimento faz parte do protocolo e reduz risco de irregularidade. Se for o seu caso, a orientação é ensinada na sessão, com frequência e duração definidas.' },
  ],
  flacidez: [
    { p: 'Exercício resolve flacidez de pele?', r: 'Melhora o tônus por baixo, o que muda a leitura da região, mas não devolve elasticidade a uma pele que já perdeu colágeno e elastina. Por isso quem tem flacidez de pele treina, vê o corpo mudar e a pele continuar frouxa.' },
    { p: 'Tem idade para tratar?', r: 'Não. A flacidez pode aparecer cedo depois de emagrecimento ou gestação, e nesses casos tratar mais cedo costuma render mais, porque a pele ainda tem melhor capacidade de resposta.' },
    { p: 'Quanto tempo dura o resultado?', r: 'O colágeno formado é seu, e se comporta como o resto do seu colágeno: vai sendo perdido com o tempo. Por isso o resultado tem duração longa mas não permanente, e a manutenção é planejada junto.' },
  ],
  estrias: [
    { p: 'Tratar estria dói?', r: 'Depende da técnica. Protocolos de superfície são bem tolerados com anestésico tópico; técnicas mais profundas podem exigir anestesia local. O que será usado no seu caso é explicado antes de começar.' },
    { p: 'Posso tratar estria na gravidez?', r: 'Procedimentos estéticos não são realizados durante a gestação. A avaliação pode ser feita para orientar prevenção (hidratação e cuidado com a pele), e o tratamento fica planejado para depois da amamentação.' },
    { p: 'Estria some se eu emagrecer?', r: 'Não. A estria é uma cicatriz já formada na pele: ela não depende do volume abaixo. Emagrecer pode até deixá-la mais evidente, porque a pele fica menos distendida.' },
    { p: 'Dá para prevenir estria?', r: 'Reduzir o risco, sim: manter a pele hidratada e evitar variações bruscas de peso ajuda. Mas há um componente genético e hormonal que não se controla, por isso há quem faça tudo certo e ainda assim tenha.' },
  ],
  celulite: [
    { p: 'Quantas sessões para ver diferença?', r: 'A melhora é cumulativa e costuma ficar perceptível ao longo do protocolo, não em uma sessão isolada. O número estimado depende do grau e é definido na avaliação, com a região examinada.' },
    { p: 'Celulite volta depois do tratamento?', r: 'A predisposição permanece, então manutenção faz parte. O que se conquista é redução de grau e melhora do relevo, e isso se preserva com acompanhamento, não com uma série única e ponto final.' },
    { p: 'Anticoncepcional piora a celulite?', r: 'O componente hormonal influencia a distribuição de gordura e a retenção, então alterações hormonais podem interferir no quadro. Essa é uma conversa para ter com quem prescreve, aqui ela entra como contexto da avaliação, não como orientação de troca.' },
  ],
  subcisao: [
    { p: 'Quanto tempo dura a recuperação?', r: 'É comum haver sensibilidade e roxo na região por alguns dias, com melhora progressiva. Atividade física e exposição solar têm orientação específica no período. Tudo isso é informado antes de agendar.' },
    { p: 'A depressão pode voltar?', r: 'A trave liberada não se refaz igual, mas o tecido pode voltar a aderir se o espaço não for ocupado. Por isso a subcisão costuma vir acompanhada de estímulo de colágeno, para que tecido novo preencha o que foi liberado.' },
  ],
  'gordura-localizada': [
    { p: 'Preciso fazer dieta junto?', r: 'Não é obrigatório, mas manter o peso estável é o que preserva o resultado. Ganho de peso posterior redistribui gordura pelo corpo, e a área tratada pode voltar a acumular.' },
    { p: 'Quais regiões podem ser tratadas?', r: 'As mais frequentes são flancos, abdômen inferior, culote, face interna das coxas e costas. A avaliação define quais áreas têm indicação e em que ordem, porque tratar tudo de uma vez raramente é a melhor conduta.' },
    { p: 'A gordura vai para outro lugar?', r: 'Não. Essa é uma crença comum e não corresponde ao que acontece. O que pode ocorrer é ganho de peso posterior distribuir gordura nova pelo corpo, o que é diferente de a gordura tratada migrar.' },
  ],
  papada: [
    { p: 'Papada tem a ver com postura?', r: 'A postura influencia a leitura da região e a tonicidade do pescoço, mas não costuma ser a causa isolada. O que define a conduta é o que o exame identifica: gordura, flacidez, posição da mandíbula ou combinação.' },
    { p: 'Quantas sessões são necessárias?', r: 'Depende do volume da região e da causa identificada. A estimativa é feita na avaliação, e reavaliada ao longo do protocolo conforme a resposta.' },
    { p: 'Fica inchado depois?', r: 'É esperado inchaço na região nos primeiros dias, que cede progressivamente. Vale considerar isso ao agendar perto de um compromisso, a orientação completa é entregue na sessão.' },
  ],
  'lipo-enzimatica': [
    { p: 'Lipo enzimática é cirurgia?', r: 'Não. É um procedimento injetável, feito em consultório, sem corte e sem internação. O nome gera confusão justamente por causa da palavra "lipo", mas não há aspiração de gordura nem tempo de recuperação cirúrgica.' },
    { p: 'Dói ou incha depois?', r: 'É comum haver ardência durante a aplicação e, nos dias seguintes, sensibilidade, inchaço e endurecimento local. Tudo esperado e transitório. As orientações de pós-procedimento reduzem o desconforto e são passadas na sessão.' },
    { p: 'Posso treinar depois da sessão?', r: 'Há orientação de intervalo antes de voltar à atividade intensa, que varia com a região tratada. Isso é informado na própria sessão, junto com as demais orientações.' },
  ],
  'peelings-corporais': [
    { p: 'Quantos dias descama?', r: 'Varia com o ativo e a região. A pele corporal renova mais devagar que a do rosto, então o processo costuma ser mais lento, e por isso o intervalo entre sessões é maior.' },
    { p: 'Posso depilar depois?', r: 'Há um intervalo orientado antes de voltar a depilar a região tratada, porque a pele está em renovação e mais sensível. O prazo entra nas orientações de pós-procedimento.' },
    { p: 'Serve para escurecimento por depilação?', r: 'Serve, e é uma das indicações mais frequentes. Mas a manutenção depende de rever o método de depilação, se o atrito e a irritação continuarem, o escurecimento retorna.' },
  ],
  'definicao-abdominal': [
    { p: 'Preciso treinar para fazer?', r: 'A definição evidencia a musculatura que já existe. Se ela não estiver formada, não há o que evidenciar, e nesse caso a indicação costuma ser outra. Por isso o exame vem antes da proposta.' },
    { p: 'Serve para mulher?', r: 'Serve. O desenho e a intensidade da marcação são diferentes, e isso é definido no planejamento a partir do que você espera, marcação discreta e marcação evidente são objetivos distintos.' },
    { p: 'Quanto tempo dura?', r: 'Depende da manutenção do seu percentual de gordura e da rotina de treino. Ganho de peso posterior encobre a musculatura de novo, e o resultado se perde de vista mesmo estando lá.' },
  ],
  'modelacao-abdominal': [
    { p: 'Preciso ter abdômen definido para fazer?', r: 'Não, é justamente o contrário. A modelação cria o desenho em quem ainda não tem a musculatura formada. Quem já tem musculatura e quer evidenciá-la tem indicação de definição, que é outro procedimento.' },
    { p: 'O resultado parece natural?', r: 'Depende da medida. Marcação exagerada em quem não tem musculatura por baixo lê como artificial. O planejamento define a intensidade do desenho junto com você, antes de aplicar.' },
  ],
  gluteo: [
    { p: 'Quantos ml são necessários?', r: 'Depende da profundidade da depressão e do contorno pretendido. É uma região que costuma precisar de volume maior que o rosto, e o plano pode ser executado em etapas, com intervalo entre as sessões.' },
    { p: 'É a mesma coisa que preenchimento com PMMA?', r: 'Não. Os produtos e os perfis de segurança são diferentes, e o que será utilizado no seu caso é informado e discutido na avaliação, antes de qualquer decisão.' },
    { p: 'Posso sentar normalmente depois?', r: 'Há orientação específica de pressão e de posição nos primeiros dias, que varia com a região aplicada. As instruções completas são entregues na sessão.' },
  ],
  'microagulhamento-corporal': [
    { p: 'Dói mais que no rosto?', r: 'A pele do corpo é mais espessa, o que muda a sensação, mas o anestésico tópico também é usado. O desconforto varia com a região e com a profundidade escolhida para o seu caso.' },
    { p: 'Posso tomar sol depois?', r: 'Não nos dias seguintes, e com fotoproteção rigorosa depois. Pele em renovação exposta ao sol é a causa mais comum de mancha pós-procedimento, que é bem mais trabalhosa de tratar do que o problema original.' },
  ],

  // =========================== PELE
  melasma: [
    { p: 'Melasma tem cura?', r: 'Não. É um quadro crônico, com componente hormonal e genético, e a predisposição permanece. O que existe é controle: clarear o pigmento presente e manter, com fotoproteção diária e acompanhamento, para reduzir a recidiva.' },
    { p: 'Anticoncepcional causa melasma?', r: 'Alterações hormonais estão entre os fatores que desencadeiam e agravam o quadro, e o contraceptivo hormonal é um deles em parte das pacientes. Essa conversa é para ter com quem prescreve, aqui ela entra como contexto da avaliação.' },
    { p: 'Protetor solar comum é suficiente?', r: 'Para melasma, geralmente não. O quadro também é estimulado por luz visível, incluindo a de telas, e a proteção contra ela depende de fotoprotetor com cor. Reaplicação ao longo do dia é parte do tratamento, não recomendação extra.' },
    { p: 'Posso fazer peeling se tenho melasma?', r: 'Depende do peeling. Protocolo agressivo em pele com melasma costuma inflamar e escurecer mais do que clareia. Existem protocolos indicados, escolhidos com cuidado e com intervalo maior, e essa escolha é o cerne do tratamento.' },
  ],
  manchas: [
    { p: 'Quanto tempo para clarear?', r: 'Mancha superficial responde antes; mancha profunda leva mais tempo e exige protocolo mais lento. A previsão é feita na avaliação, depois de identificar a profundidade e a origem.' },
    { p: 'Clareador de farmácia funciona?', r: 'Pode ajudar em manchas superficiais, mas usar sem saber a origem é o que faz muita gente tratar por meses sem resultado, ou piorar, quando o quadro era melasma e o produto era irritante. O diagnóstico vem antes.' },
    { p: 'Preciso parar no verão?', r: 'Não necessariamente, mas o protocolo muda: intensidade menor e fotoproteção mais rigorosa. Tratar mancha com exposição solar alta e sem cuidado é trabalhar contra o próprio tratamento.' },
  ],
  'hidratacao-profunda': [
    { p: 'Com que frequência devo fazer?', r: 'Depende do grau de desidratação e da sua rotina. Costuma haver uma fase inicial mais próxima e depois manutenção espaçada, definida na reavaliação, conforme a resposta da sua pele.' },
    { p: 'Substitui o hidratante de casa?', r: 'Não. O hidratante trabalha a barreira, na superfície; o protocolo de consultório atua em profundidade. São camadas diferentes, e uma não faz o trabalho da outra.' },
    { p: 'Serve para pele com acne?', r: 'Serve, e frequentemente é indicado: pele acneica em tratamento costuma ficar desidratada por causa dos ativos usados. O protocolo é escolhido para não ser comedogênico.' },
  ],
  rejuvenescimento: [
    { p: 'Por onde começar?', r: 'Pelo diagnóstico. O que a sua pele perdeu primeiro (água, colágeno ou uniformidade de tom) define a ordem do plano. Começar pelo procedimento da moda em vez do que a sua pele precisa é o desperdício mais comum.' },
    { p: 'Preciso fazer vários procedimentos?', r: 'Nem sempre. Há casos que respondem bem a um protocolo único e casos que pedem combinação em etapas. Fazer tudo de uma vez raramente é a melhor conduta, e nunca é obrigatório.' },
    { p: 'Existe idade certa para começar?', r: 'Não existe idade, existe indicação. Prevenção em pele jovem e tratamento em pele que já perdeu sustentação são objetivos diferentes, ambos legítimos. O que define é o exame, não o número.' },
  ],
  'peeling-intimo': [
    { p: 'É seguro para a região?', r: 'É, desde que o protocolo seja específico para ela. A pele ali é fina e reativa, e a segurança está na escolha do ativo, da concentração e do intervalo, feita com a região examinada, nunca por descrição.' },
    { p: 'Quantas sessões preciso?', r: 'Depende do grau de escurecimento e de há quanto tempo ele existe. A estimativa é feita na avaliação e reavaliada ao longo do protocolo.' },
    { p: 'Posso depilar durante o tratamento?', r: 'Há orientação de intervalo e, em alguns casos, de mudança de método, porque a depilação está frequentemente entre as causas do escurecimento. Isso é combinado no início.' },
  ],

  // =========================== CAPILAR
  'intradermoterapia-capilar': [
    { p: 'Quantas sessões até ver resultado?', r: 'O fio tem ciclo próprio e nada aparece antes de cerca de três meses, isso é esperado e não é falha do tratamento. O que se observa antes disso costuma ser redução da queda, não fio novo.' },
    { p: 'Posso fazer se estiver usando minoxidil?', r: 'Sim, e é combinação frequente. As vias são complementares: o tópico age na superfície, a intradermoterapia entrega o ativo em profundidade. Tudo o que você usa é informado na avaliação para compor o plano.' },
    { p: 'Homem também faz?', r: 'Faz, e é procura frequente. O que muda é a investigação da causa e a fórmula, porque o padrão de perda masculino e o feminino são diferentes.' },
  ],
  'microagulhamento-capilar': [
    { p: 'Precisa raspar o cabelo?', r: 'Não. O procedimento é feito com o cabelo no comprimento normal, separando as mechas por área. Não há necessidade de corte nem de raspagem.' },
    { p: 'Posso lavar o cabelo no mesmo dia?', r: 'Há um intervalo orientado antes da lavagem, para não remover o que foi aplicado e respeitar a recuperação do couro cabeludo. O prazo é informado na sessão.' },
    { p: 'Serve para barba e sobrancelha?', r: 'A técnica é aplicável a outras áreas pilosas, com protocolo próprio. Se é indicada no seu caso depende do que a avaliação identificar naquela região.' },
  ],
  'queda-capilar': [
    { p: 'Que exames costumam ser pedidos?', r: 'Os mais frequentes avaliam ferro, ferritina, vitamina D e função da tireoide, porque são causas comuns e tratáveis. Quais serão solicitados no seu caso depende do que a avaliação e o seu histórico apontarem.' },
    { p: 'Queda por estresse melhora sozinha?', r: 'O eflúvio ligado a um evento agudo costuma ser autolimitado e melhorar quando o gatilho passa. Mas ele frequentemente se soma a outra causa já presente, e é essa combinação que faz a queda se prolongar.' },
    { p: 'Cortar o cabelo diminui a queda?', r: 'Não. A queda acontece na raiz, e o comprimento não influencia. O que muda é a percepção: fio curto no ralo impressiona menos que fio longo, e por isso parece que caiu menos.' },
    { p: 'Quanto tempo até parar de cair?', r: 'Depende inteiramente da causa. Corrigida a origem, a redução da queda costuma vir antes do crescimento visível, que segue o ciclo do fio e leva cerca de três meses.' },
  ],
  alopecias: [
    { p: 'Como sei se a minha é cicatricial?', r: 'Pelo exame do couro cabeludo. Na alopecia cicatricial a área costuma ter aspecto liso e brilhante, sem os óstios de onde os fios saem. Essa leitura é a primeira coisa feita, porque define se há folículo para estimular.' },
    { p: 'Alopecia areata é autoimune?', r: 'A areata tem mecanismo imunológico, e por isso seu curso é imprevisível, com episódios que podem repetir. O acompanhamento existe para identificar um novo episódio cedo, quando a resposta ao tratamento é melhor.' },
    { p: 'Preciso de acompanhamento médico junto?', r: 'Em parte dos casos, sim, quadros com componente sistêmico ou imunológico pedem investigação conjunta. Quando é o caso, o encaminhamento faz parte da conduta e é dito abertamente.' },
  ],
  'calvicie-inicial': [
    { p: 'Como sei se estou entrando em calvície?', r: 'O sinal inicial costuma ser o fio afinando, não a falha aparecendo. Os cabelos ficam mais finos e claros nas entradas ou no alto da cabeça, e o couro cabeludo começa a aparecer sob luz direta antes de existir área calva.' },
    { p: 'Calvície feminina existe?', r: 'Existe, e o padrão é diferente: a rarefação costuma ser difusa no alto da cabeça, preservando a linha frontal. A investigação hormonal tem peso maior, e o protocolo é definido a partir disso.' },
    { p: 'Transplante é a única solução?', r: 'É a solução para folículo já perdido. Onde ainda há folículo funcionante, o tratamento clínico preserva e melhora o fio, e é justamente por isso que intervir cedo importa tanto: preserva o que o transplante depois não precisaria repor.' },
  ],

  // =========================== VASCULAR
  'tratamento-de-vasinhos': [
    { p: 'Escleroterapia dói?', r: 'A agulha é muito fina e a aplicação é rápida. A sensação mais relatada é de ardência breve em cada vaso tratado. O desconforto varia com a região e com a sua sensibilidade.' },
    { p: 'Fico com mancha depois?', r: 'É comum haver roxo e, em parte dos casos, uma pigmentação temporária no trajeto do vaso tratado, que costuma clarear ao longo das semanas. As orientações de pós-procedimento reduzem esse risco.' },
    { p: 'Preciso usar meia de compressão?', r: 'Em boa parte dos casos, sim, por um período definido depois da sessão. A orientação depende da extensão tratada e é informada antes, para você já se organizar.' },
    { p: 'Posso tomar sol nas pernas depois?', r: 'Não nos dias seguintes, e com fotoproteção depois. Exposição solar sobre a região recém-tratada aumenta o risco de pigmentação, que é justamente o que se quer evitar.' },
  ],

  // =========================== BEM-ESTAR
  soroterapia: [
    { p: 'Quanto tempo dura a aplicação?', r: 'A infusão leva em torno de uma hora, feita em ambiente confortável. O tempo pode variar conforme a fórmula indicada para o seu caso.' },
    { p: 'Tem contraindicação?', r: 'Tem. Quadros renais, cardíacos e algumas condições clínicas contraindicam ou exigem ajuste, e por isso o histórico de saúde é levantado antes. Vitaminas em dose alta não são inofensivas por serem vitaminas.' },
    { p: 'Substitui suplemento oral?', r: 'Não substitui em todos os casos. A via endovenosa faz sentido quando há deficiência identificada ou absorção comprometida; fora disso, a via oral costuma dar conta. Isso é definido na avaliação, com exame quando indicado.' },
  ],
});

/* ═══════════════════════════════════════════════════════════════════
   PERGUNTA DE LOCALIZAÇÃO: uma por página.
   "Onde fazer X no Guarujá?" é a busca literal de quem já decidiu o
   procedimento e está escolhendo onde. Vive no FAQ porque é uma pergunta
   de verdade, ninguém acha forçado um FAQ dizer onde fica.
   Guarujá sempre primeiro; a região entra depois, porque parte da busca
   vem de Santos e São Vicente.
   A resposta de cada uma carrega um detalhe prático próprio do
   procedimento, para não virar 41 respostas idênticas.
   ═══════════════════════════════════════════════════════════════════ */

const ONDE = (pergunta: string, detalhe: string) => ({
  p: pergunta,
  r:
    'O consultório fica na Rua Buenos Aires, 40, sala 4, no Jardim Ideal (região central do Guarujá), dentro do Physiomed Medicina e Saúde. ' +
    'O atendimento é exclusivamente com hora marcada: o horário fica reservado para você, sem sala de espera cheia e sem fila. ' +
    'Recebemos pacientes de toda a Baixada Santista: Santos, São Vicente, Praia Grande, Cubatão, Bertioga, Mongaguá e Itanhaém. ' +
    'Quem vem de Santos ou de São Vicente chega pela balsa ou pela Rodovia Cônego Domênico Rangoni, e vale considerar o horário da travessia ao escolher o agendamento. ' +
    detalhe,
});

Object.assign(FAQS, Object.fromEntries(Object.entries({
  // =========================== FACIAL
  'harmonizacao-facial': ['Onde fazer harmonização facial no Guarujá?', 'A primeira consulta é de avaliação: o planejamento depende de ver o seu rosto em movimento, e isso foto não mostra.'],
  'toxina-botulinica': ['Onde aplicar botox no Guarujá?', 'A sessão leva cerca de 30 minutos, então costuma caber em um intervalo do dia.'],
  'preenchimento-labial': ['Onde fazer preenchimento labial no Guarujá?', 'Reserve cerca de uma hora e evite agendar às vésperas de um compromisso importante, o inchaço dos primeiros dias é esperado.'],
  'preenchimento-mento': ['Onde fazer preenchimento de queixo no Guarujá?', 'Se a sua questão é o perfil como um todo, vale dizer isso no agendamento: a avaliação olha nariz, queixo e boca juntos.'],
  'preenchimento-malar': ['Onde fazer preenchimento malar no Guarujá?', 'Na avaliação a gente confirma se a maçã do rosto é mesmo o ponto a tratar, em parte dos casos ela resolve queixa que você localiza mais abaixo.'],
  'preenchimento-mandibular': ['Onde fazer contorno mandibular no Guarujá?', 'O desenho é definido com medida feminina ou masculina conforme o caso, e isso é combinado antes de aplicar.'],
  'bigode-chines': ['Onde tratar o bigode chinês no Guarujá?', 'A avaliação define se o sulco é a causa ou o sintoma, e isso muda completamente a conduta.'],
  rinomodelacao: ['Onde fazer rinomodelação no Guarujá?', 'É procedimento de consultório, sem cirurgia, e a avaliação diz de saída se o seu caso tem indicação para ele ou se é cirúrgico.'],
  'bioestimuladores-faciais': ['Onde aplicar bioestimulador de colágeno no Guarujá?', 'Já agende sabendo que o resultado é avaliado a partir do terceiro mês, antes disso o processo ainda está em curso.'],
  'fios-de-sustentacao': ['Onde fazer fios de sustentação no Guarujá?', 'A avaliação define se você é candidata: fio em flacidez avançada não sustenta, e nesse caso eu digo isso na consulta.'],
  skinbooster: ['Onde fazer skinbooster no Guarujá?', 'Pode ser feito no rosto, no pescoço, no colo e nas mãos, diga no agendamento qual região te incomoda.'],
  'microagulhamento-facial': ['Onde fazer microagulhamento facial no Guarujá?', 'Vale considerar a vermelhidão dos primeiros dias ao escolher a data.'],
  pdrn: ['Onde fazer PDRN no Guarujá?', 'Costuma compor um plano maior em vez de entrar sozinho, e a avaliação define se é indicação para você.'],
  'cicatrizes-de-acne': ['Onde tratar cicatrizes de acne no Guarujá?', 'A primeira consulta classifica o tipo de cicatriz, porque superficial e retraída respondem a protocolos diferentes.'],
  'peelings-faciais': ['Onde fazer peeling facial no Guarujá?', 'O protocolo considera o seu fototipo e a exposição solar que você tem pela frente, então vale mencionar a rotina no agendamento.'],
  'planejamento-skincare': ['Onde fazer uma consulta de skincare no Guarujá?', 'Traga os produtos que você usa hoje, ou fotos deles, boa parte da consulta é reorganizar o que já existe.'],

  // =========================== CORPORAL
  'bioestimuladores-corporais': ['Onde aplicar bioestimulador corporal no Guarujá?', 'Diga a região no agendamento: braços, abdômen, coxas e glúteos têm tempos de sessão diferentes.'],
  flacidez: ['Onde tratar flacidez no Guarujá?', 'A consulta começa pelo exame da região, porque flacidez de pele e flacidez muscular pedem condutas opostas.'],
  estrias: ['Onde tratar estrias no Guarujá?', 'Vale mandar antes a informação de há quanto tempo elas existem e se estão vermelhas ou brancas, isso muda o protocolo e a expectativa.'],
  celulite: ['Onde tratar celulite no Guarujá?', 'A avaliação classifica o grau com a região examinada, e é isso que define a expectativa realista.'],
  subcisao: ['Onde fazer subcisão no Guarujá?', 'É procedimento com anestesia local e alguns dias de sensibilidade, vale agendar em uma semana mais tranquila.'],
  'gordura-localizada': ['Onde tratar gordura localizada no Guarujá?', 'É indicado para quem já está com o peso estável; se você está em processo de emagrecimento, vale conversar sobre o momento certo.'],
  papada: ['Onde tratar papada no Guarujá?', 'O exame define se a causa é gordura, flacidez ou projeção do queixo, e tratar a errada piora o aspecto.'],
  'lipo-enzimatica': ['Onde fazer lipo enzimática no Guarujá?', 'As sessões são curtas, em torno de 30 minutos, e feitas em série.'],
  'peelings-corporais': ['Onde fazer peeling corporal no Guarujá?', 'Se a queixa é escurecimento de axila ou virilha, mencione o método de depilação que você usa, costuma ser parte da causa.'],
  'definicao-abdominal': ['Onde fazer definição abdominal no Guarujá?', 'A previsão de sessões só é feita depois da avaliação presencial, porque depende do seu percentual de gordura.'],
  'modelacao-abdominal': ['Onde fazer modelação abdominal no Guarujá?', 'Na avaliação a gente confirma se o seu caso é modelação ou definição, as indicações são praticamente opostas.'],
  gluteo: ['Onde fazer preenchimento de glúteo no Guarujá?', 'Se a sua questão é a depressão lateral, o hip dips, diga isso no agendamento, é uma avaliação específica.'],
  'microagulhamento-corporal': ['Onde fazer microagulhamento corporal no Guarujá?', 'Vale planejar considerando a estação, por causa da orientação de evitar sol na região tratada.'],

  // =========================== PELE
  melasma: ['Onde tratar melasma no Guarujá?', 'Já venha sabendo que metade do tratamento acontece em casa: sem fotoproteção diária, o que se clareia aqui volta.'],
  manchas: ['Onde tratar manchas no rosto no Guarujá?', 'A consulta começa por identificar a origem, porque mancha de sol, de acne e hormonal respondem a coisas diferentes.'],
  'hidratacao-profunda': ['Onde fazer hidratação facial profunda no Guarujá?', 'Pode ser feita no rosto, no pescoço e no colo, e o intervalo de manutenção é definido conforme a resposta da sua pele.'],
  rejuvenescimento: ['Onde fazer rejuvenescimento facial no Guarujá?', 'A primeira consulta define por onde começar, o que a sua pele perdeu primeiro decide a ordem do plano.'],
  'peeling-intimo': ['Onde fazer clareamento íntimo no Guarujá?', 'O atendimento é com hora marcada e discrição, e o protocolo é específico para a região.'],

  // =========================== CAPILAR
  'intradermoterapia-capilar': ['Onde fazer intradermoterapia capilar no Guarujá?', 'Traga exames recentes se tiver, a fórmula é montada a partir do que a investigação identificou.'],
  'microagulhamento-capilar': ['Onde fazer microagulhamento capilar no Guarujá?', 'Não precisa raspar nem cortar o cabelo, e a sessão leva cerca de 30 minutos.'],
  'queda-capilar': ['Onde tratar queda de cabelo no Guarujá?', 'Se você já tem exames de ferro, ferritina, vitamina D ou tireoide, traga, eles encurtam bastante o caminho.'],
  alopecias: ['Onde tratar alopecia no Guarujá?', 'O exame do couro cabeludo define se é alopecia cicatricial ou não, e quando o caso pede acompanhamento médico conjunto, eu encaminho.'],
  'calvicie-inicial': ['Onde tratar calvície inicial no Guarujá?', 'Quanto mais cedo, mais folículo há para preservar, vale não esperar a falha aparecer.'],

  // =========================== VASCULAR
  'tratamento-de-vasinhos': ['Onde tratar vasinhos nas pernas no Guarujá?', 'Vale planejar o início pela estação, por causa da orientação de evitar sol na região tratada.'],

  // =========================== BEM-ESTAR
  soroterapia: ['Onde fazer soroterapia no Guarujá?', 'Traga exames recentes se tiver: a fórmula é definida pelo que foi identificado, não por protocolo pronto.'],
}).map(([slug, [pergunta, detalhe]]) => [slug, [...(FAQS[slug] ?? []), ONDE(pergunta, detalhe)]])));
