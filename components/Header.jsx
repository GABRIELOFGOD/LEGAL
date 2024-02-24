import React, { useEffect, useState } from 'react'
import { navList } from '../utils/constants'
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false)

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

  const closeNav = () => {
    setNavOpen(false)
  }

  return (
    <div className={`flex z-50 sticky top-0 left-0 justify-between duration-500 px-6 py-4 md:px-32 md:py-6 ${scrolled ? 'bg-white' : 'bg-transparent text-white'}`}>
      <Link onClick={closeNav} className="text-2xl m-0 font-semibold">Llegal</Link>
      <div className={`flex md:flex-row absolute md:top-0 md:relative duration-500 nav flex-col gap-10 capitalize ${navOpen ? 'bg-white top-[70px]  w-full left-0 text-primary py-6' : 'bg-transparent top-[-500px]'}`}>
        {
          navList?.map((item, i) => (
            <NavLink onClick={closeNav} className={`no-underline ${navOpen ? 'px-6' : 'px-0'}`} to={item.path} key={i}>{item.name}</NavLink>
          ))
        }
      </div>
      <div onClick={() => setNavOpen(!navOpen)} className='my-auto text-2xl flex md:hidden p-2 rounded-md border border-primary hover:text-white hover:bg-primary cursor-pointer duration-300'>{navOpen ? <IoCloseSharp /> : <HiMenuAlt3 />}</div>
    </div>
  )
}

export default Header