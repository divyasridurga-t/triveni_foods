import { createSlice } from "@reduxjs/toolkit";

const createCartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
  },
});

export const { addItem } = createCartSlice.actions;

export default createCartSlice.reducer;
