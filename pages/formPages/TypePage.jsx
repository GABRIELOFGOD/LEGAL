import React from 'react'
import { ReportPage } from '../../utils/constants'
import { ContextUser } from '../../utils/context'

const TypePage = ({activePage, btnDisabled, setBtnDisabled, setPage}) => {
  const { type, setType, info, setInfo } = ContextUser();

  if(type == 'child' || type == 'domestic' || type == 'assault' || (type == 'other' && info.length > 2)) {
    setBtnDisabled(false)
  } else{
    setBtnDisabled(true)
  }

  return (
    <div className='flex flex-col items-center gap-5'>
        <div className="flex flex-col">
            <p className="text-2xl mb-2 font-bold">Please tell us what kind of abuse.</p>
        </div>
        <select value={type} onChange={e => setType(e.target.value)} className='w-full border-none outline-none bg-gray-300 py-2 px-6 flex flex-col gap-5 rounded-sm' name="type" id="type">
          {type}
          <option disabled value="non">-- Select an Option --</option>
          <option value="child">Child Abuse</option>
          <option value="domestic">Domestic Violence</option>
          <option value="assault">Assault</option>
          <option value="other">Other</option>
        </select>
        {type == 'other' && <textarea value={info} onChange={e => setInfo(e.target.value)} name="info" id="info" className='w-full h-[100px] border-2 border-primary rounded-md p-3' placeholder='Please state the kind of abuse here.'></textarea>}
        <div className="flex gap-5 mt-10 items-center justify-center w-full ">
            {activePage > 1 && <button className='py-2 hover:bg-textSecondary hover:text-black duration-300 px-8 text-white bg-primary rounded-md' onClick={() => setPage(activePage - 1)}>Prev</button>}
            {activePage < ReportPage.length && <button onClick={() => setPage(activePage + 1)} className={`py-2 hover:bg-textSecondary hover:text-black ${btnDisabled ? 'bg-textSecondary hover:text-white' : ' bg-primary'} duration-300 px-8 text-white bg-primary rounded-md`} disabled={btnDisabled}>Next</button>}
        </div>
    </div>
  )
}

export default TypePage