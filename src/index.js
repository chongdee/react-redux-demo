import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from 'redux'
// import reducer from './reducers/counter'
import {Provider} from 'react-redux'
import rootReducer from "./reducers";

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

// 中间件

// const logger = store => next => action => {
//   console.log('dispatch->',action);
//   let result = next(action)
//   console.log('next state->', store.getState());
//   return result
  
// }
// 创建store仓库
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(logger, thunk))
);
// 监听数据变化
// store.subscribe(() => console.log(("state:", store.getState())));

// redux 代码
// const render=()=>{
// ReactDOM.render(
//   <App
//     onIncrement={() => store.dispatch({ type: "INCREMENT" })}
//     onDecrement={() => store.dispatch({ type: "DECREMENT" })}
//     value={store.getState()}
//   />,
//   document.getElementById("root")
// );
// }

// render()
// store.subscribe(render)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
