// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.

var REACT_APP = /^REACT_APP_/i;

function getPkgInfo() {
  var pkg = require('../package.json');
  var getRepoInfo = require('git-repo-info');
  var info = getRepoInfo();
  var keywords = pkg.keywords && pkg.keywords.join(', ') || [];

  return {
    'name': `"${pkg.name}"`,
    'version': `"${pkg.version}"`,
    'description': `"${pkg.description || ''}"`,
    'keywords': `"${keywords}"`,
    'author': `"${pkg.author}"`,
    'license': `"${pkg.license}"`,
    'homepage': `"${pkg.homepage}"`,
    'sha': `"${info.sha}"`
  }
}

function getClientEnvironment(publicUrl) {
  var processEnv = Object
    .keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce((env, key) => {
      env[key] = JSON.stringify(process.env[key]);
      return env;
    }, {
      // Useful for determining whether we’re running in production mode.
      // Most importantly, it switches React into the correct mode.
      'NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      // Useful for resolving the correct path to static assets in `public`.
      // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
      // This should only be used as an escape hatch. Normally you would put
      // images into the `src` and `import` them in code to get their paths.
      'PUBLIC_URL': JSON.stringify(publicUrl)
    });
  return {'process.env': processEnv, 'pkginfo': getPkgInfo()};
}

module.exports = getClientEnvironment;
