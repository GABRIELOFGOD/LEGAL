import React, { useState } from 'react'
import { ReportPage } from '../../utils/constants'
import { ContextUser } from '../../utils/context'

const ActionTakenPage = ({activePage, btnDisabled, setBtnDisabled, setPage}) => {
  const { actionTaken, setTaken } = ContextUser();

  const [otherInput, setInput] = useState({
    type: 'others',
    context: ''
  })

  if(actionTaken == 'report-web' || actionTaken == 'combact' || actionTaken == 'police' || actionTaken == 'non'){
    setBtnDisabled(false)
  } else {
    setBtnDisabled(true)
  }

  if(actionTaken == 'others' && otherInput.context.length > 2){
    setBtnDisabled(false)
  }

  return (
    <div className='flex flex-col items-center gap-5'>
        <div className="flex flex-col">
          <p className="text-2xl mb-2 font-bold">What action have you taken concerning this issue?</p>
          <select value={actionTaken} onChange={e => setTaken(e.target.value)} className='w-full border-none outline-none bg-gray-300 py-2 px-6 flex flex-col gap-5 rounded-sm' name="evidence" id="evidence">
            <option value="non">nothing</option>
            <option value="report-web">Report the website</option>
            <option value="combact">Engage in physical combact</option>
            <option value="police">Report to the police</option>
            <option value="others">Others</option>
          </select>
          {actionTaken == 'others' && <textarea onChange={e => setInput({context: e.target.value})} placeholder='Please let us know what action you have taken.' className='w-full p-3 h-[100px] mt-5 border-2 border-primary rounded-md'></textarea>}
        </div>
        
        <div className="flex gap-5 mt-10 items-center justify-center w-full ">
            {activePage > 1 && <button className='py-2 hover:bg-textSecondary hover:text-black duration-300 px-8 text-white bg-primary rounded-md' onClick={() => setPage(activePage - 1)}>Prev</button>}
            {activePage < ReportPage.length && <button disabled={btnDisabled} onClick={() => setPage(activePage + 1)} className={`py-2 hover:bg-textSecondary hover:text-black ${btnDisabled ? 'bg-textSecondary hover:text-white' : ' bg-primary'} duration-300 px-8 text-white bg-primary rounded-md`}>Next</button>}
        </div>
        {/* {activePage < ReportPage.length && <button className={`py-2 w-fit hover:bg-textSecondary hover:text-black duration-300 px-8 ${btnDisabled1 ? 'bg-textSecondary hover:text-white' : ' bg-primary'} text-white rounded-md`} onClick={() => setPage(activePage + 1)} disabled={btnDisabled1} >Next</button>} */}
    </div>
  )
}

export default ActionTakenPage