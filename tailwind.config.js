module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
      },
    }),
  ],
  corePlugins: {
    container: false,
  },
}
