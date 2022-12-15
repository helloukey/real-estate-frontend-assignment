import bathIcon from "../../../assets/bath.svg";

const CardBathroom = ({ card }) => {
  return (
    <div className="flex items-center gap-1">
      <img src={bathIcon} alt="bathroom" className="w-4 h-4" />
      {card.description.baths ||
      card.description.baths_min ||
      card.description.baths_max ? (
        <span className="text-xs">
          {card.description.baths ||
            card.description.baths_min ||
            card.description.baths_max}{" "}
          Bedroom
        </span>
      ) : null}
      {!card.description.baths &&
        !card.description.baths_min &&
        !card.description.baths_max && <span className="text-xs">N.A</span>}
    </div>
  );
};
export default CardBathroom;
