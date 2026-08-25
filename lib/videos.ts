/**
 * Reels da clínica.
 *
 * O vídeo é o material mais forte que a clínica produz — é o que roda no
 * Instagram e é o que mostra o procedimento acontecendo, não só o resultado
 * parado. Por isso ele entra na home e na página de resultados, não escondido
 * num canto.
 *
 * Os arquivos vivem em /public/videos, já convertidos para MP4 720p com
 * faststart (o vídeo começa a tocar antes de terminar de baixar).
 */

export type Reel = {
  arquivo: string;
  titulo: string;
  categoria: string;
};

export const REELS: Reel[] = [
  {
    arquivo: 'reel-preenchimento-labial',
    titulo: 'Preenchimento labial',
    categoria: 'facial',
  },
  {
    arquivo: 'reel-harmonizacao-facial',
    titulo: 'Harmonização facial',
    categoria: 'facial',
  },
  {
    arquivo: 'reel-clinica',
    titulo: 'Dia a dia da clínica',
    categoria: 'clinica',
  },
];
