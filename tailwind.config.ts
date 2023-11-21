import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: { max: '767px' },
    },
    extend: {
      colors: {
        'black-333': '#333',
        gray5: '#f8f8f8',
        gray10: '#F2F2F2',
        gray30: '#949494',
        gray20: '#CDCDCD',
      },
    },
  },
  plugins: [],
}
export default config
