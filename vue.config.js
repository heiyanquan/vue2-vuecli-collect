const path = require('path')
const Webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    plugins: [
      new Webpack.ProvidePlugin({
        echarts: 'echarts',
        XLSX: 'xlsx'
      })
    ],
    externals: {
      './cptable': 'var cptable'
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('./src/views'))
      .set('api', resolve('./src/api'))
      .set('assets', resolve('./src/assets'))
      .set('utils', resolve('./src/utils'))
      .set('router', resolve('./src/router'))
      .set('store', resolve('./src/store'))
      .set('static', resolve('./public/static'))
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    open: true
  },
  productionSourceMap: false
}
