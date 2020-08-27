module.exports = {
  "extends": ["react-app", "plugin:prettier/recommended"], // eslint扩展规则
  "parserOptions": {
    "ecmaVersion": 7, // 指定es版本为7
    "sourceType": "module", // 支持export和import来导出并引用文件
    "ecmaFeatures": { // 添加ES特性支持，使之能够识别ES6语法
      "jsx": true // 支持jsx
    }
  },
  "parser": "babel-eslint",// 解决ES6 import会报错
  "env": { // eg如果不配置browser，window就会被eslint报undefined的错
    "es6": true,
    "browser": true,
    "node": true
  },
  "plugins": ["react", "jsx-a11y", "import"],
  "rules": {
    "class-methods-use-this": 0,
    "import/no-named-as-default": 0,
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  }
}
