const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "todolist": "http://localhost:4200/remoteEntry.js",
    "todolistbase": "http://localhost:4200/remoteEntry.js",
    "todolistbasePlus": "http://localhost:4200/remoteEntry.js",
    "todo001": "http://localhost:4200/remoteEntry.js",
    "eser271124": "http://localhost:4200/remoteEntry.js",
    "tic001": "http://localhost:4200/remoteEntry.js",
    "alphanomad": "http://localhost:4200/remoteEntry.js",
    "eser038": "http://localhost:4200/remoteEntry.js",
    "testing001": "http://localhost:4200/remoteEntry.js",
    "jasm001": "http://localhost:4200/remoteEntry.js",
    "credit": "http://localhost:4200/remoteEntry.js",
    "dinam001": "http://localhost:4200/remoteEntry.js",
    "dinam002": "http://localhost:4200/remoteEntry.js",
    "remote": "http://localhost:4200/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
