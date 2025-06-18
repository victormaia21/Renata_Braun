/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        geistMono: ['var(--font-geist-mono)', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
        kosugi: ['"Kosugi Maru"', 'sans-serif'],
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(30em, 1fr))',
      },
    },
  },
  plugins: [],
}
