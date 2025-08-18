import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./Services/Reducers";
import { thunk } from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const blinkitstore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));