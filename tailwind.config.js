/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        myntra: {
          pink: '#ff3f6c',
          dark: '#282c3f',
          grey: '#94969f',
          line: '#eaeaec',
          orange: '#ff905a',
          bg: '#f5f5f6',
        },
      },
      boxShadow: {
        card: '0 2px 12px rgba(40, 44, 63, 0.08)',
        look: '0 8px 30px rgba(40, 44, 63, 0.12)',
      },
    },
  },
  plugins: [],
}
