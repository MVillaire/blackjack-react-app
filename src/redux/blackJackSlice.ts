import { createSlice } from "@reduxjs/toolkit";
import { CardType, DeckType } from "../types"

const playerObject = {
  name: "Player1",
  hand: [] as CardType[],
  playerSurrender: false,
  wallet: 100,
  bet: 0,
};

const dealerObject = {
  hand: [] as CardType[],
};

const initialState = {
  players: [playerObject],
  dealer: dealerObject,
  deck: {} as DeckType,
};

export type blackJackState = typeof initialState;
export type playerType = typeof playerObject;
export type dealerType = typeof dealerObject;

const blackJackSlice = createSlice({
  name: "blackJackSlice",
  initialState: initialState,
  reducers: {
    increaseBet: (state: blackJackState) => {},
    decreaseBet: (state: blackJackState) => {},
    newGame: (state: blackJackState) => {},
    drawPlayerCard: (state: blackJackState, action: any) => {
      state.players[0].hand.push(action.payload as CardType)
    },
    drawDealerCard: (state: blackJackState, action: any) => {
      state.dealer.hand.push(action.payload as CardType)
    },
    setDeck: (state: blackJackState, action: any) => {
      state.deck = action.payload;
    },
  },
});

// Action creators (generated automatically)
export const {
  decreaseBet,
  increaseBet,
  newGame,
  drawPlayerCard,
  drawDealerCard,
  setDeck,
} = blackJackSlice.actions;

export const blackJackReducer = blackJackSlice.reducer;
