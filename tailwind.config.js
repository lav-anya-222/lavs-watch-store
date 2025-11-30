module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',    // Your primary color
        secondary: '#666666',  // Your secondary color  
        background: '#ffffff', // Your background color
        muted: '#e5e5e5',      // Your muted/border color
      }
    },
  },
  plugins: [],
}