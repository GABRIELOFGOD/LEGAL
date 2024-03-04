import React from 'react'

const ActionWants = ({activePage, btnDisabled, setBtnDisabled, setPage}) => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className="flex flex-col">
          <p className="text-2xl mb-2 font-bold">What action have you taken concerning this issue?</p>
          <select defaultValue='non' className='w-full border-none outline-none bg-gray-300 py-2 px-6 flex flex-col gap-5 rounded-sm' name="evidence" id="evidence">
            <option disabled value="non">-- Select an Option --</option>
            <option value="report-web">Report the website</option>
            <option value="combact">Engage in physical combact</option>
            <option value="police">Report to the police</option>
            <option value="others">Others</option>
          </select>
        </div>
        
        <div className="flex gap-5 mt-10 items-center justify-center w-full ">
            {activePage > 1 && <button className='py-2 hover:bg-textSecondary hover:text-black duration-300 px-8 text-white bg-primary rounded-md' onClick={() => setPage(activePage - 1)}>Prev</button>}
            {activePage < ReportPage.length && <button onClick={() => setPage(activePage + 1)} className={`py-2 hover:bg-textSecondary hover:text-black ${btnDisabled ? 'bg-textSecondary hover:text-white' : ' bg-primary'} duration-300 px-8 text-white bg-primary rounded-md`} disabled={btnDisabled}>Next</button>}
        </div>
        {/* {activePage < ReportPage.length && <button className={`py-2 w-fit hover:bg-textSecondary hover:text-black duration-300 px-8 ${btnDisabled1 ? 'bg-textSecondary hover:text-white' : ' bg-primary'} text-white rounded-md`} onClick={() => setPage(activePage + 1)} disabled={btnDisabled1} >Next</button>} */}
    </div>
  )
}

export default ActionWants