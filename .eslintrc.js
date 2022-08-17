module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
    },
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {},
  settings: {
    react: {
      version: 'latest',
    },
  },
};
