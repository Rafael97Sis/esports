/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter, sans-serif']
      },
      backgroundImage: {
        background_img_fundo: "url('/background-galaxy.png')",
        'color-nlw-gradie': 'linear-gradient(89.86deg, #9572FC 20.08%, #43E7AD 40.94%, #E1D55D 80.08%);',
        'game-color-nlw': ' linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);'
      },
    },
  },
  plugins: [],
}
