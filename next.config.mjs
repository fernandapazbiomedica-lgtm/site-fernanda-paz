/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    /* Fotos de produto vêm do CDN da Shopee, servidas pelo próprio anúncio de
       afiliado. Se a Shopee trocar a URL de um produto, a imagem some — por
       isso vale, mais pra frente, baixar e servir do nosso /public. */
    remotePatterns: [{ protocol: 'https', hostname: 'down-br.img.susercontent.com' }],
  },
};
export default nextConfig;
