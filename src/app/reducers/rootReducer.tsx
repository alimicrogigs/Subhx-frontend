"use client";
import { combineReducers } from "redux";

import {depositFundReducer} from "./depositFundReducer";

export const rootReducer = combineReducers({
  deposite: depositFundReducer,
})