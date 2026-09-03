import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTIGOS, acharArtigo } from '@/lib/blog';
import { Reveal, Pendente, CtaFaixa, Trilha } from '@/components/ui';
import { Foto } from '@/components/Foto';
import Pergunta from '@/components/Pergunta';
import { SITE, wa, MSG } from '@/lib/site';
import { REVISADO } from '@/lib/revisao';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTIGOS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = acharArtigo(slug);
  if (!a) return {};
  return {
    title: a.seo.title,
    description: a.seo.description,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: { title: a.seo.title, description: a.seo.description, type: 'article', publishedTime: a.data },
  };
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const a = acharArtigo(slug);
  if (!a) notFound();

  const outros = ARTIGOS.filter((o) => o.slug !== a.slug).slice(0, 2);

  const schemas: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: a.titulo,
      description: a.seo.description,
      datePublished: a.data,
      author: { '@type': 'Person', name: SITE.nome, jobTitle: SITE.papel },
      publisher: { '@type': 'Organization', name: SITE.nome },
      mainEntityOfPage: `${SITE.url}/blog/${a.slug}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
        { '@type': 'ListItem', position: 3, name: a.titulo, item: `${SITE.url}/blog/${a.slug}` },
      ],
    },
  ];
  if (a.faq?.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: a.faq.map((f) => ({
        '@type': 'Question',
        name: f.p,
        acceptedAnswer: { '@type': 'Answer', text: f.r },
      })),
    });
  }

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <article>
        <header className="wrap pt-16 pb-12 md:pt-20">
          <Trilha
            itens={[{ href: '/', label: 'Início' }, { href: '/blog', label: 'Blog' }, { label: a.categoria }]}
          />
          <div className="max-w-3xl mt-10">
            <p className="eyebrow">{a.categoria}</p>
            <h1 className="display text-d1 mt-6">{a.titulo}</h1>
            <p className="text-[19px] text-tinta-2 mt-8 max-w-medida leading-relaxed">{a.resumo}</p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 rotulo text-tinta-3 mt-9 pontilhada pt-5">
              <span>{SITE.nome}</span>
              <span>{SITE.crbm}</span>
              <span>{a.leitura} de leitura</span>
              <time dateTime={a.data}>
                {new Date(a.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
              </time>
            </div>
          </div>
        </header>

        <Foto
          src={
            a.categoria === 'Facial' ? '/images/cat-facial.jpg'
            : a.categoria === 'Corporal' ? '/images/cat-corporal.jpg'
            : a.categoria === 'Capilar' ? '/images/cat-capilar.jpg'
            : '/images/cat-pele.jpg'
          }
          alt={a.titulo}
          className="h-[220px] md:h-[300px] w-full"
          prioridade
        />

        <div className="wrap py-16 md:py-20">
          <div className="grid lg:grid-cols-[1fr_0.42fr] gap-12 lg:gap-20">
            <div className="max-w-[680px]">
              {a.corpo.map((b, i) => {
                if (b.tipo === 'h2')
                  return (
                    <h2 key={i} className="display text-d3 mt-14 mb-5 first:mt-0">
                      {b.texto}
                    </h2>
                  );
                if (b.tipo === 'destaque')
                  return (
                    <p key={i} className="display text-[26px] leading-snug text-roxo my-10 rail">
                      {b.texto}
                    </p>
                  );
                if (b.tipo === 'lista')
                  return (
                    <ul key={i} className="my-7">
                      {b.itens?.map((it, n) => (
                        <li key={n} className={`py-3.5 flex gap-4 items-start ${n > 0 ? 'pontilhada' : ''}`}>
                          <span className="spark text-[11px] mt-2 shrink-0">✦</span>
                          <span className="text-[16.5px] text-tinta-2">{it}</span>
                        </li>
                      ))}
                    </ul>
                  );
                if (b.tipo === 'imagem')
                  return (
                    <figure key={i} className="my-8">
                      <Foto
                        src={b.src || ''}
                        alt={b.alt || 'Imagem do artigo'}
                        className="w-full h-auto rounded-lg"
                      />
                      {b.alt && (
                        <figcaption className="mt-3 text-[14px] text-tinta-3 italic text-center">
                          {b.alt}
                        </figcaption>
                      )}
                    </figure>
                  );
                if (b.tipo === 'produtos')
                  return (
                    <ul key={i} className="my-7">
                      {b.produtos?.map((p, n) => (
                        <li key={n} className={`py-3.5 flex gap-4 items-start ${n > 0 ? 'pontilhada' : ''}`}>
                          <span className="spark text-[11px] mt-2 shrink-0">✦</span>
                          <div className="flex-1">
                            <p className="text-[16.5px] text-tinta-2 font-medium">{p.nome}</p>
                            <p className="text-[14px] text-tinta-3">{p.marca}</p>
                            <p className="text-[14px] text-tinta-2 mt-1">{p.porque}</p>
                            {p.href ? (
                              <a href={p.href} target="_blank" rel="noopener" className="text-roxo font-medium text-[14px] hover:underline mt-2 inline-block">
                                Comprar aqui
                              </a>
                            ) : (
                              <p className="text-[13px] text-tinta-3 italic mt-2">Sem link — procure pelo nome</p>
                            )}
                            <p className="text-[12px] text-tinta-3 mt-2">{p.faixa}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  );
                return (
                  <p key={i} className="text-[17.5px] leading-[1.75] text-tinta-2 mb-6">
                    {b.texto}
                  </p>
                );
              })}

              {!REVISADO && (
              <p className="mt-10 text-[12.5px] text-tinta-3 border-l-2 border-roxo pl-4">
                <span className="pendente-tag mr-2">Pendente</span>
                Conteúdo a ser revisado e aprovado pela Dra. Fernanda antes da publicação.
              </p>
              )}

              {a.faq?.length ? (
                <section className="mt-16">
                  <h2 className="display text-d3 mb-6">Perguntas frequentes</h2>
                  {a.faq.map((f, i) => (
                    <details key={i} className="group py-5 pontilhada">
                      <summary className="display text-[20px] cursor-pointer list-none flex justify-between items-start gap-5">
                        {f.p}
                        <span className="spark text-sm shrink-0 mt-1.5 transition-transform group-open:rotate-45">✦</span>
                      </summary>
                      <p className="text-[15.5px] text-tinta-2 mt-4 max-w-medida">{f.r}</p>
                    </details>
                  ))}
                </section>
              ) : null}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="bg-superficie p-8">
                <p className="display text-[23px] leading-tight">
                  Ainda com dúvida sobre o <em className="italic">seu</em> caso?
                </p>
                <p className="text-[14.5px] text-tinta-2 mt-4">
                  Artigo é informação geral. A conduta certa sai da avaliação individual.
                </p>
                <a href={wa(MSG.duvida)} target="_blank" rel="noopener" className="btn w-full justify-center mt-6">
                  Falar no WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Pergunta artigo={a.titulo} />

      {outros.length > 0 && (
        <section className="wrap pb-24">
          <p className="eyebrow-mute">Continue lendo</p>
          <div className="grid md:grid-cols-2 gap-x-10 mt-6">
            {outros.map((o) => (
              <Link key={o.slug} href={`/blog/${o.slug}`} className="group block py-7 border-t border-linha">
                <p className="eyebrow">{o.categoria}</p>
                <h3 className="display text-[24px] leading-tight mt-3 group-hover:text-roxo transition-colors">
                  {o.titulo}
                </h3>
                <p className="rotulo text-tinta-3 mt-3">{o.leitura}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaFaixa pergunta="Vamos avaliar o seu caso?" botao="Agendar avaliação" mensagem={MSG.geral} />
    </>
  );
}
