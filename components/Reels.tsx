'use client';

import { useEffect, useRef, useState } from 'react';
import { REELS, type Reel } from '@/lib/videos';

/**
 * Reels — a trilha de vídeos verticais.
 *
 * Cada vídeo entra silencioso e em loop, como no feed, e só toca quando entra
 * na tela: um vídeo fora de vista não gasta banda de quem está no 4G. O som
 * fica no controle da pessoa — nada toca áudio sozinho.
 */

export function Reels({ claro = false }: { claro?: boolean }) {
  return (
    <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory">
      {REELS.map((r) => (
        <ReelCard key={r.arquivo} reel={r} claro={claro} />
      ))}
    </div>
  );
}

function ReelCard({ reel, claro }: { reel: Reel; claro: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [comSom, setComSom] = useState(false);

  /* toca só enquanto está visível */
  useEffect(() => {
    const v = video.current;
    if (!v) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          void v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.5 },
    );

    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  const alternarSom = () => {
    const v = video.current;
    if (!v) return;
    v.muted = comSom;
    setComSom(!comSom);
    if (v.paused) void v.play().catch(() => {});
  };

  return (
    <figure className="shrink-0 w-[248px] md:w-[280px] snap-start">
      <div
        className={`relative aspect-[9/16] overflow-hidden ${
          claro ? 'bg-white/[0.04]' : 'bg-malva-nevoa'
        }`}
      >
        <video
          ref={video}
          src={`/videos/${reel.arquivo}.mp4`}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
        />
        <button
          type="button"
          onClick={alternarSom}
          aria-label={comSom ? 'Desligar som' : 'Ligar som'}
          className="absolute bottom-3 right-3 h-9 w-9 rounded-full bg-black/50 backdrop-blur grid place-items-center text-white transition hover:bg-black/70"
        >
          {comSom ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 6v4h2.5L9 13V3L5.5 6H3z" fill="currentColor" />
              <path
                d="M11 6c.6.5.6 3.5 0 4"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
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
      <figcaption className={`display text-[18px] mt-4 ${claro ? 'text-white' : ''}`}>
        {reel.titulo}
      </figcaption>
    </figure>
  );
}

export default Reels;
