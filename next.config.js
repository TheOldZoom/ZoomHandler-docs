const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  output: 'standalone',
  distDir: '.vercel/output/static',
})

module.exports = withNextra()
