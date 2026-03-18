/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ath: {
          purple: '#402E7A',
          indigo: '#4C3BCF',
          blue: '#4B70F5',
          cyan: '#3DC2EC',
          bg: '#F7F8FC',
          text: '#1F2937',
        }
      },
      backgroundImage: {
        'ath-gradient': 'linear-gradient(135deg, #402E7A, #4C3BCF, #4B70F5, #3DC2EC)',
        'ath-gradient-r': 'linear-gradient(135deg, #3DC2EC, #4B70F5, #4C3BCF, #402E7A)',
      }
    },
  },
  plugins: [],
}
