import bedIcon from "../../../assets/bed.svg";

const CardBedroom = ({ card }) => {
  return (
    <div className="flex items-center gap-1">
      <img src={bedIcon} alt="bedroom" className="w-4 h-4" />
      {card.description.beds ||
      card.description.beds_min ||
      card.description.beds_max ? (
        <span className="text-xs">
          {card.description.beds ||
            card.description.beds_min ||
            card.description.beds_max}{" "}
          Bedroom
        </span>
      ) : null}
      {!card.description.beds &&
        !card.description.beds_min &&
        !card.description.beds_max && <span className="text-xs">N.A</span>}
    </div>
  );
};
export default CardBedroom;
