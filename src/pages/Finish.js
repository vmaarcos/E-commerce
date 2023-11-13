import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Finish = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
        <div className='flex py-5 px-5 flex-col items-center bg-green-500 rounded-full'>
                  <AiOutlineShoppingCart className='text-[5vw] text-primary '/>
                  <h1 className='text-[2vw] font-semibold'>Finished</h1>
        </div>
    </div>
  )
}

export default Finish