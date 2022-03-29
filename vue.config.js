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
    config.module
      .rule('worker')
      .test(/\.worker\.js$/)
      .use('worker')
      .loader('worker-loader')
      .options({
        inline: 'fallback'
      })
      .end()
    // 解决 "window is undefined", 这是因为 worker 线程中不存在 window 对象, 要用 this 代替: (不过我的项目中配置了这个也不行, 用的 self 代替, 后面介绍)
    config.output.globalObject('this')
    config.module.rule('js').exclude.add(/\.worker\.js$/)
  },
  // 解决打包的时报错
  parallel: false,
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
