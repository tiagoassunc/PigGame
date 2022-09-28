import React from "react";

import "./ConfigGame.styles.scss";

export const ConfigGame = () => {
  return (
    <div className="config-container">
      <div className="title">
        <p className="title-text">Configuracoes</p>
      </div>
      <form className="form">
        <section className="config-section">
          <p className="subtitle-text">Jogo</p>
          <div className="input">
            <label for="Name" className="input-label">
              Pontuacao maxima:
            </label>
            <input className="input-component" type="number" label="Name" />
          </div>
        </section>
        <section className="config-section">
          <p className="subtitle-text">Player 1</p>
          <div className="input">
            <label for="player1Name" className="input-label">
              Nome:
            </label>
            <input className="input-component" label="player1Name" />
          </div>
        </section>
        <section className="config-section">
          <p className="subtitle-text">Player 2</p>
          <div className="input">
            <label for="player2Name" className="input-label">
              Nome:
            </label>
            <input className="input-component" label="player2Name" />
          </div>
        </section>
        <div className="submit-container">
          <input
            className="input-submit"
            type="submit"
            value="salvar"
            onSubmit={() => {}}
          />
        </div>
      </form>
    </div>
  );
};
