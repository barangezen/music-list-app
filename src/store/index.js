import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice/UserSlice";
import tokenReducer from "../features/TokenSlice/TokenSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    tokenObj: tokenReducer,
  },
});
