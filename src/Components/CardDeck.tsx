import { useState } from "react";

import SelectedCards from "./SelectedCard";
import { orcaleDeck } from "./cardData";
import Deck from "./Deck";

const CardDeck = () => {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  function handleCardClick(cardName: { nom: string; displayed: boolean }) {
    orcaleDeck.forEach((card) => {
      if (card.nom === cardName.nom) {
        card.displayed = false;
      }
    });
    setSelectedCards([...selectedCards, cardName.nom]);
    if (selectedCards.length < 7) {
    } else {
      setIsSelected(true);
    }
  }

  function handleSelectedCardClick(card: string) {
    const newSelectedCards = selectedCards.filter(
      (selectedCard) => selectedCard !== card
    );
    setSelectedCards(newSelectedCards);
  }

  return (
    <div>
      <Deck
        cards={orcaleDeck}
        handleCardClick={handleCardClick}
        isSelected={isSelected}
      />
      <SelectedCards
        selectedCards={selectedCards}
        handleSelectedCardClick={handleSelectedCardClick}
      />
    </div>
  );
};

export default CardDeck;
