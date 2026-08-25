'use client';

import { useEffect, useRef, useState } from 'react';
import { REELS } from '@/lib/videos';

/**
 * HeroReel — o vídeo que abre a home.
 *
 * Roda os reels em sequência: quando um termina, entra o próximo, com um
 * crossfade curto. A ideia é que a primeira coisa que a pessoa vê seja o
 * trabalho acontecendo, e não um retrato parado.
 *
 * Cuidados:
 *   - entra mudo, porque navegador nenhum deixa tocar som sem gesto — e
 *     porque som automático em site de clínica é agressivo;
 *   - poster em cada reel, para não piscar preto enquanto carrega;
 *   - quem tem "reduzir movimento" ligado no sistema recebe só o poster,
 *     sem vídeo rodando.
 */

export function HeroReel({ className = '' }: { className?: string }) {
  const [atual, setAtual] = useState(0);
  const [comSom, setComSom] = useState(false);
  const [estatico, setEstatico] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  const reel = REELS[atual];

  useEffect(() => {
    setEstatico(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const v = video.current;
    if (!v || estatico) return;
    v.muted = !comSom;
    void v.play().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [atual, estatico]);

  const proximo = () => setAtual((i) => (i + 1) % REELS.length);

  const alternarSom = () => {
    const v = video.current;
    if (!v) return;
    v.muted = comSom;
    setComSom(!comSom);
    void v.play().catch(() => {});
  };

  return (
    <div className={`relative overflow-hidden bg-white/[0.04] ${className}`}>
      {estatico ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/videos/${reel.arquivo}-poster.jpg`}
          alt={reel.titulo}
          className="h-full w-full object-cover"
        />
      ) : (
        <video
          key={reel.arquivo}
          ref={video}
          src={`/videos/${reel.arquivo}.mp4`}
          poster={`/videos/${reel.arquivo}-poster.jpg`}
          className="h-full w-full object-cover animate-surgir"
          muted={!comSom}
          playsInline
          autoPlay
          preload="auto"
          onEnded={proximo}
        />
      )}

      {/* véu inferior — dá contraste para os controles sem escurecer o rosto */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ameixa/70 to-transparent pointer-events-none" />

      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
        <div>
          <p className="rotulo text-white/70">Em movimento</p>
          <p className="display text-[19px] text-white mt-1">{reel.titulo}</p>
        </div>

        <button
          type="button"
          onClick={alternarSom}
          aria-label={comSom ? 'Desligar som' : 'Ligar som'}
          className="shrink-0 h-10 w-10 rounded-full bg-black/45 backdrop-blur grid place-items-center text-white transition hover:bg-black/70"
        >
          {comSom ? (
            <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 6v4h2.5L9 13V3L5.5 6H3z" fill="currentColor" />
              <path
                d="M11 6c.6.5.6 3.5 0 4"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 6v4h2.5L9 13V3L5.5 6H3z" fill="currentColor" />
              <path
                d="M11 6l3 4M14 6l-3 4"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* marcadores de qual reel está tocando */}
      <div className="absolute top-4 left-4 flex gap-1.5">
        {REELS.map((r, i) => (
          <button
            key={r.arquivo}
            type="button"
            onClick={() => setAtual(i)}
            aria-label={`Ver ${r.titulo}`}
            className={`h-1 rounded-full transition-all ${
              i === atual ? 'w-7 bg-white' : 'w-3 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroReel;
