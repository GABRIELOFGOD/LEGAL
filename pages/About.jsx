import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faqs } from '../utils/constants'
import { BiMinus, BiPlus } from 'react-icons/bi'

const About = () => {
  const [faqActive, setActive] = useState(null)

  const openFq = i => {
    if(faqActive == i){
      setActive(null)
    } else{
      setActive(i)
    }
  }
  
  return (
    <div>
      <div className='about flex flex-col justify-center items-center'>
        <p className="font-bold text-6xl uppercase text-white z-20">About Llegal</p>
      </div>

      <div className='md:px-24 px-6 py-10'>
        <div className='flex flex-col md:flex-row justify-between gap-10'>
          <div className='flex-1 p-10'><img src="/images/about.jpg" alt="" /></div>
          <div className='flex my-auto flex-1 flex-col gap-10'>
            <p className="text-3xl text-primary font-bold">About llegal</p>
            <p className='text-xl'>Llegal is an annex of SAFERNET built to help and aid victims of abuse and to give voice to the violence casualties of any type of abuse in any form anywhere and anytime.</p>
            <p className='text-xl mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur illum ipsam earum laborum quas, sapiente sequi? Libero repellendus corporis perferendis harum, dolor nihil quibusdam reprehenderit officiis sit, adipisci pariatur?</p>
            <Link target='_blank' className='py-3 px-6 bg-primary text-white rounded-sm w-fit' to='https://wa.me/2348038653316'>Learn more</Link>
          </div>
        </div>

        <div className='flex flex-col pt-20 md:flex-row-reverse justify-between gap-10'>
          <div className='flex-1 p-10 hidden md:flex'><img src="/images/faq.jpg" alt="" /></div>
          <div className='flex my-auto flex-1 flex-col gap-10'>
            <p className="text-3xl text-right text-primary font-bold">FAQs</p>
            <div className='flex flex-col gap-5'>
              {
                faqs.map((itm, i) => (
                  <div onClick={() => openFq(i)} className='rounded-md border flex flex-col gap-5 cursor-pointer p-3 border-gray-300' key={i}>
                    <div className="flex justify-between">
                      <p className={`font-bold text-2xl ${faqActive == i ? 'text-primary' : 'text-neutral-400'}`}>{itm.title}</p>
                      <div className="my-auto">{faqActive == i ? <BiMinus size={20} /> : <BiPlus size={20} />}</div>
                    </div>
                    <p className={`text-xl ${faqActive == i ? 'flex' : 'hidden'} `}>{itm.answer}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About