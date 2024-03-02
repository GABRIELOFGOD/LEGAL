import React from 'react'
import { ReportPage } from '../../utils/constants'

const ActionPage = ({activePage, setPage}) => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className="flex flex-col">
            <p className="text-2xl mb-2 font-bold">What Action do you want us to take?</p>
        </div>
        <select className='w-full border-none outline-none bg-gray-300 py-2 px-6 flex flex-col gap-5 rounded-sm' name="type" id="type">
          <option disabled value="non">-- Select an Option --</option>
          <option value="child">Child Abuse</option>
          <option value="domestic">Domestic Violence</option>
          <option value="assault">Assault</option>
          <option value="others">Others</option>
        </select>
        <div className="flex gap-5 mt-10 items-center justify-center w-full ">
            {activePage > 1 && <button className='py-2 hover:bg-textSecondary hover:text-black duration-300 px-8 text-white bg-primary rounded-md' onClick={() => setPage(activePage - 1)}>Prev</button>}
            {activePage == ReportPage.length && <button className='py-2 hover:bg-textSecondary hover:text-black duration-300 px-8 text-white bg-primary rounded-md'>Submit</button>}
        </div>
    </div>
  )
}

export default ActionPage