module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    analytics: 'readonly',
    konnect: 'readonly'
  },
  extends: ['plugin:vue/recommended', '@vue/standard', '@vue/typescript'],
  plugins: ['only-warn'],
  rules: {
    'arrow-parens': 'off',
    'generator-star-spacing': 'off',
    'object-property-newline': 'error',
    'lines-between-class-members': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['block', 'block-like'],
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var', 'if']
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*'
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive'
      }
    ],
    curly: 'error',
    'eol-last': 'error',
    'no-mixed-operators': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'vue/custom-event-name-casing': 'off',
    'no-trailing-spaces': 'error',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'space-before-function-paren': 'off',
    'vue/attribute-hyphenation': 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        mocha: true
      }
    }
  ]
}
