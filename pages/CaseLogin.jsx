import React from 'react'

const CaseLogin = () => {
    // TODO: find out the meaning and the uses of flex-grow
  return (
    <div className='flex flex-col py-10 gap-3 items-center justify-center'>
        <p className="text-center text-primary text-3xl font-bold">Hello! Welcome To Case Tracking Portal.</p>
        <p className="text-center text-textSecondary text-sm">Kindly provide the following information to keep track on your case</p>
        <div className="flex md:w-[350px] w-full flex-col gap-5">
            <input type="email" placeholder='Input the email used to report your case' className='w-full text-xs py-3 px-5 outline-none border-2 border-primary' />
            <input type="text" placeholder='The case code that was given to your on report' className='w-full text-xs py-3 px-5 outline-none border-2 border-primary' />
            <button className={`w-full py-3 bg-primary text-white text-xs hover:bg-secondary duration-200`}>Find Case</button>
        </div>
    </div>
  )
}

export default CaseLogin