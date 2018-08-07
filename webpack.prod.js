const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      __ScrollMagicGSAP__: 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
    }
  },
  entry: './src/master.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'script-prod.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'imports-loader?define=>false'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin()
  ]
};
