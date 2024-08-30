import React, { useEffect, useState } from 'react'
import { ReportPage } from '../utils/constants';
import {TiTick} from 'react-icons/ti'
import WhoPage from '../pages/formPages/WhoPage';
import { ContextUser } from '../utils/context';
import TypePage from '../pages/formPages/TypePage';
import EvidencePage from '../pages/formPages/EvidencePage';
import ActionTakenPage from '../pages/formPages/ActionTakenPage';
import Welcome from '../pages/formPages/Welcome';
import ActionWants from '../pages/formPages/ActionWants';
import FormReview from '../pages/formPages/FormReview';
import Aos from "aos";
import 'aos/dist/aos.css'

const ReportForm = () => {
    const [activePage, setPage] = useState(1)
    const [btnDisabled1, setBtnDisabled1] = useState(true)
    const [btnDisabled2, setBtnDisabled2] = useState(true)
    const [btnDisabled3, setBtnDisabled3] = useState(true)
    const [btnDisabled5, setBtnDisabled5] = useState(true)

    const [takenBtn, setTakenBtn] = useState(true)

    useEffect(() => {
        Aos.init({ duration: 2000 });
    },[])
    
    // ================= FORM VALIDATION ====================== //
    const { setWho } = ContextUser();

    if(activePage > ReportPage.length) setPage(ReportPage.length);

  return (
    <div className='flex flex-col items-center max-w-[700px] mt-10 justify-center w-full'>

        <div className='md:flex hidden '>
            {
                ReportPage.map((page, i) => (
                    <div key={i} className={`pagecont pr-5 ${activePage == i+1 && 'active'} ${i + 1 < activePage && 'completed'}`}>
                        <div className='step' data-aos="fade-right">
                            {i + 1 < activePage ? <TiTick size={20} /> : i + 1}
                        </div>
                        <p className='text-textSecondary capitalize' data-aos="fade-left">{page}</p>
                    </div>
                ))
            }
        </div>

        <p className="text-center text-secondary mt-5 hidden md:flex font-semibold">6 Steps to Report</p>

        <form className='mt-5 md:mt-10' onSubmit={e => e.preventDefault()}>

            {/* ================ WELCOME SECTION ======================= */}
            { activePage == 1 && <Welcome
                activePage={activePage}
                setPage={setPage}            />}
            {/* ================ FORM SECTION ONE ====================== */}
            { activePage == 2 && <WhoPage
                activePage={activePage}
                btnDisabled1={btnDisabled1}
                setBtnDisabled1={setBtnDisabled1}
                setPage={setPage}
            /> }

            {/* ================ FORM SECTION TWO ====================== */}
            {
                activePage == 3 && <TypePage
                    activePage={activePage}
                    setPage={setPage}
                    btnDisabled={btnDisabled2}
                    setBtnDisabled={setBtnDisabled2}
                />
            }

            {/* ================ FORM SECTION THREE ====================== */}
            {
                activePage == 4 && <EvidencePage
                    activePage={activePage}
                    setPage={setPage}
                    btnDisabled={btnDisabled3}
                    setBtnDisabled={setBtnDisabled3}
                />
            }

            {/* ================ FORM SECTION FOUR ====================== */}
            {
                activePage == 5 && <ActionTakenPage
                    activePage={activePage}
                    setPage={setPage}
                    btnDisabled={takenBtn}
                    setBtnDisabled={setTakenBtn}
                />
            }

            {
                activePage == 6 && <ActionWants
                    activePage={activePage}
                    setPage={setPage}
                    btnDisabled={btnDisabled5}
                    setBtnDisabled={setBtnDisabled5}
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