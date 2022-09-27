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

    setPlayer1: (state, action) => {
      state.player1 = action.payload;
    },
    setPlayer2: (state, action) => {
      state.player2 = action.payload;
    },

    resetGame: (state) => {
      state.activePlayer = 1;
      state.player1 = {
        ...state.player1,
        score: 0,
        current: 0,
      };
      state.player2 = {
        ...state.player2,
        score: 0,
        current: 0,
      };
    },
  },
});

export const { setActivePlayer, setPlayer1, setPlayer2, resetGame } =
  playerSlice.actions;

export default playerSlice.reducer;

export const getAtivePlayer = (state) => state.player.activePlayer;
export const getPlayer1 = (state) => state.player.player1;
export const getPlayer2 = (state) => state.player.player2;
