import Image from 'next/image';

/**
 * CapaArtigo — o quadro 4:5 do topo da matéria.
 *
 * Formato único em todo o blog: 4:5 (retrato). É o formato que sai da câmera do
 * celular em pé e o que a clínica já produz para o Instagram, então não obriga
 * ninguém a caçar foto panorâmica que não existe.
 *
 * Sem foto atribuída, entra uma capa abstrata gerada a partir do título —
 * sempre a mesma para a mesma matéria, e visivelmente diferente entre matérias:
 * quatro composições distintas e quatro tonalidades, dentro da paleta da marca.
 * Assim a lista do blog não vira quatorze manchas iguais enquanto as fotos reais
 * não chegam.
 */

/** [fundo, acento, claro] — todas dentro da paleta ameixa/roxo/malva */
const TONS: [string, string, string][] = [
  ['#2B1626', '#8B0FC4', '#EBD9F2'],
  ['#3B2233', '#A855F7', '#F3E4EE'],
  ['#241A2E', '#6D28D9', '#E4DAF5'],
  ['#3A1F30', '#C026D3', '#F6E2F1'],
];

/**
 * Dois números estáveis e independentes a partir do texto. Precisam ser
 * independentes: com um só, tom e composição andam juntos e várias matérias
 * caem no mesmo desenho.
 */
function semente(texto: string, base: number) {
  let n = base;
  for (let i = 0; i < texto.length; i++) n = (n * base + texto.charCodeAt(i) * 977) % 1000003;
  return n;
}

export function CapaArtigo({
  imagem,
  titulo,
  className = 'aspect-[4/5] w-full',
  prioridade = false,
}: {
  imagem?: string | null;
  titulo: string;
  className?: string;
  prioridade?: boolean;
}) {
  if (imagem) {
    return (
      <div className={`relative overflow-hidden bg-malva-nevoa ${className}`}>
        <Image
          src={imagem}
          alt={titulo}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority={prioridade}
          className="object-cover"
        />
      </div>
    );
  }

  const s = semente(titulo, 31);
  const [fundo, acento, claro] = TONS[s % 4];
  const composicao = semente(titulo, 131) % 4;
  const id = `c${s}`;

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="presentation"
      >
        <defs>
          <linearGradient id={`${id}g`} x1="0" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor={fundo} />
            <stop offset="100%" stopColor={acento} stopOpacity="0.42" />
          </linearGradient>
          <radialGradient id={`${id}r`}>
            <stop offset="0%" stopColor={claro} stopOpacity="0.3" />
            <stop offset="100%" stopColor={claro} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="400" height="500" fill={`url(#${id}g)`} />

        {/* 0 — arcos concêntricos, eco do gesto da marca */}
        {composicao === 0 && (
          <g>
            <circle cx="300" cy="120" r="200" fill={`url(#${id}r)`} />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle
                key={i}
                cx="90"
                cy="420"
                r={70 + i * 62}
                fill="none"
                stroke={claro}
                strokeOpacity={0.3 - i * 0.045}
                strokeWidth="1.2"
              />
            ))}
          </g>
        )}

        {/* 1 — faixas diagonais finas */}
        {composicao === 1 && (
          <g>
            <circle cx="110" cy="150" r="210" fill={`url(#${id}r)`} />
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={i}
                x1={-120 + i * 70}
                y1="520"
                x2={60 + i * 70}
                y2="-20"
                stroke={claro}
                strokeOpacity={0.06 + (i % 3) * 0.07}
                strokeWidth={i % 3 === 0 ? 2.5 : 1}
              />
            ))}
          </g>
        )}

        {/* 2 — curva única, ampla */}
        {composicao === 2 && (
          <g>
            <circle cx="330" cy="400" r="230" fill={`url(#${id}r)`} />
            <path
              d="M -40 380 C 120 250, 240 300, 440 140"
              fill="none"
              stroke={claro}
              strokeOpacity="0.34"
              strokeWidth="1.6"
            />
            <path
              d="M -40 430 C 120 300, 240 350, 440 190"
              fill="none"
              stroke={claro}
              strokeOpacity="0.18"
              strokeWidth="1.2"
            />
            <path
              d="M -40 480 C 120 350, 240 400, 440 240"
              fill="none"
              stroke={claro}
              strokeOpacity="0.1"
              strokeWidth="1"
            />
          </g>
        )}

        {/* 3 — malha de pontos com clareira */}
        {composicao === 3 && (
          <g>
            <circle cx="200" cy="250" r="240" fill={`url(#${id}r)`} />
            {Array.from({ length: 10 }).map((_, l) =>
              Array.from({ length: 8 }).map((_, c) => {
                const x = 26 + c * 50;
                const y = 30 + l * 50;
                const d = Math.hypot(x - 200, y - 250);
                if (d < 110) return null;
                return (
                  <circle
                    key={`${l}-${c}`}
                    cx={x}
                    cy={y}
                    r={1.8}
                    fill={claro}
                    fillOpacity={Math.min(0.42, d / 900)}
                  />
                );
              }),
            )}
          </g>
        )}
      </svg>
    </div>
  );
}

export default CapaArtigo;
