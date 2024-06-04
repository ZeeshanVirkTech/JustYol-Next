/** @type {import('postcss-load-config').Config} */

const config = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        tailwindcss: {},
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: ['./src/**/*.{js,jsx,ts,tsx}'],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: ['html', 'body', /^main-block/, /^grid.*/, /^slick-/],
          deep: [/^main-block/, /^grid.*/, /^slick-.*/],
        },
      },
    ],
  ],
};

export default config;
