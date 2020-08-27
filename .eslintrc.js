module.exports = {
  "extends": ["airbnb"], // eslint扩展规则
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
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
