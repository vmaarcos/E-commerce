import React from 'react'
import Api from './Api'
const Feed = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]'>
      <Api />
      </div>
    </div>
  )
}

export default Feed;