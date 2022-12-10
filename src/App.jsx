import React from 'react'
import './App.css';
import { GiSpinningBlades } from 'react-icons/gi'
import Login from './login/Login';
const App = () => {
  return (
    <div className='flex justify-center h-[100vh] bg-secondary font-shippo items-center  text-5xl'>
      <Login/>
    </div>
  )
}

export default App
