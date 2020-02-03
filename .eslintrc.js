const isProduction = process.env.NODE_ENV === 'production';

const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'babel',
    'import',
    'jsx-a11y',
    'react',
    '@typescript-eslint'
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  globals: {
    '$Diff': true,
  },
  rules: {
    'comma-dangle': [
      error,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'consistent-return': off,
    'import/default': off,
    'import/extensions': off,
    'import/named': off,
    'import/namespace': off,
    'import/no-cycle': off,
    'import/no-deprecated': off,
    'import/no-duplicates': off,
    'import/no-extraneous-dependencies': off,
    'import/no-named-as-default': off,
    'import/no-named-as-default-member': off,
    'import/no-self-import': off,
    'import/no-useless-path-segments': off,
    'import/no-unresolved': off,
    'import/order': off,
    'import/prefer-default-export': off,
    indent: error,
    'jsx-a11y/alt-text': off,
    'max-len': [error, 150, { ignoreComments: true }],
    'no-console': off,
    'no-multiple-empty-lines': [error, { max: error, maxEOF: error }],
    'no-unused-vars': off,
    'quotes': [error, 'single'],
    'react/destructuring-assignment': off,
    'react/jsx-filename-extension': [error, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': off,
    'react/prop-types': off,
    'react/state-in-constructor': off,
    '@typescript-eslint/indent': off,
    '@typescript-eslint/no-unused-vars': [error, { ignoreRestSiblings: true }],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    jsx: true,
    project: './tsconfig.dev.json',
    sourceType: 'module',
    tsconfigRootDir: '.',
    useJSXTextNode: true,
  },
  overrides: [],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      },
      typescript: {},
    },
  },
};
