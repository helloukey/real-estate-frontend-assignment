const CardTitle = ({ card }) => {
  return (
    <>
      <h3 className="font-bold truncate">
        {card.description.name ? card.description.name : "N/A"}
      </h3>
      <h4 className="text-xs truncate">
        {card.location.address.line ? card.location.address.line : "N/A"}
      </h4>
    </>
  );
};
export default CardTitle;
