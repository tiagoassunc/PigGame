import React from "react";
import "./Dice.styles.scss";

export const Dice = ({ onRoll, onStop, diceValue }) => {
  return (
    <div className="dice-container">
      <div className="roll" onClick={onRoll}>
        Rodar
      </div>
      <div className="curren-value">{diceValue}</div>
      <div className="stop" onClick={onStop}>
        Parar
      </div>
    </div>
  );
};
