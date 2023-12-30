import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 28550,
};

export const totalInvestedSlice = createSlice({
  name: "totalInvested",
  initialState,
  reducers: {
    addInvestment: (state, action: PayloadAction<number>) => {
      // Add the investment amount to the current total
      state.value += action.payload;
    },
  },
});

export const { addInvestment } = totalInvestedSlice.actions;

export default totalInvestedSlice.reducer;
