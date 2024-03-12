import React from 'react'
import { ReportPage } from '../../utils/constants'
import { ContextUser } from '../../utils/context'

const TypePage = ({activePage, btnDisabled, setBtnDisabled, setPage}) => {
  const { type, setType, info, setInfo, changeVictimAge, victimAge } = ContextUser();

  if(type == 'child' || type == 'domestic' || type == 'assault' || (type == 'others' && info.length > 2)) {
    if(victimAge) {
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
    }
  } else{
    setBtnDisabled(true)
  }

  return (
    <div className='flex flex-col items-center gap-5'>
      <div className='flex flex-col gap-5'>
        <p className="text-2xl font-bold">Age of the victim:</p>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex gap-2'>
            <label className='font-semibold text-[12px]' htmlFor="12below">12 and below</label>
            <input checked={victimAge == '12below'} onChange={e => changeVictimAge(e)} value='12below' type="radio" id='12below' name='victim-age' />
          </div>
          
          <div className='flex gap-3'>
            <label className='font-semibold text-[12px]' htmlFor="13-25">13 to 25</label>
            <input checked={victimAge == '13-25'} onChange={e => changeVictimAge(e)} value='13-25' type="radio" id='13-25' name='victim-age' />
          </div>
          
          <div className='flex gap-3'>
            <label className='font-semibold text-[12px]' htmlFor="26-45">26 to 45</label>
            <input checked={victimAge == '26-45'} onChange={e => changeVictimAge(e)} value='26-45' type="radio" id='26-45' name='victim-age' />
          </div>

          <div className='flex gap-3'>
            <label className='font-semibold text-[12px]' htmlFor="46-65">46 to 65</label>
            <input checked={victimAge == '46-65'} onChange={e => changeVictimAge(e)} value='46-65' type="radio" id='46-65' name='victim-age' />
          </div>

          <div className='flex gap-3'>
            <label className='font-semibold text-[12px]' htmlFor="66above">66 and above</label>
            <input checked={victimAge == '66above'} onChange={e => changeVictimAge(e)} value='66above' type="radio" id='66above' name='victim-age' />
          </div>

          <div className='flex gap-3'>
            <label className='font-semibold text-[12px]' htmlFor="unknown">I don't know</label>
            <input onChange={e => changeVictimAge(e)} value='unknown' type="radio" id='unknown' name='victim-age' />
          </div>

        </div>
      </div>
      
      <hr />

      <div className='w-full'>
        <div className="flex flex-col">
          <p className="text-2xl mb-2 font-bold">Please tell us what kind of abuse.</p>
        </div>
        <select value={type} onChange={e => setType(e.target.value)} className='w-full border-none outline-none bg-gray-300 py-2 px-6 flex flex-col gap-5 rounded-sm' name="type" id="type">
          <option disabled value="non">-- Select an Option --</option>
          <option value="child">Child Abuse</option>
          <option value="domestic">Domestic Violence</option>
          <option value="assault">Assault</option>
          <option value="others">Others</option>
        </select>
      </div>
        {type == 'others' && <textarea value={info} onChange={e => setInfo(e.target.value)} name="info" id="info" className='w-full h-[100px] border-2 border-primary rounded-md p-3' placeholder='Please state the kind of abuse here.'></textarea>}
        <div className="flex gap-5 mt-10 items-center justify-center w-full ">
            {activePage > 1 && <button className='py-2 hover:bg-textSecondary hover:text-black duration-300 px-8 text-white bg-primary rounded-md' onClick={() => setPage(activePage - 1)}>Prev</button>}
            {activePage < ReportPage.length && <button onClick={() => setPage(activePage + 1)} className={`py-2 hover:bg-textSecondary hover:text-black ${btnDisabled ? 'bg-textSecondary hover:text-white' : ' bg-primary'} duration-300 px-8 text-white bg-primary rounded-md`} disabled={btnDisabled}>Next</button>}
        </div>
    </div>
  )
}

export default TypePage