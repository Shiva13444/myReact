import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../features/userDetailsSlice"; 

export const store = configureStore({
  reducer: {
    show: showReducer,
   
  },
});
