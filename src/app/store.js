import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../services/user/userSlice'
import productReducer from '../services/products/productSlice'
import { productApi } from "../services/products/productApi";
export const store = configureStore({
    reducer:{
        users : userReducer,
        products :productReducer,
        [productApi.reducerPath] :productApi.reducer
    }
})