/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: '480px', // Tamanho mínimo para telas pequenas
        md: '768px', // Tamanho mínimo para telas médias
        lg: '1024px', // Tamanho mínimo para telas grandes
        xl: '1280px', // Tamanho mínimo para telas extragrandes
      },
    },
  },
  plugins: [],
}
