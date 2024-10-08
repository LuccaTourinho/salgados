/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // 1. Encontra a regra de loader existente que trata arquivos SVG.
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg'),
      );
  
      config.module.rules.push(
        // 2. Reaplica a regra existente do file-loader, mas apenas para SVGs que têm ?url na importação.
        {
          ...fileLoaderRule,  // Copia a configuração existente
          test: /\.svg$/i,    // Aplica apenas para arquivos .svg
          resourceQuery: /url/, // Aplica a regra quando o SVG é importado com `?url`
        },
        // 3. Adiciona uma nova regra para converter SVGs em componentes React, exceto os que têm ?url.
        {
          test: /\.svg$/i, // Aplica a nova regra apenas para arquivos .svg
          issuer: fileLoaderRule.issuer,  // Mantém as regras de quem pode importar (CSS, JS, etc.)
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // Exclui ?url
          use: ['@svgr/webpack'],  // Usa o loader do SVGR para transformar o SVG em componente React
        },
      );
  
      // 4. Exclui arquivos .svg da regra padrão do file-loader, já que agora o SVGR lida com eles.
      fileLoaderRule.exclude = /\.svg$/i;
  
      return config; // Retorna a configuração final do Webpack
    },
  };
  
  export default nextConfig;
  