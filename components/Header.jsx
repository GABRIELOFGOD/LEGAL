import React, { useEffect, useState } from 'react'
import { navList } from '../utils/constants'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex z-50 sticky top-0 left-0 justify-between duration-500 md:px-32 md:py-6 ${scrolled ? 'bg-white' : 'bg-transparent text-white'}`}>
      <Link className="text-2xl m-0 font-semibold">Llegal</Link>
      <div className='flex md:flex-row nav flex-col gap-10 capitalize'>
        {
          navList?.map((item, i) => (
            <NavLink className=' no-underlinev' to={item.path} key={i}>{item.name}</NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default Header