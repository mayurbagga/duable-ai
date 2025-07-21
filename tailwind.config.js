/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // update to match your file paths
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
 theme: {
    extend: {
      colors: {
        // primary: 'rgb(var(--color-primary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        light: 'rgb(var(--color-light) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        white: 'rgb(var(--color-white) / <alpha-value>)',

         'gradient-logo': 'linear-gradient(90deg, #2563EB 0%, #F97316 100%)',
      },
    },
  },
  plugins: [],
}


