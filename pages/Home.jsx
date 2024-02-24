import React from 'react'
import Practices from '../components/Practices'
import WhoWeAre from '../components/WhoWeAre'
import Testimony from '../components/Testimony'
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <div>
        <div className="-mt-20 flex flex-col items-center justify-center text-white gap-5 md:pb-0 pb-20 pt-40 px-6 md:px-0 md:pt-20 home md:h-screen w-full">
            <p className="md:text-6xl text-4xl md:w-[753px] text-center capitalize font-bold">Help to reclaim your freedom</p>
            <p className="md:text-[20px] text-center font-light md:w-[553px]">We know how large objects will act, but things on a small scale just do not act that way.</p>
            <div className="flex gap-5">
                <button className='rounded-[40px] hover:bg-white px-4 whitespace-nowrap hover:text-secondary duration-300 border border-secondary flex justify-center py-3 bg-secondary md:w-[182px]'>Make Report</button>
                <button className='rounded-[40px] whitespace-nowrap px-4 hover:bg-secondary duration-300 border border-white md:w-[182px] py-3 flex justify-center'>Contact us</button>
            </div>
        </div>
        <Practices />
        <WhoWeAre />
        <Testimony />
        <ContactUs />
    </div>
  )
}

export default Home