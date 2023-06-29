const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [],
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Vue CLI Demo";
      return args;
    });
  },
});
