import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const navigate = useNavigate();
    const users = useSelector((state)=>state.users);
    console.log(users);
    const logoutHandler = ()=>{
      localStorage.removeItem("token")
      navigate('/login');
    }
  return (
    <div>
        <button onClick={logoutHandler}>
            Logout
        </button>
    </div>
   
  )
}

export default Dashboard