/**
 * Reels da clínica.
 *
 * O vídeo é o material mais forte que a clínica produz — é o que roda no
 * Instagram e é o que mostra o procedimento acontecendo, não só o resultado
 * parado. Por isso ele abre a home e aparece na página de resultados.
 *
 * A ordem importa: o primeiro é o que abre o hero, então ele é a primeira
 * impressão da clínica. Os arquivos vivem em /public/videos, convertidos para
 * MP4 720p com faststart (começa a tocar antes de terminar de baixar) e com um
 * poster de mesmo nome, para não piscar preto no carregamento.
 */

export type Reel = {
  arquivo: string;
  titulo: string;
  categoria: string;
};

export const REELS: Reel[] = [
  {
    arquivo: 'reel-harmonizacao-facial',
    titulo: 'Harmonização facial',
    categoria: 'facial',
  },
  {
    arquivo: 'reel-labial-antes-depois',
    titulo: 'Preenchimento labial',
    categoria: 'facial',
  },
  {
    arquivo: 'reel-perfiloplastia',
    titulo: 'Perfiloplastia',
    categoria: 'facial',
  },
  {
    arquivo: 'reel-harmonizacao-facial-2',
    titulo: 'Harmonização facial',
    categoria: 'facial',
  },
  {
    arquivo: 'reel-labial-trend',
    titulo: 'Preenchimento labial',
    categoria: 'facial',
  },
  {
    arquivo: 'reel-clinica',
    titulo: 'Dia a dia da clínica',
    categoria: 'clinica',
  },
];
