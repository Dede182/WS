import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =  "http://127.0.0.1:8000/api/v1";

const token = JSON.parse(localStorage.getItem("token"));


const Apiheaders =  {
    authorization: `Bearer ${token}`,
  }

const createRequest = (url)=>({url,headers:Apiheaders});




export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getProducts:builder.query({
            query: ()=>createRequest('/products')
        })
    })
})


export const {useGetProductsQuery} = productApi;