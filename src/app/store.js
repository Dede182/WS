import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../services/user/userSlice'
export const store = configureStore({
    reducer:{
        users : userReducer,
    }
})