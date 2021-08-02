import { combineReducers } from "@reduxjs/toolkit";
import { appReducer } from "./app";

export const rootReducer = combineReducers({
  app: appReducer,
});

export type SystemState = ReturnType<typeof rootReducer>;

