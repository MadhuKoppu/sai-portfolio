// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- This MUST be correct for v4
    autoprefixer: {},
  },
};