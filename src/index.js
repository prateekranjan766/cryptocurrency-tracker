import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CoinState from "./context/CoinState";

ReactDOM.render(
  <React.StrictMode>
    <CoinState>
      <App />
    </CoinState>
  </React.StrictMode>,
  document.getElementById("root")
);
