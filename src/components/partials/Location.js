import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/filterSlice";

const Location = () => {
  const dispatch = useDispatch();

  const handleLocation = (e) => {
    dispatch(setLocation(e.target.value))
  }

  return (
    <div className="flex flex-col gap-2 w-full px-5 border-r-2 border-base-300">
      <label htmlFor="location">Location</label>
      <input
        id="location"
        type="text"
        placeholder="Desired location"
        className="input w-full"
        onChange={handleLocation}
      />
    </div>
  );
};
export default Location;
