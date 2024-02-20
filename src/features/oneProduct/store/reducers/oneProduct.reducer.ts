import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import ProductService from "../../../../entities/product/api/productService"

export interface ProductsState {
    isLoaded: boolean,
    product: any
}




export const getProductById = createAsyncThunk<string,
    void>(
    'getProductById',
    async (payload: void, {dispatch, fulfillWithValue, extra}) => {
        //@ts-ignore
        const { id } = payload;
        dispatch(clearProduct())
        dispatch(clearResponse())
        const productService = new ProductService();
        const response = await productService.getProductById(id);
        if (response) {
            dispatch(setResponse(response))
            //@ts-ignore
            dispatch(addToProduct(response))
        }

        return fulfillWithValue("finish")
    }
)

export const productInitialState = {
    product:{},
    response: {}
}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState: productInitialState,
    reducers: {
        setResponse(state, action) {
            state.response = action.payload
        },
        addToProduct(state, action) {
            // @ts-ignore
            state.product = action.payload;
        },
        clearResponse(state, action: PayloadAction<void>) {
            // @ts-ignore
            state.response = undefined
        },
        clearProduct(state, action: PayloadAction<void>) {
            state.product = {}
        }
    }
});


export const getAll = (state) => {
    return state.productReducer.inspections;
}

export const getResponse = (state) => {
    return state.productReducer.response
}

export const getIsLoaded = (state) =>
    state.productReducer.isLoaded;

export const {clearResponse, setResponse, clearProduct, addToProduct} = productSlice.actions;

export default productSlice.reducer
