export const depositMoney = (amount) => {
  return (dispatch) => dispatch({ type: "deposit", payload: amount });
};

export const withDrawMoney = (amount) => {
  return (dispatch) => dispatch({ type: "withdraw", payload: amount });
};

export const getBankName = () => (dispatch) => dispatch({ type: "name" });

export const getAccountType = () => (dispatch) =>
  dispatch({ type: "accountType" });
