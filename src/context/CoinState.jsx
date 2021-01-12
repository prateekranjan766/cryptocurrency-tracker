import React, { useReducer } from "react";
import axios from "axios";
import CoinContext from "./coinContext";
import coinReducer from "./coinReducer";

import {
  CLEAR_FILTER,
  FILTER_COINS,
  GET_COINS,
  GET_GRAPH_DATA,
  SET_CURRENT_CURRENCY,
  SET_INFO,
  SET_DETAILS,
  CLEAR_DETAILS,
} from "./types";

const CoinState = (props) => {
  const initialState = {
    currency: [
      ["USD", '"&#36;"'],
      ["INR", "&#x20B9;"],
      ["EUR", "&#128;"],
      ["JPY", "&#165;"],
    ],
    currentCurrency: "USD",
    coins: null,
    deatils: null,
    loading: true,
    graphData: [],
    info: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(coinReducer, initialState);

  //methods

  //getCoins
  const getCoins = async (currency = "USD") => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false`
      );

      dispatch({ type: GET_COINS, payload: res.data });
    } catch (err) {
      console.log(err.message);
    }
  };
  //getGraphData
  const getGraphData = async (data) => {
    const { id, vs_currency, days } = data;
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vs_currency}&days=${days}`
      );
      dispatch({ type: GET_GRAPH_DATA, payload: res.data });
    } catch (err) {
      console.log(err.message);
    }
  };
  //filter
  const filter = (text) => {
    dispatch({ type: FILTER_COINS, payload: text });
  };
  //clearFilter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  //setCurrentCurrency
  const setCurrentCurrency = (currency) => {
    dispatch({ type: SET_CURRENT_CURRENCY, payload: currency });
  };
  //setInfo
  const setInfo = (data) => {
    dispatch({ type: SET_INFO, payload: data });
  };
  //setDetails
  const getDetails = async () => {
    const coin = localStorage.getItem("info");
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
      );
      dispatch({ type: SET_DETAILS, payload: res.data });
    } catch (err) {
      console.log(err.message);
    }
  };
  //clearDetails
  const clearDetails = () => {
    dispatch({ type: CLEAR_DETAILS });
  };
  return (
    <CoinContext.Provider
      value={{
        currency: state.currency,
        coins: state.coins,
        filtered: state.filtered,
        graphData: state.graphData,
        currentCurrency: state.currentCurrency,
        currentID: state.currentID,
        info: state.info,
        details: state.details,
        loading: state.loading,
        clearDetails,
        setInfo,
        getDetails,
        getGraphData,
        setCurrentCurrency,
        getCoins,
        filter,
        clearFilter,
      }}
    >
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinState;
