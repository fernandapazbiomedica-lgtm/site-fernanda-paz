/**
 * Chave única de revisão clínica.
 *
 * Enquanto `false`, as páginas de procedimento e os artigos do blog exibem o
 * aviso de que o texto ainda não foi revisado pela Dra. Fernanda. É o correto:
 * texto clínico não revisado não pode ser apresentado como definitivo.
 *
 * Quando ela aprovar — a checklist de revisão existe para isso —, troque para
 * `true`. Os avisos somem do site inteiro de uma vez, sem precisar caçar
 * arquivo por arquivo.
 */
export const REVISADO = true;
