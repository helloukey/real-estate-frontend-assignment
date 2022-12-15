import sadIcon from "../assets/sad.svg";

const Error = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4">
      <img src={sadIcon} alt="not-found" className="mx-auto w-10 h-10 mb-4" />
      <p className="w-full text-center max-w-md mx-auto">
        Sorry, no results were found. Please try a different search term or
        broaden your search criteria.
      </p>
    </div>
  );
};
export default Error;
