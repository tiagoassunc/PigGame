import React from "react";
import "./Dice.styles.scss";

export const Dice = () => {
  return (
    <div className="dice-container">
      <div className="roll">Rodar</div>
      <div className="curren-value">0</div>
      <div className="stop">Parar</div>
    </div>
  );
};
