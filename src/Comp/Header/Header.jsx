import React from 'react'
import Logo from './Decorations/Logo'
import Search from './Options/Search'
import Profile from './Options/Profile'
import Car from './Options/Car'

const Header = () => {
  return (
    <div className='flex justify-around items-center flex-wrap flex-row w-full h-24 bg-black'>
      <Logo />
      <Search />
      <Profile />
      <Car />
    </div>
  )
}

export default Header