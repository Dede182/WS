import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =  "http://127.0.0.1:8000/api/v1";


const createRequest = (url)=>({url});




export const AuthApi = createApi({
    reducerPath:'AuthApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        fetchLogin:builder.mutation({
            query: ({initialUser})=>({
                url : createRequest('/login'),
                method:"POST",
                body : initialUser,
            }),
            transformResponse: (response, meta, arg) => response.data,
        
            transformErrorResponse: (response, meta, arg) => response,
        })
    })
})


export const {useFetchLoginQuery} = AuthApi;