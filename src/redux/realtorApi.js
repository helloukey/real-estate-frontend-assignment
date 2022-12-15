// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const realtorApi = createApi({
  reducerPath: "realtorApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://realtor16.p.rapidapi.com" }),
  endpoints: (builder) => ({
    getRentingProperty: builder.query({
      query: (args) => {
        const { location, moveInDate, minPrice, maxPrice, propertyType } = args;
        return {
          url: "/forrent",
          params: {
            location: location,
            "move_in_date-min": moveInDate,
            "list_price-min": minPrice,
            "list_price-max": maxPrice,
            type: propertyType,
          },
          headers: {
            "X-RapidAPI-Key":
              "d7ae456e88mshb1d2df84cb0a922p16daf0jsn0ad7ebde5d87",
            "X-RapidAPI-Host": "realtor16.p.rapidapi.com",
          },
        };
      },
    }),
    getSearchProperty: builder.query({
      query: (args) => {
        const { searchLocation } = args;
        return {
          url: "/forrent",
          params: {
            location: searchLocation,
          },
          headers: {
            "X-RapidAPI-Key":
              "d7ae456e88mshb1d2df84cb0a922p16daf0jsn0ad7ebde5d87",
            "X-RapidAPI-Host": "realtor16.p.rapidapi.com",
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetRentingPropertyQuery, useGetSearchPropertyQuery } =
  realtorApi;
