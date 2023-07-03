/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mazzardh)'],
      },
      backgroundImage: {
        'banner-accent': 'url("/banner-accent.png")',
        'banner-default': 'url("/banner-default.png")',
        summary: 'url("/summary.png")',
        'card-light':
          'linear-gradient(262.41deg, rgba(255, 255, 255, 0) -10.14%, rgba(255, 255, 255, 0.0521848) 20.89%, rgba(255, 255, 255, 0) 96.29%), linear-gradient(84.62deg, rgba(69, 69, 69, 0.1) 11.6%, rgba(24, 24, 24, 0.1) 34.49%)',
        'card-dark':
          'linear-gradient(262.41deg, rgba(255, 255, 255, 0) -10.14%, rgba(255, 255, 255, 0.0521848) 20.89%, rgba(255, 255, 255, 0) 96.29%), linear-gradient(84.62deg, rgba(69, 69, 69, 0.1) 11.6%, rgba(24, 24, 24, 0.1) 34.49%)',
        'dropdown-light':
          'linear-gradient(84.62deg, rgba(69, 69, 69, 0.1) 11.6%, rgba(24, 24, 24, 0.1) 34.49%), linear-gradient(262.41deg, rgba(255, 255, 255, 0) -10.14%, rgba(255, 255, 255, 0.0521848) 20.89%, rgba(255, 255, 255, 0) 96.29%), linear-gradient(248.8deg, rgba(150, 150, 150, 0.171) -1.82%, rgba(151, 151, 151, 0.039) 45.78%, rgba(152, 152, 152, 0.06) 102.84%)',
        'dropdown-dark':
          'linear-gradient(84.62deg, rgba(69, 69, 69, 0.1) 11.6%, rgba(24, 24, 24, 0.1) 34.49%), linear-gradient(262.41deg, rgba(255, 255, 255, 0) -10.14%, rgba(255, 255, 255, 0.0521848) 20.89%, rgba(255, 255, 255, 0) 96.29%), linear-gradient(248.8deg, rgba(150, 150, 150, 0.171) -1.82%, rgba(151, 151, 151, 0.039) 45.78%, rgba(152, 152, 152, 0.06) 102.84%)',
      },
      borderColor: {
        'body-text-light': 'rgba(152, 152, 152, 0.06)',
        'body-text-dark': 'rgba(152, 152, 152, 0.06)',
      },
      colors: {
        brand: {
          yellow: '#F4FF58',
          'yellow-dark': 'rgba(244, 255, 88, 0.1)',
          'yellow-light': 'rgba(88, 224, 255, 0.1)',
        },
        neutral: {
          15: '#CFD2D9',
          75: '#3D3E40',
          85: '#242526',
          100: '#151517',
        },
        secondary: {
          medium: '#007D99',
          light: '#50CBE6',
        },
      },
    },
  },
  plugins: [],
}
