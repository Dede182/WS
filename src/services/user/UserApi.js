import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =  "http://127.0.0.1:8000/api/v1";
const Apiheaders =  {
    "Accept" : "application/json"
  }

const createRequest = (url)=> ({url,headers:Apiheaders});




export const AuthApi = createApi({
    reducerPath:'AuthApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
     
        fetchLogins:builder.mutation({
            query: (initialUser)=>(
                console.log(initialUser),
                {
                url : "http://127.0.0.1:8000/api/v1/login",
                headers:Apiheaders,
                method:"POST",
                body : initialUser,
            }),
            
            transformResponse: (response, meta, arg) => response,
        
            transformErrorResponse: (response, meta, arg) => response,
        }),
        fetchRegister:builder.mutation({
            query: (initialUser)=>(
                console.log(initialUser),
                {
                url : "http://127.0.0.1:8000/api/v1/register",
                headers:Apiheaders,
                method:"POST",
                body : initialUser,
            }),
            
            transformResponse: (response, meta, arg) => response,
        
            transformErrorResponse: (response, meta, arg) => response,
        })
    })
})
 
export const {useFetchLoginsMutation,useFetchRegisterMutation} = AuthApi;