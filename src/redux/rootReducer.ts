import counterSlice from "./feature/counterSlice";
import totalInvestedSlice from "./feature/totalInvestedSlice";

export const reducer = {
  counter: counterSlice,
  totalInvested: totalInvestedSlice,
};
