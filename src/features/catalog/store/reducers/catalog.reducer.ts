import { createSlice, PayloadAction} from "@reduxjs/toolkit";

import {Product} from "../../../../entities/product/types/product.types";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ProductsState {
    isLoaded: boolean,
    products: Product[],
    categories: string[]
}

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        fetchProductsOfCategory: builder.query<Product[], { category: string, limit?: number, skip?: number }>({
            query: ({ category, limit = 9, skip = 0 }) => `products/category/${category}?limit=${limit}&skip=${skip}`,
        }),
        getProductById: builder.query<Product, string>({
            query: (id) => `products/${id}`,
        }),
        fetchAllProductsCategories: builder.query<string[], void>({
            query: () => `products/categories`,
        }),
        getLimitedProducts: builder.query<Product[], { limit?: number, skip?: number, select?: string }>({
            query: ({ limit = 9, skip = 0, select }) => `products?limit=${limit}&skip=${skip}${select ? `&select=${select}` : ''}`,
        }),
        searchProducts: builder.query<Product[], string>({
            query: (query) => {
                if(!query){
                    return null
                }
               return `products/search?q=${query}`
            },
        }),
    }),
});

export interface Catalog{
    isLoaded: boolean,
    products:Product[],
    categories:string[],
    currentProduct:Product,
    response:any
}

export const catalogInitialState:Catalog = {
    isLoaded: false,
    products: [],
    currentProduct:{id: null, title:''},
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
            state.products.push(...action.payload)
        },
        addToCategories(state, action) {
            state.categories = [...action.payload];
        },
        setIsLoaded(state, action: PayloadAction<boolean>) {
            state.isLoaded = action.payload
        },
        clearResponse(state, action: PayloadAction<void>) {
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
    return state.catalogSlice;
}

export const getResponse = (state) => {
    return state.catalogSlice.response
}

export const getIsLoaded = (state) =>
    state.catalogSlice.isLoaded;


export const {
    useFetchProductsOfCategoryQuery,
    useGetProductByIdQuery,
    useFetchAllProductsCategoriesQuery,
    useGetLimitedProductsQuery,
    useSearchProductsQuery,
} = productApi;

export const {addToList, clearResponse, clearList, setIsLoaded, setResponse, addToCategories, clearCategoriesList} = catalogSlice.actions;

export default catalogSlice.reducer
