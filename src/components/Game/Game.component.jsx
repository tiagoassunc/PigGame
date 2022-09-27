import React from "react";
import "./Game.style.scss";

import { Player, Dice } from "../index";

export const Game = () => {
  return (
    <div className="game-container">
      <Player playerId="1"></Player>
      <Dice />
      <Player playerId="2"></Player>
    </div>
  );
};
