// assets
import areaIcon from "../../../assets/area.svg";

const CardArea = ({ card }) => {
  return (
    <div className="flex items-center gap-1">
      <img src={areaIcon} alt="area" className="w-4 h-4" />
      {card.description.sqft ||
      card.description.sqft_min ||
      card.description.sqft_max ? (
        <span className="text-xs">
          {card.description.sqft ||
            card.description.sqft_min ||
            card.description.sqft_max}{" "}
          ft<sup>2</sup>
        </span>
      ) : null}
      {!card.description.sqft &&
        !card.description.sqft_min &&
        !card.description.sqft_max && <span className="text-xs">N.A</span>}
    </div>
  );
};
export default CardArea;
