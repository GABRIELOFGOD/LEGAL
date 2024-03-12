import React from 'react';
const internet = '/new-images/internet.jpg'

const Join = () => {
  return (
    <div className='w-full rounded-md overflow-hidden px-6 md:px-32'>
      <div className="relative internet flex flex-col items-center justify-center h-[300px] overflow-hidden w-full">
        <div className='w-full absolute h-full bg-cover rounded-md ' style={{background: `url(${internet})`, backgroundSize: 'cover'}}></div>
        <div className='z-20 flex flex-col items-center justify-center text-center'>
          <p className="md:text-5xl text-3xl text-white font-bold">Join us to stop gender based violence in our community</p>
          <div className='flex text-sm md:text-xs gap-10 mt-10'>
            <button className='rounded-md bg-greener text-white py-2 md:py-2.5 px-6'>Join as a volunteer</button>
            <button className='rounded-md bg-white text-black py-2 md:py-2.5 px-6'>Donate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join