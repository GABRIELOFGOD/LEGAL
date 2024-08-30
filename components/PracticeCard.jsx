import React, { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css";

const PracticeCard = ({icon, title, text}) => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[]);
  
  return (
    <div className=' bg-card p-10 md:w-[30%]' data-aos="fade-up">
        <div className='flex pb-2 gap-3' data-aos="fade-right">
            <span className='text-secondary my-auto text-4xl'>{icon}</span>
            <p className="text-primary font-bold my-auto">{title}</p>
        </div>
        <p className="text-textSecondary" data-aos="fade-left">{text}</p>
    </div>
  )
}

export default PracticeCard