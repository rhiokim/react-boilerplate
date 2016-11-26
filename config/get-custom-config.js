/**
 * it still have a bug with style loader
 * `window is not defined`
 * - https://github.com/webpack/css-loader/issues/270
 * - https://github.com/webpack/style-loader/issues/109
 * - https://github.com/webpack/style-loader/pull/115
 */
var customizers = require('./customizers');

function getCustomConfig(prod) {
  var prod = prod || false;
  var env = env || {};
  var result = Object
    .keys(customizers)
    .reduce(function (finalConfig, customizerKey) {
      var customizer = customizers[customizerKey];
      if (customizer.prod === false && prod === true) {
        return finalConfig;
      }

      var envValue = process.env['REACT_APP_' + customizerKey];
      if (env && envValue && envValue !== 'false') {
        if (customizer.toArray) {
          var getCustomizer = (prod ? customizer.getProd : customizer.getDev) || customizer.getDev;
          finalConfig[customizer.toArray].push(getCustomizer());
        }
        finalConfig.values[customizerKey] = customizer.config || true;
      }
      return finalConfig;
    }, {
      presets: [],
      babelPlugins: [],
      plugins: [],
      loaders: [],
      values: {}
    });

  return result;
}

module.exports = getCustomConfig;
