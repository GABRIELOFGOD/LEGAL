import React from 'react'
import { testimonies } from '../utils/constants'
import TestimonyCard from './TestimonyCard'

const Testimony = () => {
  return (
    <div className='bg-primary text-white md:py-20 py-10'>
      <div className="flex flex-col items-center justify-center">
        <p className="text-heading text-center">See What People Say About Us</p>
        <p className="text-center md:w-[431px]">Problems trying to resolve the conflict between he two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className='flex flex-wrap md:px-52 py-10 gap-10 justify-between px-6'>
        {
          testimonies?.map((card, i) => (
            <TestimonyCard
                key={i}
                image={'/images/Ruth.JPG'}
                name={card.name}
                job={card.work}
                testimony={card.testimony}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Testimony