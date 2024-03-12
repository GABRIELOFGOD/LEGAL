import React, { useState } from 'react'
import { ContextUser } from '../utils/context'
import { IoMdClose } from 'react-icons/io';
import { isValidEmail, isValidPhone } from '../utils/validator';
import toast, { Toaster } from 'react-hot-toast';

const UserInfo = ({show, setShow}) => {
    const { username, userEmail, setUsername, setUserEmail, phone, setPhone, reportFunction } = ContextUser();

    // const [subDis, setDis] = useState(false);
    const [goodToGo, setGood] = useState(false)

    // if(phone.length > 2 && userEmail.length > 3){
    //     setDis(false)
    // } else {
    //     setDis(true)
    // }

    const formSubmitter = e => {
        const isEmail = userEmail ? isValidEmail(userEmail) : ''
        const isPhone = phone ? isValidPhone(phone) : ''

        if(!isEmail){
            return (
                toast.error('This is not a valid Email Address', {
                    duration: 5000,
                    position: 'top-right',
                    className: "text-[12px]"
                })
            )
        }
        
        if(!isPhone){
            return (
                toast.error('This is not a valid Phone number', {
                    duration: 5000,
                    position: 'top-right',
                    className: "text-[12px]"
                })
            )
        }

        reportFunction(e)

    }
    
  return (
    <div className={`flex-col justify-center items-center bg-black bg-opacity-80 w-full h-full top-0 left-0 absolute ${show ? 'flex' : 'hidden'}`}>
        <div className="bg-white relative rounded-md py-16 w-[400px] px-10 shadow-md">
            <div onClick={() => setShow(false)} className='absolute cursor-pointer font-bold text-primary text-2xl right-5 top-5'><IoMdClose /></div>
            <p className="text-primary font-semibold text-center mb-3 text-xl">Your Informations has been received, and proper actions will be taken. Can you please provide us this informations so we can help you further?</p>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <label className='text-xs' htmlFor="username">What is Your Name?</label>
                    <input placeholder='Leave it Blank if you wish to use Anonymous' className='w-full text-xs py-3 px-5 outline-none border-2 border-primary' type="text" id='username' value={username} onChange={e => setUsername(e.target.value)} />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-xs' htmlFor="username">What is Your Email?</label>
                    <input placeholder='Enter your active email address' className='w-full text-xs py-3 px-5 outline-none border-2 border-primary' type="email" id='username' value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                    {!userEmail && <p className='text-center text-xs text-red-500'>Please enter your email address</p>}
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-xs' htmlFor="username">What is Your Phone Number</label>
                    <input placeholder='Enter your Phone Number' className='w-full text-xs py-3 px-5 outline-none border-2 border-primary' type="text" id='username' value={phone} onChange={e => setPhone(e.target.value)} />
                </div>

                <button onClick={e => formSubmitter(e)} className={`w-full py-3 bg-primary text-white text-xs hover:bg-secondary duration-200`}>SUBMIT REPORT</button>
            </div>
        </div>
        
      {/* <Toaster /> */}
    </div>
  )
}

export default UserInfo