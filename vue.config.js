const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  publicPath: process.env.VUE_APP_REMOTES === 'local' ?
   // DEVELOPMENT
    'http://localhost:8080/' :
    // PRODUCTION
    'https://module-federation-mfe-consumer.herokuapp.com/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'Shell',
        filename: 'remoteEntry.js',
        exposes: {
          './clientApiOne': './src/clients/apiOne',
          './clientApiTwo': './src/clients/apiTwo',
        },
        remotes: process.env.VUE_APP_REMOTES === 'local' ?
          // DEVELOPMENT
          {
            MfeOne: 'MfeOne@http://localhost:9999/remoteEntry.js',
            MfeTwo: 'MfeTwo@http://localhost:9998/remoteEntry.js',
            MfeThree: 'MfeThree@http://localhost:9997/remoteEntry.js',
            MfeLogin: 'MfeLogin@http://localhost:9797/remoteEntry.js'
          } :
          // PRODUCTION
          {
            MfeOne: 'MfeOne@https://module-federation-mfe-one.herokuapp.com/remoteEntry.js',
            MfeTwo: 'MfeTwo@https://module-federation-mfe-two.herokuapp.com/remoteEntry.js',
            MfeThree: 'MfeThree@https://module-federation-mfe-three.herokuapp.com/remoteEntry.js',
            MfeLogin: 'MfeLogin@https://module-federation-mfe-login.herokuapp.com/remoteEntry.js',
          },
        shared: {
          ...require('./package.json').dependencies,
          vue: {
            singleton: true,
          },
          'vue-router': {
            singleton: true,
          },
          'element-plus': {
            singleton: true
          }
        },
      }),
    ],
  },

};