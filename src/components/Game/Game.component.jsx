import React from "react";
import "./Game.style.scss";

import { Player, Dice } from "../index";

export const Game = () => {
  return (
    <div className="game-container">
      <Player></Player>
      <Dice />
      <Player></Player>
    </div>
  );
};
