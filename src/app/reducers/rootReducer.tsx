import { combineReducers } from "redux";
import { userData } from "./getUserDetailsReducer";
import { depositFundReducer } from "./depositeFundReducer";
import { coinsReducer } from "./coinsReducer";
import { orderBookReducer } from "./orderBookReducer";
import storeUserDataReducer from "./storeUserDataReducer";


export const rootReducer = combineReducers({
  deposite: depositFundReducer,
  coin: coinsReducer,
  user: storeUserDataReducer,
  userDetails :userData,
  orderBook: orderBookReducer,
});
