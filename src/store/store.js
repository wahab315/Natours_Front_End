import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "./app/tours/slice";
import userReducer from "./app/users/slice";

const store = configureStore({
  reducer: {
    tourManagement: tourReducer,
    userManagement: userReducer,
  },
});

export default store;
