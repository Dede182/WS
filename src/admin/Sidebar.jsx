import React from 'react'
import { Link } from 'react-router-dom'
import Accordions from './coms/Accordions'
import { GoHome } from 'react-icons/go'
import {BsClipboardData} from 'react-icons/bs'
const Sidebar = () => {
  const dashboard = [
    {
      name: "default",
      path: "default"
    },
    {
      name: "Go back to Home",
      path: "home"
    }
  ]
  const products = [
    {name:"OrderList",path:"orderList"},{name:"Product List",path:"productList"}
  ]
  return (

    <div className='h-[100vh] overflow-hidden px-3'>
      <div className="flex flex-col">
        <div className="h-[15vh] font-shippo text-3xl font-bold flex items-center justify-center">
          <p>Shop</p>
        </div>
        <div className="">
          <Accordions header="Dashboard" icon={<GoHome />} links={dashboard} index={1} />
          <Accordions header="Manage Product" icon={<BsClipboardData />} links={products} index={2}/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar