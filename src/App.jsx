import React from 'react'
import './App.css';
import Login from './login/Login';
import Guard from './Guard';
import Dashboard from './Dashboard';
import { Route, Routes } from 'react-router-dom';
import AuthGuard from './AuthGuard';
import Register from './login/Register';

const App = () => {
  return (
    <div className='flex justify-center h-[100vh] bg-secondary font-shippo items-center  text-5xl'>
      <Routes>
          <Route path="/login" element={<AuthGuard><Login/></AuthGuard> }/>
          <Route path="/register" element={<AuthGuard><Register/></AuthGuard> }/>
          <Route
          path="/dashboard"
          element={
            <Guard>
              <Dashboard />
            </Guard>
          }
        />
     

      </Routes>
    </div>
  )
}

export default App
