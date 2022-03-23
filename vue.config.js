const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  publicPath: 'http://localhost:8080/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'consumer',
        filename: 'remoteEntry.js',
        remotes: {
          MfeOne: 'MfeOne@http://localhost:9999/remoteEntry.js',
          MfeTwo: 'MfeTwo@http://localhost:9998/remoteEntry.js',
          MfeThree: 'MfeThree@http://localhost:9997/remoteEntry.js',
          MfeLogin: 'MfeLogin@http://localhost:9797/remoteEntry.js',
        },
        shared: {
          vue: {
            singleton: true,
          },
          ...require('./package.json').dependencies
        },
        //shared: require('./package.json').dependencies,
      }),
    ],
  },

};