module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      white: "#ffffff",
      dark: "#000000",
      blueOmni: "#353bca",
      blueOmniDarkest: "#3c3bd2",
      white: "#ffffff",
      blueOmniDark: "#4544e6",
      purpleDarkest: "#241d49",
      grayDark: "#0d121e",
      "gray-50": "rgba(249, 250, 251, 1);",
      "blue-300": "#93c5fd",
      "gray-900": "#111827",
      "gray-800": "#1f2937",
      "gray-700": "rgba(55, 65, 81, 1)",
      purpleOmni: "#5055c1",
      purpleLight: "rgba(217, 217, 245, 1)",
      body: "#f9fbfe",
      blue: "rgba(69, 68, 230, 1)",
      blueDarkest: "rgba(80,85,193,1)",
    },
    boxShadow: {
      "sm": "0 1px 2px 0 #5055c1",
      "lg": "#000"
    },
    borderColor: {
      transparent: 'transparent',
      "gray-300": "#d1d5db",
      blueOmni: "#353bca",
      "blue-300": "#93c5fd"
    },
    fontFamily: {
      serif: ['Abril Fatface', 'serif'],
      sans: ['Cereal', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
