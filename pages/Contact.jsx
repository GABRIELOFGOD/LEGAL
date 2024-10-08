import React, { useEffect, useState } from 'react';
const contact = '/images/customer-service.jpg';
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import Aos from 'aos';
import "aos/dist/aos.css";

const Contact = () => {
  const [isDisabled, setIsDisebled] = useState(true)
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[]);

  return (
    <div className='bg-white pt-32 '>
      <div className='flex flex-col md:flex-row-reverse py-6 px-6 md:gap-20 md:px-28'>
        <div className=' md:flex-1' data-aos="fade-left"><img src={contact} className='w-fit hidden md:flex' alt="contact-image" /></div>
        <div className='my-auto md:flex-1 px-10'>
          <p className="text-4xl font-bold text-primary capitalize" data-aos="fade-down">Reach out to us today</p>
          <div className='flex my-10 flex-col gap-5' data-aos="fade-right">
            <div className="flex gap-5">
              <FaLocationDot className='my-auto text-2xl' />
              <p className='my-auto'>14, station Road, City of Refuge, Ilorin, kwara state. Nigeria.</p>
            </div>
            <div className="flex gap-5">
              <FaClock className='my-auto text-2xl' />
              <p className='my-auto'>9.00am - 5.00pm</p>
            </div>
            <Link to='tel:+234 706 877 5529' className="flex gap-5">
              <MdLocalPhone className='my-auto text-2xl' />
              <p className='my-auto'>+234 706 877 5529</p>
            </Link>
            <Link to='mailto: admin@techsocietal.org' className="flex gap-5">
              <MdEmail className='my-auto text-2xl' />
              <p className='my-auto'>admin@thesafernet.org</p>
            </Link>
          </div>
          <p className="text-gray-500" data-aos="fade-up">or fill our contact form below.</p>
        </div>
      </div>
      <div className=" md:px-32 px-6 flex gap-10 flex-col items-center justify-center md:py-12 py-6">
        <p className="font-bold text-4xl text-center" data-aos="fade-right">Contact Form</p>
        <p className="text-gray-500 text-sm text-center" data-aos="fade-left">Our friendly team would love to hear from you.</p>
        <form className='capitalize form flex flex-col gap-5 md:w-[600px]' onSubmit={e => e.preventDefault()}>
          <div className='md:flex gap-5'>
            <div data-aos="fade-right">
              <label htmlFor="fname">first name: </label>
              <input value={fname} onChange={e => setFname(e.target.value)} type="text" id='fname' placeholder='enter your first name' />
            </div>
            <div data-aos="fade-left">
              <label htmlFor="lname">last name: </label>
              <input value={lname} onChange={e => setLname(e.target.value)} type="text" id='lname' placeholder='enter your last name' />
            </div>
          </div>
          <div data-aos="fade-right">
            <label htmlFor="email">email address: </label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" id='email' placeholder='example@youremail.com' />
          </div>
          <div data-aos="fade-left">
            <label htmlFor="phone">phone number: </label>
            <input value={phone} onChange={e => setPhone(e.target.value)} type="number" id='phone' placeholder='+234+++++++++++' />
          </div>
          <div data-aos="fade-right">
            <label htmlFor="message">Message: </label>
            <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" placeholder='Leave us a message...'></textarea>
          </div>
          <button disabled={isDisabled} className={`w-full py-3 text-white ${isDisabled ? 'bg-gray-400' : 'bg-greener'}`} data-aos="fade-left">send message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact