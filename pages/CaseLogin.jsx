import React, { useEffect } from 'react'
import { ContextUser } from '../utils/context'
import { Oval } from 'react-loader-spinner';
import { CgClose } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

const CaseLogin = () => {
  const { caseTrackingRequest, trackMail, setTrackMail, trackCode, setTrackCode, findLoad, setFindLoad } = ContextUser();
  const navigate = useNavigate();
    // TODO: find out the meaning and the uses of flex-grow
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
    
  return (
    <div className=' fixed flex items-center justify-center z-50 top-0 left-0 h-full w-full bg-black bg-opacity-70'>
      <div className='flex flex-col px-6 md:py-20 bg-white h-[80%] relative w-[90%] py-10 gap-2 items-center justify-center'>
        <div onClick={() => navigate(-1)} className='absolute font-bold cursor-pointer md:top-10 top-5 right-5 text-primary md:right-20'><CgClose size={25} /></div>
        <p className="text-center text-primary text-3xl font-bold" data-aos="fade-right">Hello! Welcome To Case Tracking Portal.</p>
        <p className="text-center text-textSecondary text-sm mb-5" data-aos="fade-left">Kindly provide the following informations to keep track on your case</p>
        <form onSubmit={e => caseTrackingRequest(e)} className="flex md:w-[350px] w-full flex-col gap-5">
            <input value={trackMail} onChange={e => setTrackMail(e.target.value)} type="email" placeholder='Input the email used to report your case' className='w-full text-xs py-3 px-5 outline-none border-2 border-primary' data-aos="fade-right" />
            <input value={trackCode} onChange={e => setTrackCode(e.target.value)} type="text" placeholder='The case code that was given to your on report' className='w-full text-xs py-3 px-5 outline-none border-2 border-primary' data-aos="fade-left" />
            {findLoad ? <button disabled className={`w-full py-3 flex items-center justify-center bg-primary text-white text-xs hover:bg-secondary duration-200`}><Oval height={20} width={20} color='white' /></button> :
            <button className={`w-full py-3 bg-primary text-white text-xs border border-primary hover:bg-secondary duration-200`} data-aos="fade-right">Find Case</button>}
        </form>
      </div>
    </div>
  )
}

export default CaseLogin