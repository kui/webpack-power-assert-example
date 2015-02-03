module.exports = {
  entry: {
    'index.js': './test/index.js',
  },
  output: {
    path: __dirname + '/base/',
    filename: '[name]',
  },
  module: {
    loaders: [
      { loader: 'webpack-espower-loader', test: /_test\.js$/ },
      // write altjs loaders after webpack-espower-loader
      // because webpack-espower-loader cannot parse altjs.
    ],

    // to avoid warning by power-assert-formatter
    exprContextCritical: false,
  },
};
