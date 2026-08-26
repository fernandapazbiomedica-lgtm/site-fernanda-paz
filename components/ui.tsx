'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { SITE, wa, MSG } from '@/lib/site';

/* ——————————————————————————— revelação no scroll */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisivel(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visivel ? 'visivel' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ——————————————————————————— placeholder de imagem pendente */
export function Pendente({
  label,
  nota,
  className = '',
  claro = false,
}: {
  label: string;
  nota?: string;
  className?: string;
  claro?: boolean;
}) {
  const hachura = claro
    ? 'repeating-linear-gradient(-45deg, transparent, transparent 14px, rgba(255,255,255,0.06) 14px, rgba(255,255,255,0.06) 28px)'
    : 'repeating-linear-gradient(-45deg, transparent, transparent 14px, rgba(139,15,196,0.055) 14px, rgba(139,15,196,0.055) 28px)';

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden text-center ${
        claro ? 'bg-white/[0.07] ring-1 ring-inset ring-white/12' : 'bg-malva-nevoa'
      } ${className}`}
      style={{ backgroundImage: hachura }}
    >
      <div className="px-6 py-8">
        <span className={`rotulo px-2.5 py-1 text-[10px] ${claro ? 'bg-white text-ameixa' : 'bg-roxo text-white'}`}>
          Pendente
        </span>
        <p className={`display text-xl mt-4 ${claro ? 'text-white' : 'text-tinta'}`}>{label}</p>
        {nota && <p className={`text-[12.5px] mt-2 ${claro ? 'text-white/60' : 'text-tinta-3'}`}>{nota}</p>}
      </div>
    </div>
  );
}

/* ——————————————————————————— mídia: vídeo mudo em loop + botão de som
   Sem `src`, cai no placeholder <Pendente>. É assim que o site roda hoje.

   Por que o som não liga sozinho no hover: os navegadores só liberam áudio após
   um gesto real (clique/toque). Hover não conta — o Chrome pausa ou ignora. E no
   celular hover não existe. Por isso: autoplay mudo + botão explícito de som. */
export function Media({
  src,
  poster,
  label,
  nota,
  claro = false,
  className = '',
  comSom = true,
}: {
  src?: string;
  poster?: string;
  label: string;
  nota?: string;
  claro?: boolean;
  className?: string;
  comSom?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [mudo, setMudo] = useState(true);
  const [tocando, setTocando] = useState(false);

  // só toca quando entra na tela — economiza banda e bateria
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.play().then(() => setTocando(true)).catch(() => {});
        } else {
          v.pause();
          setTocando(false);
          if (!v.muted) {
            v.muted = true;
            setMudo(true);
          }
        }
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  if (!src) return <Pendente label={label} nota={nota} claro={claro} className={className} />;

  const alternarSom = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMudo(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  return (
    <div className={`relative overflow-hidden bg-malva-nevoa ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        className="h-full w-full object-cover"
      />
      {comSom && (
        <button
          onClick={alternarSom}
          aria-label={mudo ? 'Ativar som' : 'Desativar som'}
          aria-pressed={!mudo}
          className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center
                     bg-black/35 text-white backdrop-blur-sm transition-colors
                     hover:bg-roxo focus-visible:bg-roxo"
        >
          {mudo ? (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4V5Z" />
              <path d="m17 9 4 6M21 9l-4 6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4V5Z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" strokeLinecap="round" />
            </svg>
          )}
        </button>
      )}
      {!tocando && (
        <span className="sr-only" aria-live="polite">
          Vídeo pausado
        </span>
      )}
    </div>
  );
}

/* ——————————————————————————— barra fixa de WhatsApp (mobile) */
export function BarraWhatsApp() {
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={wa(MSG.geral)}
      target="_blank"
      rel="noopener"
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 bg-roxo text-white
        flex items-center justify-center gap-2.5 py-4 rotulo
        transition-transform duration-500 ease-suave
        ${visivel ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <span className="spark text-white">✦</span>
      Agendar pelo WhatsApp
    </a>
  );
}

/* ——————————————————————————— faixa de CTA contextual */
export function CtaFaixa({
  pergunta,
  botao,
  mensagem,
  href,
  escuro = false,
}: {
  pergunta: string;
  botao: string;
  mensagem?: string;
  href?: string;
  escuro?: boolean;
}) {
  const destino = href ?? wa(mensagem ?? MSG.duvida);
  const externo = !href;
  return (
    <section className={escuro ? 'bg-ameixa text-white' : 'bg-malva-nevoa'}>
      <div className="wrap py-12 md:py-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        <p className={`display text-d3 flex-1 ${escuro ? 'text-white' : 'text-tinta'}`}>{pergunta}</p>
        {externo ? (
          <a href={destino} target="_blank" rel="noopener" className={escuro ? 'btn-claro shrink-0' : 'btn shrink-0'}>
            {botao}
          </a>
        ) : (
          <Link href={destino} className={escuro ? 'btn-claro shrink-0' : 'btn shrink-0'}>
            {botao}
          </Link>
        )}
      </div>
    </section>
  );
}

/* ——————————————————————————— texto em arco (SVG) */
export function TextoArco({ texto, className = '' }: { texto: string; className?: string }) {
  const id = `arco-${texto.slice(0, 8).replace(/\W/g, '')}`;
  return (
    <svg viewBox="0 0 520 190" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <defs>
        {/* arco raso e largo — cabe frase longa sem estourar as pontas */}
        <path id={id} d="M 20 178 A 250 250 0 0 1 500 178" fill="none" />
      </defs>
      <text
        className="fill-roxo"
        style={{ fontSize: 15, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}
      >
        <textPath href={`#${id}`} startOffset="50%" textAnchor="middle" lengthAdjust="spacing">
          {texto}
        </textPath>
      </text>
    </svg>
  );
}

/* ——————————————————————————— breadcrumbs */
export function Trilha({
  itens,
  claro = false,
}: {
  itens: { href?: string; label: string }[];
  claro?: boolean;
}) {
  return (
    <nav
      aria-label="Você está em"
      className={`flex flex-wrap items-center gap-2 text-[12px] ${claro ? 'text-white/50' : 'text-tinta-3'}`}
    >
      {itens.map((i, n) => (
        <span key={n} className="flex items-center gap-2">
          {n > 0 && <span className={claro ? 'text-white/25' : 'text-linha'}>/</span>}
          {i.href ? (
            <Link href={i.href} className={`transition-colors ${claro ? 'hover:text-white' : 'hover:text-roxo'}`}>
              {i.label}
            </Link>
          ) : (
            <span className={claro ? 'text-white/85' : 'text-tinta-2'}>{i.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ——————————————————————————— aviso legal de resultados */
export function AvisoResultados({ claro = false }: { claro?: boolean }) {
  return (
    <p className={`text-[12px] leading-relaxed max-w-lg ${claro ? 'text-white/65' : 'text-tinta-3'}`}>
      Imagens meramente ilustrativas. Os resultados variam de acordo com as características individuais de cada
      paciente, o número de sessões e a adesão ao protocolo indicado. Publicação mediante autorização de uso de imagem.
    </p>
  );
}

export { SITE, wa, MSG };
