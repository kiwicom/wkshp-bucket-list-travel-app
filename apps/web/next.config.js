// @flow

const withTM = require('next-transpile-modules');
const withImages = require('next-images');

module.exports = withImages(
  withTM({
    transpileModules: [
      'react-native',
      'react-native-web',
      '@kiwicom/universal-components',
      '@bucket-list-travel-app/core',
      '@bucket-list-travel-app/navigation',
      '@bucket-list-travel-app/relay',
      '@bucket-list-travel-app/components',
      '@bucket-list-travel-app/utils',
    ],
    webpack: config => {
      // Alias all `react-native` imports to `react-native-web`
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
      };

      config.resolve.extensions = [
        ...config.resolve.extensions,
        '.web.js',
        '.js',
      ];

      config.module.rules.push({
        test: /\.(?:woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '../static/fonts/',
              name: '[name].[ext]',
            },
          },
        ],
      });

      return config;
    },
  }),
);
