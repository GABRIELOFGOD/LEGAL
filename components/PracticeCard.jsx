import React from 'react'

const PracticeCard = ({icon, title, text}) => {
  return (
    <div className=' bg-card p-10 md:w-[30%]'>
        <div className='flex pb-2 gap-3'>
            <span className='text-secondary my-auto text-4xl'>{icon}</span>
            <p className="text-primary font-bold my-auto">{title}</p>
        </div>
        <p className="text-textSecondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, corrupti. Eius,</p>
    </div>
  )
}

export default PracticeCard