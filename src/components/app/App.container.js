import React from "react";
import { Provider } from "react-redux";

import "../../styles/base/base.scss";
import store from "../../redux/store.js";
import { App as AppJsx } from "./App.component.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <AppJsx />
    </Provider>
  );
};

export default App;
