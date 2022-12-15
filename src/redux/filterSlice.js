import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPrice: false,
  minPrice: 0,
  maxPrice: 10000000,
  location: "",
  date: "",
  propertyType: "",
  searchQuery: "santa monica",
  isLoading: false,
  isFetching: false,
  isError: false,
  data: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setIsPrice: (state, action) => {
      state.isPrice = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setPropertyType: (state, payload) => {
      state.propertyType = payload.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    setIsError: (state, payload) => {
      state.isError = payload.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  setIsPrice,
  setMinPrice,
  setMaxPrice,
  setLocation,
  setDate,
  setPropertyType,
  setSearchQuery,
  setIsLoading,
  setIsFetching,
  setIsError,
  setData,
} = filterSlice.actions;

export default filterSlice.reducer;
