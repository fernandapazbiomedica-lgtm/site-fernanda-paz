import type { Metadata } from 'next';
import Link from 'next/link';
import { CATEGORIAS, porCategoria, totalProcedimentos } from '@/lib/procedimentos';
import { Reveal, CtaFaixa, Trilha } from '@/components/ui';
import { MSG } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Todos os Procedimentos',
  description: `${totalProcedimentos} procedimentos de estética facial, corporal, de pele e capilar no Guarujá, SP. Avaliação individual com a Dra. Fernanda Paz.`,
  alternates: { canonical: '/procedimentos' },
};

export default function Procedimentos() {
  return (
    <>
      <section className="wrap pt-16 pb-20 md:pt-20 md:pb-24">
        <Trilha itens={[{ href: '/', label: 'Início' }, { label: 'Procedimentos' }]} />
        <div className="max-w-3xl mt-10">
          <p className="eyebrow">{totalProcedimentos} procedimentos</p>
          <h1 className="display text-d1 mt-6">
            O que é possível,
            <br />
            e o que é <em className="italic">indicado</em>.
          </h1>
          <p className="corpo text-[17px] mt-8">
            A lista abaixo mostra tudo que é realizado na clínica. O que vale para o seu caso, porém, sai da
            avaliação, não da lista.
          </p>
        </div>
      </section>

      {CATEGORIAS.map((c, i) => (
        <section key={c.slug} className={i % 2 === 1 ? 'bg-superficie' : ''}>
          <div className="wrap py-20 md:py-24">
            <Reveal>
              <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-16">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <p className="eyebrow-mute">{String(i + 1).padStart(2, '0')}</p>
                  <h2 className="display text-d2 mt-3">
                    <Link href={`/procedimentos/${c.slug}`} className="hover:text-roxo transition-colors">
                      {c.nome}
                    </Link>
                  </h2>
                  <p className="display text-xl italic text-roxo mt-3">{c.conceito}</p>
                  <p className="corpo text-[15px] mt-5">{c.descricao}</p>
                  <Link href={`/procedimentos/${c.slug}`} className="rotulo text-roxo inline-flex items-center gap-2 mt-6">
                    Abrir categoria <span className="spark text-[10px]">✦</span>
                  </Link>
                </div>

                <ul className="grid sm:grid-cols-2 gap-x-8">
                  {porCategoria(c.slug).map((p, n) => (
                    <li key={p.slug} className={n > 0 ? 'pontilhada' : ''}>
                      <Link href={`/procedimentos/${c.slug}/${p.slug}`} className="group block py-5">
                        <h3 className="display text-[21px] group-hover:text-roxo transition-colors">{p.nome}</h3>
                        <p className="text-[13.5px] text-tinta-3 mt-1">{p.resumo}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <CtaFaixa
        pergunta="Muita opção e nenhuma certeza? Comece pela avaliação."
        botao="Falar no WhatsApp"
        mensagem={MSG.duvida}
      />
    </>
  );
}
