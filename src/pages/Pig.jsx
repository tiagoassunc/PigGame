import React, { useState } from "react";
import { Header, Game, ConfigGame } from "../components/index";

import "../styles/layout/pig-page.scss";

const PigGame = () => {
  const [isConfigActive, setIsConfigActive] = useState(true);

  const configTab = () => {
    if (isConfigActive === true) {
      return (
        <div className="pigPageLayout-config">
          <ConfigGame />
        </div>
      );
    }
  };

  return (
    <div className="pigPageLayout">
      {configTab()}
      <div className="pigPageMain pigPageLayout-main">
        <div className="pigPageMain-header">
          <Header />
        </div>
        <div className="pigPageMain-content">
          <Game />
        </div>
      </div>
    </div>
  );
};

export default PigGame;
