import { applyMiddleware, combineReducers, createStore } from "redux";
import HeaderReducer from "./HeaderReducer"
import  thunk from "redux-thunk" 

let reducers = combineReducers({
  header: HeaderReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;