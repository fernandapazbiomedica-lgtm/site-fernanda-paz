import type { MetadataRoute } from 'next';
import { CATEGORIAS, PROCEDIMENTOS } from '@/lib/procedimentos';
import { ARTIGOS } from '@/lib/blog';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  const fixas: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: agora, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/procedimentos`, lastModified: agora, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/sobre`, lastModified: agora, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE.url}/resultados`, lastModified: agora, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/blog`, lastModified: agora, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE.url}/contato`, lastModified: agora, changeFrequency: 'yearly', priority: 0.6 },
  ];

  const categorias: MetadataRoute.Sitemap = CATEGORIAS.map((c) => ({
    url: `${SITE.url}/procedimentos/${c.slug}`,
    lastModified: agora,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const procedimentos: MetadataRoute.Sitemap = PROCEDIMENTOS.map((p) => ({
    url: `${SITE.url}/procedimentos/${p.categoria}/${p.slug}`,
    lastModified: agora,
    changeFrequency: 'monthly',
    priority: p.destaque ? 0.85 : 0.7,
  }));

  const artigos: MetadataRoute.Sitemap = ARTIGOS.map((a) => ({
    url: `${SITE.url}/blog/${a.slug}`,
    lastModified: new Date(a.data),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...fixas, ...categorias, ...procedimentos, ...artigos];
}
