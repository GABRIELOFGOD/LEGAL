import React from 'react';
import { FaPlay } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <div className='bg-primary text-white md:py-20 py-10'>
      <div className="flex flex-col items-center justify-center">
        <p className="text-heading text-center">Who We Are</p>
        <p className="text-center md:w-[431px]">Problems trying to resolve the conflict between he two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className='flex flex-wrap md:px-52 py-10 gap-10 justify-between px-6'>
        <div className='relative '>
          <img src='/images/Ruth.JPG' />
          <div className=" top-1/2 shadow-md cursor-pointer left-1/2 h-[70px] rounded-full items-center justify-center flex absolute w-[70px] bg-secondary"><FaPlay className=' text-white text-2xl ' /></div>
        </div>
        
      </div>
    </div>
  )
}

export default WhoWeAre