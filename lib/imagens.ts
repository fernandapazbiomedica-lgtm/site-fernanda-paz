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
 * Cada caso tem um `id`, e é por ele que os procedimentos referenciam os casos.
 * Antes isso era por posição na lista, o que quebrava tudo ao remover um caso do
 * meio: os índices seguintes escorregavam e os procedimentos passavam a mostrar
 * o caso errado, sem erro nenhum aparecer.
 *
 * Página sem caso não renderiza a seção de resultados, em vez de mostrar
 * placeholder.
 *
 * Regra de entrada: só entra aqui imagem de paciente da própria clínica, com
 * autorização de uso assinada e sem marca d'água de terceiros.
 */

const MACRO: Record<string, string> = {
  facial: '/images/cat-facial.jpg',
  corporal: '/images/cat-corporal.jpg',
  pele: '/images/cat-pele.jpg',
  capilar: '/images/cat-capilar.jpg',
  vascular: '/images/cat-vascular.jpg',
  'bem-estar': '/images/cat-bem-estar.jpg',
};

type CasoIdentificado = Caso & { id: string };

/** todos os casos autorizados, na ordem em que aparecem na galeria */
export const CASOS_GALERIA: CasoIdentificado[] = [
  {
    id: 'labial-1',
    nome: 'Preenchimento labial',
    categoria: 'facial',
    antes: 'preenchimento-labial-1-antes',
    depois: 'preenchimento-labial-1-depois',
  },
  {
    id: 'labial-2',
    nome: 'Preenchimento labial',
    categoria: 'facial',
    antes: 'preenchimento-labial-2-antes',
    depois: 'preenchimento-labial-2-depois',
  },
  {
    id: 'harmonizacao-1',
    nome: 'Harmonização facial',
    categoria: 'facial',
    composto: 'harmonizacao-facial',
  },
  {
    id: 'perfiloplastia',
    nome: 'Perfiloplastia',
    categoria: 'facial',
    composto: 'harmonizacao-facial-2',
  },
  {
    id: 'toxina-pdo-1',
    nome: 'Toxina botulínica com fios de PDO',
    categoria: 'facial',
    composto: 'toxina-fios-pdo',
  },
  {
    id: 'toxina-pdo-2',
    nome: 'Toxina botulínica',
    categoria: 'facial',
    composto: 'toxina-fios-pdo-2',
  },
  {
    id: 'toxina',
    nome: 'Toxina botulínica',
    categoria: 'facial',
    composto: 'toxina-botulinica',
  },
  { id: 'rinomodelacao', nome: 'Rinomodelação', categoria: 'facial', composto: 'rinomodelacao' },
  {
    id: 'cicatrizes-acne',
    nome: 'Cicatrizes de acne',
    categoria: 'facial',
    composto: 'cicatrizes-de-acne',
  },
  { id: 'lipo', nome: 'Lipo enzimática', categoria: 'corporal', composto: 'lipo-enzimatica' },
  {
    id: 'gluteo-1',
    nome: 'Preenchimento de glúteo',
    categoria: 'corporal',
    composto: 'preenchimento-gluteo',
  },
  {
    id: 'gluteo-2',
    nome: 'Preenchimento de glúteo',
    categoria: 'corporal',
    composto: 'preenchimento-gluteo-2',
  },
  { id: 'estrias', nome: 'Estrias', categoria: 'pele', composto: 'estrias' },
  {
    id: 'estrias-flacidez',
    nome: 'Estrias e flacidez',
    categoria: 'pele',
    composto: 'estrias-flacidez',
  },
  {
    id: 'maos',
    nome: 'Rejuvenescimento de mãos',
    categoria: 'pele',
    composto: 'rejuvenescimento-maos',
  },
  {
    id: 'capilar-1',
    nome: 'Intradermoterapia capilar',
    categoria: 'capilar',
    composto: 'intradermoterapia-capilar',
  },
  {
    id: 'capilar-2',
    nome: 'Intradermoterapia capilar',
    categoria: 'capilar',
    composto: 'intradermoterapia-capilar-2',
  },
];

/** quais casos aparecem em cada procedimento, por id */
const POR_PROCEDIMENTO: Record<string, string[]> = {
  'preenchimento-labial': ['labial-1', 'labial-2'],
  'harmonizacao-facial': ['harmonizacao-1', 'perfiloplastia', 'labial-1'],
  perfiloplastia: ['perfiloplastia', 'harmonizacao-1'],
  rinomodelacao: ['rinomodelacao', 'perfiloplastia'],
  'toxina-botulinica': ['toxina-pdo-1', 'toxina-pdo-2', 'toxina'],
  'fios-de-pdo': ['toxina-pdo-1', 'toxina-pdo-2'],
  'cicatrizes-de-acne': ['cicatrizes-acne'],
  'lipo-enzimatica': ['lipo'],
  gluteo: ['gluteo-1', 'gluteo-2'],
  'preenchimento-de-gluteo': ['gluteo-1', 'gluteo-2'],
  estrias: ['estrias', 'estrias-flacidez'],
  flacidez: ['estrias-flacidez', 'estrias'],
  rejuvenescimento: ['maos'],
  manchas: ['maos'],
  'intradermoterapia-capilar': ['capilar-1', 'capilar-2'],
  'microagulhamento-capilar': ['capilar-2'],
  'queda-capilar': ['capilar-1', 'capilar-2'],
  'calvicie-inicial': ['capilar-1'],
  alopecias: ['capilar-2'],
};

/** casos daquele procedimento, prontos para o componente AntesDepois */
export function casosDoProcedimento(slug: string): Caso[] {
  return (POR_PROCEDIMENTO[slug] ?? [])
    .map((id) => CASOS_GALERIA.find((c) => c.id === id))
    .filter((c): c is CasoIdentificado => Boolean(c));
}

/** imagem de abertura da página do procedimento */
export function imagemProcedimento(slug: string, categoria: string): string {
  const caso = casosDoProcedimento(slug)[0];
  const arquivo = caso?.composto ?? caso?.depois;
  if (arquivo) return `/images/resultados/${arquivo}.jpg`;
  return MACRO[categoria] ?? MACRO.facial;
}
