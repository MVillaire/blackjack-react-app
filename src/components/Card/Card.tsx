import React from "react";
import logo from "./logo.svg";
import "./Card.css";
import { useState, useEffect } from "react";

function Card() {
  const backOfCardImage = "https://www.deckofcardsapi.com/static/img/back.png";

  const [showing, setShowing] = useState(false);
  const [cardNumber, setCardNumber] = useState(0);
  const [deck, setDeck] = useState({
    success: true,
    deck_id: "",
    shuffled: true,
    remaining: 52,
  });
  const [card, setCard] = useState({
    image: "https://www.deckofcardsapi.com/static/img/KH.png",
    value: "KING",
    suit: "HEARTS",
    code: "KH",
    showing: false,
  });

  useEffect(() => {
    const fetchCard = () => {
      if (deck.deck_id === "") {
        return;
      }
      return fetch(
        `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/draw/`
      )
        .then((response) => response.json())
        .then((data) => {
          //Update the remaining card count
          const newDeck = { ...deck };
          newDeck.remaining = data.remaining;
          setDeck(newDeck);

          // Update the new card
          const newCard = data.cards[0];
          newCard.showing = false;
          setCard(newCard);
        });
    };
    fetchCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardNumber]);

  useEffect(() => {
    fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => response.json())
      .then((data) => {
        setDeck(data);
        return data;
      });
  }, []);

  return (
    <div className="Card">
      <button onClick={() => setShowing(!showing)}> Flip </button>
      <button onClick={() => setCardNumber(cardNumber + 1)}>
        Get New Card
      </button>
      <h3>Cards Remaining: {deck.remaining}</h3>
      <img src={showing ? card.image : backOfCardImage} alt="Card Here" />
    </div>
  );
}

export default Card;
