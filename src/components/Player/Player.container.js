import React from "react";
import { useSelector } from "react-redux";

import { Player as PlayerJsx } from "./Player.component.jsx";
import {} from "../../redux/player/playerSlice";

const Player = ({ playerId }) => {
  const playerStore = useSelector((state) => state.player);

  const playerName = playerStore[`player${playerId}`].name;
  const playerCurrent = playerStore[`player${playerId}`].current;
  const playerScore = playerStore[`player${playerId}`].score;

  return (
    <PlayerJsx
      playerName={playerName}
      current={playerCurrent}
      score={playerScore}
    />
  );
};

export default Player;
