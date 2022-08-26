import React from "react";
import logo from "./logo.svg";
import Dealer from "../Dealer/Dealer";
import Player from "../Player/Player";
import "./Table.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDeck } from "../../redux/blackJackSlice";

function Table() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=5")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setDeck(data));
        return data;
      });
  }, []);

  return (
    <div className="Table">
      <Dealer />
      <div>
        <h1> Bet: 100</h1>
      </div>
      <Player />
    </div>
  );
}

export default Table;
