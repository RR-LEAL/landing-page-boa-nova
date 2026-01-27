import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Essencial para gerar os arquivos estáticos na pasta /out
  images: {
    unoptimized: true, // Necessário pois o GitHub Pages não suporta a otimização de imagem nativa do Next
  },
};

export default nextConfig;
