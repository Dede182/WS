import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import OrderList from './order/OrderList'
import Sidebar from './Sidebar'

const Admin = () => {
  return (
    <div className='w-full flex'>
        <div className="w-[20%] bg-white">
        <Sidebar/>

        </div>
        <div className='w-[80%] bg-[#F1F1F3]'>
        <Outlet/>
            
        </div>
       
    </div>
  )
}

export default Admin