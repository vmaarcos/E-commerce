import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  return (
    <div className='flex items-center text-white gap-x-2'>
        <div className='flex justify-center items-center w-[250px] h-[30px] bg-white rounded-sm bg-opacity-50'>
        <h6 className='opacity-50'>Search</h6>
        </div>
        <AiOutlineSearch className='flex text-xl'/>
    </div>
  )
}

export default Search