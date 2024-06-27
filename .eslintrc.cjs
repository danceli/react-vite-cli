module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime", // react补充配置
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "node_modules"],
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react-refresh", "@typescript-eslint", "react", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": ["off"], //允许使用any
    "@typescript-eslint/ban-ts-comment": "off", //允许使用@ts-ignore
    "@typescript-eslint/no-non-null-assertion": "off", //允许使用非空断言
    "no-console": [
      //提交时不允许有console.log
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-debugger": "warn", //提交时不允许有debugger
  },
};
