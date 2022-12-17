import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchProfile } from './services/user/userSlice';
import { useNavigate } from 'react-router-dom'
import { fetchProducts, productsAll } from './services/products/productSlice';
import { useGetProductsQuery } from './services/products/productApi';
const Dashboard = () => {
    const navigate = useNavigate();
    const users = useSelector((state)=>state.users);
    const products = useSelector(productsAll)
    const dispatch = useDispatch();
    const {data:pros,isLoading} = useGetProductsQuery();

    console.log(pros)
    useEffect(()=>{
      const token = JSON.parse(localStorage.getItem("token"));
      dispatch(fetchProfile({token}))
      dispatch(fetchProducts({token}))
    },[])

    console.log(products);
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