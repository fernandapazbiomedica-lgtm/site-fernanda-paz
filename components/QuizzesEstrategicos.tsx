'use client';

import { useState } from 'react';
import Link from 'next/link';

type QuizType = 'espelho' | 'pele' | 'envelhecimento' | 'procedimento' | 'skincare' | 'corpo' | 'cabelo';

interface QuizOption {
  id: string;
  label: string;
  category?: string;
}

interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
  multiple?: boolean;
}

interface QuizResult {
  id: string;
  title: string;
  emoji: string;
  description: string;
  whatItMeans: string;
  recommendations: string[];
  ctaText: string;
  ctaLink: string;
  relatedLink?: string;
}

interface QuizData {
  type: QuizType;
  title: string;
  subtitle: string;
  emoji: string;
  questions: QuizQuestion[];
  results: { [key: string]: QuizResult };
}

// Quiz #1: Espelho - O que está faltando?
const quizEspelho: QuizData = {
  type: 'espelho',
  title: 'Se você pudesse melhorar UMA coisa...',
  subtitle: 'O que mais te incomoda quando você se olha no espelho?',
  emoji: '🪞',
  questions: [
    {
      id: 'q1',
      text: 'O que mais te incomoda quando você se olha no espelho?',
      options: [
        { id: 'pele-cansada', label: 'Minha pele parece cansada' },
        { id: 'manchas', label: 'Tenho manchas ou melasma' },
        { id: 'definicao', label: 'Meu rosto perdeu definição' },
        { id: 'rugas', label: 'Tenho rugas ou linhas' },
        { id: 'labios', label: 'Meus lábios poderiam ser mais harmônicos' },
        { id: 'nariz', label: 'Meu nariz me incomoda' },
        { id: 'papada', label: 'Tenho papada' },
        { id: 'flacidez', label: 'Sinto meu rosto flácido' },
        { id: 'corpo', label: 'Tenho uma característica do corpo que me incomoda' },
        { id: 'cabelo', label: 'Estou preocupada com queda de cabelo' },
        { id: 'indeciso', label: 'Não sei exatamente, só quero me sentir melhor' },
        { id: 'explorar', label: 'Estou tudo bem, só explorando' },
      ],
    },
  ],
  results: {
    'pele-cansada': {
      id: 'pele-cansada',
      title: 'Rejuvenescimento e Qualidade da Pele',
      emoji: '✨',
      description: 'FOCO IDENTIFICADO: REJUVENESCIMENTO E QUALIDADE',
      whatItMeans: 'Quando a pele perde aquele brilho e parece "fosca", geralmente é sinal de que precisa de mais estímulo, renovação e qualidade celular.',
      recommendations: [
        'Skincare personalizado com ativos específicos',
        'Toxina botulínica (reduz cansaço visual)',
        'Skinbooster (hidratação profunda)',
        'Bioestimuladores (estímulo de colágeno)',
        'Peeling ou protocolos de rejuvenescimento',
        'Avaliação clínica para protocolo personalizado',
      ],
      ctaText: 'QUERO DESCOBRIR MEU PROTOCOLO',
      ctaLink: '/quizzes/pele-envelhecimento',
      relatedLink: '/blog?tag=rejuvenescimento',
    },
    manchas: {
      id: 'manchas',
      title: 'Uniformização e Proteção',
      emoji: '🌙',
      description: 'FOCO IDENTIFICADO: UNIFORMIZAÇÃO E PROTEÇÃO',
      whatItMeans: 'Manchas e melasma são sinais de que a pele precisa tanto de tratamento profissional quanto de proteção específica.',
      recommendations: ['Skincare com proteção solar extrema + ativos despigmentantes', 'Peeling específico para manchas', 'Laser ou luz pulsada (conforme avaliação)', 'Protocolos combinados para melasma', 'Skinbooster + cuidados contínuos'],
      ctaText: 'QUERO AVALIAR MINHA PELE',
      ctaLink: '/quizzes/pele-manchas',
      relatedLink: '/blog/melasma-manchas',
    },
    definicao: {
      id: 'definicao',
      title: 'Contorno e Harmonização',
      emoji: '📐',
      description: 'FOCO IDENTIFICADO: CONTORNO E HARMONIZAÇÃO',
      whatItMeans: 'Quando o rosto perde definição, geralmente é combinação de perda de volume, flacidez leve e redistribuição de gordura com a idade.',
      recommendations: ['Bioestimuladores (reconstroem estrutura)', 'Preenchimento estratégico (malar, mandíbula, mento)', 'Toxina botulínica (complemento)', 'Avaliação de harmonização facial', 'Protocolo combinado personalizado'],
      ctaText: 'QUAL PROCEDIMENTO COMBINA COMIGO?',
      ctaLink: '/quizzes/procedimento-facial',
      relatedLink: '/blog/harmonia-facial',
    },
    rugas: {
      id: 'rugas',
      title: 'Dinâmica Facial e Qualidade da Pele',
      emoji: '✍️',
      description: 'FOCO IDENTIFICADO: DINÂMICA FACIAL E QUALIDADE',
      whatItMeans: 'Linhas podem ser dinâmicas (aparecem quando mexe a face) ou estáticas (aparecem sempre). Cada tipo tem estratégia diferente.',
      recommendations: ['Toxina botulínica (rugas dinâmicas)', 'Skincare com retinóides e peptídios', 'Skinbooster (suaviza rugas estáticas)', 'Bioestimuladores (melhora qualidade)', 'Combinação de estratégias'],
      ctaText: 'DESCOBRIR O MELHOR PROCEDIMENTO',
      ctaLink: '/quizzes/procedimento-facial',
      relatedLink: '/procedimentos/facial/botox',
    },
    labios: {
      id: 'labios',
      title: 'Harmonização de Lábios',
      emoji: '💋',
      description: 'FOCO IDENTIFICADO: HARMONIZAÇÃO DE LÁBIOS',
      whatItMeans: 'Lábios são grande parte da harmonia facial. Pode ser falta de volume, assimetria ou proporção.',
      recommendations: ['Preenchimento de lábios (volume + definição)', 'Harmonização com outras regiões do rosto', 'Design de sorriso', 'Avaliação de proporção facial'],
      ctaText: 'AGENDAR AVALIAÇÃO',
      ctaLink: 'https://wa.me/seunumero?text=Gostaria%20de%20agendar%20uma%20avaliação%20de%20lábios',
      relatedLink: '/procedimentos/facial/preenchimento-labial',
    },
    nariz: {
      id: 'nariz',
      title: 'Harmonização Nasal',
      emoji: '👃',
      description: 'FOCO IDENTIFICADO: HARMONIZAÇÃO NASAL',
      whatItMeans: 'Pode ser tamanho, formato, projeção ou proporção com o rosto.',
      recommendations: ['Rinomodelação com ácido hialurônico', 'Avaliação de harmonização facial', 'Pode ser combinado com outros procedimentos'],
      ctaText: 'AGENDAR AVALIAÇÃO',
      ctaLink: 'https://wa.me/seunumero',
      relatedLink: '/procedimentos/facial/rinomodelacao',
    },
    papada: {
      id: 'papada',
      title: 'Definição de Mandíbula',
      emoji: '👤',
      description: 'FOCO IDENTIFICADO: DEFINIÇÃO DE MANDÍBULA',
      whatItMeans: 'Papada pode ser gordura localizada, flacidez ou combinação dos dois.',
      recommendations: ['Protocolo específico para papada', 'Possível combinação com outros procedimentos', 'Avaliação para determinar melhor estratégia'],
      ctaText: 'AGENDAR AVALIAÇÃO',
      ctaLink: 'https://wa.me/seunumero',
      relatedLink: '/procedimentos/corporal',
    },
    flacidez: {
      id: 'flacidez',
      title: 'Sustentação e Firmeza',
      emoji: '✨',
      description: 'FOCO IDENTIFICADO: SUSTENTAÇÃO E FIRMEZA',
      whatItMeans: 'Quando o rosto perde sustentação, geralmente é sinal de redução de colágeno.',
      recommendations: ['Bioestimulador (reconstruir colágeno)', 'Possível combinação com outros procedimentos', 'Skincare potencializado'],
      ctaText: 'AGENDAR AVALIAÇÃO',
      ctaLink: 'https://wa.me/seunumero',
      relatedLink: '/procedimentos/facial/bioestimulador',
    },
    corpo: {
      id: 'corpo',
      title: 'Protocolo Corporal',
      emoji: '👙',
      description: 'FOCO IDENTIFICADO: PROTOCOLO CORPORAL',
      whatItMeans: 'Pode ser celulite, estrias, gordura localizada, flacidez ou combinação.',
      recommendations: ['Avaliação corporal específica', 'Protocolo personalizado para sua região', 'Pode envolver vários procedimentos'],
      ctaText: 'FAZER QUIZ CORPORAL',
      ctaLink: '/quizzes/corpo-incomoda',
      relatedLink: '/procedimentos/corporal',
    },
    cabelo: {
      id: 'cabelo',
      title: 'Saúde Capilar',
      emoji: '💇‍♀️',
      description: 'FOCO IDENTIFICADO: SAÚDE CAPILAR',
      whatItMeans: 'Queda excessiva, afinamento, ou falhas no cabelo.',
      recommendations: ['Avaliação capilar completa', 'Investigação da causa', 'Protocolo de tratamento personalizado'],
      ctaText: 'FAZER QUIZ CAPILAR',
      ctaLink: '/quizzes/cabelo-queda',
      relatedLink: '/procedimentos/capilar',
    },
    indeciso: {
      id: 'indeciso',
      title: 'Avaliação Global',
      emoji: '🌟',
      description: 'FOCO IDENTIFICADO: AVALIAÇÃO GLOBAL',
      whatItMeans: 'Às vezes o incômodo não é um problema específico, mas uma sensação geral de querer se sentir melhor.',
      recommendations: ['Avaliação clínica completa', 'Profissional identifica oportunidades', 'Protocolo personalizado e realista'],
      ctaText: 'AGENDAR AVALIAÇÃO COMPLETA',
      ctaLink: 'https://wa.me/seunumero',
      relatedLink: '/procedimentos',
    },
    explorar: {
      id: 'explorar',
      title: 'Exploração',
      emoji: '👀',
      description: 'FOCO IDENTIFICADO: EXPLORAÇÃO',
      whatItMeans: 'Ótimo! Sem pressão nenhuma. Aqui você pode explorar os procedimentos e entender melhor o que cada um faz.',
      recommendations: ['Explorar quizzes específicos por interesse', 'Ler artigos do blog', 'Ver antes e depois', 'Seguir redes sociais para dicas'],
      ctaText: 'VER PROCEDIMENTOS',
      ctaLink: '/procedimentos',
      relatedLink: '/blog',
    },
  },
};

