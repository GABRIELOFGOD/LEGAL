import React from 'react'
import { ReportPage } from '../../utils/constants'
import { ContextUser } from '../../utils/context'

const ActionWants = ({activePage, btnDisabled, setBtnDisabled, setPage}) => {
  const { actionWant, setWant, apicaller, review, setReview } = ContextUser();

  if(actionWant == 'counsellor' || actionWant == 'legal') {
    setBtnDisabled(false)
  } else {
    setBtnDisabled(true)
  }

  return (
    <div className='flex flex-col items-center gap-5'>
        <div className="flex flex-col">
          <p className="text-2xl mb-2 font-bold">What do you want us to do?</p>
          <select value={actionWant} onChange={e => setWant(e.target.value)} defaultValue='non' className='w-full border-none outline-none bg-gray-300 py-2 px-6 flex flex-col gap-5 rounded-sm' name="evidence" id="evidence">
            <option disabled value="non">-- Select an Option --</option>
            <option value="counsellor">counsellor service</option>
            <option value="legal">provide legal service</option>
            <option value="others">Others</option>
          </select>
        </div>

        <p className="text-[12px] text-center">Please note that we take every report serious and according to the constitutional rights of citizens</p>
        
        <div className="flex gap-5 mt-5 items-center justify-center w-full ">
            {activePage > 1 && <button className='py-2 hover:bg-textSecondary hover:text-black duration-300 px-8 text-white bg-primary rounded-md' onClick={() => setPage(activePage - 1)}>Prev</button>}
            {activePage == ReportPage.length && <button disabled={btnDisabled} onClick={() => setReview(true)} className={`py-2 hover:bg-textSecondary hover:text-black ${btnDisabled ? 'bg-textSecondary hover:text-white' : ' bg-primary'} duration-300 px-8 text-white bg-primary rounded-md`}>Submit case</button>}
        </div>
        {/* {activePage < ReportPage.length && <button className={`py-2 w-fit hover:bg-textSecondary hover:text-black duration-300 px-8 ${btnDisabled1 ? 'bg-textSecondary hover:text-white' : ' bg-primary'} text-white rounded-md`} onClick={() => setPage(activePage + 1)} disabled={btnDisabled1} >Next</button>} */}
    </div>
  )
}

export default ActionWants