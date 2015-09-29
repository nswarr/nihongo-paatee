var path = require('path');
module.exports = {
  entry: './app/routes.jsx',
  output: {
    path: path.join(__dirname, 'public/js/'),
    filename: 'app.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [{
      test:  /\.jsx$/,
      loader: 'babel-loader'
    }]
  }
};
