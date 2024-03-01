import React, { useState } from 'react'
import { ReportPage } from '../utils/constants';
import {TiTick} from 'react-icons/ti'
import WhoPage from '../pages/formPages/WhoPage';
import { ContextUser } from '../utils/context';
import TypePage from '../pages/formPages/TypePage';
import EvidencePage from '../pages/formPages/EvidencePage';
import ActionPage from '../pages/formPages/ActionPage';

const ReportForm = () => {
    const [activePage, setPage] = useState(1)
    const [btnDisabled1, setBtnDisabled1] = useState(true)
    const [btnDisabled2, setBtnDisabled2] = useState(true)
    
    // ================= FORM VALIDATION ====================== //
    const { setWho } = ContextUser();

    if(activePage > ReportPage.length) setPage(ReportPage.length);

  return (
    <div className='flex flex-col items-center mt-10 justify-center w-full'>
        <div className='flex '>
            {
                ReportPage.map((page, i) => (
                    <div key={i} className={`pagecont pr-5 ${activePage == i+1 && 'active'} ${i + 1 < activePage && 'completed'}`}>
                        <div className='step'>
                            {i + 1 < activePage ? <TiTick size={20} /> : i + 1}
                        </div>
                        <p className='text-textSecondary capitalize'>{page}</p>
                    </div>
                ))
            }
        </div>
        <form className='mt-10 md:mt-20' onSubmit={e => e.preventDefault()}>
            {/* ================ FORM SECTION ONE ====================== */}
            { activePage == 1 && <WhoPage
                activePage={activePage}
                btnDisabled1={btnDisabled1}
                setBtnDisabled1={setBtnDisabled1}
                setPage={setPage}
            /> }

            {/* ================ FORM SECTION TWO ====================== */}
            {
                activePage == 2 && <TypePage
                    activePage={activePage}
                    setPage={setPage}
                    btnDisabled={btnDisabled2}
                    setBtnDisabled={setBtnDisabled2}
                />
            }

            {/* ================ FORM SECTION THREE ====================== */}
            {
                activePage == 3 && <EvidencePage
                    activePage={activePage}
                    setPage={setPage}
                />
            }

            {/* ================ FORM SECTION FOUR ====================== */}
            {
                activePage == 4 && <ActionPage
                    activePage={activePage}
                    setPage={setPage}
                />
            }


            {/* ================ BUTTON SECTION ======================== */}
            {/* <div className="flex gap-5 mt-10 items-end justify-end w-full ">
                {activePage > 1 && <button className='py-2 hover:bg-textSecondary hover:text-black duration-300 px-8 text-white bg-primary rounded-md' onClick={() => setPage(activePage - 1)}>Prev</button>}
                {activePage < ReportPage.length && <button className='py-2 hover:bg-textSecondary hover:text-black duration-300 px-8 text-white bg-primary rounded-md' onClick={() => setPage(activePage + 1)}>Next</button>}
                {activePage == ReportPage.length && <button className='py-2 hover:bg-textSecondary hover:text-black duration-300 px-8 text-white bg-primary rounded-md'>Submit</button>}
            </div> */}
        </form>
    </div>
  )
}

export default ReportForm