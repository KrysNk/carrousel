import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/store";
import sagas from "./store/sagas";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { loadApplication } from './store/Carrousel/CarrouselActions'

const store = configureStore();

store.runSaga(sagas);
store.dispatch(loadApplication())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();