// vue.config.js
const tsImportPluginFactory = require('ts-import-plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/static/tptt' : '/',

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境...
    } else {
      // 为开发环境修改配置...
    }
    config.module.rules.push({
      test: /\.(jsx|tsx|js|ts)$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: [ tsImportPluginFactory({
            libraryName: 'vant',
            libraryDirectory: 'lib',
            style: true
          }) ]
        }),
        compilerOptions: {
          module: 'es2015'
        }
      },
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
  }
}
