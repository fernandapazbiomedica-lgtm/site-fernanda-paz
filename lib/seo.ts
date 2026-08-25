/**
 * SEO por página: title e description.
 *
 * === O defeito que este arquivo corrige ===
 * O layout aplica `template: '%s | Dra. Fernanda Paz'`, e os títulos antigos já
 * terminavam com "| Dra. Fernanda Paz". Resultado no ar:
 *
 *   Harmonização Facial no Guarujá | Dra. Fernanda Paz | Dra. Fernanda Paz
 *
 * 71 caracteres. O Google corta em torno de 60, então o nome dela aparecia duas
 * vezes e a segunda saía cortada. Aqui os títulos vêm SEM a marca, e o template
 * acrescenta uma vez só.
 *
 * === Regras usadas ===
 * · title: até ~36 caracteres, porque o template soma 20. Começa pelo termo que a
 *   pessoa digita, não pelo nome comercial do procedimento.
 * · "no Guarujá" entra onde couber: busca de estética é local, e a cidade no
 *   título é o que separa o resultado local do nacional.
 * · description: 140–158 caracteres. Não repete o título: responde a dúvida que
 *   fez a pessoa buscar, porque é isso que decide o clique.
 * · Nenhuma promessa de resultado, aqui também não.
 */

export type Seo = { title: string; description: string };

