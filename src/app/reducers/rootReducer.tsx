<<<<<<< HEAD
import { combineReducers } from "redux";

import { depositFundReducer } from "./depositeFundReducer";
import { coinsReducer } from "./coinsReducer";
import storeUserDataReducer from "./storeUserDataReducer";

export const rootReducer = combineReducers({
  deposite: depositFundReducer,
  coin: coinsReducer,
  user: storeUserDataReducer
});
=======
"use client";
import { combineReducers } from "redux";

import {depositFundReducer} from "./depositFundReducer";

export const rootReducer = combineReducers({
  deposite: depositFundReducer,
})
>>>>>>> a25303134637797efea753a005790913f34dea8b
