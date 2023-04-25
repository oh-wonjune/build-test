const path = require('path');
const BuildHelper = require('build-helper-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new BuildHelper()
  ]
};
