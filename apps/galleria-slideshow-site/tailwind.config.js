/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      mobile: '568px',
      tablet: '767px',
      desktop: '992px',
    },
    extend: {
      fontFamily: {
        'libre-baskervill': [
          '"Libre Baskerville"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      colors: {
        'dark-gray': '#7D7D7D',
        'med-gray': '#E5E5E5',
        'light-gray': '#F3F3F3',
      },
    },
  },
  plugins: [],
};
