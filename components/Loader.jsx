import React from 'react'
import { Audio } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='w-full h-full absolute z-50 bg-white flex items-center justify-center'>
        <Audio color='#D0A144' ariaLabel='loading' width={100} height={100} />
    </div>
  )
}

export default Loader