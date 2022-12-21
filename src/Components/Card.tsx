const Card = ({ card, onClick, isSelected }) => {
  // Call the handleCardClick function from the onClick event handler
  return (
    <div
      onClick={() => onClick(card.nom)}
      style={{ display: card.displayed ? "block" : "none" }}
      className={isSelected ? "selected" : ""}
    >
      <li>{card.nom}</li>
    </div>
  );
};

export default Card;
