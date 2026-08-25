import Image from 'next/image';

/**
 * Foto — imagem real, para substituir <Pendente> e <Media> sem src.
 *
 * Arquivo novo: não altera nada do que já existe. Onde entrar, troca a
 * chamada de <Media .../> ou <Pendente .../> por <Foto .../>.
 *
 * Dois modos:
 *   cover  (padrão) — preenche o quadro e corta o excedente. Retratos, clínica.
 *   contain          — cabe inteira dentro do quadro, sobre fundo névoa.
 *                      É o modo dos antes/depois: comparação não se corta.
 */
export function Foto({
  src,
  alt,
  className = '',
  modo = 'cover',
  claro = false,
  prioridade = false,
}: {
  src: string;
  alt: string;
  className?: string;
  modo?: 'cover' | 'contain';
  /** true quando a foto está sobre fundo escuro — muda a cor do quadro */
  claro?: boolean;
  /** true só no hero — carrega antes do resto */
  prioridade?: boolean;
}) {
  const fundo = modo === 'contain' ? (claro ? 'bg-white/[0.04]' : 'bg-malva-nevoa') : '';

  return (
    <div className={`relative overflow-hidden ${fundo} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
        priority={prioridade}
        className={modo === 'contain' ? 'object-contain' : 'object-cover'}
      />
    </div>
  );
}

export default Foto;