export const SEO: Record<string, Seo> = {
  // =========================== FACIAL
  'harmonizacao-facial': {
    title: 'Harmonização Facial no Guarujá',
    description:
      'Harmonização facial a partir do estudo das proporções do seu rosto, não de protocolo pronto. Entenda como é feito o planejamento e agende sua avaliação no Guarujá.',
  },
  'toxina-botulinica': {
    title: 'Botox (Toxina Botulínica) no Guarujá',
    description:
      'Toxina botulínica com dose calculada por músculo, preservando a sua expressão. Entenda por que rosto congelado é dose, não técnica. Avaliação individual no Guarujá.',
  },
  'preenchimento-labial': {
    title: 'Preenchimento Labial no Guarujá',
    description:
      'Preenchimento labial no volume que combina com o seu rosto. Saiba quanto tempo leva para desinchar e o que esperar do contorno final. Guarujá, SP.',
  },
  'preenchimento-mento': {
    title: 'Preenchimento de Queixo (Mento)',
    description:
      'Preenchimento de mento para projetar o queixo e equilibrar o perfil. Entenda por que o nariz pode parecer maior quando falta projeção embaixo. Guarujá, SP.',
  },
  'preenchimento-malar': {
    title: 'Preenchimento Malar (Maçã do Rosto)',
    description:
      'Preenchimento malar devolve sustentação ao terço médio do rosto. Entenda por que tratar aqui costuma suavizar o bigode chinês. Avaliação individual no Guarujá.',
  },
  'preenchimento-mandibular': {
    title: 'Contorno Mandibular no Guarujá',
    description:
      'Preenchimento mandibular redesenha a linha entre rosto e pescoço. Entenda como a medida evita o resultado masculinizado. Agende sua avaliação no Guarujá, SP.',
  },
  'bigode-chines': {
    title: 'Preenchimento do Bigode Chinês',
    description:
      'Sulco nasogeniano marcado nem sempre se trata preenchendo o sulco. Entenda por que a causa costuma estar acima dele e o que isso muda no resultado. Guarujá, SP.',
  },
  rinomodelacao: {
    title: 'Rinomodelação no Guarujá',
    description:
      'Rinomodelação sem cirurgia para equilibrar o perfil do nariz. Entenda o que a técnica alcança, o que ela não alcança e quando é indicada. Avaliação no Guarujá.',
  },
  'bioestimuladores-faciais': {
    title: 'Bioestimulador de Colágeno Facial',
    description:
      'O volume que aparece no dia da aplicação não é o resultado: ele sai em 1 a 3 meses. Entenda como funciona o estímulo de colágeno e o prazo real. Guarujá, SP.',
  },
  'fios-de-sustentacao': {
    title: 'Fios de Sustentação no Guarujá',
    description:
      'Fios de PDO reposicionam o tecido que desceu. Entenda quem é candidato, o que eles não resolvem e por que não substituem lifting cirúrgico. Guarujá, SP.',
  },
  skinbooster: {
    title: 'Skinbooster no Guarujá',
    description:
      'Skinbooster trabalha qualidade de pele (hidratação, viço e textura) sem dar volume. Entenda a diferença para o preenchimento. Avaliação individual no Guarujá.',
  },
  'microagulhamento-facial': {
    title: 'Microagulhamento Facial no Guarujá',
    description:
      'Microagulhamento estimula colágeno e renova a textura da pele em série. Entenda o que esperar de cada sessão e quantas o seu caso pede. Guarujá, SP.',
  },
  pdrn: {
    title: 'PDRN no Guarujá',
    description:
      'PDRN é bioestimulador regenerativo: age na qualidade do tecido, não no volume. Entenda por que costuma entrar antes de outros procedimentos. Guarujá, SP.',
  },
  'cicatrizes-de-acne': {
    title: 'Tratamento de Cicatrizes de Acne',
    description:
      'Cicatriz de acne é relevo, não mancha, e por isso não clareia, remodela. Entenda os tipos, o que muda o prognóstico e quantas sessões são necessárias. Guarujá.',
  },
  'peelings-faciais': {
    title: 'Peeling Facial no Guarujá',
    description:
      'Peeling não é escolher o mais forte: é escolher o que a sua pele suporta sem inflamar. Entenda profundidade, descamação e se dá para fazer no verão. Guarujá, SP.',
  },
  'planejamento-skincare': {
    title: 'Consulta de Skincare no Guarujá',
    description:
      'Rotina de skincare montada a partir do diagnóstico da sua pele, inclusive o que sair dela. Entenda por que rotina cheia costuma render menos. Guarujá, SP.',
  },

  // =========================== CORPORAL
  'bioestimuladores-corporais': {
    title: 'Bioestimulador Corporal no Guarujá',
    description:
      'Bioestimulador trata flacidez de pele, não gordura localizada, e o resultado é do seu colágeno. Entenda o prazo real e a diferença entre os dois. Guarujá, SP.',
  },
  flacidez: {
    title: 'Tratamento de Flacidez no Guarujá',
    description:
      'Flacidez de pele e flacidez muscular pedem condutas diferentes, e confundi-las é o motivo mais comum de tratamento que não entrega. Entenda como distinguir.',
  },
  estrias: {
    title: 'Tratamento de Estrias no Guarujá',
    description:
      'A cor da estria diz o prognóstico: vermelha responde melhor, branca é cicatriz madura e melhora sem sumir. Entenda o que esperar antes de começar. Guarujá, SP.',
  },
  celulite: {
    title: 'Tratamento de Celulite no Guarujá',
    description:
      'Celulite não é gordura: é trave de tecido fibroso puxando a pele. Entenda por que emagrecer nem sempre melhora e por que mulheres magras também têm. Guarujá.',
  },
  subcisao: {
    title: 'Subcisão no Guarujá',
    description:
      'A subcisão libera a trave fibrosa que ancora a pele e cria a depressão. Entenda quando ela é indicada e por que costuma vir junto de estímulo de colágeno.',
  },
  'gordura-localizada': {
    title: 'Gordura Localizada no Guarujá',
    description:
      'Aquela região que não cede mesmo com peso estável e treino em dia. Entenda por que isso não é falta de disciplina e o que o tratamento local faz. Guarujá, SP.',
  },
  papada: {
    title: 'Tratamento de Papada no Guarujá',
    description:
      'Papada pode ser gordura, flacidez ou falta de projeção do queixo, e tratar a causa errada piora. Entenda por que o exame vem antes da proposta. Guarujá, SP.',
  },
  'lipo-enzimatica': {
    title: 'Lipo Enzimática no Guarujá',
    description:
      'Lipo enzimática atua em gordura localizada, região a região, em protocolo de série. Entenda a partir de quando a mudança costuma aparecer. Guarujá, SP.',
  },
  'peelings-corporais': {
    title: 'Peeling Corporal no Guarujá',
    description:
      'Escurecimento de axila, virilha e joelho quase sempre tem causa mecânica. Entenda por que clarear sem remover o atrito entrega resultado que se desfaz.',
  },
  'definicao-abdominal': {
    title: 'Definição Abdominal no Guarujá',
    description:
      'Definição evidencia a musculatura que já existe: quanto menor o percentual de gordura, mais rápido aparece. Entenda a diferença para modelação. Guarujá, SP.',
  },
  'modelacao-abdominal': {
    title: 'Modelação Abdominal (Tanquinho)',
    description:
      'Modelação desenha o contorno abdominal mesmo sem musculatura formada. Indicação praticamente oposta à da definição. Entenda qual é o seu caso. Guarujá, SP.',
  },
  gluteo: {
    title: 'Preenchimento de Glúteo e Hip Dips',
    description:
      'Hip dips é anatomia, não defeito: depende do formato da bacia e exercício não elimina. Entenda o que o preenchimento faz e o que ele não é. Guarujá, SP.',
  },
  'microagulhamento-corporal': {
    title: 'Microagulhamento Corporal',
    description:
      'Microagulhamento no corpo para estrias, cicatrizes e flacidez leve. Entenda por que estria branca e estria vermelha respondem de formas diferentes. Guarujá.',
  },

  // =========================== PELE
  melasma: {
    title: 'Tratamento de Melasma no Guarujá',
    description:
      'Melasma se controla, não se cura, e tratar com força costuma piorar. Entenda o que faz o pigmento voltar, inclusive a luz de telas. Avaliação no Guarujá.',
  },
  manchas: {
    title: 'Tratamento de Manchas no Guarujá',
    description:
      'A profundidade da mancha, não a cor, decide o que funciona. Entenda a diferença entre mancha de acne e melasma e por que a mancha volta. Guarujá, SP.',
  },
  'hidratacao-profunda': {
    title: 'Hidratação Facial Profunda',
    description:
      'Pele oleosa também desidrata, e às vezes a oleosidade é resposta à falta de água. Entenda o que a hidratação de consultório alcança e o creme não. Guarujá.',
  },
  rejuvenescimento: {
    title: 'Rejuvenescimento Facial no Guarujá',
    description:
      'Viço e textura respondem primeiro; firmeza demora, porque depende de colágeno novo. Entenda a ordem do plano e quando faz sentido começar. Guarujá, SP.',
  },
  'peeling-intimo': {
    title: 'Clareamento Íntimo no Guarujá',
    description:
      'Escurecimento de virilha e região íntima costuma vir de atrito e depilação. Entenda por que produto usado por conta própria costuma piorar. Guarujá, SP.',
  },

  // =========================== CAPILAR
  'intradermoterapia-capilar': {
    title: 'Intradermoterapia Capilar (MMP)',
    description:
      'Ativos aplicados direto no couro cabeludo, em fórmula montada caso a caso. Entenda por que o mesmo coquetel para todo mundo é o erro mais comum. Guarujá, SP.',
  },
  'microagulhamento-capilar': {
    title: 'Microagulhamento Capilar no Guarujá',
    description:
      'Estimula o folículo que ainda existe e abre a via de absorção dos ativos. Entenda a diferença para a intradermoterapia e quando usar as duas. Guarujá, SP.',
  },
  'queda-capilar': {
    title: 'Tratamento de Queda de Cabelo',
    description:
      'Queda é sintoma, não diagnóstico: pode ser ferro, tireoide, pós-parto ou estresse. Entenda por que exame vem antes do protocolo. Avaliação no Guarujá, SP.',
  },
  alopecias: {
    title: 'Tratamento de Alopecia no Guarujá',
    description:
      'Alopecia cicatricial e não cicatricial pedem condutas opostas: numa há folículo para estimular, na outra não. Entenda em qual grupo está o seu caso.',
  },
  'calvicie-inicial': {
    title: 'Tratamento de Calvície Inicial',
    description:
      'Na calvície o sinal inicial é o fio afinando, não a falha. Entenda por que começar cedo muda o prognóstico e por que o tratamento é contínuo. Guarujá, SP.',
  },

  // =========================== VASCULAR
  'tratamento-de-vasinhos': {
    title: 'Tratamento de Vasinhos nas Pernas',
    description:
      'Escleroterapia, também chamada de PEIM, trata vasinhos vaso a vaso, em série. Entenda a partir de quando a melhora costuma ficar visível. Guarujá, SP.',
  },

  // =========================== BEM-ESTAR
  soroterapia: {
    title: 'Soroterapia no Guarujá',
    description:
      'Soroterapia repõe nutrientes por via intravenosa, em fórmula definida por avaliação. Entenda por que exame vem antes e o que ela não faz. Guarujá, SP.',
  },
};

