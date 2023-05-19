const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        BUILDTIME: JSON.stringify(new Date())
      })
    ]
  },

  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(750 * 1024)
      .maxAssetSize(600 * 1024)
  },
  lintOnSave: false,
  devServer: {
    proxy: {
	  // /api 및 /api/* 요청에 대해 프록시 설정
      '/gps-management': {	
        target: 'http://localhost:5001', // 프록시를 설정할 도메인
        changeOrigin: true,
      }, 
    },
  },
}