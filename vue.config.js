// vue.config.js
const tsImportPluginFactory = require('ts-import-plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境...
    } else {
      // 为开发环境修改配置...
    }
    config.module.rules.push({
      test: /\.(jsx|tsx|js|ts)$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true, // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
            transpileOnly: true,
            getCustomTransformers: () => ({
              before: [ tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'lib',
                style: true
              })]
            }),
            compilerOptions: {
              module: 'es2015'
            }
          }
        }
      ],
      exclude: /node_modules/
    })
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  
  parallel: false,
}
