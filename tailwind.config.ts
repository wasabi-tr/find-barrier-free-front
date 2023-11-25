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
        'color-main-100': '#F8F9F9',
        'color-main-200': '#F2F2F2',
        'color-main-300': '#CDCDCD',
        'color-main-400': '#cfd9de',
        'color-main-500': '#949494',
        'color-main-600': '#828a8c',
        'color-main-700': '#536471',
        'color-main-800': '#0F1419',
        'color-focus': '#CD820A',
        'color-success': '#259D63',
        'color-error': '#EC0000',
        'color-blue-600': '#3460FB',
        'color-blue-700': '#264AF4',
        'color-blue-800': '#0031D8',
        'color-green-600': '#259D63',
        'color-green-700': '#1D8B56',
        'color-green-800': '#197A4B',
        // 'font-main': '#0F1419',
        // 'font-main-light': '#536471',
        // 'hover-color-dark': '#828a8c',
        // 'hover-color-light': '#f7f9f9',
        // 'icon-color-light': '#cfd9de',
        // 'icon-color-dark': '#0F1419',
        // 'border-main': '#cfd9de',
        // 'gray-5': '#F8F9F9',
        // 'gray-10': '',
        // 'gray-20': '#CDCDCD',
        // 'gray-30': '#949494',
      },
      boxShadow: {
        main: '0px 4px 16px 3px rgba(0, 0, 0, 0.10), 0px 1px 6px 0px rgba(0, 0, 0, 0.30)',
      },
      gridTemplateColumns: {
        'auto-min-450': 'repeat(auto-fit, minmax(min(450px, 100%), 1fr))',
        'auto-min-400': 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
        'auto-min-300': 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
        'auto-min-200': 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
      },
    },
  },
  plugins: [],
}
export default config
