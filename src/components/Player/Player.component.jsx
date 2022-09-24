import React from "react";
import "./Player.styles.scss";

export const Player = () => {
  return (
    <div className="player-container">
      <p className="player-title">Pig Player</p>
      <p className="player-score">0</p>
      <div className="current-container">
        <p className="current-text">Current</p>
        <p className="current-score">1</p>
      </div>
    </div>
  );
};
