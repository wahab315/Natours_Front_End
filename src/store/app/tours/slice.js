import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTours } from "./action";

const setError = (state, action) => {
  state.tours = [];
  state.isLoading = false;
  state.isError = true;
  state.errorMessage = action?.payload?.message;
};

const setTours = (state, action) => {
  state.tours = action?.payload;
  state.isLoading = false;
  state.isError = false;
};

export const tourManagementSlice = createSlice({
  name: "tourManagement",
  initialState: {
    tours: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTours.fulfilled, setTours)
      .addCase(fetchAllTours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllTours.rejected, setError);
  },
});

export default tourManagementSlice.reducer;
