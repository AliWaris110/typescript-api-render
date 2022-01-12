import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import reducer from "./redux/store/reducer";

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

export const ReduxIndex: React.FC = () => {
   
  
    return (
        <Provider store={store}>
        <App />
      </Provider>
    );
  };
  

  

