import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-primary text-white md:px-32 md:py-20 py-10 px-6'>
      <div className='flex justify-between mb-3'>
        <Link className="text-2xl m-0 text-secondary font-semibold">Llegal</Link>
        <div className="flex text-2xl gap-3">
          <FaFacebookSquare className='text-[#335BF5]' />
          <CiInstagram className='text-[#E51F5A]' />
          <FaTwitter className='text-[#21A6DF]' />
          <FaYoutube className='text-[#E42F08]' />
        </div>
      </div>
      <hr />
      <div className="flex justify-between mt-3">
        <span>All Right Reserved</span>
        <div className="flex gap-3">
          <span className='my-auto'>&copy;</span>
          <p className="font-bold text-xl">SAFERNET</p>
        </div>
      </div>
    </div>
  )
}

export default Footer