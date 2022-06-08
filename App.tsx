import React from "react";
import { Provider } from "react-redux";
import Telehealth from "./src/main";

import { applyMiddleware, createStore } from "redux";
import reducers from './src/redux/reducers';
import thunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(thunk))

function App() {
  return(
    <Provider store={store}>
      <Telehealth/>
    </Provider>
  )
}

export default App