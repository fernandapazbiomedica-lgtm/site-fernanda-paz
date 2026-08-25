import type { Caso } from '@/components/AntesDepois';

/**
 * Mapa de imagens por procedimento.
 *
 * A unidade aqui é o CASO, não o arquivo. Um caso de preenchimento labial com
 * foto de antes e foto de depois é uma entrada só — o componente AntesDepois
 * monta as duas na mesma moldura com a alça de arrastar. Duas fotos do mesmo
 * caso nunca viram dois cards soltos na grade.
 *
 * Dois formatos de caso:
 *   { antes, depois }  — arquivos separados, mesmo enquadramento → comparador
 *   { composto }       — antes/depois já montados num arquivo → imagem inteira
 *
 * Página sem caso não renderiza a seção de resultados, em vez de mostrar
 * placeholder.
 */

const MACRO: Record<string, string> = {
  facial: '/images/cat-facial.jpg',
  corporal: '/images/cat-corporal.jpg',
  pele: '/images/cat-pele.jpg',
  capilar: '/images/cat-capilar.jpg',
  vascular: '/images/cat-vascular.jpg',
  'bem-estar': '/images/cat-bem-estar.jpg',
};

/** todos os casos com autorização de uso, na ordem em que aparecem na galeria */
export const CASOS_GALERIA: Caso[] = [
  {
    nome: 'Preenchimento labial',
    categoria: 'facial',
    antes: 'preenchimento-labial-1-antes',
    depois: 'preenchimento-labial-1-depois',
  },
  {
    nome: 'Preenchimento labial',
    categoria: 'facial',
    antes: 'preenchimento-labial-2-antes',
    depois: 'preenchimento-labial-2-depois',
  },
  { nome: 'Harmonização facial', categoria: 'facial', composto: 'harmonizacao-facial' },
  { nome: 'Perfiloplastia', categoria: 'facial', composto: 'harmonizacao-facial-2' },
  {
    nome: 'Toxina botulínica com fios de PDO',
    categoria: 'facial',
    composto: 'toxina-fios-pdo',
  },
  { nome: 'Toxina botulínica', categoria: 'facial', composto: 'toxina-fios-pdo-2' },
  { nome: 'Toxina botulínica', categoria: 'facial', composto: 'toxina-botulinica' },
  { nome: 'Rinomodelação', categoria: 'facial', composto: 'rinomodelacao' },
  { nome: 'Cicatrizes de acne', categoria: 'facial', composto: 'cicatrizes-de-acne' },
  { nome: 'Lipo enzimática', categoria: 'corporal', composto: 'lipo-enzimatica' },
  { nome: 'Preenchimento de glúteo', categoria: 'corporal', composto: 'preenchimento-gluteo' },
  { nome: 'Preenchimento de glúteo', categoria: 'corporal', composto: 'preenchimento-gluteo-2' },
  { nome: 'Estrias', categoria: 'pele', composto: 'estrias' },
  { nome: 'Estrias e flacidez', categoria: 'pele', composto: 'estrias-flacidez' },
  { nome: 'Rejuvenescimento de mãos', categoria: 'pele', composto: 'rejuvenescimento-maos' },
  { nome: 'Rejuvenescimento de mãos', categoria: 'pele', composto: 'rejuvenescimento-maos-2' },
  {
    nome: 'Intradermoterapia capilar',
    categoria: 'capilar',
    composto: 'intradermoterapia-capilar',
  },
  {
    nome: 'Intradermoterapia capilar',
    categoria: 'capilar',
    composto: 'intradermoterapia-capilar-2',
  },
];

/** quais casos da galeria aparecem em cada procedimento, por índice */
const POR_PROCEDIMENTO: Record<string, number[]> = {
  'preenchimento-labial': [0, 1],
  'harmonizacao-facial': [2, 3, 0],
  perfiloplastia: [3, 2],
  rinomodelacao: [7, 3],
  'toxina-botulinica': [4, 5, 6],
  'fios-de-pdo': [4, 5],
  'cicatrizes-de-acne': [8],
  'lipo-enzimatica': [9],
  gluteo: [10, 11],
  'preenchimento-de-gluteo': [10, 11],
  estrias: [12, 13],
  flacidez: [13, 12],
  rejuvenescimento: [14, 15],
  manchas: [15],
  'intradermoterapia-capilar': [16, 17],
  'microagulhamento-capilar': [17],
  'queda-capilar': [16, 17],
  'calvicie-inicial': [16],
  alopecias: [17],
};

/** casos daquele procedimento, prontos para o componente AntesDepois */
export function casosDoProcedimento(slug: string): Caso[] {
  return (POR_PROCEDIMENTO[slug] ?? []).map((i) => CASOS_GALERIA[i]).filter(Boolean);
}

/** imagem de abertura da página do procedimento */
export function imagemProcedimento(slug: string, categoria: string): string {
  const caso = casosDoProcedimento(slug)[0];
  const arquivo = caso?.composto ?? caso?.depois;
  if (arquivo) return `/images/resultados/${arquivo}.jpg`;
  return MACRO[categoria] ?? MACRO.facial;
}
