'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { QUIZZES, type Quiz } from '@/lib/quizzes';
import { wa, MSG } from '@/lib/site';

/** alternativa mais repetida ao longo do quiz; empate resolve pela primeira */
function apurar(respostas: number[], totalResultados: number) {
  const contagem = new Array(totalResultados).fill(0);
  respostas.forEach((r) => {
    if (r >= 0 && r < totalResultados) contagem[r] += 1;
  });
  let vencedor = 0;
  contagem.forEach((n, i) => {
    if (n > contagem[vencedor]) vencedor = i;
  });
  return vencedor;
}

export default function Quizzes() {
  const [aberto, setAberto] = useState<Quiz | null>(null);
  const [indice, setIndice] = useState(0);
  const [respostas, setRespostas] = useState<number[]>([]);
  const [concluido, setConcluido] = useState(false);
  const painel = useRef<HTMLDivElement>(null);
  const abridor = useRef<HTMLButtonElement | null>(null);

  const fechar = useCallback(() => {
    setAberto(null);
    setConcluido(false);
    abridor.current?.focus();
  }, []);

  const abrir = (quiz: Quiz, gatilho: HTMLButtonElement) => {
    abridor.current = gatilho;
    setAberto(quiz);
    setIndice(0);
    setRespostas([]);
    setConcluido(false);
  };

  const refazer = () => {
    setIndice(0);
    setRespostas([]);
    setConcluido(false);
  };

  /* Esc fecha; trava o scroll do fundo enquanto o quiz está aberto */
  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar();
    };
    document.addEventListener('keydown', onKey);
    const anterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    painel.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = anterior;
    };
  }, [aberto, fechar]);

  const responder = (opcao: number) => {
    const proximas = [...respostas];
    proximas[indice] = opcao;
    setRespostas(proximas);
  };

  const avancar = () => {
    if (!aberto) return;
    if (indice + 1 < aberto.perguntas.length) setIndice(indice + 1);
    else setConcluido(true);
  };

  const pergunta = aberto?.perguntas[indice];
  const respondida = respostas[indice] !== undefined;
  const resultado = aberto && concluido ? aberto.resultados[apurar(respostas, aberto.resultados.length)] : null;
  const progresso = aberto
    ? concluido
      ? 100
      : ((indice + (respondida ? 1 : 0)) / aberto.perguntas.length) * 100
    : 0;

  return (
    <>
      {/* ——— lista de quizzes ——— */}
      <ul>
        {QUIZZES.map((q) => (
          <li key={q.slug} className="border-t border-linha last:border-b">
            <button
              type="button"
              onClick={(e) => abrir(q, e.currentTarget)}
              className="group grid w-full grid-cols-1 items-start gap-4 py-9 text-left md:grid-cols-[1fr_auto] md:gap-12"
            >
              <div>
                <p className="eyebrow">{q.categoria}</p>
                <h2 className="display text-d3 mt-3 transition-colors group-hover:text-roxo">{q.titulo}</h2>
                <p className="mt-3 max-w-medida text-[15px] text-tinta-2">{q.descricao}</p>
              </div>
              <span className="rotulo whitespace-nowrap text-tinta-3 md:self-center">
                {q.perguntas.length} {q.perguntas.length === 1 ? 'pergunta' : 'perguntas'}{' '}
                <span className="spark text-[10px]">✦</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* ——— quiz ——— */}
      {aberto && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ameixa/90 p-0 sm:items-center sm:p-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) fechar();
          }}
        >
          <div
            ref={painel}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={aberto.titulo}
            className="max-h-[92vh] w-full max-w-[620px] overflow-y-auto border border-linha bg-papel outline-none"
          >
            {/* cabeçalho */}
            <div className="flex items-start justify-between gap-6 px-6 pt-6 md:px-9 md:pt-8">
              <p className="display text-[21px] leading-tight">{aberto.titulo}</p>
              <button
                type="button"
                onClick={fechar}
                aria-label="Fechar quiz"
                className="-mr-1 -mt-1 p-1 text-[22px] leading-none text-tinta-3 transition-colors hover:text-roxo"
              >
                ×
              </button>
            </div>

            {/* progresso */}
            <div className="mt-5 h-[2px] w-full bg-linha md:mt-6">
              <div
                className="h-full bg-roxo transition-[width] duration-500 ease-suave"
                style={{ width: `${progresso}%` }}
              />
            </div>

            <div className="px-6 pb-8 pt-7 md:px-9 md:pb-10">
              {!concluido && pergunta && (
                <>
                  <h3 className="display text-d3">{pergunta.texto}</h3>

                  <ul className="mt-6">
                    {pergunta.opcoes.map((opcao, i) => {
                      const escolhida = respostas[indice] === i;
                      return (
                        <li key={opcao} className={i > 0 ? 'pontilhada' : ''}>
                          <button
                            type="button"
                            onClick={() => responder(i)}
                            aria-pressed={escolhida}
                            className={`block w-full py-4 text-left text-[15.5px] transition-colors ${
                              escolhida ? 'rail text-roxo' : 'pl-6 text-tinta-2 hover:text-roxo'
                            }`}
                          >
                            {opcao}
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-linha pt-6">
                    {indice > 0 ? (
                      <button type="button" onClick={() => setIndice(indice - 1)} className="btn-linha">
                        Anterior
                      </button>
                    ) : (
                      <span />
                    )}
                    <span className="rotulo text-tinta-3">
                      {indice + 1} / {aberto.perguntas.length}
                    </span>
                    <button
                      type="button"
                      onClick={avancar}
                      disabled={!respondida}
                      className="btn disabled:cursor-not-allowed disabled:bg-linha disabled:text-tinta-3"
                    >
                      {indice + 1 === aberto.perguntas.length ? 'Ver resultado' : 'Próxima'}
                    </button>
                  </div>
                </>
              )}

              {resultado && (
                <>
                  <p className="eyebrow">Resultado</p>
                  <h3 className="display text-d3 mt-3">{resultado.titulo}</h3>
                  <p className="corpo mt-4 text-[15.5px]">{resultado.descricao}</p>

                  <p className="rotulo mt-8 text-tinta-3">Recomendações</p>
                  <ul className="mt-4">
                    {resultado.recomendacoes.map((r, i) => (
                      <li key={i} className={`flex gap-3 py-3 ${i > 0 ? 'pontilhada' : ''}`}>
                        <span className="spark mt-[7px] text-[10px]">✦</span>
                        <span className="text-[15.5px] text-tinta-2">
                          {r.link && (
                            <Link
                              href={r.link.href}
                              onClick={fechar}
                              className="text-roxo underline decoration-linha underline-offset-4 transition-colors hover:text-violeta"
                            >
                              {r.link.label}
                            </Link>
                          )}
                          {r.link && r.texto ? ' — ' : ''}
                          {r.texto}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={resultado.artigo}
                    onClick={fechar}
                    className="rotulo mt-7 inline-flex items-center gap-2 text-roxo"
                  >
                    Ler sobre isso <span className="spark text-[10px]">✦</span>
                  </Link>

                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-linha pt-6">
                    <a href={wa(MSG.duvida)} target="_blank" rel="noopener" className="btn">
                      Falar no WhatsApp
                    </a>
                    <button type="button" onClick={refazer} className="btn-linha">
                      Refazer
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
