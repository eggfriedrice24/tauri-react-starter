import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  typescript: true,
  formatters: true,
  react: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  ignores: [
    "**/dist/**",
    "**/target/**",
    "**/src-tauri/gen/**",
    "**/src-tauri/target/**",
    "**/.tauri/**",
    "**/node_modules/**",
    "**/.github/**",
  ],
}, {
  rules: {
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["warn"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "react/prefer-destructuring-assignment": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-refresh/only-export-components": "warn",
    "node/prefer-global/process": "off",
  },
});
