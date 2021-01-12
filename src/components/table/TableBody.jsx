import React, { useContext } from "react";
import Moment from "react-moment";
import PriceSymbol from "./PriceSymbol";
import CoinContext from "./../../context/coinContext";

const TableBody = (props) => {
  const coinContext = useContext(CoinContext);
  const { setInfo } = coinContext;

  const { coins } = props;

  const onClick = (coin) => {
    setInfo(coin);
    props.history.push("/details");
  };
  return (
    <tbody>
      {coins !== null &&
        coins.map((coin) => (
          <tr key={coin.id} className="rows" onClick={() => onClick(coin)}>
            <td>
              <img src={coin.image} alt="coin_image" />
            </td>
            <td className="name">{coin.name}</td>
            <td className="symbol">{coin.symbol}</td>
            <td className="market_cap_rank ta-r">{coin.market_cap_rank}</td>
            <td className="current_price ta-r">
              <PriceSymbol />
              {coin.current_price}
            </td>
            <td
              className={
                coin.price_change_percentage_24h > 0
                  ? "increase ta-r"
                  : "decrease ta-r"
              }
            >
              {coin.price_change_percentage_24h}%
            </td>
            <td className="current_price ta-r">
              <PriceSymbol />
              {coin.market_cap}
            </td>
            <td className="last_updated">
              <Moment>{coin.last_updated}</Moment>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
