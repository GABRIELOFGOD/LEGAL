import React, { useEffect } from 'react'
import { cards } from '../utils/constants'
import PracticeCard from './PracticeCard';
import Aos from "aos"
import "aos/dist/aos.css"

const Practices = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[])
  
  return (
    <div className='bg-primary px-6 text-white md:py-20 py-10'>
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-heading text-3xl mb-3 font-bold text-center" data-aos="fade-right">Our Practice Areas</p>
        <p className="text-center md:w-[431px]" data-aos="fade-left">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className='flex flex-wrap md:px-52 py-10 gap-10 justify-between px-6'>
        {
          cards?.map((item, i) => (
            <PracticeCard
            key={i}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Practices