const {
  override,
  fixBabelImports,
  addWebpackPlugin,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");

const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

module.exports = override(
  // antd的默认样式改为按需加载
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
  // 使用day.js替换moment.js, 减少包体积
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addWebpackAlias({
    "@components": path.join(__dirname, "./src/components"),
    "@pages": path.join(__dirname, "./src/pages"),
    "@utils": path.join(__dirname, "./src/utils"),
    "@config": path.join(__dirname, "./src/config"),
  })
);
