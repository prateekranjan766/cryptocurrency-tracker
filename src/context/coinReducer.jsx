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

export default (state, action) => {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        coins: action.payload,
      };
    case GET_GRAPH_DATA:
      return {
        ...state,
        graphData: action.payload.prices,
      };
    case FILTER_COINS:
      return {
        ...state,
        filtered: state.coins.filter((coin) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return coin.name.match(regex) || coin.symbol.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case SET_CURRENT_CURRENCY:
      localStorage.setItem("currentCurrency", action.payload);
      return {
        ...state,
        currentCurrency: action.payload,
      };
    case SET_INFO:
      localStorage.setItem("info", action.payload.id);
      return {
        ...state,
        info: action.payload,
      };
    case SET_DETAILS:
      return {
        ...state,
        loading: false,
        details: action.payload,
      };
    case CLEAR_DETAILS:
      return {
        ...state,
        loading: true,
        graphData: [],
        details: null,
      };
    default:
      return state;
  }
};
