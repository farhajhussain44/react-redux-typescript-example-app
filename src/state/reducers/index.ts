import { combineReducers } from "redux";
import bankReducers from "./bankReducers";
import itemReducer from "./itemReducer";
const reducers = combineReducers({
  bank: bankReducers,
  item: itemReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
