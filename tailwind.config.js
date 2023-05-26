/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './components/**/*.tsx',
     './pages/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        cblue: '#34afe6',
        gris: '#e9e9e9',
        movittBlue: '#32436e',
        movittgray: '#51596a26',
        movittYellow: '#b98200'
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
        layout: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
      },
      height: {
        mobileMenu: 'calc(100vh - 100px);',
        deskSlider: '30rem',
      },
      margin: {
        menos3: '-50px'
      },
      screens: {
        'desk': '1440px'
      },
      maxHeight: {
        '47': '180px',
      },
      minHeight: {
        '47': '180px',
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
