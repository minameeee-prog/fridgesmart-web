import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          olive: '#7EA62C',
          oliveDark: '#5F7D22',
          orange: '#F59E0B',
          peach: '#EF7C52',
          cream: '#F7F4EF',
          sand: '#EFE7D8',
          ink: '#13233F',
          softBlue: '#EAF1FF',
          softLilac: '#EFE8FF',
          softMint: '#EDF7E6'
        }
      },
      boxShadow: {
        soft: '0 20px 40px rgba(19, 35, 63, 0.08)',
        card: '0 12px 30px rgba(19, 35, 63, 0.08)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
};

export default config;
