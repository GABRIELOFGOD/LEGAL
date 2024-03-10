import React from 'react'
import { ContextUser } from '../../utils/context'
import { ReportPage } from '../../utils/constants';

const WhoPage = ({activePage, btnDisabled1, setBtnDisabled1, setPage}) => {
    const { who, setWho, gender, setGender } = ContextUser();

    const changeWho = e => {
        setWho(e.target.value)
    }

    const changeGender = e => {
        setGender(e.target.value)
    }

    if(who && gender){
        setBtnDisabled1(false)
    } else {
        setBtnDisabled1(false)
    }

  return (
    <div className='flex flex-col items-center gap-5'>
        <div className="flex flex-col">
            <p className="text-2xl mb-2 font-bold">Who's right is abused?</p>
            <div className="flex gap-10">
                <div className='flex gap-2'>
                    <label htmlFor='self' className="font-semibold">My Self</label>
                    <input checked={who == 'self'} onChange={e => changeWho(e)} value={'self'} type="radio" name="who" id="self" />
                </div>
                <div className='flex gap-2'>
                    <label htmlFor='someone' className="font-semibold">Someone else</label>
                    <input checked={who == 'someone'} onChange={e => changeWho(e)} value={'someone'} type="radio" name="who" id="someone" />
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <p className="text-2xl mb-2 font-bold">Victim's Gender</p>
            
            <div className="flex gap-10">
                <div className='flex gap-2'>
                    <label htmlFor='male' className="font-semibold">Male</label>
                    <input checked={gender == 'male'} onChange={e => changeGender(e)} value={'male'} type="radio" name="gender" id="male" />
                </div>
                <div className='flex gap-2'>
                    <label htmlFor='female' className="font-semibold">Female</label>
                    <input checked={gender == 'female'} onChange={e => changeGender(e)} value={'female'} type="radio" name="gender" id="female" />
                </div>
            </div>
        </div>
        
        <div className="flex gap-5 mt-10 justify-center w-full ">
            {activePage < ReportPage.length && <button className={`py-2 w-fit hover:bg-textSecondary hover:text-black duration-300 px-8 ${btnDisabled1 ? 'bg-textSecondary hover:text-white' : ' bg-primary'} text-white rounded-md`} onClick={() => setPage(activePage + 1)} disabled={btnDisabled1} >Next</button>}
        </div>
        {/* {activePage < ReportPage.length && <button className={`py-2 w-fit hover:bg-textSecondary hover:text-black duration-300 px-8 ${btnDisabled1 ? 'bg-textSecondary hover:text-white' : ' bg-primary'} text-white rounded-md`} onClick={() => setPage(activePage + 1)} disabled={btnDisabled1} >Next</button>} */}
    </div>
  )
}

export default WhoPage