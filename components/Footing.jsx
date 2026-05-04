import React, { useEffect } from 'react'
import { navList, social } from '../utils/constants'
import { Link, NavLink } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";

const Footing = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[])
  
  return (
    <div className='bg-primary flex flex-col md:flex-row gap-10 mt-10 md:py-20 md:px-32 py-6 px-6'>
      <div className='flex-1'>
        <Link to='/' className='font-extrabold text-white text-4xl ' data-aos="fade-right">SafeLegal</Link>
        <p className="text-sm mt-5 text-white">SafeLegal is a subsidiary of <a className='text-blue-500 underline' href="https://thesafernet.org">Safernet</a>. A Brain Builder Youth Development initiative that was established to give voice to the voiceless.</p>
      </div>
      {/* <Link to='/' onClick={closeNav} className='font-extrabold text-primary text-4xl'>SAFERNET(annex)</Link> */}
      <div className="flex justify-evenly px-10 flex-[2] md:px-0 gap-10">
        <div className='flex ting flex-col gap-5 capitalize text-white' data-aos="fade-up">
          {
            navList.map((item, i) => (
              <NavLink to={item.path} key={i}>{item.name}</NavLink>
            ))
          }
        </div>
        <div className='flex flex-col gap-5 capitalize text-white' data-aos="fade-up">
          {
            social.map((item, i) => (
              <Link key={i}>{item.name}</Link>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col flex-1" data-aos="fade-up">
        <form className='flex md:flex-row gap-3 md:gap-1 flex-col' onSubmit={e => e.preventDefault()}>
          <input placeholder='Input your email to join our newsletter' className='w-full h-[40px] text-[12px] px-3 bg-transparent border-2 border-secondary rounded-md' type="text" />
          <button className='bg-secondary text-white h-[40px] w-full md:w-fit px-4 rounded-md'>Join</button>
        </form>
        <div className='flex gap-3 text-white mt-10 mx-auto'>
          <span>&copy;</span>
          <Link target='_blank' to='https://safernet-gamma.vercel.app'>SAFERNET</Link>
        </div>
      </div>
    </div>
  )
}

export default Footing