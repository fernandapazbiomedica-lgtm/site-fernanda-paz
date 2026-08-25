'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

/**
 * HeroFotos — crossfade ambiente no quadro do hero.
 *
 * Por que não é um carrossel: carrossel pede interação (setas, bolinhas) e a
 * estatística é cruel — quase ninguém chega no segundo slide. Aqui não há o que
 * clicar. A imagem troca sozinha, devagar, como respiração de fundo. Quem passa
 * rápido vê o retrato; quem fica vê o trabalho.
 *
 * A primeira imagem carrega com `priority` — é ela que conta como LCP. As outras
 * entram depois, sem competir pelo carregamento inicial.
 *
 * Respeita prefers-reduced-motion: congela na primeira e não troca mais.
 */
export function HeroFotos({
  fotos,
  intervalo = 5200,
  className = '',
}: {
  fotos: { src: string; alt: string }[];
  /** ms em cada imagem */
  intervalo?: number;
  className?: string;
}) {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    if (fotos.length < 2) return;
    const parado = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (parado) return;

    const t = setInterval(() => setAtual((i) => (i + 1) % fotos.length), intervalo);
    return () => clearInterval(t);
  }, [fotos.length, intervalo]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {fotos.map((f, i) => (
        <Image
          key={f.src}
          src={f.src}
          alt={i === 0 ? f.alt : ''}
          aria-hidden={i !== 0}
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          priority={i === 0}
          className={`object-cover transition-opacity duration-[1600ms] ease-suave ${
            i === atual ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

export default HeroFotos;
