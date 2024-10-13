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

export const fetchSingleTour = createAsyncThunk(
  "tourManagement/fetchSingleTour",
  async (id, { rejectWithValue }) => {
    try {
      const response = await tourService.fetchSingleTour(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
