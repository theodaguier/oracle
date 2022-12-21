import React, { FC, useState } from "react";

interface SelectedCardsProps {
  selectedCards: string[];
  handleSelectedCardClick: (cardName: string) => void;
}

// Ce composant prend en entrée les cartes sélectionnées en tant que propriété
const SelectedCards: FC<SelectedCardsProps> = ({ selectedCards }) => {
  return (
    <ul>
      {selectedCards.map((card, index) => (
        <li key={index}>{card}</li>
      ))}
    </ul>
  );
};

export default SelectedCards;
