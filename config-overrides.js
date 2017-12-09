/* eslint-disable no-param-reassign */

module.exports = function override(
  config,
  // env,
) {
  // do stuff with the webpack config...
  config.resolve.modules.push('./src')
  return config
}
