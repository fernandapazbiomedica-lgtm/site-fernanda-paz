import type { Metadata } from 'next';
import Quizzes from '@/components/Quizzes';
import { QUIZZES } from '@/lib/quizzes';
import { CtaFaixa, Trilha } from '@/components/ui';
import { MSG } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Quizzes',
  description:
    'Três quizzes rápidos para entender seu tipo de pele e quais procedimentos faciais e corporais conversam com o seu caso. Clínica da Dra. Fernanda Paz, Guarujá.',
  alternates: { canonical: '/quizzes' },
};

export default function QuizzesPage() {
  return (
    <>
      <section className="wrap pt-16 pb-16 md:pt-20">
        <Trilha itens={[{ href: '/', label: 'Início' }, { label: 'Quizzes' }]} />
        <div className="max-w-3xl mt-10">
          <p className="eyebrow">{QUIZZES.length} quizzes</p>
          <h1 className="display text-d1 mt-6">
            Não é diagnóstico,
            <br />é um bom <em className="italic">começo</em>.
          </h1>
          <p className="corpo text-[17px] mt-8">
            Poucas perguntas para você chegar na consulta sabendo o que perguntar. O que vale para o seu
            caso, porém, sai da avaliação — não do quiz.
          </p>
        </div>
      </section>

      <section className="wrap pb-24 md:pb-32">
        <Quizzes />
      </section>

      <CtaFaixa
        pergunta="O quiz aponta um caminho. A avaliação confirma."
        botao="Falar no WhatsApp"
        mensagem={MSG.duvida}
      />
    </>
  );
}
