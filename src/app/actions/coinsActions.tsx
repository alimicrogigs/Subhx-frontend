import {
  GET_ALLCOINS_REQUEST,
  GET_ALLCOINS_SUCCESS,
  GET_ALLCOINS_FAILURE,
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
