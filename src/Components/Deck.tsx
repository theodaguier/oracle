import Card from "./Card";

type DeckProps = {
  cards: { nom: string; displayed: boolean }[];
  handleCardClick: (card: { nom: string; displayed: boolean }) => void;
  isSelected: boolean;
};

const Deck = ({ cards, handleCardClick, isSelected }: DeckProps) => {
  return (
    <div>
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          onClick={() => handleCardClick(card)}
          isSelected={isSelected}
        />
      ))}
    </div>
  );
};

export default Deck;
