/**
 * Contexto litorâneo: só onde ele é verdade.
 *
 * === O que estava errado na primeira versão ===
 * Eu tinha escrito um fechamento local para as 41 páginas, e a maioria era
 * enchimento com cheiro de SEO: "atendo pacientes de Santos, São Vicente e
 * Praia Grande" repetido 34 vezes. Pior: em algumas eu inventei correlação
 * geográfica: "quem vem de Santos costuma chegar com estria branca", que
 * simplesmente não existe. Estria branca tem em qualquer lugar.
 *
 * === O que sobrou ===
 * Só as sete páginas em que morar no litoral muda mesmo alguma coisa clínica:
 * sol, calor e luz o ano inteiro. Nessas, a menção à cidade carrega informação.
 * Nas outras 34, quem responde "onde fazer" é o FAQ, que é onde a pergunta
 * pertence, porque é a pergunta que a pessoa realmente faz.
 */

export const LOCAL: Record<string, string> = {
  melasma:
    'Tratar melasma no Guarujá exige uma conversa a mais: morar em cidade de praia significa sol, calor e luz refletida o ano inteiro, e são justamente os fatores que reacendem o quadro. Isso não impede o tratamento: muda o protocolo e o peso da manutenção.',
  manchas:
    'Em cidade litorânea, a manutenção pesa mais: o pigmento que se clareia no consultório volta rápido se a exposição continuar. Por isso a fotoproteção entra no plano como parte do tratamento, não como recomendação de rodapé.',
  'peelings-faciais':
    'A escolha do peeling considera a exposição solar que você tem pela frente, o que, em cidade de praia, pesa mais do que em outros lugares. Um protocolo perfeitamente indicado em junho pode não ser o mesmo de dezembro.',
  'hidratacao-profunda':
    'Sol, sal e vento desidratam a pele o ano todo em cidade litorânea. É comum que a manutenção aqui precise ser mais frequente do que o intervalo padrão sugeriria.',
  'planejamento-skincare':
    'Em cidade de praia a fotoproteção deixa de ser um item da rotina e passa a ser o eixo dela. A prescrição considera quanto sol você realmente pega: trabalho ao ar livre, praia no fim de semana, carro sem película.',
  'microagulhamento-corporal':
    'Vale planejar o início considerando a estação: há orientação de evitar exposição solar na região tratada, e pele em renovação exposta ao sol é a principal causa de mancha depois do procedimento.',
  'tratamento-de-vasinhos':
    'Vale considerar a estação ao começar: há orientação de evitar sol nas pernas tratadas por um período, o que em cidade de praia pede alguma organização de calendário.',
};
