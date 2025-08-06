import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get the current filename and dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Compatibility for extending Next.js ESLint config
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Your ESLint configuration array, extending Next.js rules
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    // Add tailwind plugin
    plugins: ["tailwindcss"],

    // Enable tailwindcss rules (optional)
    rules: {
      "tailwindcss/classnames-order": "warn",  // Example: Warn on class order issues
      "tailwindcss/no-custom-classname": "off", // Example: Turn off custom classname rule
    },
  },
];

export default eslintConfig;