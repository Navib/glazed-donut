import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers/index";
import { sagas } from "./sagas/index";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

let middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

let middleware = applyMiddleware(...middlewares);

const history = createHistory();
const store = createStore(
  reducers,
  compose(
    middleware,
    applyMiddleware(routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(sagas);

export { store, history };
