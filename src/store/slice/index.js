import { combineReducers } from "redux";
import user from "./user";
import toggleHeader from "./header"

const rootReducer = combineReducers({
  user,
  toggleHeader
});

export default rootReducer;
