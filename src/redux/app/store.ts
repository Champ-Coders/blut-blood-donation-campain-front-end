import { configureStore } from "@reduxjs/toolkit";
import { api } from "../Api/api";
import { searchSlice } from "../Api/searchBloodGroug/searchBloodGroups";
import chatUserSlice from "../features/chatUserSlice";
const store = configureStore({
  reducer: {
    // Add reducers here
    [api.reducerPath]: api.reducer,
    search: searchSlice.reducer,
    chatUser:chatUserSlice

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
