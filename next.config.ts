import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Export estático: gera a pasta /out com HTML/CSS/JS puros.
  // Ideal para hospedar no Netlify (publicação dos arquivos estáticos).
  output: "export",
  // Fixa a raiz de tracing no diretório do projeto, evitando que o Next
  // infira um workspace incorreto por causa de package-lock.json em pastas-pai.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;