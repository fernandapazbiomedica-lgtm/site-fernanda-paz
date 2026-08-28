'use client';

import { useState } from 'react';
import { wa } from '@/lib/site';

export default function Pergunta({ artigo }: { artigo: string }) {
    const [texto, setTexto] = useState('');
    const limpo = texto.trim();

  const mensagem = limpo
      ? `Olá! Li o artigo "${artigo}" no site e fiquei com uma dúvida:\n\n${limpo}`
        : `Olá! Li o artigo "${artigo}" no site e fiquei com uma dúvida.`;

  return (
        <section className="bg-superficie">
              <div className="wrap py-16 md:py-20">
                      <div className="max-w-2xl">
                                <p className="eyebrow">Ficou com dúvida?</p>p>
                                <h2 className="display text-d3 mt-4">
                                            Pergunte <em className="italic">direto</em>em>.
                                </h2>h2>
                                <p className="corpo mt-4 text-[15.5px]">
                                            Escreva sua dúvida sobre o que você leu. Ela chega no WhatsApp da clínica junto com o nome do
                                            artigo — e é respondida em conversa, não aqui embaixo.
                                </p>p>
                      
                                <label htmlFor="pergunta" className="sr-only">
                                            Sua dúvida sobre o artigo
                                </label>label>
                                <textarea
                                              id="pergunta"
                                              value={texto}
                                              onChange={(e) => setTexto(e.target.value)}
                                              rows={4}
                                              maxLength={600}
                                              placeholder="Ex.: tenho pele oleosa mas descama na testa. Uso hidratante mesmo assim?"
                                              className="mt-7 w-full resize-y border border-linha bg-papel px-4 py-3.5 text-[15.5px] text-tinta placeholder:text-tinta-3/70 focus:border-roxo focus:outline-none"
                                            />
                      
                                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                                            <a href={wa(mensagem)} target="_blank" rel="noopener" className="btn">
                                                          Perguntar no WhatsApp
                                            </a>a>
                                            <p className="text-[13px] text-tinta-3">
                                              {limpo ? `${limpo.length}/600` : 'Pode mandar sem escrever nada também.'}
                                            </p>p>
                                </div>div>
                      
                                <p className="mt-6 max-w-medida text-[13px] italic text-tinta-3">
                                            Dúvida respondida por aqui é orientação geral. Conduta para o seu caso depende de avaliação
                                            presencial.
                                </p>p>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
