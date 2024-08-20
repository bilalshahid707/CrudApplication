import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Logged: false,
  Admin: false,
};

export const UserAuth = createSlice({
  name: "User",
  initialState,
  reducers: {
    logUser: (state, action) => {
      state.Logged = action.payload;
    },
    logAdmin: (state, action) => {
      state.Admin = action.payload;
    },
  },
});

export const { logUser, logAdmin } = UserAuth.actions;
export default UserAuth.reducer;
