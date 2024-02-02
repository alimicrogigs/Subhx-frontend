"use client";
import { combineReducers } from "redux";
import { userData } from "./getUserDetailsReducer";
import {depositFundReducer} from "./depositFundReducer";

export const rootReducer = combineReducers({
  deposite: depositFundReducer,
  userDetails :userData
})