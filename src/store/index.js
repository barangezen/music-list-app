import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice/UserSlice";
import tokenReducer from "../features/TokenSlice/TokenSlice"
import themeReducer from "../features/ThemeSlice/themeSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    tokenObj: tokenReducer,
    theme: themeReducer
  },
});
