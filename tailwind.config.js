module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        header: ['Roboto']
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0)'},
          '100%': {transform: 'scale(1)'}
        }
      },
      animation: {
        pop: 'pop 450ms ease-in-out forwards'
      }
    }
  },
  plugins: [],
}
