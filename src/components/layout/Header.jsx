import React, { useContext, useRef } from "react";
import CoinContext from "./../../context/coinContext";
import "./Header.scss";

const Header = () => {
  const coinContext = useContext(CoinContext);
  const {
    filter,
    clearFilter,
    currency,
    currentCurrency,
    setCurrentCurrency,
  } = coinContext;

  const text = useRef("");

  const onChange = (e) => {
    if (text.current.value === "") {
      clearFilter();
    } else {
      filter(e.target.value);
    }
  };

  const handleCurrency = (e) => {
    setCurrentCurrency(e.target.value);
  };

  return (
    <div className="header">
      <h1>Crypto-Currency Tracker</h1>
      <h2>Search for a Cryto-Currency</h2>
      <label>
        <i className="fas fa-search"></i>
        <input
          type="text"
          ref={text}
          placeholder="Search"
          onChange={onChange}
        />
      </label>
      <span>VS</span>
      <select value={currentCurrency} onChange={handleCurrency}>
        {currency.map((c) => (
          <option key={c[0]} value={c[0]}>
            {c[0]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Header;
