/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.5s ease-in-out forwards',
      },
      keyframes: {
        'float': {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(60px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
      },
      'slide-in': {
        '0%': {
          transform: 'translateY(50px)',
          opacity: 0,
        },
        '100%': {
          transform: 'translateY(0)',
          opacity: 1,
        },
        
    },
  },
  plugins: [],
}
}
}
