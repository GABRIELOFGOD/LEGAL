import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

const ProjectCard = ({image, title, info, url}) => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[])

    const bgAdder = img => {
        backgroundImage = url(img)
    }

  return (
    <Link to={url} className="relative cover overflow-hidden md:w-[30%] h-[200px] flex flex-col items-center justify-center px-6 py-2">
      <div className='z-20 flex flex-col items-center justify-center gap-4'>
        <p className="font-bold text-white text-2xl" data-aos="fade-right">{title}</p>
        {/* <p className="text-white text-sm">{info}</p> */}
      </div>
      <div className='w-full top-0 left-0 -z-10 flex absolute bg-primary flex-col items-center justify-center gap-3 rounded-md h-full overflow-hidden bg-cover px-5' style={{ background: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }} data-aos="fade-left"></div>
    </Link>
  )
}

export default ProjectCard;