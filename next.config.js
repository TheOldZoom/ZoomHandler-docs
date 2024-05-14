const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  output: "export", // Use 'export' instead of 'standalone' for static exports
  images: {
    unoptimized: true, // Disable image optimization for static export compatibility
  },
});

module.exports = withNextra();
