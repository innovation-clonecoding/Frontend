import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import search from "redux/modules/search";
import likes from "redux/modules/likes";
import { tags } from "redux/modules/tag";

const store = configureStore({
  reducer: { search, likes, tags },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
