module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended'
    // 'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json']
      },
      react: {
        version: 'detect'
      }
    }
  },
  rules: {
    'unicorn/prefer-module': 'off',
    'no-unused-vars': 1,
    'no-console': 'off',
    'unicorn/filename-case': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'no-shadow': 'off'
    // '@typescript-eslint/no-shadow': ['error']
  }
  // rules: {
  //   'import/extensions': [
  //     ERROR,
  //     'ignorePackages',
  //     {
  //       ts: 'never',
  //       tsx: 'never',
  //       json: 'never',
  //       js: 'never'
  //     }
  //   ]
  // }
}
