import { combineReducers } from "redux";

import { depositFundReducer } from "./depositeFundReducer";
import { coinsReducer } from "./coinsReducer";

export const rootReducer = combineReducers({
  deposite: depositFundReducer,
  coin: coinsReducer,
});
