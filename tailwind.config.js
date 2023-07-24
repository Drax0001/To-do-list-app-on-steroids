/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: "#F2EE9D",
        secondary: "#7A9D54",
        tertiary: "#557A46",
        neutral: "#8C3333",
        blue2: "#0000cf"
      },
      fontFamily: {
        sans: ['Trebuchet MS', 'sans-serif'],
        cursive: ['Mistral']
      }
    },
  },
  plugins: [],
}

