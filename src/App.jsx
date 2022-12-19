import React from 'react'
import './App.css';
import Login from './login/Login';
import Guard from './Guard';
import { Route, Routes } from 'react-router-dom';
import AuthGuard from './AuthGuard';
import Register from './login/Register';
import Admin from './admin/Admin';
import Dashboard from './admin/Dashboard';
import Sidebar from './admin/Sidebar';
import OrderList from './admin/order/OrderList'
import ProductList from './admin/product/ProductList';

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<AuthGuard><Login /></AuthGuard>} />
        <Route path="/login" element={<AuthGuard><Login /></AuthGuard>} />
        <Route path="/register" element={<AuthGuard><Register /></AuthGuard>} />


        <Route path="/admin" element={<Guard> <Admin /> </Guard>}>
           <Route path="dashboard" element={<Guard> <Dashboard /> </Guard>}/>
           <Route path="orderList" element={<OrderList/>}/>
           <Route path="productList" element={<ProductList/>}/>
        </Route>

      </Routes>

    </>

  )
}

export default App
