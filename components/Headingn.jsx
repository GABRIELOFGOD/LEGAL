import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { navList } from '../utils/constants'

const Heading = () => {
    const [navOpen, setNavOpen] = useState(false)

    const closeNav = () => {
        setNavOpen(false);
    }

  return (
    <div className='flex justify-between md:py-4 py-2 px-6 z-50 md:px-32 bg-white text-primary shadow-md sticky top-0'>
        <Link to='/' onClick={closeNav} className='font-extrabold text-primary text-4xl'>A</Link>
        {/* <Link to='/' onClick={closeNav} className='font-extrabold text-primary text-4xl'>SAFERNET(annex)</Link> */}
        <div className={`flex md:flex-row my-auto absolute md:top-0 bg-white md:relative duration-500 nav flex-col gap-10 capitalize ${navOpen ? 'bg-white top-[55px]  w-full left-0 text-primary py-6' : 'bg-white top-[-500px]'}`}>
        {
          navList?.map((item, i) => (
            <NavLink onClick={closeNav} className={`no-underline md:px-0 px-6`} to={item.path} key={i}>{item.name}</NavLink>
          ))
        }
      </div>
      <div onClick={() => setNavOpen(!navOpen)} className='my-auto text-2xl flex md:hidden p-2 rounded-md border border-primary hover:text-white hover:bg-primary cursor-pointer duration-300'>{navOpen ? <IoCloseSharp /> : <HiMenuAlt3 />}</div>
    </div>
  )
}

export default Heading