import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsUrl =  "http://127.0.0.1:8000/api/v1/products";
const initialState = {
    posts : [],
    status : "idle",
    token : "",
    error : null
}

export const fetchProducts = createAsyncThunk('products/fetch',async(initialUser)=>{
    const response = await axios.get(productsUrl,{
        headers:{
            authorization: `Bearer ${initialUser.token}`,
        }
    })
    return response.data;
})

export const postSlice = createSlice({
    name : 'posts',
    initialState,
    extraReducers(builder){
        builder 
            .addCase(fetchProducts.pending,(state,action)=>{
                state.status = "pending"
            })
            .addCase(fetchProducts.fulfilled,(state,action)=>{
                state.status="successful"
                state.posts = action.payload
             
            })
            .addCase(fetchProducts.rejected,(state,action)=>{
                state.status="failed"
                state.error = action.payload
            })
    }
})

export const productsAll = (state)=>state.products;
export default postSlice.reducer