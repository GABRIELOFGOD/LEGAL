import React from 'react'
import KnowAbout from '../components/KnowAbout'
import Practices from '../components/Practices'
import ProjectDone from '../components/ProjectDone'
import Join from '../components/Join'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <div className='newHome relative md:grid grid-cols-2 px-6 py-10 md:px-20 w-fit md:py-40'>
        <div className='z-20'>
          <p className="font-bold md:text-main text-4xl text-white leading-10 text-center md:text-left textShadow-md md:leading-[70px]">Save Yourself Today by Repoting that Threat to us to Help You</p>
          <div className='flex w-full md:w-fit justify-center gap-5 pt-10'>
            <button className='w-[145px] text-white duration-300 py-3 rounded-[25px] border text-[14px] font-semibold border-white hover:bg-textSecondary'>What we do</button>
            <Link to='report' className='w-[145px] text-white duration-300 py-3 rounded-[25px] flex items-center justify-center border text-[14px] font-semibold border-white bg-secondary hover:bg-textSecondary'>Make a report</Link>
          </div>
        </div>
      </div>
      <KnowAbout />
      <Practices />
      <ProjectDone />
      <Join />
    </div>
  )
}

export default HomePage