import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const KnowAbout = () => {
  
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 200 });
  }, []);

  return (
    <div className='md:py-20 gap-10 justify-between py-10 md:px-32 px-6 flex md:flex-row flex-col'>
      <div className='flex gap-3 md:px-10' data-aos="fade-right">
        <div className='w-[100px] mt-2 bg-black h-[2px]'></div>
        <div className='flex flex-col gap-10'>
          <p className="text-sm uppercase font-bold">Know About us</p>
          <p className="md:text-second text-3xl md:leading-[60px] text-primary font-bold">We give voice to the voiceless and ensure their survival</p>
          <div className="flex flex-col gap-5">
            <p className="text-textSecondary">SafeLegal is an annex of SAFERNET built to help and aid victims of abuse and to give voice to the violence casualties of any type of abuse in any form anywhere and anytime.</p>
            <p className="text-textSecondary">We are committed to providing comprehensive support and resources to those who have experienced abuse, ensuring their voices are heard and their rights are protected.</p>
          </div>
          <button className='rounded-md py-3 px-6 w-fit bg-greener text-white text-[14px]'>Read About Us</button>
        </div>
      </div>
      <div className="flex items-center overflow-hidden my-auto rounded-md h-full md:w-1/2" data-aos="fade-up"><img src="/new-images/shout.jpg" className='w-full' alt="" /></div>
    </div>
  )
}

export default KnowAbout