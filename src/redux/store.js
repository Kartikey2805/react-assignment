import { createStore, combineReducers } from "redux";
import filterReducer from "./reducers/filterReducer";
let reducer = combineReducers({ filterReducer });

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
