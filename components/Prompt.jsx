import React from 'react'
import { ContextUser } from '../utils/context'

const Prompt = () => {
    const { recMail, caseCode, recName } = ContextUser();

  return (
    <div className='flex flex-col items-center w-full text-sm h-full justify-center z-50 bg-white bg-opacity-90 absolute top-0 left-0'>
        <div className='bg-gray-300 max-w-[300px] w-fit h-fit p-10'>
            <p className="text-primary text-xl font-bold">Dear {recName},</p>
            <p>Your report has been received, we will look into it and reach out to you.</p>
            <div className="py-3">
                <p className="text-center text-sm">So you can keep track on your report, keep this case code  <span className='font-extrabold'>{caseCode}</span> as your login key, it has also been sent to your email <span className='font-bold'>{recMail}</span></p>
            </div>
            <button onClick={() => location.assign('/')} className='bg-primary text-white h-10 w-full outline-none'>OK</button>
        </div>
    </div>
  )
}

export default Prompt