import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarraWhatsApp } from '@/components/ui';
import { SITE , PERFIS } from '@/lib/site';

/**
 * Fontes via <link> do Google Fonts.
 * Para self-host (elimina requisição externa e CLS), troque por next/font/google:
 *   import { Playfair_Display, Manrope, Sacramento } from 'next/font/google'
 * e aplique as variáveis no <html>. Ver DESIGN_SYSTEM.md.
 */
const FONTS =
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Manrope:wght@300;400;500;600;700&family=Sacramento&display=swap';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.nome} | ${SITE.papel} no ${SITE.cidade}`,
    template: `%s | ${SITE.nome}`,
  },
  description:
    `Harmonização facial, estética avançada e rejuvenescimento no ${SITE.cidade}, ${SITE.uf}. Avaliação individual com a ${SITE.nome}, ${SITE.papel.toLowerCase()}.`,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: SITE.nome,
    url: SITE.url,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: SITE.nome,
  url: SITE.url,
  telephone: `+${SITE.whatsapp.numero}`,
  medicalSpecialty: 'Dermatology',
  areaServed: [
    { '@type': 'City', name: 'Guarujá, SP' },
    { '@type': 'City', name: 'Santos, SP' },
    { '@type': 'City', name: 'São Vicente, SP' },
    { '@type': 'City', name: 'Praia Grande, SP' },
    { '@type': 'City', name: 'Bertioga, SP' },
    { '@type': 'City', name: 'Cubatão, SP' },
    { '@type': 'City', name: 'Mongaguá, SP' },
    { '@type': 'City', name: 'Itanhaém, SP' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.cidade,
    addressRegion: SITE.uf,
    addressCountry: 'BR',
  },
  sameAs: PERFIS,
  employee: {
    '@type': 'Person',
    name: SITE.nome,
    jobTitle: SITE.papel,
    identifier: SITE.crbm,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:top-4 focus:left-4 focus:bg-roxo focus:text-white focus:px-4 focus:py-2"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <BarraWhatsApp />
      </body>
    </html>
  );
}
