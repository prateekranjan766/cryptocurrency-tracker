import React, { useEffect, useContext } from "react";
import Table from "../table/Table";
import Header from "./../layout/Header";
import CoinContext from "./../../context/coinContext";
import Preloader from "./../preloader/Preloader";

const CoinSummary = (props) => {
  const coinContext = useContext(CoinContext);
  const { getCoins, coins, currentCurrency, clearDetails } = coinContext;

  useEffect(() => {
    getCoins(currentCurrency);
    clearDetails();
    //eslint-disable-next-line
  }, [currentCurrency]);
  return (
    <div>
      {coins === null ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Table history={props.history} />
        </>
      )}
    </div>
  );
};

export default CoinSummary;
