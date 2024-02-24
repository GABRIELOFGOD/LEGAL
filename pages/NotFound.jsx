import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='md:py-40 px-6 py-10 bg-primary -mt-20'>
        <p className="md:text-8xl text-4xl text-textSecondary text-center">404 Page Not Found</p>
        <p className="text-center mt-5 text-white">Either this page has been removed or never existed. <Link className='underline' to='/'>Go Home.</Link></p>
    </div>
  )
}

export default NotFound