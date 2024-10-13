import { createSlice } from "@reduxjs/toolkit";
import { signUpUser } from "./action";

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
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.fulfilled, setUser)
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpUser.rejected, setError);
  },
});

export default userManagementSlice.reducer;
