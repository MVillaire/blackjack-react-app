import React from 'react';
import logo from './logo.svg';
import './Card.css';
import { useState } from 'react';


// const Card = {
//   "image": "https://www.deckofcardsapi.com/static/img/KH.png",
//   "value": "KING",
//   "suit": "HEARTS",
//   "code": "KH",
//   "showing": false
// },




function Card() {

  const image = "https://www.deckofcardsapi.com/static/img/KH.png";
  const backOfCardImage = "https://www.deckofcardsapi.com/static/img/back.png";

  const [showing, setShowing] = useState(false);

  return (
    <div className="Card">
      <button onClick={() => setShowing(!showing)}> Flip </button> 
      { showing? <img src={image}/> : <img src={backOfCardImage}/>}
    </div>
  );
}

export default Card;
