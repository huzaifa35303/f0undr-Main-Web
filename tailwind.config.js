/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--color-bg)",
          subtle: "var(--color-bg-subtle)",
          card: "var(--color-bg-card)",
          hover: "var(--color-bg-hover)",
        },
        border: {
          subtle: "var(--color-border-subtle)",
          strong: "var(--color-border-strong)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          subtle: "var(--color-accent-subtle)",
          glow: "var(--color-accent-glow)",
        },
        tag: {
          bg: "var(--color-tag-bg)",
          text: "var(--color-tag-text)",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
