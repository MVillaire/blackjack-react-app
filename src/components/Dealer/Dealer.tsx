import "./Dealer.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blackJackState } from "../../redux/blackJackSlice";
import { drawDealerCard } from "../../redux/blackJackSlice";
import { DeckType, CardType } from "../../types";
import { fetchCard } from "../../utils";
import Hand from "../Hand/Hand";

function Dealer() {
  const dispatch = useDispatch();
  const deck: DeckType = useSelector((state: blackJackState) => state.deck);
  const dealerHand = useSelector(
    (state: blackJackState) => state.dealer.hand
  );

  const [cardCount, setCardCount] = useState(0);

  useEffect(() => {
    fetchCard(deck)?.then((newCard) => {
      dispatch(drawDealerCard(newCard));
    });
  }, [cardCount]);

  useEffect(() => {
    // fetchCard(deck)?.then((newCard) => {
    //   dispatch(drawDealerCard(newCard));
    // });
    fetchCard(deck)?.then((newCard) => {
      newCard.showing = false;
      dispatch(drawDealerCard(newCard));
    });
  }, [deck]);


  return (
    <div className="Dealer">
      <h1>Dealer</h1>
      <Hand cards={dealerHand}/>
    </div>
  );
}

export default Dealer;
