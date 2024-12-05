import {
  configureStore,
  combineReducers,
  Reducer,
  Action,
} from "@reduxjs/toolkit";

import { newsAPI } from "../services";

const combinedReducer = combineReducers({
  [newsAPI.reducerPath]: newsAPI.reducer,
  // ... add your reducers here
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer: Reducer = (state: RootState, action: Action) => {
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsAPI.middleware),
  devTools: true,
});

export default store;
