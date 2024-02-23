import React from 'react'

const TestimonyCard = ({image, name, job, testimony}) => {
  return (
    <div className=' bg-card rounded-md p-10 md:w-[30%]'>
        <p className="text-textSecondary">{testimony}</p>
        <div className="flex mt-3 gap-3">
            {image && <img className='w-[50px] h-[50px] rounded-full' src={image} />}
            <div className='text-sm my-auto'>
                <p className="text-secondary whitespace-nowrap">{name}</p>
                <p className="text-primary whitespace-nowrap">{job}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonyCard