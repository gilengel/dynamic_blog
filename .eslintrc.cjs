/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  plugins: ["prettier"],
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },

  rules: {
    // Allow devdependencies in test cases
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],

    // Do not force file extensions for ts, js, jsx, tsx files on import
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },

  // Fix eslint not resolving imports to ts files
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};
