import React from 'react'
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Car = () => {
  return (
    <nav className='flex text-white'>
        <Link to='/' className='flex w-full flex-col-reverse'>
        <AiOutlineShoppingCart />
        </Link>
    </nav>
  )
}


export default Car
