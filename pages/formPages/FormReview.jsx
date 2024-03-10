import React, { useEffect, useState } from 'react';
import { ContextUser } from '../../utils/context';
import { IoMdClose } from "react-icons/io";

const FormReview = () => {
  const [kind, setKind] = useState(null)
  const {review, setReview, who, victimAge, type, info, gotEvidence, evidence, actionTaken, actionWant} = ContextUser();

  useEffect(() => {
    if(type == 'child') return setKind('Child Abuse')
    if(type == 'domestic') return setKind('Domestic Violence')
    if(type == 'assault') return setKind('Assault')
    if(type == 'others') return setKind(info)
  }, [])

  return (
    <div className={`fixed flex flex-col items-center justify-center top-0 left-0 bg-white bg-opacity-85 w-[100vw] h-[100vh] z-50 ${review ? 'flex' : 'hidden'}`}>
      <div className="bg-white px-20 py-20 rounded-md shadow-md flex flex-col items-center justify-center gap-5 relative max-w-[75%] max-h-[90%]">
        <div className='absolute font-bold text-primary text-2xl right-10 top-5'><IoMdClose /></div>
        <p className="text-4xl text-primary font-bold text-center">Review Your Report Before Submit</p>
        <hr className='bg-textSecondary h-[2px] w-full' />
        <div className='flex w-full gap-3 flex-col'>
          <div className='flex justify-between gap-5'>
            <div className="flex gap-3">
              <p className="text-primary font-semibold">Report For:</p>
              <p className='capitalize'>{who}</p>
            </div>
            <div className="flex gap-3">
              <p className="text-primary font-semibold">Victim Age:</p>
              <p>{victimAge}</p>
            </div>
          </div>

          <div className='flex justify-between gap-5'>
            <div className="flex gap-3">
              <p className="text-primary font-semibold">Kind of Abuse:</p>
              {kind && <p className='capitalize'>{kind}</p>}
            </div>
            <div className="flex gap-3">
              <p className="text-primary font-semibold">Evidence:</p>
              {gotEvidence ? <p className='capitalize'>{evidence} Evidence</p> : <p>You have no evidence</p>}
            </div>
          </div>

          <div className='flex justify-between gap-5'>
            <div className="flex gap-3">
              <p className="text-primary font-semibold">Action You've Take:</p>
              <p className='capitalize'>{actionTaken}</p>
            </div>
            <div className="flex gap-3">
              <p className="text-primary font-semibold">Action Want:</p>
              <p className='capitalize'>{actionWant}</p>
            </div>
          </div>
        </div>
        <div className='flex gap-5 mt-3'>
          <button className='py-3 px-6 rounded-md bg-red-500 text-white hover:bg-gray-500 duration-200'>Edit Report</button>
          <button className='py-3 px-6 rounded-md bg-secondary text-white hover:bg-gray-500 duration-200'>Submit Report</button>
        </div>
      </div>
    </div>
  )
}

export default FormReview