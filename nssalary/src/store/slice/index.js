import { combineReducers } from "redux";
import user from "./user";
import toggleDisplaySidebar from './toggleDisplaySidebar';

const rootReducer = combineReducers({
  user,
  toggleDisplaySidebar,
});

export default rootReducer;