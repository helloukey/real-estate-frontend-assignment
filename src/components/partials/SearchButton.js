import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData, setIsError, setIsLoading } from "../../redux/filterSlice";
import { useLazyGetRentingPropertyQuery } from "../../redux/realtorApi";

const SearchButton = () => {
  const dispatch = useDispatch();
  const { location, date, minPrice, maxPrice, propertyType } = useSelector(
    (state) => state.filter
  );
  const [getRentingProperty, results] = useLazyGetRentingPropertyQuery();

  const handleSubmit = () => {
    if (!location.length) {
      return;
    }

    // If no date provided
    if (!date.length) {
      getRentingProperty({
        location: location,
        minPrice: minPrice.toString(),
        maxPrice: maxPrice.toString(),
        propertyType: propertyType,
      });
    } else {
      getRentingProperty({
        location: location,
        moveInDate: date,
        minPrice: minPrice.toString(),
        maxPrice: maxPrice.toString(),
        propertyType: propertyType,
      });
    }
  };

  useEffect(() => {
    dispatch(setIsLoading(results.isFetching));
    dispatch(setIsError(results?.data?.error ? true : false));
    dispatch(setData(results.data));
  }, [results, dispatch]);

  return (
    <div className="h-full flex items-center w-full px-5">
      <button
        className={`w-full btn mt-4 lg:mt-0 ${
          results.isFetching ? "btn-active pointer-events-none" : ""
        }`}
        onClick={handleSubmit}
      >
        {results.isFetching ? "Searching..." : "Search"}
      </button>
    </div>
  );
};
export default SearchButton;
