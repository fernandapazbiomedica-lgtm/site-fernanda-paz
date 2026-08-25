/**
 * Mapa de imagens por procedimento.
 *
 * Cada página de procedimento pede uma imagem própria. Onde existe antes/depois
 * limpo, é ele. Onde não existe, cai na macro da categoria — que é textura de
 * pele real, não banco de imagem.
 *
 * `casos` lista os antes/depois disponíveis para aquele procedimento. Página sem
 * caso não renderiza a seção de resultados, em vez de mostrar placeholder.
 */

const MACRO: Record<string, string> = {
  facial: '/images/cat-facial.jpg',
  corporal: '/images/cat-corporal.jpg',
  pele: '/images/cat-pele.jpg',
  capilar: '/images/cat-capilar.jpg',
  vascular: '/images/cat-vascular.jpg',
  'bem-estar': '/images/cat-bem-estar.jpg',
};

/** antes/depois com autorização e sem marca de rede social */
export const CASOS: Record<string, string[]> = {
  'preenchimento-labial': ['preenchimento-labial', 'preenchimento-labial-1-antes', 'preenchimento-labial-1-depois'],
  'toxina-botulinica': ['toxina-botulinica'],
  'cicatrizes-de-acne': ['cicatrizes-de-acne'],
  'intradermoterapia-capilar': ['intradermoterapia-capilar', 'intradermoterapia-capilar-2'],
  'microagulhamento-capilar': ['intradermoterapia-capilar-2'],
  'queda-capilar': ['intradermoterapia-capilar', 'intradermoterapia-capilar-2'],
  'calvicie-inicial': ['intradermoterapia-capilar'],
  alopecias: ['intradermoterapia-capilar-2'],
  gluteo: ['preenchimento-gluteo'],
  rejuvenescimento: ['rejuvenescimento-maos', 'rejuvenescimento-maos-2'],
  manchas: ['rejuvenescimento-maos-2'],
};

/** imagem de abertura da página do procedimento */
export function imagemProcedimento(slug: string, categoria: string): string {
  const caso = CASOS[slug]?.[0];
  if (caso) return `/images/resultados/${caso}.jpg`;
  return MACRO[categoria] ?? MACRO.facial;
}

/** caminhos completos dos casos daquele procedimento */
export function casosDoProcedimento(slug: string): string[] {
  return (CASOS[slug] ?? []).map((c) => `/images/resultados/${c}.jpg`);
}

/** todos os casos, para a página /resultados */
export const GALERIA: { arquivo: string; nome: string; categoria: string }[] = [
  { arquivo: 'preenchimento-labial', nome: 'Preenchimento labial', categoria: 'facial' },
  { arquivo: 'preenchimento-labial-1-antes', nome: 'Preenchimento labial — antes', categoria: 'facial' },
  { arquivo: 'preenchimento-labial-1-depois', nome: 'Preenchimento labial — depois', categoria: 'facial' },
  { arquivo: 'toxina-botulinica', nome: 'Toxina botulínica', categoria: 'facial' },
  { arquivo: 'cicatrizes-de-acne', nome: 'Cicatrizes de acne', categoria: 'facial' },
  { arquivo: 'rejuvenescimento-maos', nome: 'Rejuvenescimento de mãos', categoria: 'pele' },
  { arquivo: 'rejuvenescimento-maos-2', nome: 'Rejuvenescimento de mãos', categoria: 'pele' },
  { arquivo: 'intradermoterapia-capilar', nome: 'Intradermoterapia capilar', categoria: 'capilar' },
  { arquivo: 'intradermoterapia-capilar-2', nome: 'Intradermoterapia capilar', categoria: 'capilar' },
  { arquivo: 'preenchimento-gluteo', nome: 'Preenchimento de glúteo', categoria: 'corporal' },
];
