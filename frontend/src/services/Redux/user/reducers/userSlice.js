import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
      logout: (state) => {
        state.user={};
      },
      addAmount: (state, action) => {
        state.user = action.payload;
      }
    }
  });

export const { logout, addAmount } = userSlice.actions;

export default userSlice.reducer;