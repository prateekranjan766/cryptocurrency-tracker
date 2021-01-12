import React, { useContext } from "react";

import CoinContext from "./../../context/coinContext";

const PriceSymbol = () => {
  const coinContext = useContext(CoinContext);
  const { currentCurrency } = coinContext;

  return (
    <>
      {currentCurrency === "USD" && <i className="fas fa-dollar-sign"></i>}
      {currentCurrency === "INR" && <i className="fas fa-rupee-sign"></i>}
      {currentCurrency === "EUR" && <i className="fas fa-euro-sign"></i>}
      {currentCurrency === "JPY" && <i className="fas fa-yen-sign"></i>}
    </>
  );
};

export default PriceSymbol;
