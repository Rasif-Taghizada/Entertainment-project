import * as React from "react";
import * as ReactDOM from "react-dom";

import { GlobalStyle } from "./constants/styles";
import { Provider } from "react-redux";
import { store } from "./store";

import App from "./App";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root") as HTMLElement
);
