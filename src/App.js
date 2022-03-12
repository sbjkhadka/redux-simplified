import { bindActionCreators } from "redux";
import "./App.css";
import { actionCreators } from "./state/action-creators/exporter";
import store from "./state/store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  store.subscribe(() => console.log("Store is now: ", store.getState()));
  const myState = useSelector((state) => state);
  const { depositMoney, withDrawMoney, getBankName, getAccountType } =
    bindActionCreators(actionCreators, useDispatch());
  return (
    <div className="App">
      <h2>{myState.account}</h2>
      <h2>{myState.inquiry}</h2>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withDrawMoney(1000)}>Withdraw</button>
      <button onClick={() => getBankName()}>Bank Name</button>
      <button onClick={() => getAccountType()}>Account Type</button>
    </div>
  );
}

export default App;
