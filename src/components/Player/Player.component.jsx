import React from "react";
import "./Player.styles.scss";

export const Player = ({ playerName, current, score }) => {
  return (
    <div className="player-container">
      <p className="player-title">{playerName}</p>
      <p className="player-score">{score}</p>
      <div className="current-container">
        <p className="current-text">Current</p>
        <p className="current-score">{current}</p>
      </div>
    </div>
  );
};
