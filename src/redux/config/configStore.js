import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import search from "redux/modules/search";
import likes from "redux/modules/likes";

const store = configureStore({
  reducer: { search, likes },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
