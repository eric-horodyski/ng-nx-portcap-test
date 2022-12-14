const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const isCapBuild = process.env.CAP_BUILD;
const remotes = isCapBuild == null ? {
  remote: 'http://localhost:4201/remoteEntry.js'
} : {
  remote: 'remote/remoteEntry.js'
};

module.exports = withModuleFederationPlugin({
  name: 'shell',
  remotes,
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
