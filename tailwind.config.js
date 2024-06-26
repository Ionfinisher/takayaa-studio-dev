/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'shake': 'shake 2s ease-in-out infinite',
      },
      keyframes: {
        'shake': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '10%': { transform: 'scale(1) rotate(-10deg)' },
          '20%': { transform: 'scale(1) rotate(10deg)' },
          '30%': { transform: 'scale(1) rotate(-10deg)' },
          '40%': { transform: 'scale(1) rotate(10deg)' },
          '50%': { transform: 'scale(1.2) rotate(0deg)' },
          '60%': { transform: 'scale(1) rotate(0deg)' },
          '80%': { transform: 'scale(1.2) rotate(0deg)' },
          '90%': { transform: 'scale(1) rotate(0deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
