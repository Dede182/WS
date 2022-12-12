import {useEffect} from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogin } from '../services/user/userSlice'
import Input from '../components/Input'
import { userAuth, userState } from '../services/user/userSlice'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {

  const [input, setInput] = useState({
    email: '',
    password: '',
   
  })
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const userStatus = useSelector(userState);
  const apiLogin = (email, password) => {
    dispatch(fetchLogin({ email, password }))
    
  }
  if (userStatus == "successful") {
    console.log(users)
  }

  if (users?.success) {
    localStorage.setItem("token", JSON.stringify( users?.token))

    if (isChecked) {
      localStorage.setItem("account", JSON.stringify( [input.email, input.password ]))
    } else {
      localStorage.removeItem("account")
    }
    navigate('/dashboard');
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    apiLogin(input.email, input.password)
    localStorage.setItem("account", JSON.stringify( [input.email, input.password ]))


  };
  
  useEffect(() => {
    const account = JSON.parse(localStorage.getItem("account"));
    console.log(account);
    if(account) {
      setIsChecked(true)
      setInput({...input,email : account[0],password: account[1]})
      // apiLogin( input.email ,input.password)
    }
  
  }, [])

  return (
    <div className='h-[80vh] flex flex-col w-[486px]'>
      <div className="flex w-full justify-center  font-bold font-cinzel text-bold text-[28px]">
        <p>SHOP</p>
      </div>
      <div className="flex w-full justify-center  font-semibold text-[#514E4E] text-[24px] mt-[30px]">
        <p>Log in to Your Account</p>
      </div>

      <div className="w-full bg-white flex justify-center pt-[50px] pb-[30px] mt-[30px] font-shippo">
        <form onSubmit={onSubmitHandler} className="flex flex-col">
          <div className="flex flex-col space-y-[8px] w-[419px]" >
            <Input label="Email Address" value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              name="email" type="text" />
          </div>

          <div className="flex flex-col space-y-[8px] w-[419px] mt-[30px]" >
            <Input label="Password" name="password" value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              type="password" />
          </div>
          <div className="w-full flex justify-between  mt-[14px]">
            <div className="flex items-center ">
              <input type="checkbox" 
                onChange={() => setIsChecked(!isChecked)}
                checked={isChecked}
                        className='w-[18px] h-[18px] !bg-[#F1F1F3] color-[#F1F1F3]    ' />
              <span className='text-[13px] text-[#7C7C7C] ml-1'>Remember me</span>
            </div>
            <div className="flex items-center">
              <span className='text-[13px] text-[#7C7C7C] ml-1'>Forgot Your Password</span>
            </div>
          </div>

          <div className="">
            <button className='capitalize w-full bg-[#353535] font-thin text-[#F3F3F3] text-[13px] py-3'>
              Sign In
            </button>
          </div>

          <Link to ="/register"><p className='text-[13px] text-center underline mt-5'>Doesn't have an account yet? Sign up</p></Link>

        </form>
      </div>
    </div>
  )
}

export default Login
