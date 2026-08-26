/**
 * Corpo editorial das páginas de categoria.
 *
 * ⚠️ PENDENTE DE REVISÃO CLÍNICA.
 *
 * Estas seis páginas competem por buscas amplas: "procedimentos faciais no
 * Guarujá", "tratamento capilar no Guarujá", e até agora tinham uma linha de
 * texto e a lista de procedimentos. Lista não responde nada.
 *
 * O que cada uma faz aqui: explica como a categoria se organiza, ajuda a pessoa
 * a se localizar dentro dela e diz o que a primeira consulta resolve. É texto
 * de orientação, não de venda: quem chega numa busca ampla ainda não sabe o
 * nome do que precisa.
 */

export type CategoriaCorpo = {
  rotulo: string;
  corpo: string[];
  faq: { p: string; r: string }[];
};

const ONDE_CAT = (o: string) =>
  'O consultório fica na Rua Buenos Aires, 40, sala 4, no Jardim Ideal, região central do Guarujá, dentro do Physiomed Medicina e Saúde. ' +
  'O atendimento é exclusivamente com hora marcada. Recebemos pacientes de toda a Baixada Santista: Santos, São Vicente, Praia Grande, Cubatão, Bertioga, Mongaguá e Itanhaém. ' +
  o;

export const CATEGORIA_CORPO: Record<string, CategoriaCorpo> = {
  facial: {
    rotulo: 'Como esta categoria se organiza',
    corpo: [
      'Quase todo mundo chega aqui pedindo um procedimento pelo nome: preenchimento, botox, harmonização. Mas o nome do procedimento é a resposta, e a consulta começa pela pergunta: o que no seu rosto está te incomodando quando você se olha no espelho.',
      'Os procedimentos faciais se dividem em três funções que não se substituem. Uns devolvem sustentação e volume, como os preenchimentos. Outros suavizam a marca da expressão, como a toxina botulínica. E outros trabalham a qualidade da pele que reveste tudo isso: skinbooster, microagulhamento, peelings e PDRN.',
      'Um plano bem montado quase sempre combina funções diferentes, em etapas. E frequentemente descobre que o procedimento que a paciente veio pedir não era o que resolvia a queixa dela. O caso mais comum é quem chega querendo preencher o bigode chinês quando o que falta é sustentação na maçã do rosto.',
      'É por isso que a avaliação é presencial e vem antes de qualquer proposta. Planejar rosto por foto é o atalho que produz resultado artificial.',
    ],
    faq: [
      {
        p: 'Onde fazer procedimentos faciais no Guarujá?',
        r: ONDE_CAT('A primeira consulta é de avaliação: o planejamento depende de ver o seu rosto em movimento e em repouso.'),
      },
      {
        p: 'Por onde eu começo se nunca fiz nada?',
        r: 'Pela avaliação, sem procedimento marcado. Ela existe para mapear o que está causando o incômodo e montar um plano por etapas, que pode começar por algo simples, como qualidade de pele, antes de qualquer injetável. Não é obrigatório sair da primeira consulta com procedimento agendado.',
      },
      {
        p: 'Posso fazer mais de um procedimento no mesmo dia?',
        r: 'Em muitos casos sim, e às vezes é o mais indicado: algumas combinações rendem mais feitas juntas. Em outros, o intervalo entre procedimentos é necessário para a segurança e para avaliar o resultado de cada um. O que dá para combinar é definido no planejamento.',
      },
      {
        p: 'Como sei se o resultado vai ficar natural?',
        r: 'O que produz resultado artificial é excesso: dose alta, volume acima do que o rosto comporta, ou tratar tudo de uma vez sem hierarquia. Conduta conservadora e planejamento por etapas são o que mantém o resultado dentro do que ninguém consegue nomear.',
      },
    ],
  },

  corporal: {
    rotulo: 'Como esta categoria se organiza',
    corpo: [
      'Os procedimentos corporais respondem a quatro queixas diferentes, e confundi-las é o motivo mais comum de tratamento que não entrega: gordura localizada, flacidez de pele, celulite e contorno.',
      'São coisas distintas. Gordura localizada é volume que resiste mesmo com peso estável. Flacidez é pele que perdeu elasticidade e não retorna. Celulite é alteração estrutural, com traves fibrosas puxando a pele. Contorno é desenho: projeção e definição de uma região.',
      'Tratar a queixa errada custa meses. Reduzir gordura em quem tem flacidez, por exemplo, pode piorar o aspecto, porque tira volume sem devolver firmeza. Na prática, boa parte dos casos tem mais de uma dessas coisas ao mesmo tempo, em proporções diferentes, e é essa proporção que define o plano.',
      'Por isso a avaliação corporal é feita com a região examinada, e não pela descrição por mensagem. Existem testes simples de retorno e de tônus que separam um quadro do outro na própria consulta.',
    ],
    faq: [
      {
        p: 'Onde fazer procedimentos corporais no Guarujá?',
        r: ONDE_CAT('Na avaliação a região é examinada, porque a distinção entre gordura, flacidez e celulite não se faz por descrição.'),
      },
      {
        p: 'Preciso emagrecer antes de tratar?',
        r: 'Depende. Se há perda de peso significativa prevista, faz sentido tratar depois, porque o emagrecimento muda o quadro. Em peso já estabilizado ou perda pequena, o tratamento pode caminhar junto. Isso é definido na avaliação, considerando o seu momento.',
      },
      {
        p: 'Procedimento corporal substitui exercício?',
        r: 'Não, e nenhum honesto vai dizer que sim. Os procedimentos agem em pontos que não respondem ao déficit calórico e ao treino: gordura resistente, flacidez de pele, trave de celulite. O que o exercício faz, ele continua fazendo melhor que qualquer sessão.',
      },
      {
        p: 'Quanto tempo até ver diferença?',
        r: 'Varia com o alvo. Contorno e desenho aparecem em semanas. Gordura localizada costuma ficar evidente a partir da quinta sessão. Firmeza é a mais lenta, porque depende de colágeno novo, e se avalia a partir do terceiro mês.',
      },
    ],
  },

  pele: {
    rotulo: 'Como esta categoria se organiza',
    corpo: [
      'Pele é a categoria em que o diagnóstico pesa mais que a técnica. Mancha de sol, mancha de acne e melasma parecem a mesma coisa no espelho e respondem a coisas completamente diferentes, e tratar melasma como se fosse mancha comum é o erro que mais escurece pele no Brasil.',
      'Os tratamentos aqui trabalham três frentes: pigmento, textura e hidratação. Cada uma tem seus recursos, e a maioria dos planos combina as três, porque pele opaca costuma ter mais de um problema ao mesmo tempo.',
      'A parte que ninguém gosta de ouvir é que metade do resultado acontece em casa. Nenhum protocolo de consultório sustenta o que a rotina desfaz, e em cidade litorânea, com sol, calor e luz refletida o ano inteiro, isso vale ainda mais.',
      'Por isso o plano sempre inclui a prescrição do que usar em casa, e a fotoproteção entra como parte do tratamento, não como recomendação de rodapé.',
    ],
    faq: [
      {
        p: 'Onde tratar a pele do rosto no Guarujá?',
        r: ONDE_CAT('A avaliação identifica a origem e a profundidade do que está na sua pele antes de qualquer protocolo.'),
      },
      {
        p: 'Como sei se a minha mancha é melasma?',
        r: 'O melasma costuma ser simétrico, acastanhado, aparece em áreas como testa, buço e maçãs do rosto, e tem forte ligação com sol, calor e alterações hormonais. Mancha de sol e mancha pós-acne têm padrão e origem diferentes. A distinção é feita no exame da pele, e ela muda todo o tratamento.',
      },
      {
        p: 'Posso fazer tratamento de pele no verão?',
        r: 'Pode, com o protocolo adequado à estação e fotoproteção rigorosa. O que muda é a intensidade: procedimentos que renovam mais profundamente costumam ser desaconselhados quando há exposição solar prevista, porque pele em renovação exposta ao sol mancha.',
      },
      {
        p: 'Preciso trocar todos os meus produtos?',
        r: 'Quase nunca. O mais comum é reorganizar o que você já usa, ajustar ordem e frequência, e trocar um ou dois itens pontuais. Prescrição que descarta a rotina inteira costuma dizer mais sobre venda do que sobre pele.',
      },
    ],
  },

  capilar: {
    rotulo: 'Como esta categoria se organiza',
    corpo: [
      'Cabelo é a categoria em que a pressa mais atrapalha. A maioria das pacientes chega querendo começar um tratamento imediatamente, e a conduta correta é investigar antes, porque queda é sintoma, não diagnóstico.',
      'A mesma queda pode vir de deficiência de ferro, de alteração de tireoide, de um pós-parto, de dieta restritiva, de medicação, de quadro hormonal ou de predisposição genética. Cada uma dessas pede conduta diferente, e tratar sem saber qual é significa tratar no escuro por meses.',
      'A avaliação começa pelo exame do couro cabeludo e, quando indicado, por exames de sangue. Só depois se define o protocolo: intradermoterapia, microagulhamento, tratamento tópico, oral, ou a combinação deles.',
      'Uma coisa importante sobre expectativa: o fio tem ciclo próprio, e nada aparece antes de cerca de três meses. Isso não é falha do tratamento, é a biologia do cabelo. O que se observa antes disso costuma ser a redução da queda, não fio novo.',
    ],
    faq: [
      {
        p: 'Onde tratar queda de cabelo no Guarujá?',
        r: ONDE_CAT('Se você já tem exames de ferro, ferritina, vitamina D ou tireoide, traga na primeira consulta: eles encurtam bastante o caminho.'),
      },
      {
        p: 'Quanto tempo até ver o cabelo crescendo?',
        r: 'Cerca de três meses, porque é o tempo do ciclo do fio. Antes disso o que costuma se notar é a queda diminuindo. Qualquer promessa de resultado visível em semanas ignora como o cabelo funciona.',
      },
      {
        p: 'Preciso fazer exames antes?',
        r: 'Na maior parte dos casos, sim. Há causas de queda que só aparecem em exame: ferro, ferritina, vitamina D, função da tireoide. Começar protocolo sem esse mapa é o que faz muita gente tratar por meses sem resposta e concluir que nada funciona.',
      },
      {
        p: 'Homem também é atendido?',
        r: 'Sim, e é procura frequente. O que muda é a investigação e a fórmula: o padrão de perda masculino e o feminino são diferentes, e o protocolo é montado a partir disso.',
      },
    ],
  },

  vascular: {
    rotulo: 'Sobre o tratamento',
    corpo: [
      'Os vasinhos das pernas (telangiectasias) aparecem por predisposição, alteração hormonal, tempo em pé, gestação ou simplesmente genética. São muito comuns e, ao contrário do que muita gente acredita, não precisam ser permanentes.',
      'A escleroterapia, também chamada de PEIM, trata vaso a vaso: a substância aplicada faz o vaso fechar, e o próprio organismo o reabsorve ao longo das semanas seguintes. É tratamento em série: os vasos não somem todos na primeira sessão.',
      'Nem todo vasinho é candidato. Parte dos casos exige investigação vascular antes, e quando isso aparece na avaliação o encaminhamento é feito. É uma distinção que se faz examinando as pernas, não por foto.',
    ],
    faq: [
      {
        p: 'Onde tratar vasinhos nas pernas no Guarujá?',
        r: ONDE_CAT('Vale planejar o início pela estação, por causa da orientação de evitar sol na região tratada por um período.'),
      },
      {
        p: 'Os vasinhos voltam?',
        r: 'O vaso tratado é fechado e reabsorvido: esse não volta. Mas a predisposição a formar novos continua, então é comum haver manutenção ao longo dos anos. Isso não é falha do tratamento: é a natureza do quadro.',
      },
      {
        p: 'Em quantas sessões vejo diferença?',
        r: 'Na maior parte dos casos a melhora já fica perceptível a partir da terceira sessão. O total depende da extensão e do tipo de vaso, e é estimado na avaliação, com as pernas examinadas.',
      },
    ],
  },

  'bem-estar': {
    rotulo: 'Sobre esta categoria',
    corpo: [
      'Esta é a categoria de suporte. Ela não substitui alimentação, sono, atividade física nem acompanhamento clínico: acompanha um processo que já está em curso.',
      'A soroterapia repõe vitaminas e minerais por via intravenosa, com fórmula montada caso a caso. A via endovenosa faz sentido quando há deficiência identificada ou absorção comprometida; fora disso, a via oral costuma dar conta.',
      'Vitamina em dose alta não é inofensiva por ser vitamina. Há contraindicações, algumas substâncias se acumulam no organismo, e por isso a indicação parte do que a avaliação e os exames identificaram, não de um protocolo pronto de balcão.',
    ],
    faq: [
      {
        p: 'Onde fazer soroterapia no Guarujá?',
        r: ONDE_CAT('Traga exames recentes se tiver: a fórmula é definida pelo que foi identificado.'),
      },
      {
        p: 'Soroterapia emagrece?',
        r: 'Não. A soroterapia repõe nutrientes. Emagrecimento depende de alimentação, atividade física e acompanhamento adequado. Ela pode entrar como suporte dentro de um processo já em curso, mas apresentá-la como tratamento de emagrecimento não corresponde ao que ela faz.',
      },
      {
        p: 'Qualquer pessoa pode fazer?',
        r: 'Não. Quadros renais, cardíacos e algumas condições clínicas contraindicam ou exigem ajuste da fórmula. Por isso o histórico de saúde é levantado antes, e em parte dos casos são solicitados exames.',
      },
    ],
  },
};
