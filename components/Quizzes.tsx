'use client';

import { useEffect } from 'react';

const QUIZ_SCRIPT = `(function(){

        const quizzes = {
            'skin-type': {
                title: 'Qual é o seu tipo de pele?',
                category: 'Pele & Rosto',
                description: 'Descubra seu tipo de pele e os melhores cuidados',
                questions: [
                    {
                        text: 'Como sua pele se comporta durante o dia?',
                        options: [
                            'Fica oleosa rapidamente, especialmente na zona T',
                            'Fica ressecada e desconfortável',
                            'Fica equilibrada, sem extremos',
                            'Varia bastante de acordo com a época'
                        ]
                    },
                    {
                        text: 'Como sua pele reage após limpeza?',
                        options: [
                            'Volta a ficar oleosa em poucas horas',
                            'Fica muito seca e apertada',
                            'Se mantém equilibrada',
                            'Fica vermelha e irritada'
                        ]
                    }
                ],
                results: {
                    0: {
                        title: 'Você tem pele oleosa',
                        description: 'Sua pele produz bastante sebo, necessitando de limpeza e controle regular. Recomendamos procedimentos que equilibrem a oleosidade e tratem acne.',
                        products: [
                            'Espectro de produtos de limpeza adequados',
                            'Procedimentos: <a href="/procedimentos/facial/microagulhamento-facial">Microagulhamento</a>, <a href="/procedimentos/facial/peelings-faciais">Peeling Facial</a>, <a href="/procedimentos/facial/skinbooster">Skinbooster</a>'
                        ],
                        articleLink: '/blog/pele-oleosa-acneica'
                    },
                    1: {
                        title: 'Você tem pele seca',
                        description: 'Sua pele necessita de hidratação intensiva e proteção. Recomendamos produtos nutritivos e procedimentos que restaurem a umidade.',
                        products: [
                            'Produtos hidratantes e nutritivos',
                            'Procedimentos: <a href="/procedimentos/pele/hidratacao-profunda">Hidratação Profunda</a>, <a href="/procedimentos/facial/skinbooster">Skinbooster</a>, <a href="/procedimentos/pele/rejuvenescimento">Rejuvenescimento</a>'
                        ],
                        articleLink: '/blog/pele-seca'
                    },
                    2: {
                        title: 'Você tem pele normal',
                        description: 'Sua pele está equilibrada. Mantenha uma rotina de cuidados básicos e considere procedimentos preventivos de antienvelhecimento.',
                        products: [
                            'Rotina equilibrada de skincare',
                            'Procedimentos preventivos: <a href="/procedimentos/facial/toxina-botulinica">Botox</a>, <a href="/procedimentos/facial/bioestimuladores-faciais">Bioestimulador</a>, <a href="/procedimentos/facial/skinbooster">Skinbooster</a>'
                        ],
                        articleLink: '/blog'
                    },
                    3: {
                        title: 'Você tem pele sensível',
                        description: 'Sua pele reage com facilidade a produtos e fatores externos. Use produtos suaves e procedimentos gentis.',
                        products: [
                            'Produtos para pele sensível',
                            'Procedimentos: <a href="/procedimentos/facial/skinbooster">Skinbooster</a>, <a href="/procedimentos/pele/hidratacao-profunda">Hidratação Profunda</a>'
                        ],
                        articleLink: '/blog/pele-sensivel'
                    }
                }
            },

            'procedure-facial': {
                title: 'Qual procedimento facial te interessa?',
                category: 'Pele & Rosto',
                description: 'Explore nossos procedimentos faciais disponíveis',
                questions: [
                    {
                        text: 'Qual é seu principal objetivo?',
                        options: [
                            'Rejuvenescimento e antienvelhecimento',
                            'Aumentar volume e definição',
                            'Harmonização e simetria',
                            'Tratamento de problemas de pele'
                        ]
                    }
                ],
                results: {
                    0: {
                        title: 'Procedimentos Anti-Envelhecimento',
                        description: 'Procedimentos que estimulam colágeno, hidratam e rejuvenescem a pele.',
                        products: [
                            '<a href="/procedimentos/facial/toxina-botulinica">Botox</a> - Prevenção e tratamento de rugas',
                            '<a href="/procedimentos/facial/bioestimuladores-faciais">Bioestimulador</a> - Estimulação de colágeno próprio',
                            '<a href="/procedimentos/facial/skinbooster">Skinbooster</a> - Hidratação e rejuvenescimento',
                            '<a href="/procedimentos/facial/microagulhamento-facial">Microagulhamento</a> - Estimulação de colágeno',
                            '<a href="/procedimentos/bem-estar/soroterapia">Soroterapia</a> - Terapia celular avançada'
                        ],
                        articleLink: '/blog/linhas-expressao-rugas'
                    },
                    1: {
                        title: 'Procedimentos de Volume e Definição',
                        description: 'Procedimentos que aumentam volume, definem contornos e criam simetria.',
                        products: [
                            '<a href="/procedimentos/facial/preenchimento-labial">Preenchimento Labial</a> - Aumento e definição de lábios',
                            '<a href="/procedimentos/facial/preenchimento-malar">Preenchimento Malar</a> - Elevação das maçãs do rosto',
                            '<a href="/procedimentos/facial/preenchimento-mandibular">Preenchimento de Mandíbula</a> - Definição do contorno',
                            '<a href="/procedimentos/facial/bioestimuladores-faciais">Bioestimulador</a> - Restauração de volume'
                        ],
                        articleLink: '/procedimentos/facial'
                    },
                    2: {
                        title: 'Procedimentos de Harmonização',
                        description: 'Procedimentos que harmonizam proporções e criam simetria facial.',
                        products: [
                            '<a href="/procedimentos/facial/harmonizacao-facial">Harmonização Facial Completa</a> - Equilibrio de proporções',
                            '<a href="/procedimentos/facial/rinomodelacao">Rinomodelação</a> - Remodelação do nariz sem cirurgia',
                            '<a href="/procedimentos/facial/preenchimento-mento">Preenchimento de Mento</a> - Definição do queixo',
                            '<a href="/procedimentos/facial/fios-de-sustentacao">Fios de PDO com Sustentação</a> - Sustentação facial natural'
                        ],
                        articleLink: '/procedimentos/facial'
                    },
                    3: {
                        title: 'Procedimentos para Problemas de Pele',
                        description: 'Procedimentos específicos para acne, cicatrizes, manchas e outros problemas.',
                        products: [
                            '<a href="/procedimentos/facial/cicatrizes-de-acne">Tratamento de Cicatrizes de Acne</a> - Suavização de marcas',
                            '<a href="/procedimentos/facial/peelings-faciais">Peeling Facial</a> - Renovação da pele',
                            '<a href="/procedimentos/capilar/intradermoterapia-capilar">Intradermoterapia</a> - Microinjeções terapêuticas',
                            '<a href="/procedimentos/pele/melasma">Tratamento de Manchas</a> - Remoção de manchas',
                            '<a href="/procedimentos/pele/hidratacao-profunda">Hidratação Profunda</a> - Restauração de umidade'
                        ],
                        articleLink: '/procedimentos/facial'
                    }
                }
            },

            'procedure-body': {
                title: 'Qual procedimento corporal te interessa?',
                category: 'Corpo & Procedimentos',
                description: 'Explore nossos procedimentos corporais',
                questions: [
                    {
                        text: 'Qual é seu principal objetivo?',
                        options: [
                            'Emagrecimento e definição',
                            'Rejuvenescimento corporal',
                            'Tratamento de imperfeições',
                            'Redefinição de contornos'
                        ]
                    }
                ],
                results: {
                    0: {
                        title: 'Procedimentos de Emagrecimento',
                        description: 'Procedimentos não-invasivos para eliminar gordura localizada e definir contornos.',
                        products: [
                            '<a href="/procedimentos/corporal/lipo-enzimatica">Lipo Enzimática</a> - Remoção de gordura localizada',
                            '<a href="/procedimentos/corporal/papada">Lipo Enzimática para Papada</a> - Definição do queixo',
                            '<a href="/procedimentos/corporal/gordura-localizada">Tratamento para Perda de Peso</a> - Protocolo completo'
                        ],
                        articleLink: '/procedimentos/corporal'
                    },
                    1: {
                        title: 'Procedimentos de Rejuvenescimento',
                        description: 'Procedimentos que rejuvenescem e revitalizam a pele corporal.',
                        products: [
                            '<a href="/procedimentos/corporal/bioestimuladores-corporais">Bioestimulador Corporal</a> - Estimulação de colágeno',
                            '<a href="/procedimentos/facial/skinbooster">Skinbooster Corporal</a> - Hidratação profunda',
                            '<a href="/procedimentos/corporal/peelings-corporais">Peeling Corporal</a> - Renovação de pele',
                            '<a href="/procedimentos/bem-estar/soroterapia">Soroterapia</a> - Terapia celular avançada'
                        ],
                        articleLink: '/procedimentos/corporal'
                    },
                    2: {
                        title: 'Procedimentos Reparadores',
                        description: 'Procedimentos para tratar cicatrizes, manchas, celulite e estrias.',
                        products: [
                            '<a href="/procedimentos/corporal/subcisao">Subcisão de Celulite</a> - Elevação de depressões',
                            '<a href="/procedimentos/corporal/estrias">Tratamento de Estrias</a> - Suavização e renovação',
                            '<a href="/procedimentos/corporal/microagulhamento-corporal">Microagulhamento Corporal</a> - Estimulação de reparo',
                            '<a href="/procedimentos/pele/peeling-intimo">Peeling Íntimo</a> - Clareamento de manchas'
                        ],
                        articleLink: '/procedimentos/corporal'
                    },
                    3: {
                        title: 'Procedimentos de Contorno',
                        description: 'Procedimentos que redefintem formas e aumentam volume onde desejado.',
                        products: [
                            '<a href="/procedimentos/corporal/gluteo">Preenchimento de Glúteos</a> - Aumento e definição',
                            '<a href="/procedimentos/facial/fios-de-sustentacao">Fios de PDO com Sustentação</a> - Sustentação corporal',
                            '<a href="/procedimentos/corporal/bioestimuladores-corporais">Bioestimulador Corporal</a> - Restauração de volume',
                            '<a href="/procedimentos/corporal/flacidez">Flacidez Corporal</a> - Firmeza e sustentação'
                        ],
                        articleLink: '/procedimentos/corporal'
                    }
                }
            }
        };

        let currentQuiz = null;
        let currentQuestion = 0;
        let userAnswers = [];

        function renderQuizzes() {
            const grid = document.getElementById('quizzesGrid');
            grid.innerHTML = '';

            Object.entries(quizzes).forEach(([key, quiz]) => {
                const card = document.createElement('div');
                card.className = 'quiz-card';
                card.innerHTML = \`
                    <span class="quiz-category">\${quiz.category}</span>
                    <h3>\${quiz.title}</h3>
                    <p>\${quiz.description}</p>
                    <button class="btn" onclick="startQuiz('\${key}')">Começar Quiz</button>
                \`;
                grid.appendChild(card);
            });
        }

        function startQuiz(quizKey) {
            currentQuiz = quizKey;
            currentQuestion = 0;
            userAnswers = [];
            openModal();
            renderQuestion();
        }

        function renderQuestion() {
            const quiz = quizzes[currentQuiz];
            const questions = quiz.questions;
            const totalQuestions = questions.length;

            if (currentQuestion < totalQuestions) {
                const question = questions[currentQuestion];
                const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

                document.getElementById('quizTitle').textContent = quiz.title;
                document.getElementById('progressFill').style.width = progressPercent + '%';
                document.getElementById('questionCounter').textContent = \`Pergunta \${currentQuestion + 1} de \${totalQuestions}\`;

                let optionsHTML = '';
                question.options.forEach((option, index) => {
                    const id = \`option-\${index}\`;
                    optionsHTML += \`
                        <div class="option">
                            <input type="radio" id="\${id}" name="answer" value="\${index}">
                            <label for="\${id}">\${option}</label>
                        </div>
                    \`;
                });

                document.getElementById('quizContent').innerHTML = \`
                    <div class="question">
                        <h3>\${question.text}</h3>
                        <div class="options">
                            \${optionsHTML}
                        </div>
                    </div>
                \`;

                document.getElementById('resultsContent').classList.remove('active');
                document.getElementById('navigationButtons').style.display = 'flex';
                document.getElementById('actionButtons').style.display = 'none';

                const prevBtn = document.getElementById('prevBtn');
                const nextBtn = document.getElementById('nextBtn');
                prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
                nextBtn.style.display = 'block';
            }
        }

        function nextQuestion() {
            const selected = document.querySelector('input[name="answer"]:checked');
            if (!selected) {
                alert('Por favor, selecione uma opção antes de continuar');
                return;
            }

            userAnswers[currentQuestion] = parseInt(selected.value);
            const quiz = quizzes[currentQuiz];

            if (currentQuestion < quiz.questions.length - 1) {
                currentQuestion++;
                renderQuestion();
            } else {
                showResults();
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                renderQuestion();

                const lastAnswer = userAnswers[currentQuestion];
                if (lastAnswer !== undefined) {
                    const option = document.querySelector(\`input[value="\${lastAnswer}"]\`);
                    if (option) option.checked = true;
                }
            }
        }

        function showResults() {
            const quiz = quizzes[currentQuiz];
            const lastAnswer = userAnswers[userAnswers.length - 1];
            const result = quiz.results[lastAnswer];

            if (!result) {
                alert('Erro ao processar resultado');
                return;
            }

            let productsHTML = '';
            result.products.forEach((product) => {
                productsHTML += \`<div class="result-item">\${product}</div>\`;
            });

            const resultsHTML = \`
                <h3 class="result-title">\${result.title}</h3>
                <p class="result-description">\${result.description}</p>

                <div class="result-section">
                    <h4>Recomendações</h4>
                    <div class="result-items">
                        \${productsHTML}
                    </div>
                </div>

                <div class="result-section">
                    <a href="\${result.articleLink}" style="color: var(--accent-main); text-decoration: none; font-weight: 600;">
                        Leia mais no blog →
                    </a>
                </div>
            \`;

            document.getElementById('resultsContent').innerHTML = resultsHTML;
            document.getElementById('resultsContent').classList.add('active');
            document.getElementById('quizContent').innerHTML = '';
            document.getElementById('navigationButtons').style.display = 'none';
            document.getElementById('actionButtons').style.display = 'flex';
        }

        function restartQuiz() {
            currentQuestion = 0;
            userAnswers = [];
            renderQuestion();
        }

        function openModal() {
            document.getElementById('quizModal').classList.add('active');
        }

        function closeQuiz() {
            document.getElementById('quizModal').classList.remove('active');
            currentQuiz = null;
            currentQuestion = 0;
            userAnswers = [];
        }

        renderQuizzes();
        var _b = function(id, fn) { var el = document.getElementById(id); if (el) el.onclick = fn; };
        _b('closeBtn', closeQuiz);
        _b('fecharBtn', closeQuiz);
        _b('refazerBtn', restartQuiz);
        _b('prevBtn', previousQuestion);
        _b('nextBtn', nextQuestion);
        window.startQuiz = startQuiz;
      
})();`;

