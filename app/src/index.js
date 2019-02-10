import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, Switch, Link } from "react-router-dom";
import promise from "redux-promise";
import { store, history } from "./store";

import "./styles/main.scss";
import "./styles/grid.css";
import "basscss/css/basscss.min.css";

import App from "./components/App";

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <App>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
        </App>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
