import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./service";

// signup
export const signUpUser = createAsyncThunk(
  "userManagement/signUpUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await userService.signUp(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
