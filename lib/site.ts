export const SITE = {
  nome: 'Dra. Fernanda Paz',
  papel: 'Biomedicina Estética',
  crbm: 'CRBM-1 66797', // confirmado pela Dra. em 25/08/2026
  cidade: 'Guarujá',
  uf: 'SP',
  // PENDENTE — domínio definitivo
  url: 'https://drafernandapaz.com.br',
  whatsapp: {
    numero: '5511974729060',
    exibicao: '(11) 97472-9060',
  },
  instagram: {
    handle: '@drafernandapaz',
    url: 'https://instagram.com/drafernandapaz',
  },
  endereco: {
    logradouro: 'Rua Buenos Aires, 40, sala 4',
    complemento: 'Physiomed Medicina e Saúde',
    bairro: 'Vila Maia',
    cidade: 'Guarujá',
    uf: 'SP',
    cep: '11410-010',
    pendente: false,
  },
  horarios: [
    { dia: 'Segunda a sexta', hora: 'Com hora marcada' },
    { dia: 'Sábado', hora: 'Com hora marcada' },
    { dia: 'Domingo e feriados', hora: 'Fechado' },
  ],
  horariosPendente: false,
} as const;

export const wa = (mensagem?: string) =>
  `https://wa.me/${SITE.whatsapp.numero}${
    mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''
  }`;

export const MSG = {
  geral: 'Olá! Vim pelo site e gostaria de agendar uma avaliação.',
  duvida: 'Olá! Vim pelo site e gostaria de entender qual procedimento é indicado para o meu caso.',
  procedimento: (nome: string) =>
    `Olá! Vim pelo site e gostaria de saber mais sobre ${nome}.`,
  resultados: 'Olá! Vi os resultados no site e gostaria de agendar uma avaliação.',
};
