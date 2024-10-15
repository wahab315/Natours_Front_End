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

export const signInUser = createAsyncThunk(
  "userManagement/signInUser",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await userService.signIn(loginData);
      const { token } = response;
      localStorage.setItem("jwt", token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
