import type { Metadata } from 'next';
import { CATEGORIAS } from '@/lib/procedimentos';
import { Reveal, CtaFaixa, Trilha, AvisoResultados } from '@/components/ui';
import { Foto } from '@/components/Foto';
import { GALERIA } from '@/lib/imagens';
import { SITE, MSG } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Resultados: antes e depois',
  description: `Galeria de resultados de procedimentos estéticos realizados no ${SITE.cidade}, ${SITE.uf}. Imagens publicadas mediante autorização. Resultados variam por paciente.`,
  alternates: { canonical: '/resultados' },
};

export default function Resultados() {
  return (
    <>
      {/* topo escuro — a seção-âncora desta página */}
      <section className="bg-ameixa text-white -mt-[73px] pt-[73px]">
        <div className="wrap pt-16 pb-20 md:pt-20 md:pb-24">
          <Trilha claro itens={[{ href: '/', label: 'Início' }, { label: 'Resultados' }]} />
          <div className="max-w-3xl mt-10">
            <p className="eyebrow text-malva">Antes e depois</p>
            <h1 className="display text-d1 text-white mt-6">
              O resultado é<br />
              <em className="italic">individual</em>.
            </h1>
            <p className="text-white/70 text-[17px] mt-8 max-w-medida">
              Cada caso abaixo é de uma pessoa com anatomia, histórico e objetivo próprios. Servem para mostrar
              o tipo de trabalho, nunca para prometer o mesmo desfecho.
            </p>
          </div>
        </div>
      </section>

      {/* filtros */}
      <section className="border-b border-linha sticky top-[73px] bg-papel/95 backdrop-blur z-30">
        <div className="wrap py-4 flex gap-6 overflow-x-auto">
          <span className="rotulo text-roxo whitespace-nowrap">Todos</span>
          {CATEGORIAS.map((c) => (
            <span key={c.slug} className="rotulo text-tinta-3 whitespace-nowrap">
              {c.nome}
            </span>
          ))}
        </div>
      </section>

      <section className="wrap py-20 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {GALERIA.map((c, i) => (
            <Reveal key={c.arquivo} delay={(i % 3) * 80}>
              <div className={i % 3 === 1 ? 'lg:mt-10' : ''}>
                <Foto
                  src={`/images/resultados/${c.arquivo}.jpg`}
                  alt={`Antes e depois: ${c.nome}, no Guarujá`}
                  className="aspect-[4/5] w-full"
                  modo="contain"
                  claro
                />
                <h2 className="display text-[21px] mt-5">{c.nome}</h2>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-linha pt-8">
          <AvisoResultados />
          <p className="text-[12px] text-tinta-3 mt-4 max-w-lg leading-relaxed">
            Nenhuma imagem será publicada sem termo de autorização de uso assinado pela paciente, em
            conformidade com as normas do conselho profissional.
          </p>
        </div>
      </section>

      <CtaFaixa
        pergunta="Quer entender o que é possível no seu caso?"
        botao="Agendar avaliação"
        mensagem={MSG.resultados}
      />
    </>
  );
}
