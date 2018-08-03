const path = require('path');

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
    filename: 'script.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'imports-loader?define=>false'
      }
    ]
  }
};
