import React from "react";
import logo from "./logo.svg";
import "./Player.css";
import { PlayerRoot } from "./Player.styles";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blackJackState } from "../../redux/blackJackSlice";
import { drawPlayerCard } from "../../redux/blackJackSlice";
import { DeckType, CardType } from "../../types";
import { fetchCard } from "../../utils";
import Hand from "../Hand/Hand";

function Player() {
  const dispatch = useDispatch();
  const deck: DeckType = useSelector((state: blackJackState) => state.deck);
  const playerHand = useSelector(
    (state: blackJackState) => state.players[0].hand
  );

  const [cardCount, setCardCount] = useState(0);

  useEffect(() => {
    fetchCard(deck)?.then((newCard) => {
      dispatch(drawPlayerCard(newCard));
    });
  }, [cardCount]);

  useEffect(() => {
    fetchCard(deck)?.then((newCard) => {
      dispatch(drawPlayerCard(newCard));
    });
  }, [deck]);

  return (
    <PlayerRoot>
      <Hand cards={playerHand} />
      <button onClick={() => setCardCount(cardCount + 1)}>Draw Card</button>
      <h1>Player</h1>
    </PlayerRoot>
  );
}

export default Player;
