import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 11,
  data: null,
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    barbe: (state, payload) => {
      state.value = state.value + 1;
    },
    kombe: (state, payload) => {
      state.value = state.value - 1;
    },
  },
});

export const { barbe, kombe } = counter.actions;
export default counter.reducer;
