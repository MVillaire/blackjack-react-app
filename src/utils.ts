import {DeckType} from "./types"

export const fetchCard = (deck: DeckType) => {
    if (!deck.deck_id || deck.deck_id === "") {
      return;
    }
    return fetch(
      `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/draw/`
    )
      .then((response) => response.json())
      .then((data) => {
        const newCard = data.cards[0];
        newCard.showing = true;
        console.log("Table is drawing a player card");
        return newCard;
      });
  };