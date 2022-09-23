import React from "react";
import "./Game.style.scss";

import { Player } from "../index";

export const Game = () => {
  return (
    <div className="game-container">
      <Player></Player>
      <Player></Player>
    </div>
  );
};
