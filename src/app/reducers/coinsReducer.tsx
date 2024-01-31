import {
  GET_ALLCOINS_REQUEST,
  GET_ALLCOINS_SUCCESS,
  GET_ALLCOINS_FAILURE,
} from "../constants/coinsConstants";

const initialState = {
  loading: false,
  allCoins: [],
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

    default:
      return state;
  }
};