export default function QuizzesEstrategicos() {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizType | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const quizzes = {
    espelho: quizEspelho,
    pele: quizEspelho,
    envelhecimento: quizEspelho,
    procedimento: quizEspelho,
    skincare: quizEspelho,
    corpo: quizEspelho,
    cabelo: quizEspelho,
  };

  const currentQuiz = selectedQuiz ? quizzes[selectedQuiz] : null;
  const currentQuestion = currentQuiz ? currentQuiz.questions[currentQuestionIndex] : null;

  const handleSelectAnswer = (optionId: string) => {
    if (currentQuestion?.multiple) {
      setSelectedAnswers((prev) =>
        prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]
      );
    } else {
      setSelectedAnswers([optionId]);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswers.length === 0) return;

    if (currentQuiz && currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswers([]);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setSelectedQuiz(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  if (!selectedQuiz) {
    return (
      <section className="bg-superficie py-20">
        <div className="wrap">
          <h2 className="display text-d2 text-center mb-8">Descubra Seu Protocolo</h2>
          <p className="corpo text-center mb-12 max-w-2xl mx-auto">
            Responda alguns quizzes rápidos e receba recomendações personalizadas de procedimentos
            e skincare baseadas nas suas necessidades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedQuiz('espelho')}
              className="bg-white rounded-lg p-8 text-left hover:shadow-lg transition cursor-pointer border border-linha"
            >
              <div className="text-3xl mb-4">🪞</div>
              <h3 className="display text-d5 mb-2">Se você pudesse melhorar UMA coisa...</h3>
              <p className="corpo text-tinta-3">O que mais te incomoda quando você se olha no espelho?</p>
            </button>

            <button
              onClick={() => setSelectedQuiz('pele')}
              className="bg-white rounded-lg p-8 text-left hover:shadow-lg transition cursor-pointer border border-linha"
            >
              <div className="text-3xl mb-4">✨</div>
              <h3 className="display text-d5 mb-2">O que sua pele pede?</h3>
              <p className="corpo text-tinta-3">Descubra qual rotina combina com você</p>
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!showResult && currentQuestion && currentQuiz) {
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;

    return (
      <section className="bg-superficie py-20 min-h-screen">
        <div className="wrap max-w-2xl">
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <p className="eyebrow">Pergunta {currentQuestionIndex + 1} de {currentQuiz.questions.length}</p>
              <button
                onClick={handleRestart}
                className="text-sm text-tinta-3 hover:text-tinta transition"
              >
                ← Voltar
              </button>
            </div>
            <div className="w-full bg-linha h-1 rounded-full">
              <div
                className="bg-roxo h-1 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <h2 className="display text-d3 mb-8">{currentQuestion.text}</h2>

          <div className="space-y-3 mb-12">
            {currentQuestion.options.map((option: QuizOption) => (
              <label
                key={option.id}
                className="flex items-center p-4 border border-linha rounded-lg cursor-pointer hover:bg-papel transition"
              >
                <input
                  type={currentQuestion.multiple ? 'checkbox' : 'radio'}
                  name="answer"
                  value={option.id}
                  checked={selectedAnswers.includes(option.id)}
                  onChange={() => handleSelectAnswer(option.id)}
                  className="mr-4"
                />
                <span className="corpo">{option.label}</span>
              </label>
            ))}
          </div>

          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswers.length === 0}
            className="btn w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Proximo
          </button>
        </div>
      </section>
    );
  }

  if (showResult && currentQuiz && selectedAnswers.length > 0) {
    const resultId = selectedAnswers[0];
    const result = currentQuiz.results[resultId];

    if (!result) {
      return (
        <section className="bg-superficie py-20">
          <div className="wrap text-center">
            <p>Resultado nao encontrado</p>
            <button onClick={handleRestart} className="btn mt-8">
              Começar novamente
            </button>
          </div>
        </section>
      );
    }

    return (
      <section className="bg-superficie py-20">
        <div className="wrap max-w-2xl">
          <div className="mb-12">
            <p className="eyebrow mb-2">{result.emoji} {result.description}</p>
            <h2 className="display text-d2 mb-4">{result.title}</h2>
            <p className="corpo text-lg mb-6">{result.whatItMeans}</p>
          </div>

          <div className="bg-papel rounded-lg p-8 mb-12">
            <h3 className="eyebrow mb-4">Possibilidades que fazem sentido para você:</h3>
            <ul className="space-y-3">
              {result.recommendations.map((rec: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-3">→</span>
                  <span className="corpo">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 mb-8">
            <a href={result.ctaLink} className="btn block text-center py-3">
              {result.ctaText}
            </a>
            {result.relatedLink && (
              <a href={result.relatedLink} className="btn-linha block text-center py-3">
                VER MAIS INFORMACOES
              </a>
            )}
          </div>

          <button
            onClick={handleRestart}
            className="w-full text-center text-tinta-3 hover:text-tinta transition py-3"
          >
            ← Fazer outro quiz
          </button>

          <div className="mt-12 pt-8 border-t border-linha">
            <p className="text-sm text-tinta-3 italic">
              <strong>Importante:</strong> Este resultado nao significa que você "precisa" de um procedimento específico.
              Ele mostra qual aspecto merece mais atencao. A indicacao definitiva depende de avaliacao profissional individual.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return null;
}