/** SEO das 6 páginas de categoria: mesma correção de marca duplicada. */
export const SEO_CATEGORIAS: Record<string, Seo> = {
  facial: {
    title: 'Procedimentos Faciais no Guarujá',
    description:
      'Harmonização, preenchimentos, toxina botulínica, rinomodelação e bioestimuladores conduzidos a partir do estudo das proporções do seu rosto. Guarujá, SP.',
  },
  corporal: {
    title: 'Procedimentos Corporais no Guarujá',
    description:
      'Flacidez, celulite, estrias, gordura localizada, definição abdominal e lipo enzimática. Protocolos combinados com acompanhamento de evolução. Guarujá, SP.',
  },
  pele: {
    title: 'Tratamentos de Pele no Guarujá',
    description:
      'Melasma, manchas, rejuvenescimento, hidratação profunda e peelings. Diagnóstico da sua pele e um plano de manutenção que continua em casa. Guarujá, SP.',
  },
  capilar: {
    title: 'Tratamento Capilar no Guarujá',
    description:
      'Queda de cabelo, alopecias e calvície inicial tratadas a partir da causa, com avaliação do couro cabeludo. Intradermoterapia e microagulhamento. Guarujá, SP.',
  },
  vascular: {
    title: 'Tratamento de Vasinhos no Guarujá',
    description:
      'Escleroterapia, também chamada de PEIM, para vasinhos de membros inferiores, tratados vaso a vaso, sessão a sessão. Avaliação individual no Guarujá, SP.',
  },
  'bem-estar': {
    title: 'Soroterapia no Guarujá',
    description:
      'Soroterapia e protocolos de suporte com fórmula definida caso a caso, a partir do que a avaliação e os exames identificaram. Guarujá, SP.',
  },
};
