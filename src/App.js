import { bindActionCreators } from "redux";
import "./App.css";
import ReduxDemo from "./ReduxDemo";
import { actionCreators } from "./state/action-creators/exporter";
import store from "./state/store";
import { useDispatch } from "react-redux";

function App() {
  store.subscribe(() => console.log("Store is now: ", store.getState()));
  // store.dispatch({ type: "deposit", payload: 1000 });
  // store.dispatch({ type: "withdraw", payload: 500 });
  // store.dispatch({ type: "name" });
  // store.dispatch({ type: "accountType" });
  const { depositMoney, withDrawMoney, getBankName, getAccountType } =
    bindActionCreators(actionCreators, useDispatch());
  return (
    <div className="App">
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withDrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
