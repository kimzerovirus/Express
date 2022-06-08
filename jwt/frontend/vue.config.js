const path = require('path');
const { defineConfig } = require('@vue/cli-service');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, '../backend/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },

    // webpack devserver 버전 바뀌면서 옵션 바뀜 확인 필요
    // https://webpack.js.org/configuration/dev-server/
    client: {
      overlay: false,
    },
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: 6,
              compress: { drop_console: true },
              output: { comments: false },
            },
          }),
        ],
      };
    }
  },
});