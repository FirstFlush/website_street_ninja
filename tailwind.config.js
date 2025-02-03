/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D72638",
          "dark-10": "#c22232",
          "dark-20": "#ac1e2d",
          "light-10": "#db3c4c",
          "light-20": "#df5161"
        },
        error: "#FF3B30",
        background: {
          DEFAULT: "#F5F5F5",
          light: "#F5F5F5",
          dark: "#222"
        },
        foreground: {
          DEFAULT: "#1A1A1A",
          light: "#1A1A1A",
          dark: "#FAFAFA"
        },
        subheader: {
          DEFAULT: "4A4A4A",
          light: "#4A4A4A",
          dark: "#A1A1A1"
        },
        border: {
          DEFAULT: "#E0E0E0",
          light: "#E0E0E0",
          dark: "#333333"
        },
        hover: {
          DEFAULT:"#B71D2D",
          primary: "#B71D2D",
          subtle: "#FF8E72"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      }
    }
  },
  plugins: []
}