import { configureStore , getDefaultMiddleware  } from "@reduxjs/toolkit";
import module from "./modules/module";

const store = configureStore({
  reducer: {
    module,
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false})
});

export default store;

