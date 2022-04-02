const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  devServer: {
    port: 3002,
  },
  publicPath: "auto",
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: "ocrmRemote",
        filename: "ocrmRemoteEntry.js",
        exposes: {
          "./Button.vue": "./src/components/ButtonView.vue",
          "./Home.vue": "./src/views/HomeView.vue",
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
});
