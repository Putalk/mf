const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  pages: {
    index: {
      entry: "./src/index.ts",
    },
  },
  devServer: {
    port: 3000,
  },
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: "containerRemote",
        filename: "containerRemoteEntry.js",
        remotes: {
          acrmRemote: "acrmRemote@http://localhost:3001/acrmRemoteEntry.js",
          ocrmRemote: "ocrmRemote@http://localhost:3002/ocrmRemoteEntry.js",
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
