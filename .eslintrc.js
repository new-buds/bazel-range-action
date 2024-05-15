module.exports = {
  extends: [
    "airbnb-base",
    "eslint-config-prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-plugin-jest/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-plugin-node", "eslint-plugin-jest"],
  env: {
    node: true,
    es6: true,
    "jest/globals": true,
  },
};
