import type { Metadata } from 'next';
import Link from 'next/link';
import { Foto } from '@/components/Foto';
import { Reveal, Pendente, CtaFaixa, Trilha } from '@/components/ui';
import { SITE, MSG , PERFIS } from '@/lib/site';
import { REVISADO } from '@/lib/revisao';

export const metadata: Metadata = {
  title: `Biomédica esteta no ${SITE.cidade}: formação e método`,
  description: `Conheça a trajetória da Dra. Fernanda Paz, ${SITE.papel.toLowerCase()} no ${SITE.cidade}, ${SITE.uf}. Formação, filosofia de atendimento e método de avaliação.`,
  alternates: { canonical: '/sobre' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.nome,
  jobTitle: SITE.papel,
  identifier: SITE.crbm,
  url: `${SITE.url}/sobre`,
  sameAs: PERFIS,
  workLocation: { '@type': 'Place', name: `${SITE.cidade}, ${SITE.uf}` },
};

export default function Sobre() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="wrap pt-16 pb-20 md:pt-20">
        <Trilha itens={[{ href: '/', label: 'Início' }, { label: 'A Dra.' }]} />
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-end mt-10">
          <div>
            <p className="eyebrow">{SITE.papel} · {SITE.crbm}</p>
            <h1 className="display text-d1 mt-6">
              Dra. Fernanda
              <br />
              <em className="italic">Paz</em>
            </h1>
            <p className="corpo text-[18px] mt-8">
              Atendimento em {SITE.cidade}, {SITE.uf}, com foco em harmonização facial, estética avançada e
              rejuvenescimento. A avaliação individual é o ponto de partida de todo plano.
            </p>
          </div>
          <Foto
            src="/images/dra-sobre-pb.jpg"
            alt="Dra. Fernanda Paz, biomédica esteta no Guarujá"
            className="aspect-[4/5] w-full"
            prioridade
          />
        </div>
      </section>

      {/* trajetória */}
      <section className="bg-superficie">
        <div className="wrap py-24 md:py-32">
          <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-10 lg:gap-20">
            <div>
              <p className="eyebrow-mute">Trajetória</p>
              <h2 className="display text-d2 mt-4">
                Formação e <em className="italic">atuação</em>
              </h2>
            </div>
            <Reveal>
              <div className="space-y-6">
                <p className="text-[19px] leading-relaxed text-tinta max-w-medida">
                  Sou biomédica, com habilitação em Análises Clínicas e Imagenologia e pós-graduação com
                  habilitação em Estética. Atuo em estética avançada, com tratamentos faciais, corporais,
                  para pele e para cabelos.
                </p>
                <p className="corpo text-[16.5px]">
                  A base clínica muda o jeito de olhar: antes de indicar qualquer procedimento, o que pesa é
                  a anatomia, o histórico e o que a pele realmente comporta. É por isso que a avaliação vem
                  primeiro, e não a tabela de procedimentos.
                </p>
                <p className="corpo text-[16.5px]">
                  Atendo em consultório no {SITE.cidade}, com hora marcada, e recebo também pacientes das
                  demais cidades da Baixada Santista. Cada plano é conduzido por mim do primeiro atendimento
                  ao acompanhamento depois do procedimento.
                </p>
              </div>

              <ul className="mt-12">
                {[
                  ['Graduação', 'Biomedicina'],
                  ['Habilitação', 'Análises Clínicas e Imagenologia'],
                  ['Pós-graduação', 'Habilitação em Estética'],
                  ['Registro', SITE.crbm],
                ].map(([k, v], i) => (
                  <li key={k} className={`py-5 flex flex-col sm:flex-row gap-2 sm:gap-8 ${i > 0 ? 'pontilhada' : ''}`}>
                    <span className="rotulo text-roxo sm:w-40 shrink-0 pt-0.5">{k}</span>
                    <span className="text-[15.5px] text-tinta-2">{v}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* filosofia */}
      <section className="wrap py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow-mute">Como eu trabalho</p>
          <h2 className="display text-d2 mt-4">
            Plano antes de <em className="italic">procedimento</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-12 mt-16">
          {[
            [
              'Escutar o que incomoda',
              'A consulta começa pelo que você vê no espelho, não pelo que está na tabela de procedimentos.',
            ],
            [
              'Avaliar o que é possível',
              'Anatomia, histórico e expectativa entram na mesma conta. O que não é possível eu digo com clareza.',
            ],
            [
              'Construir por etapas',
              'Quase nenhum plano precisa ser executado de uma vez. Respeitar o intervalo é parte do resultado.',
            ],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 90}>
              <div className="rail">
                <p className="rotulo text-tinta-3">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="display text-[26px] leading-tight mt-3">{t}</h3>
                <p className="text-[15px] text-tinta-2 mt-4">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* assinatura manuscrita — segundo e último uso no site */}
      <section className="bg-malva-nevoa">
        <div className="wrap py-24 md:py-28 text-center">
          <p className="display text-d3 max-w-2xl mx-auto">
            Se você chegou até aqui, provavelmente já pensou nisso mais de uma vez.
          </p>
          <p className="font-script text-5xl md:text-6xl text-roxo mt-8">calma que eu vou te ajudar</p>
          <p className="rotulo text-tinta-3 mt-8">{SITE.nome}</p>
        </div>
      </section>

      <CtaFaixa pergunta="Vamos conversar sobre o seu caso?" botao="Agendar avaliação" mensagem={MSG.geral} />
    </>
  );
}
