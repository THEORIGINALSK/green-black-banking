import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#50fa7b",
          foreground: "#0a0a0a",
        },
        secondary: {
          DEFAULT: "#1a1a1a",
          foreground: "#f8f8f2",
        },
        destructive: {
          DEFAULT: "#ff5555",
          foreground: "#f8f8f2",
        },
        muted: {
          DEFAULT: "#6272a4",
          foreground: "#f8f8f2",
        },
        accent: {
          DEFAULT: "#bd93f9",
          foreground: "#f8f8f2",
        },
        bank: {
          background: "#0a0a0a",
          card: "#1a1a1a",
          green: "#50fa7b",
          purple: "#bd93f9",
          red: "#ff5555",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;