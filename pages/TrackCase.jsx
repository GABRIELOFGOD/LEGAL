import React from 'react'
import { ContextUser } from '../utils/context'
import CaseLogin from './CaseLogin'
import { Link } from 'react-router-dom'

const TrackCase = () => {
  const { newTracking, logCase, setLogCase } = ContextUser()
  
  return (
    <div>
      {newTracking &&
      <div className='py-10 md:py-20'>
        <p className="text-center font-bold text-2xl text-primary">Welcome {newTracking?.name}</p>
        <p className="text-center text-xs text-textSecondary">We assure you that your report is been taken with all sincerity and seriousness</p>

        <div className='py-5'>
          <p className="text-primary text-center">Your case Code: <span className='text-secondary font-bold'>{newTracking?.caseCode}</span></p>
          <div className='px-6 md:px-32'>
            <p className="text-justify">Your case is currently in the hand of our moderators and action to be taken is in concederation. Be patient as we take up this case to the next level. Note that is there's is any information or update, we will notify you through your email <span className='font-bold text-primary'>{newTracking?.email}</span></p>
          </div>
          <div className="flex gap-5 w-full justify-center py-10">
            <button className='py-3 px-8 rounded-md text-white bg-primary'>Speak to one of our moderators</button>
            <button className='py-3 px-8 rounded-md text-white bg-secondary'>Send us an email</button>
          </div>
        </div>
      </div>}
      {logCase && <CaseLogin />}
    </div>
  )
}

export default TrackCase