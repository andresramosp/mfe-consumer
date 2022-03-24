const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  publicPath: 'http://localhost:8080/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'consumer',
        filename: 'remoteEntry.js',
        remotes: {
          // MfeOne: 'MfeOne@http://localhost:9999/remoteEntry.js',
          MfeOne: 'MfeOne@https://module-federation-mfe-one.herokuapp.com/remoteEntry.js',
          MfeTwo: 'MfeTwo@https://module-federation-mfe-two.herokuapp.com/remoteEntry.js',
          MfeThree: 'MfeThree@https://module-federation-mfe-three.herokuapp.com/remoteEntry.js',
          MfeLogin: 'MfeLogin@https://module-federation-mfe-login.herokuapp.com/remoteEntry.js',
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