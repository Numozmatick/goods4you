import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {Product} from "../../../../entities/product/types/product.types";
import {RootState} from "@reduxjs/toolkit/query";
import ProductService from "../../../../entities/product/api/productService"

export interface ProductsState {
    isLoaded: boolean,
    products: Product[],
    categories: string[]
}




export const fetchProductsOfCategory = createAsyncThunk<string,
    void>(
    'fetchProductsOfCategory',
    async (payload: void, {dispatch, fulfillWithValue, extra}) => {
        //@ts-ignore
        const { category, limit = 9, skip = 0 } = payload;
        dispatch(clearList())
        dispatch(clearResponse())
        const productService = new ProductService();
        const response = await productService.getProductsByCategory(category, limit, skip);
        if (response) {
            dispatch(setResponse(response))
            //@ts-ignore
            dispatch(addToList(response.products))
        }
        dispatch(setIsLoaded(true))

        return fulfillWithValue("finish")
    }
)

export const getProductById = createAsyncThunk<string,
    void>(
    'getProductById',
    async (payload: void, {dispatch, fulfillWithValue, extra}) => {
        //@ts-ignore
        const { id } = payload;
        dispatch(clearList())
        dispatch(clearResponse())
        const productService = new ProductService();
        const response = await productService.getProductById(id);
        if (response) {
            dispatch(setResponse([response]))
            //@ts-ignore
            dispatch(addToList([response]))
        }
        dispatch(setIsLoaded(true))

        return fulfillWithValue("finish")
    }
)

export const fetchAllProductsCategories = createAsyncThunk<string,
    void>(
    'fetchAllProductsCategories',
    async (payload: void, {dispatch, fulfillWithValue, extra}) => {

        dispatch(clearCategoriesList())
        dispatch(clearResponse())
        const productService = new ProductService();
        const response = await productService.getProductCategories();
        if (response) {
            dispatch(setResponse(response))
            dispatch(addToCategories(response))
        }
        dispatch(setIsLoaded(true))

        return fulfillWithValue("finish")
    }
)

export const getLimitedProducts = createAsyncThunk<string,
    void>(
    'getLimitedProducts',
    async (payload: void, {dispatch, fulfillWithValue, extra}) => {
        //@ts-ignore
        const { limit = 9, skip = 0, select } = payload;
        dispatch(clearList())
        dispatch(clearResponse())
        const productService = new ProductService();
        const response = await productService.getLimitedProducts(limit, skip, select);
        if (response) {
            dispatch(setResponse(response))
            //@ts-ignore
            dispatch(addToList(response.products))
        }
        dispatch(setIsLoaded(true))

        return fulfillWithValue("finish")
    }
)

export const searchProducts = createAsyncThunk<string,
    void>(
    'searchProducts',
    async (payload: void, {dispatch, fulfillWithValue, extra}) => {
        //@ts-ignore
        const { query } = payload;
        dispatch(clearList())
        const productService = new ProductService();
        const response = await productService.searchProducts(query);
        if (response) {
            dispatch(setResponse(response))
            //@ts-ignore
            dispatch(addToList(response.products))
        }
        dispatch(setIsLoaded(true))

        return fulfillWithValue("finish")
    }
)

export const catalogInitialState = {
    isLoaded: false,
    products: [],
    categories:[],
    response: {}
}

export const catalogSlice = createSlice({
    name: 'catalogSlice',
    initialState: catalogInitialState,
    reducers: {
        setResponse(state, action) {
            state.response = action.payload
        },
        addToList(state, action) {
            // @ts-ignore
            state.products.push(...action.payload)
        },
        addToCategories(state, action) {
            // @ts-ignore
            state.categories = [...action.payload];
        },
        setIsLoaded(state, action: PayloadAction<boolean>) {
            state.isLoaded = action.payload
        },
        clearResponse(state, action: PayloadAction<void>) {
            // @ts-ignore
            state.response = undefined
        },
        clearList(state, action: PayloadAction<void>) {
            state.products = []
        },
        clearCategoriesList(state, action: PayloadAction<void>) {
            state.categories = []
        }
    }
});


export const getAll = (state) => {
    return state.catalogSlice.inspections;
}

export const getResponse = (state) => {
    return state.catalogSlice.response
}

export const getIsLoaded = (state) =>
    state.catalogSlice.isLoaded;

export const {addToList, clearResponse, clearList, setIsLoaded, setResponse, addToCategories, clearCategoriesList} = catalogSlice.actions;

export default catalogSlice.reducer
