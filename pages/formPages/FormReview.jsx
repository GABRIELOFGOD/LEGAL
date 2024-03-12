import React, { useEffect, useState } from 'react';
import { ContextUser } from '../../utils/context';
import { IoMdClose } from "react-icons/io";
import UserInfo from '../../components/UserInfo';

const FormReview = () => {

  const [showInfo, setShowInfo] = useState(false)

  const [kind, setKind] = useState(null)
  const [whoAbuse, setWhoAbuse] = useState(null)
  const [ageAbuse, setAgeAbuse] = useState(null)
  const [abuseActionT, setAbuseActionT] = useState(null)
  const [abuseActionW, setAbuseActionW] = useState(null)
  const [abuseEvidence, setAbuseEvidence] = useState(null)

  const { review, setReview, who, victimAge, type, info, gotEvidence, evidence, actionTaken, actionWant, gender } = ContextUser();

  useEffect(() => {
    // ========== FOR TYPE REWRITE ============= //
    if(type == 'child') setKind('Child Abuse')
    if(type == 'domestic') setKind('Domestic Violence')
    if(type == 'assault') setKind('Assault')
    if(type == 'others') setKind(info)

    // =============== FOR WHO REWRITE ================= //
    if(who == 'self') setWhoAbuse('You write this report for Yourself')
    if(who == 'someone') setWhoAbuse('You write this report for someone else')

    // =============== FOR VICTIM AGE REWRITE ================= //
    if(victimAge == '12below') setAgeAbuse('Age 12 or below')
    if(victimAge == '13-25') setAgeAbuse('Age 13 to 25')
    if(victimAge == '26-45') setAgeAbuse('Age 26 to 45')
    if(victimAge == '46-65') setAgeAbuse('Age 46 to 65')
    if(victimAge == '66above') setAgeAbuse('Age 66 and above')

    // =============== FOR GOT EVIDENCE REWRITE ================= //
    // if(evidence == 'video') setAbuseEvidence()
    // =============== FOR VICTIM GENDER REWRITE ================= //
    // =============== FOR ACTION TAKEN REWRITE ================= //
    if(actionTaken == 'non') setAbuseActionT('No Action Taken')
    if(actionTaken == 'report-web') setAbuseActionT('You report the website')
    if(actionTaken == 'combact') setAbuseActionT('You fight the person')
    if(actionTaken == 'police') setAbuseActionT('You report to the police')
    if(actionTaken == 'cried') setAbuseActionT('You express emotional pain')
    if(actionTaken == 'fear') setAbuseActionT('You are afraid to take action')
    if(actionTaken == 'others') setAbuseActionT(actionTaken)

    // =============== FOR ACTION WANT REWRITE ================= //
    if(actionWant == 'counsellor') setAbuseActionW('Need a counsellor Service')
    if(actionWant == 'legal') setAbuseActionW('Need a legal Service/Support')
    if(actionWant == 'social') setAbuseActionW('Need a Psyco-social Support')
    if(actionWant == 'others') setAbuseActionW(actionWant)
  }, [])

  return (
    <div className={`fixed flex flex-col items-center justify-center px-2 top-0 left-0 bg-white bg-opacity-85 w-[100vw] h-[100vh] z-50 ${review ? 'flex' : 'hidden'}`}>
      <div className="bg-white px-20 py-20 rounded-md shadow-md flex flex-col items-center justify-center gap-5 relative w-full md:max-w-[75%] max-h-[90%]">
        <div onClick={() => setReview(false)} className='absolute font-bold text-primary text-2xl right-10 top-5'><IoMdClose /></div>
        <p className="text-4xl text-primary font-bold text-center">Review Your Report Before Submit</p>
        <hr className='bg-textSecondary h-[2px] w-full' />
        <div className='flex w-full gap-3 flex-col'>
          <div className='flex justify-between flex-col gap-5 md:grid grid-cols-2'>
            <div className="flex gap-3">
              <p className="text-primary font-semibold">Report For:</p>
              <p className='capitalize'>{whoAbuse}</p>
            </div>
            <div className="flex gap-3 md:justify-end ">
              <p className="text-primary font-semibold">Victim Age:</p>
              <p>{ageAbuse}</p>
            </div>
          </div>

          <div className='flex justify-between flex-col gap-5 md:grid grid-cols-2'>
            <div className="flex gap-3">
              <p className="text-primary font-semibold">Kind of Abuse:</p>
              {kind && <p className='capitalize'>{kind}</p>}
            </div>
            <div className="flex gap-3 md:justify-end ">
              <p className="text-primary font-semibold">Victim Gender:</p>
              <p>{gender}</p>
            </div>
            {/* <div className="flex gap-3 md:justify-end ">
              <p className="text-primary font-semibold">Evidence:</p>
              {gotEvidence ? <p className='capitalize'>{evidence} Evidence</p> : <p>You have no evidence</p>}
            </div> */}
          </div>

          <div className='flex justify-between flex-col gap-5 md:grid grid-cols-2'>
            <div className="flex gap-3">
              <p className="text-primary font-semibold">Action You've Take:</p>
              <p className='capitalize'>{abuseActionT}</p>
            </div>
            <div className="flex gap-3 md:justify-end ">
              <p className="text-primary font-semibold">Action Want:</p>
              <p className='capitalize'>{abuseActionW}</p>
            </div>
          </div>

          <div className='flex justify-between flex-col gap-5 md:grid grid-cols-2'>
            <div className="flex gap-3">
              <p className="text-primary font-semibold">Evidence:</p>
              {gotEvidence && <p className='capitalize'>{evidence} Evidence</p>}
            </div>
            {/* <div className="flex gap-3 justify-end">
              <p className="text-primary font-semibold">Action Want:</p>
              <p className='capitalize'>{abuseActionW}</p>
            </div> */}
          </div>
        </div>
        <div className='flex gap-5 mt-3'>
          <button onClick={() => setReview(false)} className='py-3 px-6 rounded-md bg-red-500 text-white hover:bg-gray-500 duration-200'>Edit Report</button>
          <button onClick={() => setShowInfo(true)} className='py-3 px-6 rounded-md bg-secondary text-white hover:bg-gray-500 duration-200'>Submit Report</button>
        </div>
      </div>
      <UserInfo
        show={showInfo}
        setShow={setShowInfo}
      />
    </div>
  )
}

export default FormReview