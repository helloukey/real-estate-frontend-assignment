const CardPrice = ({ card }) => {
  return (
    <>
      {(card.list_price || card.list_price_min) && (
        <h2 className="card-title">
          ${card.list_price || card.list_price_min}
          <span className="text-xs">/month</span>
        </h2>
      )}
      {!card.list_price && !card.list_price_min && (
        <h2 className="card-title">
          {card.list_price_max === null ? "N/A" : `$${card.list_price_max}`}
        </h2>
      )}
    </>
  );
};
export default CardPrice;
