import "./App.css";
import ReduxDemo from "./ReduxDemo";
import store from "./state/store";

function App() {
  store.subscribe(() => console.log("Store is now: ", store.getState()));
  store.dispatch({ type: "deposit", payload: 1000 });
  store.dispatch({ type: "withdraw", payload: 500 });
  store.dispatch({ type: "name" });
  store.dispatch({ type: "accountType" });
  return <div className="App">{/* <ReduxDemo /> */}</div>;
}

export default App;
