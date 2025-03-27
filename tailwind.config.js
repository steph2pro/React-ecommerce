/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E2753", 
        primary2: "#070B1D",
        texthover: "#5A607F", 
        secondary: "#3B82F6", 
        accent: "#FACC15", // Jaune
        danger: "#EF4444", // Rouge
        success: "#22C55E", // Vert
        background: "#F3F4F6", // Gris clair
        sidebar: "#111827", // Fond sombre du sidebar
      },
    },
  },
  plugins: [],
}

