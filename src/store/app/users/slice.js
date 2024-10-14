// src/store/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { signUpUser, signInUser } from "./action";

const setError = (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.errorMessage = action.payload?.message;
};

const setUser = (state, action) => {
  state.user = action.payload;
  state.isLoading = false;
  state.isError = false;
};

export const userManagementSlice = createSlice({
  name: "userManagement",
  initialState: {
    user: null,
    token: null,
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // Signup cases
      .addCase(signUpUser.fulfilled, setUser)
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpUser.rejected, setError)

      // Signin cases
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInUser.rejected, setError);
  },
});

export const { logout } = userManagementSlice.actions;

export default userManagementSlice.reducer;
