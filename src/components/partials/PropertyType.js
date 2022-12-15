import { useDispatch } from "react-redux";
import { setPropertyType } from "../../redux/filterSlice";

const PropertyType = () => {
  const dispatch = useDispatch();

  const handleProperty = (e) => {
    dispatch(setPropertyType(e.target.value))
  }

  return (
    <div className="flex flex-col gap-2 w-full px-5 border-r-2 border-base-300">
      <label htmlFor="property">Property Type</label>
      <select id="property" className="select w-full" onChange={handleProperty}>
        <option value="">All</option>
        <option value="singlefamily">Single Family</option>
        <option value="apartment">Apartment</option>
        <option value="townhomes">Town Homes</option>
        <option value="duplextriplex">Duplex Triplex</option>
        <option value="condos">Condos</option>
      </select>
    </div>
  );
};
export default PropertyType;
