import Link from 'next/link';
import { CATEGORIAS, porCategoria } from '@/lib/procedimentos';
import { SITE, wa, MSG } from '@/lib/site';
import { Reveal, Pendente, Media, CtaFaixa, TextoArco, AvisoResultados } from '@/components/ui';
import { AntesDepois } from '@/components/AntesDepois';
import { Reels } from '@/components/Reels';
import { CASOS_GALERIA } from '@/lib/imagens';
import { Foto } from '@/components/Foto';
import { HeroReel } from '@/components/HeroReel';
import { ARTIGOS } from '@/lib/blog';
import { REVISADO } from '@/lib/revisao';

export default function Home() {
  return (
    <>
      {/* ——————————————————————— 01 · HERO (escuro) */}
      <section className="relative overflow-hidden bg-ameixa text-white -mt-[73px] pt-[73px]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(85% 70% at 90% -5%, rgba(139,15,196,0.42) 0%, transparent 62%), radial-gradient(65% 55% at -5% 105%, rgba(168,85,247,0.16) 0%, transparent 58%)',
          }}
        />
        <div className="wrap relative grid lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-16 items-end pt-16 pb-16 lg:pt-24 lg:pb-24">
          <div className="animate-surgir">
            <p className="eyebrow text-malva flex items-center gap-2.5">
              <span className="spark text-malva">✦</span> {SITE.papel}
            </p>
            <h1 className="display text-d1 text-white mt-7">
              Sua melhor versão
              <br />
              começa com um <em className="italic">plano</em>.
            </h1>
            <p className="text-[17px] text-white/70 mt-8 max-w-md">
              Harmonização facial, estética avançada e rejuvenescimento conduzidos a partir do estudo do seu
              rosto, não de um protocolo pronto.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={wa(MSG.geral)}
                target="_blank"
                rel="noopener"
                className="btn bg-white text-ameixa hover:bg-malva"
              >
                Agendar avaliação
              </a>
              <Link href="/procedimentos" className="btn-claro">
                Ver procedimentos
              </Link>
            </div>
            <div className="mt-12 border-t border-dotted border-white/20 pt-5 flex flex-wrap gap-x-8 gap-y-2 rotulo text-white/45">
              <span>Harmonização</span>
              <span>Estética avançada</span>
              <span>Rejuvenescimento</span>
              <span className="text-malva">
                {SITE.cidade}, {SITE.uf}
              </span>
            </div>
          </div>

          {/* reels — o trabalho acontecendo, sangra à direita */}
          <div className="relative lg:-mr-10 xl:-mr-20">
            <HeroReel className="aspect-[3/4] w-full" />
          </div>
        </div>
      </section>

      {/* ——————————————————————— 02 · POSICIONAMENTO */}
      <section className="bg-malva-nevoa">
        <div className="wrap py-24 md:py-32 text-center">
          <Reveal>
            <p className="display text-d2 max-w-3xl mx-auto">
              Estética com planejamento.
              <br />
              Resultados com <em className="italic">naturalidade</em>.
            </p>
            <p className="corpo mx-auto mt-8 text-[17px]">
              Nem todo rosto precisa da mesma coisa. A avaliação vem antes da agulha, e o plano é construído
              para o que você quer alcançar, no tempo que faz sentido para você.
            </p>
            <p className="rotulo text-tinta-3 mt-10">
              {SITE.nome} · {SITE.crbm}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ——————————————————————— 03 · CATEGORIAS (grade assimétrica) */}
      <section className="wrap py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow-mute">Áreas de atuação</p>
          <h2 className="display text-d2 mt-4">
            Onde o <em className="italic">cuidado</em> se organiza.
          </h2>
        </div>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIAS.slice(0, 4).map((c, i) => (
            <Reveal key={c.slug} delay={i * 90} className={i % 2 === 1 ? 'lg:mt-16' : ''}>
              <Link href={`/procedimentos/${c.slug}`} className="group block">
                <Foto
                  src={`/images/cat-${c.slug}.jpg`}
                  alt={`Procedimentos ${c.nome.toLowerCase()}, Dra. Fernanda Paz`}
                  className="aspect-[4/5]"
                />
                <h3 className="display text-3xl mt-6 group-hover:text-roxo transition-colors">{c.nome}</h3>
                <p className="text-[13.5px] italic text-tinta-3 mt-1">{c.conceito}</p>
                <ul className="mt-5 space-y-1.5">
                  {porCategoria(c.slug).slice(0, 5).map((p) => (
                    <li key={p.slug} className="text-[13.5px] text-tinta-2">
                      {p.nome}
                    </li>
                  ))}
                </ul>
                <span className="rotulo text-roxo mt-5 inline-flex items-center gap-2">
                  Ver todos <span className="spark text-[10px]">✦</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ——————————————————————— 04 · CTA CONTEXTUAL 1 */}
      <CtaFaixa
        pergunta="Não sabe qual procedimento é indicado para o seu objetivo?"
        botao="Conversar pelo WhatsApp"
        mensagem={MSG.duvida}
      />

      {/* ——————————————————————— 05 · HARMONIZAÇÃO (editorial, escuro) */}
      <section className="bg-ameixa text-white">
        <Media
          claro
          label="Faixa: macro de pele"
          nota="Horizontal 21:6. Vídeo em loop mudo ou foto. Sangra de ponta a ponta."
          className="h-[240px] md:h-[320px] w-full"
          // src="/videos/macro-pele.mp4"
        />
        <div className="wrap pt-16 md:pt-24 pb-24 md:pb-32">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-start">
            <Reveal>
              <p className="eyebrow text-malva">Harmonização Facial</p>
              <h2 className="display text-d2 text-white mt-5">
                A harmonização começa
                <br />
                onde termina o <em className="italic">excesso</em>.
              </h2>
              <p className="text-[17px] text-white/70 mt-8 max-w-medida">
                Não é sobre adicionar. É sobre entender quais proporções sustentam o seu rosto e devolver o que
                o tempo tirou, deixando intacto tudo que já funciona.
              </p>
              <ul className="mt-10 space-y-0">
                {[
                  ['Proporção', 'A medida do rosto define o plano, não o catálogo.'],
                  ['Equilíbrio', 'Terço superior, médio e inferior conversando entre si.'],
                  ['Estrutura', 'Sustentação antes de volume. Sempre nessa ordem.'],
                  ['Contorno', 'A definição que aparece na luz, não na maquiagem.'],
                ].map(([t, d], i) => (
                  <li
                    key={t}
                    className={`py-5 flex gap-6 ${i > 0 ? 'border-t border-dotted border-white/18' : ''}`}
                  >
                    <span className="rotulo text-malva w-24 shrink-0 pt-1">{t}</span>
                    <span className="text-[15px] text-white/70">{d}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/procedimentos/facial/harmonizacao-facial"
                className="btn bg-white text-ameixa hover:bg-malva mt-10"
              >
                Conhecer harmonização
              </Link>
            </Reveal>

            <Reveal delay={140} className="relative">
              <TextoArco
                texto="proporção · equilíbrio · estrutura"
                className="w-full max-w-[460px] mx-auto -mb-10 relative z-10 overflow-visible [&_text]:fill-malva"
              />
              <Media
                claro
                label="Detalhe macro"
                nota="Quadrado 1:1. Textura de pele real."
                className="aspect-square w-full"
                // src="/videos/detalhe.mp4"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——————————————————————— 06 · A DRA. */}
      <section className="bg-superficie">
        <div className="wrap py-24 md:py-32">
          <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-20 items-center">
            <Reveal>
              <Foto
                src="/images/dra-sobre-pb.jpg"
                alt="Retrato da Dra. Fernanda Paz"
                className="aspect-[4/5] w-full"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow-mute">Quem conduz a avaliação</p>
              <h2 className="display text-d2 mt-4">
                Dra. Fernanda <em className="italic">Paz</em>
              </h2>
              <div className="corpo mt-8 space-y-5 text-[16.5px]">
                <p>
                  Biomédica, com habilitação em Análises Clínicas e Imagenologia e pós-graduação com
                  habilitação em Estética. Atua em estética avançada: tratamentos faciais, corporais, para
                  pele e para cabelos.
                </p>
                <p>
                  A conduta é a mesma em todos os casos: entender o que incomoda, avaliar o que é possível e
                  ser honesta sobre o que não é. Plano antes de procedimento.
                </p>
              </div>
              <p className="font-script text-4xl text-roxo mt-10">calma que eu vou te ajudar</p>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 rotulo text-tinta-3">
                <span>{SITE.crbm}</span>
                <span>{SITE.papel}</span>
                <span>{SITE.cidade}, {SITE.uf}</span>
              </div>
              <Link href="/sobre" className="btn-linha mt-9">
                Conhecer a trajetória
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——————————————————————— 07 · RESULTADOS (fundo ameixa) */}
      <section className="bg-ameixa text-white overflow-hidden">
        <div className="wrap py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow text-malva">Antes e depois</p>
              <h2 className="display text-d2 text-white mt-4">
                O resultado é <em className="italic">individual</em>.
              </h2>
            </div>
            <Link href="/resultados" className="btn-claro shrink-0">
              Ver todos os casos
            </Link>
          </div>

          <div className="trilho flex gap-6 overflow-x-auto pb-6 -mx-6 px-6 md:mx-0 md:px-0 snap-x">
            {CASOS_GALERIA.slice(0, 6).map((caso, i) => (
              <div key={`${caso.nome}-${i}`} className="shrink-0 w-[248px] md:w-[290px] snap-start">
                <AntesDepois caso={caso} claro className="aspect-[4/5] w-full" />
              </div>
            ))}
          </div>

          {/* reels — o material mais forte da clínica */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="eyebrow text-malva">Em movimento</p>
                <h2 className="display text-d2 text-white mt-4">
                  O procedimento <em className="italic">acontecendo</em>.
                </h2>
              </div>
            </div>
            <Reels claro />
          </div>

          <div className="mt-10">
            <AvisoResultados claro />
          </div>
        </div>
      </section>

      {/* ——————————————————————— 08 · CTA CONTEXTUAL 2 */}
      <CtaFaixa
        pergunta="Viu um resultado parecido com o que você procura?"
        botao="Agendar minha avaliação"
        mensagem={MSG.resultados}
      />

      {/* ——————————————————————— 09 · BLOG */}
      <section className="wrap py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow-mute">Do consultório para o site</p>
            <h2 className="display text-d2 mt-4">
              Dúvidas reais, <em className="italic">respondidas</em>.
            </h2>
          </div>
          <Link href="/blog" className="btn-linha shrink-0">
            Todos os artigos
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
          {ARTIGOS.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 90}>
              <Link href={`/blog/${a.slug}`} className="group block rail">
                <p className="eyebrow">{a.categoria}</p>
                <h3 className="display text-[26px] leading-[1.15] mt-4 group-hover:text-roxo transition-colors">
                  {a.titulo}
                </h3>
                <p className="text-[14.5px] text-tinta-2 mt-4">{a.resumo}</p>
                <p className="rotulo text-tinta-3 mt-5">{a.leitura} de leitura</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ——————————————————————— 10 · CLÍNICA & LOCALIZAÇÃO */}
      <section className="bg-superficie">
        <div className="wrap py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <p className="eyebrow-mute">A clínica</p>
              <h2 className="display text-d2 mt-4">
                {SITE.cidade}, <em className="italic">{SITE.uf}</em>
              </h2>
              <p className="corpo mt-7 text-[16.5px]">
                Um espaço pensado para que a consulta seja tranquila do começo ao fim. Atendimento com hora
                marcada e avaliação individual antes de qualquer procedimento.
              </p>
              <dl className="mt-10 space-y-0">
                <div className="py-5 flex gap-6">
                  <dt className="rotulo text-tinta-3 w-28 shrink-0">Endereço</dt>
                  <dd className="text-[15px] text-tinta-2">
                    {SITE.endereco.pendente && <span className="pendente-tag mr-2">Pendente</span>}
                    {SITE.endereco.logradouro}, {SITE.endereco.bairro}
                  </dd>
                </div>
                <div className="py-5 pontilhada flex gap-6">
                  <dt className="rotulo text-tinta-3 w-28 shrink-0">Horários</dt>
                  <dd className="text-[15px] text-tinta-2">
                    {SITE.horariosPendente && <span className="pendente-tag mr-2">Pendente</span>}
                    Atendimento com hora marcada
                  </dd>
                </div>
                <div className="py-5 pontilhada flex gap-6">
                  <dt className="rotulo text-tinta-3 w-28 shrink-0">WhatsApp</dt>
                  <dd className="text-[15px] text-tinta-2">{SITE.whatsapp.exibicao}</dd>
                </div>
              </dl>
              <Link href="/contato" className="btn mt-8">
                Como chegar
              </Link>
            </Reveal>
            <Reveal delay={120} className="grid grid-cols-2 gap-4">
              <Foto src="/images/clinica-fachada.jpg" alt="Fachada da clínica no Guarujá" className="aspect-[4/5]" />
              <Foto src="/images/clinica-consultorio.jpg" alt="Sala de procedimento" className="aspect-[4/5] mt-10" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
