import React from 'react'
import { cards } from '../utils/constants'
import PracticeCard from './PracticeCard'

const Practices = () => {
  return (
    <div className='bg-primary text-white md:py-20 py-10'>
      <div className="flex flex-col items-center justify-center">
        <p className="text-heading font-bold text-center">Our Practice Areas</p>
        <p className="text-center md:w-[431px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className='flex flex-wrap md:px-52 py-10 gap-10 justify-between px-6'>
        {
          cards?.map((item, i) => (
            <PracticeCard
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