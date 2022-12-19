import {AiOutlinePlus} from 'react-icons/ai'
import List from './List'


const OrderList = () => {
  return (
    <div className='px-xsm py-ysm font-shippo'>
        <div className="flex flex-col gap-y-4">
        <div className="flex justify-between border-b-2 pb-5">
            <div className="flex flex-col space-y-1">
                <div className="flex gap-x-1 uppercase text-xs">
                      <p className='text-mute'>Manage Product</p>
                      <span>/</span>
                      <p className='text-[#353535] font-medium'>Order List</p>
                </div>    
                <p className='font-semibold text-xl'>Manage Product</p>  
            </div>

            <div className="">
              <button
               className='text-white flex w-[150px] h-[50px] items-center justify-center bg-[#353535] text-sm font-medium'>
                  <AiOutlinePlus/>
                  <p>Add Product</p>
              </button>
            </div>
        </div>

        <div className="w-full bg-white">
          <List/>
        </div>
        </div>
        
    </div>
  )
}

export default OrderList