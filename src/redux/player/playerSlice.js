import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    activePlayer: 1,
    player1: { name: "Player 01", score: 0, current: 0 },
    player2: { name: "Player 02", score: 0, current: 0 },
  },
  reducers: {
    setActivePlayer: (state, action) => {
      state.activePlayer = action.payload;
    },
    setPlayer1Name: (state, action) => {
      state.player1.name = action.payload;
    },
    setPlayer2Name: (state, action) => {
      state.player2.name = action.payload;
    },
    setPlayer1Score: (state, action) => {
      state.player1.score = state.player1.score + action.payload;
    },
    setPlayer2Score: (state, action) => {
      state.player2.score = state.player2.score + action.payload;
    },
    setPlayer1Current: (state, action) => {
      state.player1.current = action.payload;
    },
    setPlayer2Current: (state, action) => {
      state.player2.current = action.payload;
    },
  },
});

export const {
  setActivePlayer,
  setPlayer1Name,
  setPlayer2Name,
  setPlayer1Score,
  setPlayer2Score,
  setPlayer1Current,
  setPlayer2Current,
} = playerSlice.actions;

export default playerSlice.reducer;

export const getAtivePlayer = (state) => state.player.activePlayer;
export const getPlayer1 = (state) => state.player.player1;
export const getPlayer2 = (state) => state.player.player2;
