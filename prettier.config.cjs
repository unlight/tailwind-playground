module.exports = {
  printWidth: 80,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.{json,yml}',
      options: {
        tabWidth: 2,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
};
