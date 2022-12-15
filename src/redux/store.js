import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import { realtorApi } from "./realtorApi";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [realtorApi.reducerPath]: realtorApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(realtorApi.middleware)
  }
});
