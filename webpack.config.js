const path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  context: path.resolve(__dirname, 'src')
}
