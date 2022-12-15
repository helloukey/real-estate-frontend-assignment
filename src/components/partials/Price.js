import Range from "./Range";
import { useDispatch, useSelector } from "react-redux";
import { setIsPrice } from "../../redux/filterSlice";

const Price = ({ minNumber, maxNumber }) => {
  const dispatch = useDispatch();
  const { isPrice } = useSelector((state) => state.filter);

  return (
    <div
      className="flex flex-col gap-2 relative cursor-pointer w-full px-5 border-r-2 border-base-300"
      onClick={() => dispatch(setIsPrice(!isPrice))}
    >
      <label htmlFor="price">Price</label>
      <span id="price" className="bg-base-100 p-3 rounded-md h-full flex items-center">
        $
        <strong>
          {minNumber}
        </strong>
        <pre>{" - "}</pre>$
        <strong>
          {maxNumber}
        </strong>
      </span>
      <div className={isPrice ? "" : "hidden"}>
        <Range />
      </div>
    </div>
  );
};
export default Price;
