export default {
    content: [
      './src/**/*.{js,jsx,ts,tsx,html}', // Ajusta esto según la estructura de tu proyecto
    ],
    safelist: [
      {
        pattern: /^gap-/, // Esto asegura que todas las clases que comienzan con 'gap-' no sean purgadas
      },
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  