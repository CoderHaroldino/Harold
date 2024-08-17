module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: 'packages/@Viking/angular/**',
      options: {
        semi: true,
      },
    },
  ],
}
