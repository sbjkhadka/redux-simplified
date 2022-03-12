import React, { Component } from "react";
import { createStore } from "redux";

class ReduxDemo extends Component {
  render() {
    // Step 2: Reducer: state and action
    const reducer = function (state = 0, action) {
      if (action.type === "DEPOSIT") {
        return state + action.payload;
      }

      if (action.type === "WITHDRAW") {
        return state - action.payload;
      }
      return state;
    };
    // Step 1: Create store: Reducer and state
    const store = createStore(reducer, 0);

    // Step 3: Subscribe
    store.subscribe(() => {
      console.log("Store is now", store.getState());
    });

    // Step 4: Dispatch Action
    store.dispatch({ type: "DEPOSIT", payload: 1000 });
    store.dispatch({ type: "WITHDRAW", payload: 500 });
    return <div>hello</div>;
  }
}

export default ReduxDemo;
