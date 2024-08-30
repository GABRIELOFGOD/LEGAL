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
            <p className="text-textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <p className="text-textSecondary">‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
          <button className='rounded-md py-3 px-6 w-fit bg-greener text-white text-[14px]'>Read About Us</button>
        </div>
      </div>
      <div className="flex items-center overflow-hidden my-auto rounded-md h-full md:w-1/2" data-aos="fade-left"><img src="/new-images/shout.jpg" className='w-full' alt="" /></div>
    </div>
  )
}

export default KnowAbout