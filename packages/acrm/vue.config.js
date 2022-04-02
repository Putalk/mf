const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  pages: {
    index: {
      entry: "./src/index.ts",
    },
  },
  publicPath: "auto",
  devServer: {
    port: 3001,
  },
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: "acrmRemote",
        filename: "acrmRemoteEntry.js",
        exposes: {
          "./List.vue": "./src/views/ListView.vue",
          "./Home": "./src/views/HomeView.vue",
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
