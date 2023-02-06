import { configureStore } from "@reduxjs/toolkit";
import { rootApi } from "./api/rootApi";

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
  },
  devTools: true,
  middleware: (getDefault) => getDefault().concat(rootApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
