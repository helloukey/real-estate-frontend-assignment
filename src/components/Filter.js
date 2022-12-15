// redux
import { useSelector } from "react-redux";

// hooks
import usePriceFormatter from "../hooks/usePriceFormatter";
import { useEffect } from "react";

// components
import Location from "./partials/Location";
import Date from "./partials/Date";
import Price from "./partials/Price";
import PropertyType from "./partials/PropertyType";
import SearchButton from "./partials/SearchButton";
import Heading from "./partials/Heading";

const Filter = () => {
  const { minPrice, maxPrice } = useSelector((state) => state.filter);
  const { number: minNumber, formatNumber: minFormatNumber } =
    usePriceFormatter();
  const { number: maxNumber, formatNumber: maxFormatNumber } =
    usePriceFormatter();

  useEffect(() => {
    minFormatNumber(minPrice);
    maxFormatNumber(maxPrice);
  }, [minFormatNumber, maxFormatNumber, minPrice, maxPrice]);

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-6 sm:pt-8 md:pt-16">
      {/* Heading and SearchBar */}
      <Heading />

      {/* Filters */}
      <div className="bg-base-200 my-6 sm:my-8 md:my-10 lg:my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 py-4 sm:py-6 rounded-lg justify-between gap-2">
        {/* Location */}
        <Location />
        {/* Date */}
        <Date />
        {/* Price */}
        <Price minNumber={minNumber} maxNumber={maxNumber} />
        {/* Property Type */}
        <PropertyType />
        {/* Search Button */}
        <SearchButton />
      </div>
    </div>
  );
};
export default Filter;
