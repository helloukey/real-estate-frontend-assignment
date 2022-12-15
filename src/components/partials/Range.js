// hooks
import { useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { setMinPrice, setMaxPrice } from "../../redux/filterSlice";

const Range = () => {
  const [minimumPrice, setMinimumPrice] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(10000000);
  const dispatch = useDispatch();

  const handleSlider = (e) => {
    if (e.target.id === "minPrice" && Number(e.target.value) < maximumPrice) {
      setMinimumPrice(Number(e.target.value));
      dispatch(setMinPrice(Number(e.target.value)));
    }

    if (e.target.id === "maxPrice" && Number(e.target.value) > minimumPrice) {
      setMaximumPrice(Number(e.target.value));
      dispatch(setMaxPrice(Number(e.target.value)));
    }
  };

  return (
    <div className="bg-base-300 p-4 absolute top-full rounded-md">
      <input
        id="minPrice"
        type="range"
        step="10000"
        min={0}
        max={10000000}
        value={minimumPrice}
        className="range range-xs"
        onChange={handleSlider}
      />
      <input
        id="maxPrice"
        type="range"
        step="10000"
        min={0}
        max={10000000}
        value={maximumPrice}
        className="range range-xs"
        onChange={handleSlider}
      />
    </div>
  );
};
export default Range;
