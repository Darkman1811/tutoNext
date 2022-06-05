import { combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({});

export type AppState = ReturnType<typeof rootReducer>;
export type GetState = () => AppState;
export type StoreFromMiddleware = {
  getState: GetState;
  dispatch(action: any): void;
};

/**
 * @deprecated
 */
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default rootReducer;
