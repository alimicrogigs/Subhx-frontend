import {
  GET_ALLCOINS_REQUEST,
  GET_ALLCOINS_SUCCESS,
  GET_ALLCOINS_FAILURE,
  CURRENT_RATES_REQUEST,
  CURRENT_RATES_SUCCESS,
  CURRENT_RATES_FAILURE,
} from "../constants/coinsConstants";

const initialState = {
  loading: false,
  allCoins: [],
  currentRates: {},

  error: null,
};

export const coinsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALLCOINS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_ALLCOINS_SUCCESS:
      return {
        ...state,
        loading: true,
        allCoins: action.payload,
        error: null,
      };

    case GET_ALLCOINS_FAILURE:
      return {
        ...state,
        loading: true,
        allCoins: [],
        error: action.payload,
      };

    case CURRENT_RATES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CURRENT_RATES_SUCCESS:
      return {
        ...state,
        loading: false,
        currentRates: action.payload,
        error: null,
      };

    case CURRENT_RATES_FAILURE:
      return {
        ...state,
        loading: false,
        currentRates: {},
        error: action.payload,
      };

    default:
      return state;
  }
};
