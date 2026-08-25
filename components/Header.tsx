'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CATEGORIAS, porCategoria } from '@/lib/procedimentos';
import { SITE, wa, MSG } from '@/lib/site';

const LINKS = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'A Dra.' },
  { href: '/procedimentos', label: 'Procedimentos', painel: true },
  { href: '/resultados', label: 'Resultados' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  const [painel, setPainel] = useState(false);
  const [menu, setMenu] = useState(false);
  const [solido, setSolido] = useState(false);
  const pathname = usePathname();

  /** rotas cujo topo é escuro — o header precisa inverter enquanto não rolou */
  const TOPO_ESCURO = ['/', '/resultados'];
  const invertido = TOPO_ESCURO.includes(pathname) && !solido && !menu;

  useEffect(() => {
    const onScroll = () => setSolido(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
  }, [menu]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ease-suave ${
        solido || menu ? 'bg-papel/95 backdrop-blur border-b border-linha' : 'bg-transparent'
      }`}
      onMouseLeave={() => setPainel(false)}
    >
      <div className="wrap flex items-center gap-8 py-5">
        <Link
          href="/"
          className={`display text-xl tracking-tight shrink-0 transition-colors ${invertido ? 'text-white' : ''}`}
          onClick={() => setMenu(false)}
        >
          {SITE.nome}
        </Link>

        {/* desktop */}
        <nav className="ml-auto hidden lg:flex items-center gap-7">
          {LINKS.slice(1).map((l) =>
            l.painel ? (
              <button
                key={l.href}
                onMouseEnter={() => setPainel(true)}
                onClick={() => setPainel((v) => !v)}
                className={`rotulo transition-colors flex items-center gap-1.5 ${
                  invertido ? 'text-white/75 hover:text-white' : 'text-tinta-2 hover:text-roxo'
                }`}
                aria-expanded={painel}
              >
                {l.label} <span className="spark text-[9px]">✦</span>
              </button>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onMouseEnter={() => setPainel(false)}
                className={`rotulo transition-colors ${
                  invertido ? 'text-white/75 hover:text-white' : 'text-tinta-2 hover:text-roxo'
                }`}
              >
                {l.label}
              </Link>
            )
          )}
          <a
            href={wa(MSG.geral)}
            target="_blank"
            rel="noopener"
            className={invertido ? 'btn bg-white text-ameixa hover:bg-malva' : 'btn'}
          >
            Agendar avaliação
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          className="ml-auto lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMenu((v) => !v)}
          aria-label={menu ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menu}
        >
          <span className={`block h-[1.5px] w-6 transition-transform duration-300 ${invertido ? 'bg-white' : 'bg-tinta'} ${menu ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block h-[1.5px] w-6 transition-opacity duration-300 ${invertido ? 'bg-white' : 'bg-tinta'} ${menu ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] w-6 transition-transform duration-300 ${invertido ? 'bg-white' : 'bg-tinta'} ${menu ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* painel de procedimentos — desktop */}
      {painel && (
        <div className="hidden lg:block absolute inset-x-0 top-full bg-papel border-y border-linha shadow-[0_24px_48px_-24px_rgba(59,29,82,0.18)]">
          <div className="wrap grid grid-cols-4 gap-x-8 gap-y-10 py-12">
            {CATEGORIAS.map((c) => (
              <div key={c.slug}>
                <Link href={`/procedimentos/${c.slug}`} className="display text-2xl hover:text-roxo transition-colors block mb-1">
                  {c.nome}
                </Link>
                <p className="text-[13px] italic text-tinta-3 mb-4">{c.conceito}</p>
                <ul className="space-y-1.5">
                  {porCategoria(c.slug).slice(0, 8).map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/procedimentos/${c.slug}/${p.slug}`}
                        className="text-[14px] text-tinta-2 hover:text-roxo transition-colors"
                        onClick={() => setPainel(false)}
                      >
                        {p.nome}
                      </Link>
                    </li>
                  ))}
                  {porCategoria(c.slug).length > 8 && (
                    <li>
                      <Link href={`/procedimentos/${c.slug}`} className="text-[13px] text-roxo" onClick={() => setPainel(false)}>
                        + {porCategoria(c.slug).length - 8} outros
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* menu mobile */}
      {menu && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-papel overflow-y-auto">
          <div className="wrap py-8">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenu(false)}
                className="display text-3xl block py-3 border-b border-linha"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-8 space-y-5">
              {CATEGORIAS.map((c) => (
                <details key={c.slug} className="border-b border-linha pb-4">
                  <summary className="rotulo cursor-pointer list-none flex justify-between items-center py-1">
                    {c.nome} <span className="spark">✦</span>
                  </summary>
                  <ul className="mt-3 space-y-2 pl-1">
                    {porCategoria(c.slug).map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/procedimentos/${c.slug}/${p.slug}`}
                          onClick={() => setMenu(false)}
                          className="text-[15px] text-tinta-2"
                        >
                          {p.nome}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
            <a href={wa(MSG.geral)} target="_blank" rel="noopener" className="btn w-full justify-center mt-8">
              Agendar avaliação
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
