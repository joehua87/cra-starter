const path = require('path')

module.exports = {
  resolve: {
    // These extensions are tried when resolving a file.
    modules: [
      path.join(`${__dirname}/`, './src'),
      path.join(`${__dirname}/`, './node_modules'),
    ],
  },
}
