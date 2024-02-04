import { MARKETTRADE_DATA } from "../constants/orderBookConstants";

export const marketData = (marketTradeData: any) => ({
  type: MARKETTRADE_DATA,
  payload: marketTradeData,
});
