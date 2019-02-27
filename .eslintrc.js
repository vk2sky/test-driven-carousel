module.exports = {
  plugins: [
    "react"
  ],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],

  parser: "babel-eslint",

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",

    ecmaFeatures: {
      jsx: true
    }
  },

  env: {
    node: true
  },

  rules: {
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true
      }
    ],

    "comma-dangle": [
      "error",
      "always-multiline"
    ],

    "no-unused-vars": ["error", { varsIgnorePattern: "^_"}],
  },

  settings: {
    react: {
      version: "16.7.0"
    }
  }
};
