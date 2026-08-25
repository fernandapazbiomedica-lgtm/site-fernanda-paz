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
  facebook: {
    handle: 'Dra. Fernanda Paz',
    url: 'https://www.facebook.com/profile.php?id=61583491656748',
  },
  tiktok: {
    handle: '@dra.fernandapaz',
    url: 'https://www.tiktok.com/@dra.fernandapaz',
  },
  /** perfil da clínica no Google — é o que aparece na busca e no Maps */
  google: {
    handle: 'Perfil no Google',
    url: 'https://share.google/6tvmIgYO8tSMVgilb',
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

/**
 * Perfis oficiais, na ordem de importância para a clínica.
 * Alimenta o rodapé, a página de contato e o sameAs do schema.org — que é
 * como o Google confirma que todos esses perfis são da mesma pessoa.
 */
export const REDES = [
  { nome: 'Instagram', ...SITE.instagram },
  { nome: 'TikTok', ...SITE.tiktok },
  { nome: 'Facebook', ...SITE.facebook },
  { nome: 'Google', ...SITE.google },
] as const;

export const PERFIS = REDES.map((r) => r.url);

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
