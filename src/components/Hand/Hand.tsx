import React from "react";
import logo from "./logo.svg";
import "./Hand.css";
import Card from "../Card/Card";
import { HandRoot, Cards } from "./Hand.styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blackJackState } from "../../redux/blackJackSlice";
import { drawPlayerCard } from "../../redux/blackJackSlice";
import { DeckType, CardType } from "../../types";

function Hand(props: { cards: CardType[] }) {
  return (
    <HandRoot>
      <Cards>
        {props.cards.map((card) => (
          <Card card={card} key={card.code} />
        ))}
      </Cards>
    </HandRoot>
  );
}

export default Hand;
