const inquiryReducer = (state = "", action) => {
  if (action.type === "name") return "RBC Bank";
  if (action.type === "accountType") return "Savings";
  else return state;
};
export default inquiryReducer;
