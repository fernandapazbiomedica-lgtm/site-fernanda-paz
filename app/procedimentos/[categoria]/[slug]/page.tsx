import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  PROCEDIMENTOS,
  acharProcedimento,
  acharCategoria,
  porCategoria,
} from '@/lib/procedimentos';
import { Reveal, Pendente, CtaFaixa, Trilha, AvisoResultados } from '@/components/ui';
import { Foto } from '@/components/Foto';
import { imagemProcedimento, casosDoProcedimento } from '@/lib/imagens';
import { AntesDepois } from '@/components/AntesDepois';
import { SITE, wa, MSG } from '@/lib/site';
import { REVISADO } from '@/lib/revisao';

type Props = { params: Promise<{ categoria: string; slug: string }> };

export function generateStaticParams() {
  return PROCEDIMENTOS.map((p) => ({ categoria: p.categoria, slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria, slug } = await params;
  const p = acharProcedimento(categoria, slug);
  if (!p) return {};
  return {
    title: p.seo.title,
    description: p.seo.description,
    alternates: { canonical: `/procedimentos/${categoria}/${slug}` },
    openGraph: { title: p.seo.title, description: p.seo.description, type: 'article' },
  };
}

export default async function ProcedimentoPage({ params }: Props) {
  const { categoria, slug } = await params;
  const p = acharProcedimento(categoria, slug);
  const c = acharCategoria(categoria);
  if (!p || !c) notFound();

  const relacionados = porCategoria(c.slug)
    .filter((r) => r.slug !== p.slug)
    .slice(0, 4);

  const schemas: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Procedimentos', item: `${SITE.url}/procedimentos` },
        { '@type': 'ListItem', position: 3, name: c.nome, item: `${SITE.url}/procedimentos/${c.slug}` },
        { '@type': 'ListItem', position: 4, name: p.nome, item: `${SITE.url}/procedimentos/${c.slug}/${p.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: p.nome,
      description: p.seo.description,
      bodyLocation: c.nome,
    },
  ];
  // FAQPage só onde existe FAQ real
  if (p.faq.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: p.faq.map((f) => ({
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

      {/* cabeçalho editorial */}
      <section className="wrap pt-16 pb-16 md:pt-20">
        <Trilha
          itens={[
            { href: '/', label: 'Início' },
            { href: '/procedimentos', label: 'Procedimentos' },
            { href: `/procedimentos/${c.slug}`, label: c.nome },
            { label: p.nome },
          ]}
        />
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-end mt-10">
          <div>
            <p className="eyebrow">{c.nome}</p>
            <h1 className="display text-d1 mt-6">{p.nome}</h1>
            <p className="display text-d3 italic text-roxo mt-6">{p.conceito}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={wa(MSG.procedimento(p.nome))} target="_blank" rel="noopener" className="btn">
                Tirar dúvidas no WhatsApp
              </a>
              <a href={wa(MSG.geral)} target="_blank" rel="noopener" className="btn-linha">
                Agendar avaliação
              </a>
            </div>
          </div>
          <Foto
            src={imagemProcedimento(p.slug, p.categoria)}
            alt={`${p.nome} no Guarujá, Dra. Fernanda Paz`}
            className="aspect-[4/5] w-full"
            prioridade
          />
        </div>
      </section>

      {/* corpo */}
      <section className="wrap pb-20 md:pb-24">
        <div className="grid lg:grid-cols-[1fr_0.5fr] gap-12 lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow-mute">Sobre o procedimento</p>
              <div className="mt-6 space-y-6">
                {p.descricao.map((t, i) => (
                  <p key={i} className={`text-tinta-2 max-w-medida ${i === 0 ? 'text-[19px] leading-relaxed text-tinta' : 'text-[16.5px]'}`}>
                    {t}
                  </p>
                ))}
              </div>
              {!REVISADO && (
              <p className="mt-6 text-[12.5px] text-tinta-3 border-l-2 border-roxo pl-4">
                <span className="pendente-tag mr-2">Pendente</span>
                Texto clínico a ser revisado e aprovado pela Dra. Fernanda antes da publicação.
              </p>
              )}
            </Reveal>

            {p.indicacoes.length > 0 && (
              <Reveal>
                <h2 className="display text-d3 mt-16">Quando é indicado</h2>
                <ul className="mt-6">
                  {p.indicacoes.map((ind, i) => (
                    <li key={i} className={`py-4 flex gap-4 items-start ${i > 0 ? 'pontilhada' : ''}`}>
                      <span className="spark text-[11px] mt-2 shrink-0">✦</span>
                      <span className="text-[16px] text-tinta-2">{ind}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {p.faq.length > 0 && (
              <Reveal>
                <h2 className="display text-d3 mt-16">Perguntas frequentes</h2>
                <div className="mt-6">
                  {p.faq.map((f, i) => (
                    <details key={i} className="group py-5 pontilhada">
                      <summary className="display text-[20px] cursor-pointer list-none flex justify-between items-start gap-5">
                        {f.p}
                        <span className="spark text-sm shrink-0 mt-1.5 transition-transform group-open:rotate-45">✦</span>
                      </summary>
                      <p className="text-[15.5px] text-tinta-2 mt-4 max-w-medida">{f.r}</p>
                    </details>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* ficha lateral */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="bg-superficie p-8">
              <p className="rotulo text-tinta-3">Ficha rápida</p>
              <dl className="mt-5 space-y-0">
                {[
                  ['Categoria', c.nome],
                  ['Duração', p.duracao ?? 'A definir na avaliação'],
                  ['Sessões', p.sessoes ?? 'A definir na avaliação'],
                  ['Resultado', p.resultado ?? 'Individual, varia por caso'],
                ].map(([k, v], i) => (
                  <div key={k} className={`py-3.5 ${i > 0 ? 'pontilhada' : ''}`}>
                    <dt className="rotulo text-tinta-3 text-[11px]">{k}</dt>
                    <dd className="text-[15px] text-tinta mt-1">{v}</dd>
                  </div>
                ))}
              </dl>
              <a href={wa(MSG.procedimento(p.nome))} target="_blank" rel="noopener" className="btn w-full justify-center mt-7">
                Falar sobre {p.nome.split(' ')[0]}
              </a>
              <p className="text-[11.5px] text-tinta-3 mt-5 leading-relaxed">
                Todo procedimento depende de avaliação individual prévia. Os valores e o protocolo são
                definidos na consulta.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* resultados — só renderiza quando há caso real para mostrar */}
      {casosDoProcedimento(p.slug).length > 0 && (
      <section className="bg-ameixa text-white">
        <div className="wrap py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2 className="display text-d2 text-white">
              Resultados em <em className="italic">{p.nome}</em>
            </h2>
            <Link href="/resultados" className="btn-claro shrink-0">
              Ver galeria completa
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {casosDoProcedimento(p.slug).map((caso, i) => (
              <AntesDepois key={`${caso.nome}-${i}`} caso={caso} claro className="aspect-[4/5]" />
            ))}
          </div>
          <div className="mt-8">
            <AvisoResultados claro />
          </div>
        </div>
      </section>
      )}

      {/* relacionados */}
      {relacionados.length > 0 && (
        <section className="wrap py-20 md:py-24">
          <p className="eyebrow-mute">Também em {c.nome}</p>
          <h2 className="display text-d2 mt-4 mb-12">
            Procedimentos <em className="italic">relacionados</em>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {relacionados.map((r) => (
              <Link key={r.slug} href={`/procedimentos/${c.slug}/${r.slug}`} className="group block py-6 pontilhada">
                <h3 className="display text-[22px] leading-tight group-hover:text-roxo transition-colors">{r.nome}</h3>
                <p className="text-[13.5px] text-tinta-3 mt-2">{r.resumo}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaFaixa
        pergunta={`${p.nome} é indicado para você? A avaliação responde.`}
        botao="Agendar avaliação"
        mensagem={MSG.procedimento(p.nome)}
      />
    </>
  );
}
