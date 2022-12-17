import {useEffect} from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegister } from '../services/user/userSlice'
import Input from '../components/Input'
import { userAuth, userState } from '../services/user/userSlice'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {

  const [input, setInput] = useState({
    name : '',
    email: '',
    password: '',
    passwordConfirmation : '',
   
  })
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const userStatus = useSelector(userState);
  const apiLogin = (name,email, password,password_confirmation) => {
    dispatch(fetchRegister({ name,email,password,password_confirmation }))
    
  }
  if (userStatus == "successful") {
    console.log(users)
  }

  if (users?.success) {
    localStorage.setItem("token", JSON.stringify( users?.token))
    navigate('/dashboard');
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    apiLogin(input.name,input.email, input.password,input.passwordConfirmation)
    localStorage.setItem("account", JSON.stringify( [input.name,input.email, input.password ]))


  };
  
  useEffect(() => {
    const account = JSON.parse(localStorage.getItem("account"));
    console.log(account);
    if(account) {
      setInput({...input,name:account[0],email : account[1],password: account[2]})
      // apiLogin( input.email ,input.password)
    }
  
  }, [])

  return (
    <div className='h-[90vh] flex flex-col w-[486px]'>
      <div className="flex w-full justify-center  font-bold font-cinzel text-bold text-[28px]">
        <p>SHOP</p>
      </div>
      <div className="flex w-full justify-center  font-semibold text-[#514E4E] text-[24px] mt-[30px]">
        <p>Sign Up To Your Account</p>
      </div>

      <div className="w-full bg-white flex justify-center pt-[50px] pb-[30px] mt-[30px] font-shippo">
        <form onSubmit={onSubmitHandler} className="flex flex-col">

        <div className="flex flex-col space-y-[8px] w-[419px]" >
            <Input label="Full Name" value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              name="name" type="text" />
          </div>

          <div className="flex flex-col space-y-[8px] w-[419px] mt-[30px]" >
            <Input label="Email Address" value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              name="email" type="text" />
          </div>

          <div className="flex flex-col space-y-[8px] w-[419px] mt-[30px]" >
            <Input label="Password" name="password" value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              type="password" />
          </div>

          <div className="flex flex-col space-y-[8px] w-[419px] mt-[30px]" >
            <Input label="Password Confirmation" name="passwordConfirmation" value={input.passwordConfirmation}
              onChange={(e) => setInput({ ...input, passwordConfirmation: e.target.value })}
              type="password" />
          </div>


          <div className="">
            <button className='capitalize w-full bg-[#353535] font-thin text-[#F3F3F3] text-[13px] py-3'>
              Sign Up
            </button>
          </div>

          <Link to ="/login"><p className='text-[13px] text-center underline mt-5'>Have already account?</p></Link>
        </form>

     
      </div>
    </div>
  )
}

export default Register
