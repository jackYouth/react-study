# 本 demo 主要用于研究 react hooks 的最佳实践

- 组件中自有状态
  - useState
  - useEffect
  - useRef
- 组件间共享状态

  - useContext
  - useReducer

- 组件优化

  - useMemo
  - memo
  - useCallback
  - useDebounce

- 封装
  - 封装一个函数, 接受传参, 返回一个不随组件更新而改变的函数, 用于优化当前组件更新导致函数重新声明引起的子组件更新
  - (待定) 封装一个高阶函数, 判断传入 props 是否改变
