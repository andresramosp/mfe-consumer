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
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
        //shared: require('./package.json').dependencies,
      }),
    ],
  },
};