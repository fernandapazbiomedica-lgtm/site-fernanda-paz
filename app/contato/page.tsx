import type { Metadata } from 'next';
import { Pendente, CtaFaixa, Trilha } from '@/components/ui';
import { Foto } from '@/components/Foto';
import { SITE, wa, MSG , REDES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contato e Localização',
  description: `Agende sua avaliação com a Dra. Fernanda Paz no ${SITE.cidade}, ${SITE.uf}. WhatsApp ${SITE.whatsapp.exibicao}. Endereço, horários e como chegar.`,
  alternates: { canonical: '/contato' },
};

export default function Contato() {
  return (
    <>
      <section className="wrap pt-16 pb-16 md:pt-20">
        <Trilha itens={[{ href: '/', label: 'Início' }, { label: 'Contato' }]} />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-10">
          <div>
            <p className="eyebrow">Atendimento com hora marcada</p>
            <h1 className="display text-d1 mt-6">
              Vamos
              <br />
              <em className="italic">conversar</em>.
            </h1>
            <p className="corpo text-[17px] mt-8">
              O primeiro passo é sempre a avaliação. É nela que a gente entende o que incomoda, o que é
              possível e qual plano faz sentido para você.
            </p>

            <a href={wa(MSG.geral)} target="_blank" rel="noopener" className="btn mt-9">
              WhatsApp {SITE.whatsapp.exibicao}
            </a>

            <dl className="mt-14">
              <div className="py-6 border-t border-linha">
                <dt className="rotulo text-tinta-3">Endereço</dt>
                <dd className="text-[17px] text-tinta mt-2">
                  {SITE.endereco.pendente && <span className="pendente-tag mr-2">Pendente</span>}
                  {SITE.endereco.logradouro}, {SITE.endereco.bairro}, {SITE.cidade}/{SITE.uf}
                  <br />
                  {SITE.endereco.cep}
                </dd>
              </div>
              <div className="py-6 border-t border-linha">
                <dt className="rotulo text-tinta-3">Horários</dt>
                <dd className="text-[17px] text-tinta mt-2 space-y-1.5">
                  {SITE.horarios.map((h) => (
                    <p key={h.dia} className="flex gap-4">
                      <span className="text-tinta-2 w-40 shrink-0 text-[15px]">{h.dia}</span>
                      <span className="text-[15px]">
                        {SITE.horariosPendente && <span className="pendente-tag mr-2">Pendente</span>}
                        {h.hora}
                      </span>
                    </p>
                  ))}
                </dd>
              </div>
              <div className="py-6 border-t border-b border-linha">
                <dt className="rotulo text-tinta-3">Redes</dt>
                <dd className="mt-2">
                  <ul className="space-y-2">
                    {REDES.map((r) => (
                      <li key={r.nome}>
                        <a href={r.url} target="_blank" rel="noopener" className="text-[17px] text-roxo">
                          {r.nome === 'Google' ? r.handle : `${r.nome} · ${r.handle}`}
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          <div className="space-y-5 lg:sticky lg:top-28">
            <iframe
              title="Mapa: Rua Buenos Aires, 40, Jardim Ideal, Guarujá"
              src="https://www.google.com/maps?q=Rua+Buenos+Aires,+40,+Jardim+Ideal,+Guaruj%C3%A1+-+SP&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full grayscale-[0.35] contrast-[1.05]"
            />
            <div className="grid grid-cols-2 gap-5">
              <Foto src="/images/clinica-fachada.jpg" alt="Fachada do Physiomed, onde fica o consultório, no Guarujá" className="aspect-square" />
              <Foto src="/images/clinica-consultorio.jpg" alt="Sala de procedimento do consultório no Guarujá" className="aspect-square" />
            </div>
          </div>
        </div>
      </section>

      <CtaFaixa
        pergunta="Prefere tirar uma dúvida antes de agendar?"
        botao="Perguntar no WhatsApp"
        mensagem={MSG.duvida}
      />
    </>
  );
}
