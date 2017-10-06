/* eslint-disable no-param-reassign */

const { injectBabelPlugin } = require('react-app-rewired')

module.exports = function override(
  config,
  // env,
) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
    config,
  )

  return config
}
