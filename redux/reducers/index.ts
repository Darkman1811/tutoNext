import { combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import {addPostSlice} from "./posts/addPostReducer";
import {getOnePostSlice} from "./posts/getOnePostReducer";
import {deletePostSlice} from "./posts/deletePostReducer";
import {updatePostSlice} from "./posts/updatePostReducer";
import {getAllPostSlice} from "./posts/getAllPostReducer";

const rootReducer = combineReducers({
  addPostSliceInfos: addPostSlice.reducer,
  getOnepostSliceInfos: getOnePostSlice.reducer,
  deletePostSliceInfos: deletePostSlice.reducer,
  updatePostSliceInfos: updatePostSlice.reducer,
  getAllPostSliceInfos: getAllPostSlice.reducer
});

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
