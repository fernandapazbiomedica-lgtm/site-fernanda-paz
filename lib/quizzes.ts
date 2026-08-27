/**
 * Dados dos quizzes interativos.
 *
 * O resultado é escolhido pela alternativa mais repetida ao longo do quiz
 * (moda); empate resolve pela primeira. Cada índice de resultado corresponde
 * ao índice da alternativa — a ordem das opções e a dos resultados precisa ser
 * mantida em paralelo ao editar.
 *
 * Uma recomendação é uma linha da lista de resultado. Pode ser texto solto,
 * um procedimento (link), ou um procedimento com um descritor curto ao lado.
 */

export type Recomendacao = {
  link?: { label: string; href: string };
  texto?: string;
};

export type Resultado = {
  titulo: string;
  descricao: string;
  recomendacoes: Recomendacao[];
  /** leitura complementar — artigo do blog ou página de categoria */
  artigo: string;
};

export type Quiz = {
  slug: string;
  titulo: string;
  categoria: string;
  descricao: string;
  perguntas: { texto: string; opcoes: string[] }[];
  resultados: Resultado[];
};

export const QUIZZES: Quiz[] =
[
  {
    "slug": "skin-type",
    "titulo": "Qual é o seu tipo de pele?",
    "categoria": "Pele & Rosto",
    "descricao": "Duas perguntas sobre como sua pele se comporta no dia a dia.",
    "perguntas": [
      {
        "texto": "Como sua pele se comporta durante o dia?",
        "opcoes": [
          "Fica oleosa rapidamente, especialmente na zona T",
          "Fica ressecada e desconfortável",
          "Fica equilibrada, sem extremos",
          "Varia bastante de acordo com a época"
        ]
      },
      {
        "texto": "Como sua pele reage após limpeza?",
        "opcoes": [
          "Volta a ficar oleosa em poucas horas",
          "Fica muito seca e apertada",
          "Se mantém equilibrada",
          "Fica vermelha e irritada"
        ]
      }
    ],
    "resultados": [
      {
        "titulo": "Você tem pele oleosa",
        "descricao": "Sua pele produz bastante sebo, necessitando de limpeza e controle regular. Recomendamos procedimentos que equilibrem a oleosidade e tratem acne.",
        "recomendacoes": [
          {
            "texto": "Rotina de limpeza com controle de oleosidade"
          },
          {
            "link": {
              "label": "Microagulhamento Facial",
              "href": "/procedimentos/facial/microagulhamento-facial"
            }
          },
          {
            "link": {
              "label": "Peelings Faciais",
              "href": "/procedimentos/facial/peelings-faciais"
            }
          },
          {
            "link": {
              "label": "Skinbooster",
              "href": "/procedimentos/facial/skinbooster"
            }
          }
        ],
        "artigo": "/blog/pele-oleosa-acneica"
      },
      {
        "titulo": "Você tem pele seca",
        "descricao": "Sua pele necessita de hidratação intensiva e proteção. Recomendamos produtos nutritivos e procedimentos que restaurem a umidade.",
        "recomendacoes": [
          {
            "texto": "Produtos hidratantes e nutritivos"
          },
          {
            "link": {
              "label": "Hidratação Profunda",
              "href": "/procedimentos/pele/hidratacao-profunda"
            }
          },
          {
            "link": {
              "label": "Skinbooster",
              "href": "/procedimentos/facial/skinbooster"
            }
          },
          {
            "link": {
              "label": "Rejuvenescimento",
              "href": "/procedimentos/pele/rejuvenescimento"
            }
          }
        ],
        "artigo": "/blog/pele-seca"
      },
      {
        "titulo": "Você tem pele normal",
        "descricao": "Sua pele está equilibrada. Mantenha uma rotina de cuidados básicos e considere procedimentos preventivos de antienvelhecimento.",
        "recomendacoes": [
          {
            "texto": "Rotina equilibrada de skincare"
          },
          {
            "link": {
              "label": "Toxina Botulínica",
              "href": "/procedimentos/facial/toxina-botulinica"
            }
          },
          {
            "link": {
              "label": "Bioestimuladores Faciais",
              "href": "/procedimentos/facial/bioestimuladores-faciais"
            }
          },
          {
            "link": {
              "label": "Skinbooster",
              "href": "/procedimentos/facial/skinbooster"
            }
          }
        ],
        "artigo": "/blog"
      },
      {
        "titulo": "Você tem pele sensível",
        "descricao": "Sua pele reage com facilidade a produtos e fatores externos. Use produtos suaves e procedimentos gentis.",
        "recomendacoes": [
          {
            "texto": "Produtos para pele sensível"
          },
          {
            "link": {
              "label": "Skinbooster",
              "href": "/procedimentos/facial/skinbooster"
            }
          },
          {
            "link": {
              "label": "Hidratação Profunda",
              "href": "/procedimentos/pele/hidratacao-profunda"
            }
          }
        ],
        "artigo": "/blog/pele-sensivel"
      }
    ]
  },
  {
    "slug": "procedure-facial",
    "titulo": "Qual procedimento facial te interessa?",
    "categoria": "Pele & Rosto",
    "descricao": "O que mais te incomoda no rosto, e quais procedimentos conversam com isso.",
    "perguntas": [
      {
        "texto": "Qual é seu principal objetivo?",
        "opcoes": [
          "Rejuvenescimento e antienvelhecimento",
          "Aumentar volume e definição",
          "Harmonização e simetria",
          "Tratamento de problemas de pele"
        ]
      }
    ],
    "resultados": [
      {
        "titulo": "Procedimentos Anti-Envelhecimento",
        "descricao": "Procedimentos que estimulam colágeno, hidratam e rejuvenescem a pele.",
        "recomendacoes": [
          {
            "link": {
              "label": "Toxina Botulínica",
              "href": "/procedimentos/facial/toxina-botulinica"
            },
            "texto": "Prevenção e tratamento de rugas"
          },
          {
            "link": {
              "label": "Bioestimuladores Faciais",
              "href": "/procedimentos/facial/bioestimuladores-faciais"
            },
            "texto": "Estimulação de colágeno próprio"
          },
          {
            "link": {
              "label": "Skinbooster",
              "href": "/procedimentos/facial/skinbooster"
            },
            "texto": "Hidratação e rejuvenescimento"
          },
          {
            "link": {
              "label": "Microagulhamento Facial",
              "href": "/procedimentos/facial/microagulhamento-facial"
            },
            "texto": "Estimulação de colágeno"
          },
          {
            "link": {
              "label": "Soroterapia",
              "href": "/procedimentos/bem-estar/soroterapia"
            },
            "texto": "Terapia celular avançada"
          }
        ],
        "artigo": "/blog/linhas-expressao-rugas"
      },
      {
        "titulo": "Procedimentos de Volume e Definição",
        "descricao": "Procedimentos que aumentam volume, definem contornos e criam simetria.",
        "recomendacoes": [
          {
            "link": {
              "label": "Preenchimento Labial",
              "href": "/procedimentos/facial/preenchimento-labial"
            },
            "texto": "Aumento e definição de lábios"
          },
          {
            "link": {
              "label": "Preenchimento Malar",
              "href": "/procedimentos/facial/preenchimento-malar"
            },
            "texto": "Elevação das maçãs do rosto"
          },
          {
            "link": {
              "label": "Preenchimento Mandibular",
              "href": "/procedimentos/facial/preenchimento-mandibular"
            },
            "texto": "Definição do contorno"
          },
          {
            "link": {
              "label": "Bioestimuladores Faciais",
              "href": "/procedimentos/facial/bioestimuladores-faciais"
            },
            "texto": "Restauração de volume"
          }
        ],
        "artigo": "/procedimentos/facial"
      },
      {
        "titulo": "Procedimentos de Harmonização",
        "descricao": "Procedimentos que harmonizam proporções e criam simetria facial.",
        "recomendacoes": [
          {
            "link": {
              "label": "Harmonização Facial",
              "href": "/procedimentos/facial/harmonizacao-facial"
            },
            "texto": "Equilibrio de proporções"
          },
          {
            "link": {
              "label": "Rinomodelação",
              "href": "/procedimentos/facial/rinomodelacao"
            },
            "texto": "Remodelação do nariz sem cirurgia"
          },
          {
            "link": {
              "label": "Preenchimento de Mento",
              "href": "/procedimentos/facial/preenchimento-mento"
            },
            "texto": "Definição do queixo"
          },
          {
            "link": {
              "label": "Fios de Sustentação",
              "href": "/procedimentos/facial/fios-de-sustentacao"
            },
            "texto": "Sustentação facial natural"
          }
        ],
        "artigo": "/procedimentos/facial"
      },
      {
        "titulo": "Procedimentos para Problemas de Pele",
        "descricao": "Procedimentos específicos para acne, cicatrizes, manchas e outros problemas.",
        "recomendacoes": [
          {
            "link": {
              "label": "Tratamento de Cicatrizes de Acne",
              "href": "/procedimentos/facial/cicatrizes-de-acne"
            },
            "texto": "Suavização de marcas"
          },
          {
            "link": {
              "label": "Peelings Faciais",
              "href": "/procedimentos/facial/peelings-faciais"
            },
            "texto": "Renovação da pele"
          },
          {
            "link": {
              "label": "Intradermoterapia Capilar (MMP)",
              "href": "/procedimentos/capilar/intradermoterapia-capilar"
            },
            "texto": "Microinjeções terapêuticas"
          },
          {
            "link": {
              "label": "Tratamento de Melasma",
              "href": "/procedimentos/pele/melasma"
            },
            "texto": "Remoção de manchas"
          },
          {
            "link": {
              "label": "Hidratação Profunda",
              "href": "/procedimentos/pele/hidratacao-profunda"
            },
            "texto": "Restauração de umidade"
          }
        ],
        "artigo": "/procedimentos/facial"
      }
    ]
  },
  {
    "slug": "procedure-body",
    "titulo": "Qual procedimento corporal te interessa?",
    "categoria": "Corpo & Procedimentos",
    "descricao": "O que você quer mudar no corpo, e por onde esse caminho costuma começar.",
    "perguntas": [
      {
        "texto": "Qual é seu principal objetivo?",
        "opcoes": [
          "Emagrecimento e definição",
          "Rejuvenescimento corporal",
          "Tratamento de imperfeições",
          "Redefinição de contornos"
        ]
      }
    ],
    "resultados": [
      {
        "titulo": "Procedimentos de Emagrecimento",
        "descricao": "Procedimentos não-invasivos para eliminar gordura localizada e definir contornos.",
        "recomendacoes": [
          {
            "link": {
              "label": "Lipo Enzimática",
              "href": "/procedimentos/corporal/lipo-enzimatica"
            },
            "texto": "Remoção de gordura localizada"
          },
          {
            "link": {
              "label": "Tratamento de Papada",
              "href": "/procedimentos/corporal/papada"
            },
            "texto": "Definição do queixo"
          },
          {
            "link": {
              "label": "Gordura Localizada",
              "href": "/procedimentos/corporal/gordura-localizada"
            },
            "texto": "Protocolo completo"
          }
        ],
        "artigo": "/procedimentos/corporal"
      },
      {
        "titulo": "Procedimentos de Rejuvenescimento",
        "descricao": "Procedimentos que rejuvenescem e revitalizam a pele corporal.",
        "recomendacoes": [
          {
            "link": {
              "label": "Bioestimuladores Corporais",
              "href": "/procedimentos/corporal/bioestimuladores-corporais"
            },
            "texto": "Estimulação de colágeno"
          },
          {
            "link": {
              "label": "Skinbooster",
              "href": "/procedimentos/facial/skinbooster"
            },
            "texto": "Hidratação profunda"
          },
          {
            "link": {
              "label": "Peelings Corporais",
              "href": "/procedimentos/corporal/peelings-corporais"
            },
            "texto": "Renovação de pele"
          },
          {
            "link": {
              "label": "Soroterapia",
              "href": "/procedimentos/bem-estar/soroterapia"
            },
            "texto": "Terapia celular avançada"
          }
        ],
        "artigo": "/procedimentos/corporal"
      },
      {
        "titulo": "Procedimentos Reparadores",
        "descricao": "Procedimentos para tratar cicatrizes, manchas, celulite e estrias.",
        "recomendacoes": [
          {
            "link": {
              "label": "Subcisão",
              "href": "/procedimentos/corporal/subcisao"
            },
            "texto": "Elevação de depressões"
          },
          {
            "link": {
              "label": "Tratamento de Estrias",
              "href": "/procedimentos/corporal/estrias"
            },
            "texto": "Suavização e renovação"
          },
          {
            "link": {
              "label": "Microagulhamento Corporal",
              "href": "/procedimentos/corporal/microagulhamento-corporal"
            },
            "texto": "Estimulação de reparo"
          },
          {
            "link": {
              "label": "Peeling Íntimo",
              "href": "/procedimentos/pele/peeling-intimo"
            },
            "texto": "Clareamento de manchas"
          }
        ],
        "artigo": "/procedimentos/corporal"
      },
      {
        "titulo": "Procedimentos de Contorno",
        "descricao": "Procedimentos que redefintem formas e aumentam volume onde desejado.",
        "recomendacoes": [
          {
            "link": {
              "label": "Preenchimento de Glúteo",
              "href": "/procedimentos/corporal/gluteo"
            },
            "texto": "Aumento e definição"
          },
          {
            "link": {
              "label": "Fios de Sustentação",
              "href": "/procedimentos/facial/fios-de-sustentacao"
            },
            "texto": "Sustentação corporal"
          },
          {
            "link": {
              "label": "Bioestimuladores Corporais",
              "href": "/procedimentos/corporal/bioestimuladores-corporais"
            },
            "texto": "Restauração de volume"
          },
          {
            "link": {
              "label": "Tratamento de Flacidez",
              "href": "/procedimentos/corporal/flacidez"
            },
            "texto": "Firmeza e sustentação"
          }
        ],
        "artigo": "/procedimentos/corporal"
      }
    ]
  }
];
