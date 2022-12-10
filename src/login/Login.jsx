import React from 'react'
import Input from '../components/Input'
const Login = () => {
  return (
    <div className='h-[80vh] flex flex-col w-[486px]'>
        <div className="flex w-full justify-center  font-bold font-cinzel text-bold text-[28px]">
            <p>SHOP</p>
        </div>  
        <div className="flex w-full justify-center  font-semibold text-[#514E4E] text-[24px] mt-[30px]">
            <p>Log in to Your Account</p>
        </div>

        <div className="w-full bg-white flex justify-center py-[50px] mt-[30px] font-shippo">
            <div className="flex flex-col">
                <div className="flex flex-col space-y-[8px] w-[419px]" >
                  <Input label="Email Address" name ="email" type="text"/>
                </div>

                <div className="flex flex-col space-y-[8px] w-[419px] mt-[30px]" >
                  <Input label="Password" name ="password" type="password"/>
                </div>
                <div className="w-full flex justify-between  mt-[14px]">
                    <div className="flex items-center ">
                        <input type="checkbox" className='w-[18px] h-[18px] !bg-[#F1F1F3] color-[#F1F1F3]    '/>
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
            </div>
        </div>
    </div>
  )
}

export default Login
