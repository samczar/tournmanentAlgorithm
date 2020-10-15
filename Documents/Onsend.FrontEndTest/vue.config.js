const webpack = require('./node_modules/webpack')
module.exports = {
  devServer: {
    host: "localhost",
    https: true,
    hot: true,
  },
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map'
  },
  "transpileDependencies": [
    "vuetify"
  ]
};