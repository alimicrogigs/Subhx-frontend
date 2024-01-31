import { combineReducers } from "redux";

import {depositFundReducer} from "./depositeFundReducer";

export const rootReducer = combineReducers({
  deposite: depositFundReducer,
});
