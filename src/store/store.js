import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

export const myStore = createStore(reducer, applyMiddleware(thunk));