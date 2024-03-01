import React from 'react'
import { ReportPage } from '../../utils/constants'

const ActionPage = ({activePage, setPage}) => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className="flex flex-col">
            <p className="text-2xl mb-2 font-bold">Section 4</p>
        </div>
        <div className="flex gap-5 mt-10 items-end justify-end w-full ">
            {activePage > 1 && <button className='py-2 hover:bg-textSecondary hover:text-black duration-300 px-8 text-white bg-primary rounded-md' onClick={() => setPage(activePage - 1)}>Prev</button>}
            {activePage == ReportPage.length && <button className='py-2 hover:bg-textSecondary hover:text-black duration-300 px-8 text-white bg-primary rounded-md'>Submit</button>}
        </div>
    </div>
  )
}

export default ActionPage