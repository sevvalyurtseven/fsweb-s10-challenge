import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";
import logger from "redux-logger";


export const myStore = createStore(reducer, applyMiddleware(thunk,logger));