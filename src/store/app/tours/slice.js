import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTours, fetchSingleTour } from "./action";

const setError = (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.errorMessage = action?.payload?.message;
};

const setTours = (state, action) => {
  state.tours = action?.payload;
  state.isLoading = false;
  state.isError = false;
};

const setSingleTour = (state, action) => {
  state.singleTour = action?.payload;
  state.isLoading = false;
  state.isError = false;
};

export const tourManagementSlice = createSlice({
  name: "tourManagement",
  initialState: {
    tours: [],
    singleTour: null,
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // all tours
      .addCase(fetchAllTours.fulfilled, setTours)
      .addCase(fetchAllTours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllTours.rejected, setError)
      // single tour
      .addCase(fetchSingleTour.fulfilled, setSingleTour)
      .addCase(fetchSingleTour.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleTour.rejected, setError);
  },
});

export default tourManagementSlice.reducer;
