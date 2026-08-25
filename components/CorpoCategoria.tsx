import { CATEGORIA_CORPO } from '@/lib/categorias-corpo';

/**
 * CorpoCategoria — o texto próprio da página de categoria.
 *
 * Por que existe: a página de categoria tinha uma linha de descrição e a lista
 * de procedimentos. Para uma busca como "procedimentos faciais no Guarujá",
 * isso é pouco — é a lista que ocupa a página, e lista não responde nada.
 *
 * Arquivo novo, não altera nada do que já existe. Vai entre a seção de abertura
 * e a grade de procedimentos:
 *
 *     <CorpoCategoria slug={c.slug} />
 *
 * Emite schema FAQPage próprio, então as perguntas daqui também são elegíveis a
 * resultado enriquecido.
 */
export function CorpoCategoria({ slug }: { slug: string }) {
  const dados = CATEGORIA_CORPO[slug];
  if (!dados) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dados.faq.map((f) => ({
      '@type': 'Question',
      name: f.p,
      acceptedAnswer: { '@type': 'Answer', text: f.r },
    })),
  };

  return (
    <section className="wrap pb-20 md:pb-24">
      <div className="grid lg:grid-cols-[1fr_0.72fr] gap-12 lg:gap-20">
        <div>
          <p className="eyebrow-mute">{dados.rotulo}</p>
          <div className="mt-6 space-y-5">
            {dados.corpo.map((t, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-tinta max-w-medida text-[19px] leading-relaxed'
                    : 'text-tinta-2 max-w-medida text-[16.5px]'
                }
              >
                {t}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow-mute">Perguntas frequentes</p>
          <div className="mt-6">
            {dados.faq.map((f) => (
              <details key={f.p} className="group py-5 pontilhada">
                <summary className="display text-[19px] cursor-pointer list-none flex justify-between items-start gap-5">
                  {f.p}
                  <span className="spark text-sm shrink-0 mt-1.5 transition-transform group-open:rotate-45">
                    ✦
                  </span>
                </summary>
                <p className="text-[15px] text-tinta-2 mt-3">{f.r}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}

export default CorpoCategoria;
