import { createAsyncThunk } from "@reduxjs/toolkit";
import tourService from "./service";

export const fetchAllTours = createAsyncThunk(
  "tourManagement/fetchAllTours",
  async (_, { rejectWithValue }) => {
    try {
      const response = await tourService.fetchAllTours();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
