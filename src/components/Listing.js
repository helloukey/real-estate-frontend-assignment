import { useSelector } from "react-redux";

// components
import Loader from "../loading/Loader";
import Error from "./Error";
import Card from "./partials/Card";

const Listing = () => {
  const { isLoading, isError, data, isFetching } = useSelector(
    (state) => state.filter
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 min-h-screen">
      {/* Card Container */}
      {!isLoading &&
      !isFetching &&
      data &&
      data.results &&
      data.results.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between gap-4">
          <Card data={data} />
        </div>
      ) : null}
      {/* No Result */}
      {data && data.results && !data.results.length && <Error />}
      {/* Loading */}
      {(isLoading || isFetching) && <Loader />}
      {/* Error */}
      {isError && <Error />}
    </div>
  );
};
export default Listing;
