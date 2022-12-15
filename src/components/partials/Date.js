import { useDispatch } from "react-redux";
import { setDate } from "../../redux/filterSlice";

const Date = () => {
  const dispatch = useDispatch();

  const handleDate = (e) => {
    dispatch(setDate(e.target.value));
  };

  return (
    <div className="flex flex-col gap-2 w-full px-5 border-r-2 border-base-300">
      <label htmlFor="date">When</label>
      <input
        data-date-format="yy-mm-dd"
        id="date"
        type="date"
        className="input w-full"
        onChange={handleDate}
      />
    </div>
  );
};
export default Date;
