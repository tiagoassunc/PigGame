import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Dice as DiceJsx } from "./Dice.component.jsx";
import {
  setPlayer1Current,
  setPlayer2Current,
  setPlayer1Score,
  setPlayer2Score,
  setActivePlayer,
} from "../../redux/player/playerSlice";

const Dice = () => {
  const [diceCurrent, setDiceCurrent] = useState(0);

  const dispatch = useDispatch();

  const playerStore = useSelector((state) => state.player);
  const activePlayer = playerStore.activePlayer;
  const player1Current = playerStore.player1.current;
  const player2Current = playerStore.player2.current;

  let onRoll;
  let onStop;

  const rollingDice = () => {
    let min = Math.ceil(1);
    let max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  if (activePlayer === 1) {
    onRoll = () => {
      const rollingResult = rollingDice();
      setDiceCurrent(rollingResult);

      dispatch(setPlayer1Current(player1Current + rollingResult));
    };
    onStop = () => {
      setDiceCurrent(0);
      dispatch(setPlayer1Current(0));
      dispatch(setPlayer1Score(player1Current));
      dispatch(setActivePlayer(2));
    };
  } else {
    onRoll = () => {
      const rollingResult = rollingDice();
      setDiceCurrent(rollingResult);

      dispatch(setPlayer2Current(player2Current + rollingResult));
    };
    onStop = () => {
      setDiceCurrent(0);
      dispatch(setPlayer2Current(0));
      dispatch(setPlayer2Score(player2Current));
      dispatch(setActivePlayer(1));
    };
  }

  return (
    <DiceJsx onRoll={onRoll} onStop={onStop} diceValue={diceCurrent}></DiceJsx>
  );
};

export default Dice;
