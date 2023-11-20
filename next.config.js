// next.config.js
module.exports = {
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
  // Adicione outras configurações, se necessário...
  async redirects() {
    return [
      {
        source: '/_next/:path*',
        destination: '/my-portfolio/_next/:path*',
        permanent: true,
      },
    ];
  },
};
