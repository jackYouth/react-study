const { override, fixBabelImports, addWebpackPlugin } = require("customize-cra")

const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin")

module.exports = override(
  // // antd的默认样式改为按需加载
  // fixBabelImports("import", {
  //   libraryName: "antd",
  //   libraryDirectory: "es",
  //   style: "css",
  // }),
  // antd-mobile的默认样式改为按需加载
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    style: "css",
  }),
  // 使用day.js替换moment.js, 减少包体积
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
)
