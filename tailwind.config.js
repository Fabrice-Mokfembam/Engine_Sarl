/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{html,js,ts,tsx}', './components/**/*.{html,js,ts,tsx}', './src/**/*.{html,js,ts,tsx}'],

  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        extend: {
          colors: {
            'primary-blue': '#0056D2',
            'secondary-red': '#D72638',
            'accent-orange': '#FF7A00',
            'neutral-darker-gray': '#333333',
            'neutral-gray': '#666666',
            'neutral-light-gray': '#CCCCCC',
            'primary-blue': '#0056D2',
            'secondary-red': '#D72638',
            'accent-orange': '#FF7A00',
            'neutral-darker-gray': '#333333',
            'neutral-gray': '#666666',
            'neutral-light-gray': '#CCCCCC',
            primary: "#0056D2",
            secondary: "#D72638",
            accent: "#FF7A00",
            background: '#F5F7FA',
            text: '#1f1f1f',
          },
        },
      },
      themes: [
        {
          name: 'dark-theme',
          extend: {
            colors: {
            primary: "#0056D2",
            secondary: "#D72638",
            accent: "#FF7A00",
            background: '#F5F7FA',
            text: '#1f1f1f',
          },
          },
        },
      ],
    }),
  ],
};
