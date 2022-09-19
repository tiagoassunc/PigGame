import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";

import PigGame from "../../pages/Pig.jsx";

const Routes = () => {
  return (
    <RoutesContainer>
      <Route path="/" element={<PigGame />} />
    </RoutesContainer>
  );
};

export default Routes;
