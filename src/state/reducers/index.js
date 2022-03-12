import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import inquiryReducer from "./inquiryReducer";

const reducers = combineReducers({
  account: accountReducer,
  inquiry: inquiryReducer,
});
export default reducers;
