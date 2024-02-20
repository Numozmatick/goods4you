import {Product} from "../../../../entities/product/types/product.types";
import ProductService from "../../../../entities/product/api/productService"
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ProductsState {
    isLoaded: boolean,
    products: Product[],
    categories: string[]
}

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

export const allProductInitialState = {
    isLoaded: false,
    products: [],
    response: {}
}

export const allProductSlice = createSlice({
    name: 'catalogSlice',
    initialState: allProductInitialState,
    reducers: {
        setResponse(state, action) {
            state.response = action.payload
        },
        addToList(state, action) {
            // @ts-ignore
            state.products.push(...action.payload)
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

export const {addToList, clearResponse, clearList, setIsLoaded, setResponse} = allProductSlice.actions;

export default allProductSlice.reducer
