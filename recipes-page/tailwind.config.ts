import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        stone: {
          100: "hsl(30, 54%, 90%)",
          150: "hsl(30, 18%, 87%)",
          600: "hsl(30, 10%, 34%)",
          900: "hsl(24, 5%, 18%)"
        },
        brown:{
          800: "hsl(14, 45%, 36%)"
        },
        rose:{
          800: "hsl(332, 51%, 32%)",
          50: "hsl(330, 100%, 98%)"
        }

      },
      fontFamily: {
        "young-serif": ["var(--font-young-serif)", "serif"],
        "outfit": ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
