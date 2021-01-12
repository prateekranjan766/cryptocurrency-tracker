import React, { useContext } from "react";
import CoinContext from "./../../context/coinContext";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

import "./Table.scss";

const Table = (props) => {
  const coinContext = useContext(CoinContext);
  const { filtered, coins } = coinContext;

  const cryptoCoins =
    filtered === null
      ? coins !== null
        ? coins.slice(0, 20)
        : null
      : filtered.slice(0, 20);
  return (
    <table>
      {cryptoCoins !== null && (
        <>
          <TableHeader />
          <TableBody history={props.history} coins={cryptoCoins} />
        </>
      )}
    </table>
  );
};

export default Table;
