const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@styles', path.resolve(__dirname, './static/styles'))
  },

  configureWebpack: config => {
    // 包比较大时,我们可以利用该插件来分析哪部分代码比较大来进行优化
    // config.plugins.push(new BundleAnalyzerPlugin())
  },

  css: {
    loaderOptions: {
      stylus: {
        import: '~@styles/variables.styl'
      }
    }
  }
}
