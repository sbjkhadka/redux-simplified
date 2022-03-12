import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(
  reducers,
  { account: 5000, inquiry: "CIBC" },
  applyMiddleware(thunk)
);

export default store;
