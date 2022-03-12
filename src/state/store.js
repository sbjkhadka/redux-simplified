import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers, { account: 5000, inquiry: "CIBC" });

export default store;
