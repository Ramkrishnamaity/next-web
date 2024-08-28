import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '401px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px'
    },
    colors: {
      "richBlack": "#0A171F",
      "softBlack": "#202D35",
      "richWhite": "#FFFFFF",
      "softWhite": "#EFF0F2",
      "richBlue": "#0071D9"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class"
};
export default config;
