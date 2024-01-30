import {
  DEPOSITFUND_DETAILS_REQUEST,
  DEPOSITFUND_DETAILS_SUCCESS,
  DEPOSITFUND_DETAILS_FAILURE,
} from "../constants/depositeFundConstants";

const initialState = {
  loading: false,
  upiAddress: [],
  error: null,
};

export const depositFundReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DEPOSITFUND_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case DEPOSITFUND_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        upiAddress: action.payload,
        error: null,
      };

    case DEPOSITFUND_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        upiAddress: [],
        error: action.payload,
      };

    default:
      return state;
  }
};