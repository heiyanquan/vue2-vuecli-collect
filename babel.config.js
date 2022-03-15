const IS_PROD = process.env.NODE_ENV === 'production'

const plugins = []
// 线上版本去除 console.log
if (IS_PROD) {
  plugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    [
      '@vue/app',
      {
        polyfills: ['es6.promise', 'es6.symbol', 'es6.array.iterator', 'es6.object.assign'],
        useBuiltIns: 'entry'
      }
    ]
  ],
  plugins: []
}
