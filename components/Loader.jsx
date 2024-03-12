import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='w-full h-full absolute z-50 bg-white flex items-center justify-center'>
        <ThreeDots color='#D0A144' ariaLabel='loading' width={100} height={100} />
    </div>
  )
}

export default Loader