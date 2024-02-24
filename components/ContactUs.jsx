import React, { useState } from 'react'

const ContactUs = () => {
  const [fname, setFname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const [isDisabled, setDesable] = useState(false)

  return (
    <div className='contact p-6 md:p-40'>
      <p className="text-4xl mb-5 text-white">Contact Us</p>
      <form className='capitalize formaly flex flex-col gap-5 md:w-[600px]' onSubmit={e => e.preventDefault()}>
          <div className='md:flex gap-5'>
            <div>
              {/* <label htmlFor="fname">first name</label> */}
              <input value={fname} onChange={e => setFname(e.target.value)} type="text" id='fname' placeholder='enter your full name' />
            </div>
          </div>
          <div>
            {/* <label htmlFor="email">email address</label> */}
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" id='email' placeholder='example@youremail.com' />
          </div>
          <div>
            {/* <label htmlFor="phone">phone number</label> */}
            <input value={phone} onChange={e => setPhone(e.target.value)} type="number" id='phone' placeholder='+234+++++++++++' />
          </div>
          <div>
            {/* <label htmlFor="message">Message</label> */}
            <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" className='h-40' placeholder='Leave us a message...'></textarea>
          </div>
          <button disabled={isDisabled} className={`w-fit py-3 px-4 rounded-md text-white ${isDisabled ? 'bg-gray-400' : 'bg-secondary'}`}>Send Message</button>
        </form>
    </div>
  )
}

export default ContactUs