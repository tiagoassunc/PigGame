import React from "react";
import { Header } from "../components/index";
import { Game } from "../components/index";

import "../styles/layout/pig-page.scss";

const PigGame = () => {
  return (
    <div className="pigPageLayout">
      <div className="pigPageLayout-header">
        <Header />
      </div>
      <div className="pigPageLayout-content">
        <Game />
      </div>
    </div>
  );
};

export default PigGame;
