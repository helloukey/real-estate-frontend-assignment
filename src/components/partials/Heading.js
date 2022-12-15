// assets
import searchIcon from "../../assets/search.svg";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, setIsError, setData, setSearchQuery, setIsFetching } from "../../redux/filterSlice";
import { useGetSearchPropertyQuery } from "../../redux/realtorApi";
import { useEffect, useState } from "react";

const Heading = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { searchQuery } = useSelector(state => state.filter);
  const { isFetching, data } = useGetSearchPropertyQuery({searchLocation: searchQuery});

  const handleSearchQuery = (e) => {
    if(!inputValue.length) {
      return
    }

    dispatch(setSearchQuery(inputValue));
  }

  // onMount Search Result
  useEffect(() => {
    dispatch(setIsError(data?.error ? true : false));
    dispatch(setData(data));
    dispatch(setIsLoading(isFetching));
    dispatch(setIsFetching(isFetching))
  },[isFetching, data, dispatch]);

  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        Search properties to rent
      </h2>
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn btn-square" onClick={handleSearchQuery}>
            <img src={searchIcon} alt="search" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Heading;
