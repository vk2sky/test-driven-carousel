module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],

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
    ]
  },

  settings: {
    react: {
      version: "16.7.0"
    }
  }
};
