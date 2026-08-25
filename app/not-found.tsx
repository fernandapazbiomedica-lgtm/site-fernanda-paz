import Link from 'next/link';
import { CATEGORIAS } from '@/lib/procedimentos';
import { wa, MSG } from '@/lib/site';

export default function NotFound() {
  return (
    <section className="wrap py-28 md:py-40">
      <div className="max-w-2xl">
        <p className="eyebrow">Erro 404</p>
        <h1 className="display text-d1 mt-6">
          Essa página
          <br />
          não <em className="italic">existe</em>.
        </h1>
        <p className="corpo text-[17px] mt-8">
          O endereço pode ter mudado ou o link pode estar incompleto. Abaixo estão os caminhos mais usados:
          ou fale direto pelo WhatsApp.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="btn">
            Voltar ao início
          </Link>
          <a href={wa(MSG.duvida)} target="_blank" rel="noopener" className="btn-linha">
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
        {CATEGORIAS.map((c) => (
          <Link key={c.slug} href={`/procedimentos/${c.slug}`} className="group block py-6 pontilhada">
            <h2 className="display text-[24px] group-hover:text-roxo transition-colors">{c.nome}</h2>
            <p className="text-[13.5px] italic text-tinta-3 mt-1">{c.conceito}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
