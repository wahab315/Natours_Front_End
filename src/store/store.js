import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "./app/tours/slice";

const store = configureStore({
  reducer: {
    tourManagement: tourReducer,
  },
});

export default store;
