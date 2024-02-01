import {
  GET_ALLCOINS_REQUEST,
  GET_ALLCOINS_SUCCESS,
  GET_ALLCOINS_FAILURE,
  CURRENT_RATES_REQUEST,
  CURRENT_RATES_SUCCESS,
  CURRENT_RATES_FAILURE,
  SELECTED_COIN_DATA,
} from "../constants/coinsConstants";

export const getAllCoinsRequest = () => ({
  type: GET_ALLCOINS_REQUEST,
});

export const getAllCoinsSuccess = (allCoins: any) => ({
  type: GET_ALLCOINS_SUCCESS,
  payload: allCoins,
});

export const getAllCoinsFailure = (error: any) => ({
  type: GET_ALLCOINS_FAILURE,
  payload: error,
});

export const currentRatesRequest = () => ({
  type: CURRENT_RATES_REQUEST,
});

export const currentRatesSuccess = (currentRates: any) => ({
  type: CURRENT_RATES_SUCCESS,
  payload: currentRates,
});

export const currentRatesFailure = (error: any) => ({
  type: CURRENT_RATES_FAILURE,
  payload: error,
});

export const selectedCoinData = (selectedCoin: any) => ({
  type: SELECTED_COIN_DATA,
  payload: selectedCoin,
});
