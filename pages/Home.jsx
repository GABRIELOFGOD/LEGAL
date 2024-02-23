import React from 'react'
import Practices from '../components/Practices'
import WhoWeAre from '../components/WhoWeAre'

const Home = () => {
  return (
    <div>
        <div className="-mt-20 flex flex-col items-center justify-center text-white gap-5 pt-20 home h-screen w-full">
            <p className="text-6xl md:w-[753px] text-center capitalize font-bold">Help to reclaim your freedom</p>
            <p className="text-[20px] text-center font-light md:w-[553px]">We know how large objects will act, but things on a small scale just do not act that way.</p>
            <div className="flex gap-5">
                <button className='rounded-[40px] hover:bg-white hover:text-secondary duration-300 border border-secondary flex justify-center py-3 bg-secondary w-[182px]'>Make Report</button>
                <button className='rounded-[40px] hover:bg-secondary duration-300 border border-white w-[182px] py-3 flex justify-center'>Contact us</button>
            </div>
        </div>
        <Practices />
        <WhoWeAre />
    </div>
  )
}

export default Home