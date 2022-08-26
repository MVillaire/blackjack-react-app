import { createSlice } from "@reduxjs/toolkit";

const playerObject = {
    name: 'Player1',
    hand: [],
    playerSurrender: false,
    wallet: 100,
    bet: 0
};

const dealerObject = {
    hand: [],
};

const initialState = {
    player: [],
    dealer: dealerObject,
  };

export type blackJackState = typeof initialState;
export type playerType = typeof playerObject;
export type dealerType = typeof dealerObject;


const blackJackSlice = createSlice({
  name: "blackJackSlice",
  initialState: initialState,
  reducers: {
    increaseBet: (state:blackJackState) => {
        
    },
    decreaseBet: (state: blackJackState) => {
        
    },
    newGame: (state: blackJackState) => {
        
    },
    addNewPlayerCard: (state: blackJackState) => {
        
    },
    openDealerCard: (state: blackJackState) => {
        
    },
  },
});

// Action creators (generated automatically)
export const { decreaseBet, increaseBet, newGame, addNewPlayerCard, openDealerCard } = blackJackSlice.actions;

export const blackJackReducer = blackJackSlice.reducer;