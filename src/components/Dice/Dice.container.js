import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Dice as DiceJsx } from "./Dice.component.jsx";
import {
  setActivePlayer,
  setPlayer1,
  setPlayer2,
} from "../../redux/player/playerSlice";

const Dice = () => {
  const [diceCurrent, setDiceCurrent] = useState(0);

  const dispatch = useDispatch();

  const playerStore = useSelector((state) => state.player);
  const activePlayer = playerStore.activePlayer;
  const player1 = playerStore.player1;
  const player2 = playerStore.player2;

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

      dispatch(
        setPlayer1({
          ...player1,
          current: player1.current + rollingResult,
        })
      );
    };
    onStop = () => {
      setDiceCurrent(0);
      dispatch(setActivePlayer(2));

      dispatch(
        setPlayer1({
          ...player1,
          current: 0,
          score: player1.score + player1.current,
        })
      );
    };
  } else {
    onRoll = () => {
      const rollingResult = rollingDice();
      setDiceCurrent(rollingResult);

      dispatch(
        setPlayer2({
          ...player2,
          current: player2.current + rollingResult,
        })
      );
    };
    onStop = () => {
      setDiceCurrent(0);
      dispatch(setActivePlayer(1));

      dispatch(
        setPlayer2({
          ...player2,
          current: 0,
          score: player2.score + player2.current,
        })
      );
    };
  }

  return (
    <DiceJsx onRoll={onRoll} onStop={onStop} diceValue={diceCurrent}></DiceJsx>
  );
};

export default Dice;
