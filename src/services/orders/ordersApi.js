import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =  "http://127.0.0.1:8000/api/v1";

const token = JSON.parse(localStorage.getItem("token"));


const Apiheaders =  {
    authorization: `Bearer ${token}`,
  }

const createRequest = (url)=>({url,headers:Apiheaders});




export const orderApi = createApi({
    reducerPath:'orderApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getOrders:builder.query({
            query: (search="")=>createRequest(`/orders`)
        })
    })
})


export const {useGetOrdersQuery} = orderApi;