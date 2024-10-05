/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lighter-dark': '#444444',
        'button-green' : "#4CBB17"
      },
    },
  },
  plugins: [],
}

