import React from 'react'
import { project } from '../utils/constants'
import ProjectCard from './ProjectCard'

const ProjectDone = () => {
  return (
    <div className='py-10 md:py-20 px-6 md:px-32'>
        <div className='md:grid grid-cols-2'>
            <div className='flex gap-3'>
                <div className='w-[100px] mt-2 bg-black h-[2px]'></div>
                <div className='flex flex-col gap-10'>
                    <p className="text-sm uppercase font-bold">Project we have done</p>
                    <p className="md:text-second text-3xl leading-[60px] text-primary font-bold">Since we embark on this mission, we have notable milestones</p>
                </div>
            </div>
        </div>
        <div className='flex md:flex-row flex-col justify-between gap-5 mt-5 md:mt-10'>
            {
                project?.map((item, i) => (
                    <ProjectCard
                        key={i}
                        title={item.title}
                        info={item.info}
                        image={item.image}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ProjectDone