import { SITE } from '@/lib/site';

function QuizzesMarkup() {
  return (
    <>
      <style>{`
        :root {
          --bg-primary: #FAFAF8;
          --bg-secondary: #F3F1F0;
          --bg-tertiary: #FFFFFF;
          --text-primary: #2A2A2A;
          --text-secondary: #5A5A5A;
          --text-light: #8B8B8B;
          --accent-main: #D8B5B0;
          --accent-light: #E8D4D1;
          --accent-pale: #F2E8E5;
          --success: #8BC186;
          --success-light: #D4E8D0;
          --border: #E8E8E8;
          --shadow: rgba(0, 0, 0, 0.08);
        }

        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) {
            --bg-primary: #1A1A1A;
            --bg-secondary: #252525;
            --bg-tertiary: #2F2F2F;
            --text-primary: #F5F5F5;
            --text-secondary: #BFBFBF;
            --text-light: #8B8B8B;
            --accent-main: #C9907A;
            --accent-light: #8B5E4D;
            --accent-pale: #4A3A35;
            --success: #6FA66B;
            --success-light: #3D5A39;
            --border: #3A3A3A;
            --shadow: rgba(0, 0, 0, 0.3);
          }
        }

        [data-theme="dark"] {
          --bg-primary: #1A1A1A;
          --bg-secondary: #252525;
          --bg-tertiary: #2F2F2F;
          --text-primary: #F5F5F5;
          --text-secondary: #BFBFBF;
          --text-light: #8B8B8B;
          --accent-main: #C9907A;
          --accent-light: #8B5E4D;
          --accent-pale: #4A3A35;
          --success: #6FA66B;
          --success-light: #3D5A39;
          --border: #3A3A3A;
          --shadow: rgba(0, 0, 0, 0.3);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: var(--text-primary);
          background: var(--bg-primary);
          line-height: 1.6;
        }

        .quizzes-wrapper {
          padding: 4rem 1rem;
          background: var(--bg-primary);
        }

        .quizzes-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        header {
          text-align: center;
          margin-bottom: 3rem;
        }

        h1 {
          font-family: 'Bodoni Moda', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .quizzes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .quiz-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .quiz-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px var(--shadow);
          border-color: var(--accent-main);
        }

        .quiz-category {
          display: inline-block;
          background: var(--accent-pale);
          color: var(--accent-main);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          width: fit-content;
        }

        .quiz-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .quiz-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          flex-grow: 1;
        }

        .quiz-card .btn {
          background: var(--accent-main);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s ease;
          align-self: flex-start;
        }

        .quiz-card .btn:hover {
          background: var(--accent-light);
        }

        /* Modal */
        .modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          align-items: center;
          justify-content: center;
        }

        .modal.active {
          display: flex;
        }

        .modal-content {
          background: var(--bg-primary);
          border-radius: 16px;
          padding: 2rem;
          max-width: 600px;
          width: 90%;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 1rem;
        }

        .modal-header h2 {
          font-size: 1.3rem;
          font-family: 'Bodoni Moda', serif;
          color: var(--text-primary);
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--text-secondary);
        }

        .close-btn:hover {
          color: var(--text-primary);
        }

        .progress-bar {
          width: 100%;
          height: 4px;
          background: var(--bg-secondary);
          border-radius: 2px;
          margin-bottom: 2rem;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--accent-main);
          transition: width 0.3s ease;
        }

        .question {
          margin-bottom: 2rem;
        }

        .question h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: var(--bg-secondary);
          border: 2px solid transparent;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .option:hover {
          background: var(--accent-pale);
          border-color: var(--accent-main);
        }

        .option input[type="radio"] {
          cursor: pointer;
          accent-color: var(--accent-main);
        }

        .option label {
          cursor: pointer;
          flex-grow: 1;
        }

        /* Results */
        .results {
          display: none;
        }

        .results.active {
          display: block;
        }

        .result-title {
          font-size: 1.5rem;
          font-family: 'Bodoni Moda', serif;
          color: var(--accent-main);
          margin-bottom: 1rem;
        }

        .result-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .result-section {
          margin-bottom: 1.5rem;
        }

        .result-section h4 {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.75rem;
        }

        .result-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .result-item {
          padding: 0.75rem;
          background: var(--bg-secondary);
          border-left: 3px solid var(--accent-main);
          border-radius: 4px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .result-item a {
          color: var(--accent-main);
          text-decoration: none;
          font-weight: 600;
        }

        .result-item a:hover {
          text-decoration: underline;
        }

        .modal-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          border-top: 1px solid var(--border);
          padding-top: 1.5rem;
        }

        .modal-buttons button {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: var(--accent-main);
          color: white;
        }

        .btn-primary:hover {
          background: var(--accent-light);
        }

        .btn-secondary {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .btn-secondary:hover {
          background: var(--accent-pale);
        }

        .btn-nav {
          flex: 0.5;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
        }

        .navigation {
          display: flex;
          gap: 0.75rem;
          justify-content: space-between;
          margin-top: 1.5rem;
        }

        .nav-info {
          font-size: 0.8rem;
          color: var(--text-light);
          align-self: center;
        }
      `}</style>

      <div className="quizzes-wrapper">
        <div className="quizzes-container">
          <header>
            <h1>Descubra seu Skincare Ideal</h1>
            <p className="subtitle">
              Faça nossos quizzes para encontrar os melhores produtos e procedimentos para sua pele, cabelo e corpo
            </p>
          </header>

          <div className="quizzes-grid" id="quizzesGrid"></div>
        </div>
      </div>

      <div className="modal" id="quizModal">
        <div className="modal-content">
          <div className="modal-header">
            <h2 id="quizTitle">Quiz Title</h2>
            <button className="close-btn" id="closeBtn">&times;</button>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" id="progressFill"></div>
          </div>

          <div id="quizContent"></div>

          <div id="resultsContent" className="results"></div>

          <div className="navigation" id="navigationButtons" style={{ display: 'none' }}>
            <button className="btn-nav btn-secondary" style={{ display: 'none' }} id="prevBtn">
              ← Anterior
            </button>
            <span className="nav-info" id="questionCounter"></span>
            <button className="btn-nav btn-secondary" style={{ display: 'none' }} id="nextBtn">
              Próxima →
            </button>
          </div>

          <div className="modal-buttons" id="actionButtons" style={{ display: 'none' }}>
            <button className="btn-primary" id="fecharBtn">
              Fechar
            </button>
            <button className="btn-secondary" id="refazerBtn">
              Refazer Quiz
            </button>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default function Quizzes() {
  useEffect(() => {
    const s = document.createElement('script');
    s.textContent = QUIZ_SCRIPT;
    document.body.appendChild(s);
    return () => { s.remove(); };
  }, []);

  return <QuizzesMarkup />;
}
