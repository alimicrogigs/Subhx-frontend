import { combineReducers } from "redux";

import { depositFundReducer } from "./depositeFundReducer";
import { coinsReducer } from "./coinsReducer";
import { orderBookReducer } from "./orderBookReducer";

export const rootReducer = combineReducers({
  deposite: depositFundReducer,
  coin: coinsReducer,
  orderBook: orderBookReducer,
});
