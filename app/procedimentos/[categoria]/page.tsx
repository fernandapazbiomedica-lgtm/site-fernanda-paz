import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIAS, acharCategoria, porCategoria } from '@/lib/procedimentos';
import { Reveal, Pendente, CtaFaixa, Trilha } from '@/components/ui';
import { Foto } from '@/components/Foto';
import { CorpoCategoria } from '@/components/CorpoCategoria';
import { SITE, MSG } from '@/lib/site';

type Props = { params: Promise<{ categoria: string }> };

export function generateStaticParams() {
  return CATEGORIAS.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const c = acharCategoria(categoria);
  if (!c) return {};
  return {
    title: c.seo.title,
    description: c.seo.description,
    alternates: { canonical: `/procedimentos/${c.slug}` },
  };
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;
  const c = acharCategoria(categoria);
  if (!c) notFound();
  const lista = porCategoria(c.slug);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Procedimentos', item: `${SITE.url}/procedimentos` },
      { '@type': 'ListItem', position: 3, name: c.nome, item: `${SITE.url}/procedimentos/${c.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="wrap pt-16 pb-16 md:pt-20 md:pb-20">
        <Trilha
          itens={[
            { href: '/', label: 'Início' },
            { href: '/procedimentos', label: 'Procedimentos' },
            { label: c.nome },
          ]}
        />
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center mt-10">
          <div>
            <p className="eyebrow">Categoria</p>
            <h1 className="display text-d1 mt-6">{c.nome}</h1>
            <p className="display text-d3 italic text-roxo mt-5">{c.conceito}</p>
            <p className="corpo text-[17px] mt-7">{c.descricao}</p>
            <p className="rotulo text-tinta-3 mt-8">{lista.length} procedimentos nesta categoria</p>
          </div>
          <Foto
            src={`/images/cat-${c.slug}.jpg`}
            alt={`Procedimentos ${c.nome.toLowerCase()} no Guarujá`}
            className="aspect-[4/3] w-full"
          />
        </div>
      </section>

      <CorpoCategoria slug={c.slug} />

      <section className="wrap pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {lista.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 70}>
              <Link
                href={`/procedimentos/${c.slug}/${p.slug}`}
                className="group block py-7 pontilhada h-full"
              >
                <p className="rotulo text-tinta-3">{String(i + 1).padStart(2, '0')}</p>
                <h2 className="display text-[25px] leading-tight mt-2.5 group-hover:text-roxo transition-colors">
                  {p.nome}
                </h2>
                <p className="text-[14px] text-tinta-2 mt-3">{p.resumo}</p>
                <span className="rotulo text-roxo inline-flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver detalhes <span className="spark text-[10px]">✦</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaFaixa
        pergunta={`Quer saber qual desses é indicado para você?`}
        botao="Agendar avaliação"
        mensagem={MSG.duvida}
      />
    </>
  );
}
