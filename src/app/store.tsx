import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { rootReducer } from "./reducers/rootReducer";

const middleware = [thunk];

export const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(...middleware)
);
