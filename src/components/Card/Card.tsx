import React from "react";
import logo from "./logo.svg";
import "./Card.css";
import { useState, useEffect } from "react";
import { CardRoot } from "./Card.styles";
import { CardType } from "../../types";

function Card(props: {card: CardType}) {
  const backOfCardImage = "https://www.deckofcardsapi.com/static/img/back.png";
  const card = props.card;

  return (
    <CardRoot>
      <img src={card.showing ? card.image : backOfCardImage} alt="Card Here" />
    </CardRoot>
  );
}

export default Card;
