const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/<mtijani>/' : '/',
  transpileDependencies: true,
  chainWebpack: config => {
    // Handle pdf.worker.js with worker-loader
    config.module
      .rule('pdf-worker')
      .test(/pdf\.worker\.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .options({
        inline: 'fallback', // Inline the worker (important for Webpack 5)
      })
      .end();
    
    // Ensure PDF files are loaded correctly
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]', // Customize the output file path
      })
      .end();
  },
});
