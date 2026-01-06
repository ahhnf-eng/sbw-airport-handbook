/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003A8F", // Biru Kemenhub
          light: "#1A4FA3",
        },
        secondary: "#F9B233", // Kuning Kemenhub
        neutral: {
          100: "#F8FAFC",
          300: "#CBD5E1",
          500: "#64748B",
          800: "#1E293B",
        },
      },
    },
  },
  plugins: [],
}
