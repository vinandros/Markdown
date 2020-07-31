import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer.js";

const store = createStore(
    rootReducer, applyMiddleware(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
);

export default store; 