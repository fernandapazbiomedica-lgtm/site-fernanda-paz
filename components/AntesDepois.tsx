'use client';

import Image from 'next/image';
import { useRef, useState, useCallback } from 'react';

/**
 * AntesDepois — um caso, uma moldura.
 *
 * Dois formatos, mesma casca visual:
 *
 *   par      — antes e depois são arquivos separados. Renderiza o comparador
 *              de arrastar: as duas fotos ocupam exatamente o mesmo quadro e a
 *              alça revela uma sobre a outra. É o formato correto quando as
 *              fotos são do mesmo enquadramento.
 *   composto — antes e depois já vêm montados num arquivo só (a arte do
 *              Instagram). Aí não há o que comparar: mostra a imagem inteira.
 *
 * Regra que motivou o componente: duas fotos do mesmo caso nunca aparecem como
 * dois cards soltos na grade. Mesmo caso, mesma moldura.
 */

export type Caso = {
  nome: string;
  categoria: string;
  /** arquivos sem extensão, dentro de /images/resultados/ */
  antes?: string;
  depois?: string;
  composto?: string;
};

export function AntesDepois({
  caso,
  claro = false,
  className = 'aspect-[4/5]',
}: {
  caso: Caso;
  /** true sobre fundo escuro */
  claro?: boolean;
  className?: string;
}) {
  const src = (f: string) => `/images/resultados/${f}.jpg`;
  const fundo = claro ? 'bg-white/[0.04]' : 'bg-malva-nevoa';

  if (caso.composto || !caso.antes || !caso.depois) {
    const arquivo = caso.composto ?? caso.antes ?? caso.depois!;
    return (
      <figure>
        <div className={`relative overflow-hidden ${fundo} ${className}`}>
          <Image
            src={src(arquivo)}
            alt={`Antes e depois: ${caso.nome}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
            className="object-contain"
          />
        </div>
        <figcaption className="display text-[21px] mt-5">{caso.nome}</figcaption>
      </figure>
    );
  }

  return <Comparador caso={caso} claro={claro} className={className} fundo={fundo} />;
}

function Comparador({
  caso,
  claro,
  className,
  fundo,
}: {
  caso: Caso;
  claro: boolean;
  className: string;
  fundo: string;
}) {
  const [pos, setPos] = useState(50);
  const quadro = useRef<HTMLDivElement>(null);
  const arrastando = useRef(false);
  const src = (f: string) => `/images/resultados/${f}.jpg`;

  const mover = useCallback((clientX: number) => {
    const el = quadro.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  const inicio = () => {
    arrastando.current = true;
  };
  const fim = () => {
    arrastando.current = false;
  };

  return (
    <figure>
      <div
        ref={quadro}
        className={`relative overflow-hidden select-none touch-pan-y ${fundo} ${className}`}
        onMouseDown={(e) => {
          inicio();
          mover(e.clientX);
        }}
        onMouseMove={(e) => arrastando.current && mover(e.clientX)}
        onMouseUp={fim}
        onMouseLeave={fim}
        onTouchStart={(e) => {
          inicio();
          mover(e.touches[0].clientX);
        }}
        onTouchMove={(e) => mover(e.touches[0].clientX)}
        onTouchEnd={fim}
      >
        {/* depois — camada de baixo, sempre inteira */}
        <Image
          src={src(caso.depois!)}
          alt={`Depois: ${caso.nome}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
          className="object-contain"
        />

        {/* antes — camada de cima, recortada pela alça */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          aria-hidden
        >
          <Image
            src={src(caso.antes!)}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
            className="object-contain"
          />
        </div>

        {/* rótulos */}
        <span
          className={`absolute top-3 left-3 rotulo px-2.5 py-1 backdrop-blur transition-opacity ${
            pos < 14 ? 'opacity-0' : 'opacity-100'
          } ${claro ? 'bg-black/45 text-white' : 'bg-ameixa/80 text-white'}`}
        >
          Antes
        </span>
        <span
          className={`absolute top-3 right-3 rotulo px-2.5 py-1 backdrop-blur transition-opacity ${
            pos > 86 ? 'opacity-0' : 'opacity-100'
          } ${claro ? 'bg-black/45 text-white' : 'bg-ameixa/80 text-white'}`}
        >
          Depois
        </span>

        {/* alça */}
        <div
          className="absolute inset-y-0 w-px bg-white/90 pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg grid place-items-center">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
              <path d="M6 1L1 6l5 5M12 1l5 5-5 5" stroke="#3B2233" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* faixa de instrução — some assim que a pessoa mexe */}
        <span
          className={`absolute bottom-3 left-1/2 -translate-x-1/2 rotulo px-3 py-1.5 rounded-full backdrop-blur transition-opacity duration-500 ${
            pos === 50 ? 'opacity-100' : 'opacity-0'
          } ${claro ? 'bg-black/45 text-white' : 'bg-ameixa/80 text-white'}`}
        >
          Arraste
        </span>
      </div>

      <figcaption className="display text-[21px] mt-5">{caso.nome}</figcaption>
    </figure>
  );
}

export default AntesDepois;
