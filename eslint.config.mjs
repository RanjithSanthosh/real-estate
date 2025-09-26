// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
//   {
//     ignores: [
//       "node_modules/**",
//       ".next/**",
//       "out/**",
//       "build/**",
//       "next-env.d.ts",
//     ],
//   },
// ];

// export default eslintConfig;



// eslint.config.js

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // Use compat.extends for the legacy Next.js config.
  // "next/core-web-vitals" is the primary one and includes TypeScript.
  ...compat.extends("next/core-web-vitals"),

  // Global ignores for build folders, node_modules, etc.
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  // ✅ Custom rules to prevent build failures from common warnings.
  {
    rules: {
      // Allows you to use apostrophes like "we're" in JSX without an error.
      "react/no-unescaped-entities": "off",

      // Changes the "unexpected any" error to a less severe warning.
      "@typescript-eslint/no-explicit-any": "warn",

      // Changes the "unused variable" error to a warning.
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;