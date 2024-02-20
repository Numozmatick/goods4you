import { configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import catalogReducer from "../../features/catalog/store/reducers/catalog.reducer";
import allProductReducer from "../../features/allProduct/store/reducers/allProduct.reducer";
import productReducer from "../../features/oneProduct/store/reducers/oneProduct.reducer";

export const configureCatalogStore = (
) => {
  return configureStore({
    reducer: {
      allProductReducer,
      catalogReducer,
      productReducer
    }
    //@ts-ignore
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  });
};

export const store = configureCatalogStore();
export type RootInspectionState = ReturnType<typeof catalogReducer>;
export type CatalogStore = ReturnType<typeof configureCatalogStore>;
export type CatalogDispatch = CatalogStore['dispatch'];
export const useCatalogSelector: TypedUseSelectorHook<RootInspectionState> = useSelector;
export const useCatalogDispatch = () => useDispatch<CatalogDispatch>();

