import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 

const baseUrl = "http://127.0.0.1:8000/api/v1/login";
const logoutUrl = "http://127.0.0.1:8000/api/v1/logout";
const registerUrl = "http://127.0.0.1:8000/api/v1/register"
const profileUrl = "http://127.0.0.1:8000/api/v1/profile"
const initialState = {
    users : [],
    status : "idle",
    token : "",
    error : null
}

export const fetchLogin = createAsyncThunk('users/login',async(initialUser)=>{
    try{
        const response = await axios.post(baseUrl,initialUser)
    }
    catch (err) {
        const response = err;
    }
    // console.log(response.data)
    return response.data;
})
export const fetchRegister = createAsyncThunk('users/register',async(initial)=>{
    const response = await axios.post(registerUrl,initial);

    return response.data;
})
export const fetchLogout = createAsyncThunk('users/logout',async()=>{
    const response = await axios.post(logoutUrl);

    return response.data;
})
export const fetchProfile = createAsyncThunk('users',async(initialUser)=>{
    const response = await axios.get(profileUrl,{
        headers:{
            authorization: `Bearer ${initialUser.token}`,
        }
    })
    return response.data;
})
export const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchLogin.pending,(state,action)=>{
                // console.log(state,action)

                state.status = "loading"
            })
            .addCase(fetchLogin.fulfilled,(state,action)=>{
                state.status="successful"
                state.users = action.payload
            })
            .addCase(fetchLogin.rejected,(state,action)=>{
                state.status = "failed";
                state.error = action.error;
                console.log(state.error);
            })
            .addCase(fetchLogout.fulfilled,(state,action)=>{
                state.users = action.payload
            })
            .addCase(fetchRegister.pending,(state,action)=>{
                console.log(state,action)
                state.status="loading"
            })
            .addCase(fetchRegister.fulfilled,(state,action)=>{
                console.log(action)
                state.status="successful"
                state.users = action.payload
            })
            .addCase(fetchRegister.rejected,(state,action)=>{
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchProfile.fulfilled,(state,action)=>{
               
                state.status="successful"
                state.users = action.payload
                console.log(state.users)
            })

    }
})

export const userAuth = (state)=>state.users.users;
export const userState = (state)=>state.users.status;
export default userSlice.reducer
