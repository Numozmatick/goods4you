import { configureStore} from '@reduxjs/toolkit';
import catalogReducer from "./reducers/catalog.reducer";
import {productApi} from "./reducers/catalog.reducer";

export const configureCatalogStore = (
) => {
  return configureStore({
    reducer: {
      catalogReducer,
      [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
  });
};

export const store = configureCatalogStore();