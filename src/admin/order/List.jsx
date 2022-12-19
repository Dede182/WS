import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import _ from 'lodash';
import { useGetOrdersQuery } from '../../services/orders/ordersApi';
const List = () => {

    const [input,setInput] = useState("");
    const { data: orders, isLoading, isSuccess, isError, error } = useGetOrdersQuery(input)


    let content;
    const ordersAll = orders?.data;

    const handleChange = (e)=>{
        e.preventDefault();
        setInput(e.target.value);
       
    }

    if (isLoading) {
        content = <div className="w-full flex justify-center">
            <div role="status">
                <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    if (isSuccess) {
        console.log(orders?.data)
    }

    function Status(status) {
        if (status == "Delivered") {
            return <div className='w-20 h-6 flex items-center justify-center bg-[#45edbd18] rounded-md'>
                <p className='text-[#35BF97] text-xs m-0 p-0'>{status}</p>
            </div>
        }
        else if (status == "Cancelled") {
            return <div className='w-20 h-6 flex items-center justify-center bg-[#ffbb0e1b] rounded-md'>
                <p className='text-[#f00038] text-xs m-0 p-0'>{status}</p>
            </div>
        }
        else if (status == "Pending") {
            return <div className='w-20 h-6 flex items-center justify-center bg-[#ffbb0e1b] rounded-md'>
                <p className='text-[#F0AD00] text-xs m-0 p-0'>{status}</p>
            </div>
        }
    }


    return (
        <div className=' flex flex-col space-y-2'>
            <div className="flex justify-between items-center py-2 px-4">
                <h2 className='text-lg font-medium'>Order Lists</h2>
                <div className="">
                    <form action="">
                        <input type="text"
                            className='text-[#666666] border border-[#ecebeb] rounded-sm px-2 py-1 text-sm  hover:border-[#e5e5e5] active:border-[#e5e5e5] focus:border-[#e5e5e5] focus:ring-[#e5e5e5]'
                            placeholder='Search'
                            value = {input}
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </div>
            <div className="">

                <div className="relative">
                    {
                        isSuccess ?

                            <table className="w-full text-xs text-left  ">
                                <thead className="text-xs text-black  uppercase bg-[#E2E2E2] ">
                                    <tr className='capitalize'>
                                        <th scope="col" className="py-3 px-4">
                                            User Name
                                        </th>
                                        <th scope="col" className="py-3 px-4 ">
                                            Order
                                        </th>
                                        <th scope="col" className="py-3 px-4 ">
                                            Quantity
                                        </th>
                                        <th scope="col" className="py-3 px-4 ">
                                            price
                                        </th>
                                        <th scope="col" className="py-3 px-4 ">
                                            email
                                        </th>
                                        <th scope="col" className="py-3 px-4 ">
                                            Status
                                        </th>
                                        <th scope="col" className="py-3 px-4 ">
                                            Date/Time
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {ordersAll.map(order => (
                                        <tr key={order.id} className="bg-white border-b text-black font-medium ">
                                            <td className="p-4 font-medium  flex items-center gap-x-2">
                                                
                                                <img src={order.orderItems[0]?.product.productImage} className="w-6 h-6 object-cover rounded-sm" alt="" />
                                                <p>{order.orderer.name}</p>
                                            </td>
                                            <td className="p-4">
                                                {order.orderItems[0]?.product.name}
                                            </td>
                                            <td className="p-4">
                                                {order.orderItems[0]?.amount}
                                            </td>

                                            <td className="p-4 font-sans font-normal">
                                                {order.total}
                                            </td>
                                            <td className="p-4 font-sans font-normal">
                                                {order.orderer.email}
                                            </td>
                                            <td className="p-4">
                                                {Status(order.status)}
                                            </td>
                                            <td className="p-4 font-sans font-normal">
                                                {order.created_at}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            :
                            content



                    }
                </div>

            </div>
        </div>
    )
}

export default List
