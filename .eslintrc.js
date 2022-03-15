module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': [2, 'never', { 'web.js': 'never', json: 'never' }],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/no-unresolved': [2, { ignore: ['antd-mobile'] }],
    'arrow-parens': 0, // 箭头函数用小括号括起来
    'comma-dangle': 0, // 对象字面量项尾不能有逗号
    'no-underscore-dangle': 0, // 标识符不能以_开头或结尾
    'no-undef': 0, // 不能有未定义的变量
    camelcase: 0, // 强制驼峰法命名
    quotes: [0, 'single'], // 引号类型 `` "" ''
    'quote-props': [0, 'always'], // 对象字面量中的属性名是否强制双引号
    semi: [0, 'always'], // 语句强制分号结尾
    'max-classes-per-file': [0, 'always'], // 一个文件最多可以写几个class
    'linebreak-style': [0, 'windows'], // 换行风格
    'no-param-reassign': 0, // 禁止给参数重新赋值
    'no-plusplus': 0, // 禁止使用++，--
    'max-len': ['error', { code: 150 }]
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js'
      }
    }
  }
}
