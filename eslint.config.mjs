import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    rules: {
      "react/no-unescaped-entities": "off"
    }
  },
  {
    ignores: [".next/**", "node_modules/**", ".local-submissions/**"]
  }
];

export default config;
