import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import search from "redux/modules/search";

const store = configureStore({
  reducer: { search },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
