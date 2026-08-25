import Link from 'next/link';
import { CATEGORIAS, porCategoria } from '@/lib/procedimentos';
import { SITE, wa, MSG } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-ameixa text-white/80">
      <div className="wrap py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_2fr]">
          {/* marca + contato */}
          <div>
            <p className="display text-3xl text-white leading-tight">
              {SITE.nome}
            </p>
            <p className="rotulo text-white/45 mt-3">
              {SITE.papel} · {SITE.crbm}
            </p>
            <p className="mt-6 text-white/70 text-[15px] max-w-xs">
              Atendimento em {SITE.cidade}, {SITE.uf}. Cada plano começa por uma avaliação individual.
            </p>
            <a href={wa(MSG.geral)} target="_blank" rel="noopener" className="btn mt-8 bg-white text-ameixa hover:bg-malva">
              WhatsApp {SITE.whatsapp.exibicao}
            </a>
            <div className="mt-8 flex gap-6">
              <a href={SITE.instagram.url} target="_blank" rel="noopener" className="rotulo text-white/60 hover:text-white transition-colors">
                Instagram
              </a>
              <Link href="/contato" className="rotulo text-white/60 hover:text-white transition-colors">
                Como chegar
              </Link>
            </div>
          </div>

          {/* sitemap por categoria — SEO interno */}
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIAS.map((c) => (
              <div key={c.slug}>
                <Link href={`/procedimentos/${c.slug}`} className="rotulo text-white block mb-3 hover:text-malva transition-colors">
                  {c.nome}
                </Link>
                <ul className="space-y-1.5">
                  {porCategoria(c.slug).map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/procedimentos/${c.slug}/${p.slug}`}
                        className="text-[13.5px] text-white/55 hover:text-white transition-colors"
                      >
                        {p.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="rotulo text-white mb-3">Institucional</p>
              <ul className="space-y-1.5">
                {[
                  ['/sobre', 'A Dra. Fernanda'],
                  ['/procedimentos', 'Todos os procedimentos'],
                  ['/resultados', 'Resultados'],
                  ['/blog', 'Blog'],
                  ['/contato', 'Contato e localização'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="text-[13.5px] text-white/55 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/12 pt-8 flex flex-col md:flex-row gap-4 md:items-center justify-between text-[12px] text-white/40">
          <p>
            © {new Date().getFullYear()} {SITE.nome} · {SITE.crbm} · {SITE.cidade}, {SITE.uf}
          </p>
          <p className="max-w-lg md:text-right">
            Os resultados variam de pessoa para pessoa. Todo procedimento depende de avaliação individual prévia.
          </p>
        </div>
      </div>
    </footer>
  );
}
