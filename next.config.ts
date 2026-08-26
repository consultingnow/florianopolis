import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Fixa a raiz de tracing no diretório do projeto, evitando que o Next
  // infira um workspace incorreto por causa de package-lock.json em pastas-pai.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;