import { MARKETTRADE_DATA } from "../constants/orderBookConstants";

const initialState = {
  loading: false,
  marketTradeData: [],
  error: null,
};

export const orderBookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MARKETTRADE_DATA:
      return {
        ...state,
        marketTradeData: action.payload,
      };

      
    default:
        return state;
  }
};
