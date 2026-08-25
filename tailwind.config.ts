import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        papel: '#FBF8FB',
        superficie: '#F3ECF2',
        malva: { DEFAULT: '#C9AEC4', nevoa: '#EAE0EA' },
        tinta: { DEFAULT: '#15101B', 2: '#4A3F55', 3: '#7C6E88' },
        linha: '#DCCFDB',
        roxo: '#8B0FC4',
        violeta: '#A855F7',
        /* preto com viés violeta — não é #000 puro de propósito:
           o preto absoluto achata a foto de pele e faz o roxo parecer colado.
           Este mantém o roxo pertencendo à página. */
        ameixa: { DEFAULT: '#0D0911', claro: '#191021' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Didot', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      fontSize: {
        // escala tipográfica fixa — nada fora dela
        'eyebrow': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.22em' }],
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.14em' }],
        'd1': ['clamp(2.75rem, 5.4vw, 4.75rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'd2': ['clamp(1.95rem, 3.6vw, 3.15rem)', { lineHeight: '1.04', letterSpacing: '-0.018em' }],
        'd3': ['clamp(1.45rem, 2.3vw, 2.05rem)', { lineHeight: '1.15', letterSpacing: '-0.012em' }],
      },
      maxWidth: { medida: '62ch' },
      transitionTimingFunction: { suave: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      keyframes: {
        surgir: { from: { opacity: '0', transform: 'translateY(14px)' }, to: { opacity: '1', transform: 'none' } },
      },
      animation: { surgir: 'surgir 0.7s cubic-bezier(0.22,1,0.36,1) both' },
    },
  },
  plugins: [],
};
export default config;
