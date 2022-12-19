import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../services/user/userSlice'
import productReducer from '../services/products/productSlice'
import { productApi } from "../services/products/productApi";
import { AuthApi } from "../services/user/UserApi";
import { orderApi } from "../services/orders/ordersApi";
export const store = configureStore({
    reducer:{
        users : userReducer,
        products :productReducer,
        [AuthApi.reducerPath] :AuthApi.reducer,
        [productApi.reducerPath] : productApi.reducer,
        [orderApi.reducerPath] : orderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([AuthApi.middleware,productApi.middleware,orderApi.middleware]),
})