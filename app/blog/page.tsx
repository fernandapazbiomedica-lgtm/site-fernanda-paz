import type { Metadata } from 'next';
import Link from 'next/link';
import { ARTIGOS } from '@/lib/blog';
import { Reveal, CtaFaixa, Trilha } from '@/components/ui';
import { Foto } from '@/components/Foto';
import { MSG } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Dúvidas reais sobre estética, respondidas',
  description:
    'Artigos sobre harmonização facial, toxina botulínica, melasma, procedimentos corporais e cuidados com a pele. Escritos a partir das dúvidas da consulta.',
  alternates: { canonical: '/blog' },
};

export default function Blog() {
  return (
    <>
      <section className="wrap pt-16 pb-16 md:pt-20">
        <Trilha itens={[{ href: '/', label: 'Início' }, { label: 'Blog' }]} />
        <div className="max-w-3xl mt-10">
          <p className="eyebrow">Do consultório para o site</p>
          <h1 className="display text-d1 mt-6">
            Dúvidas reais,
            <br />
            <em className="italic">respondidas</em>.
          </h1>
          <p className="corpo text-[17px] mt-8">
            As perguntas que mais aparecem na consulta, respondidas com o mesmo cuidado, e sem promessa que
            não se sustenta.
          </p>
        </div>
      </section>

      <section className="wrap pb-24 md:pb-32">
        {ARTIGOS.map((a, i) => (
          <Reveal key={a.slug} delay={(i % 4) * 70}>
            <Link
              href={`/blog/${a.slug}`}
              className="group grid md:grid-cols-[200px_1fr_auto] gap-5 md:gap-12 items-start py-9 border-t border-linha"
            >
              <Foto
                src={a.imagem}
                alt=""
                className="aspect-[4/3] w-full md:w-[200px] overflow-hidden"
              />
              <div>
                <p className="eyebrow">{a.categoria}</p>
                <h2 className="display text-d3 mt-3 group-hover:text-roxo transition-colors">{a.titulo}</h2>
                <p className="text-[15px] text-tinta-2 mt-3 max-w-medida">{a.resumo}</p>
              </div>
              <span className="rotulo text-tinta-3 md:text-right whitespace-nowrap">{a.leitura}</span>
            </Link>
          </Reveal>
        ))}
        <div className="border-t border-linha" />
      </section>

      <CtaFaixa
        pergunta="Sua dúvida não está aqui? Pergunte direto."
        botao="Falar no WhatsApp"
        mensagem={MSG.duvida}
      />
    </>
  );
}
