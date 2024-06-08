/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-blue': '0 2px 4px rgba(0, 0, 255, 0.5)',
        'custom-red': '0 4px 6px rgba(255, 0, 0, 0.5)',
        'custom-green': '0 4px 6px rgba(0, 255, 0, 0.5)',
      },
    },
  },
  plugins: [require('daisyui'),],
}

