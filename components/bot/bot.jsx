import React from 'react';
import { TiMinus } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const bot = ({show, setShow}) => {
  return (
    <div className='w-full relative bg-white h-[85%] rounded-t-[20px]'>

      {/* =============== BOT HEADER ================ // */}
      <div className="shadow-md sticky w-full py-2 flex justify-between md:grid grid-cols-3 top-0">
        <div></div>
        <p className='font-extrabold text-primary text-2xl mx-auto'>SAFEBOT</p>
        <div className='flex justify-end px-3 my-auto text-xl'>
          <button onClick={() => setShow(false)} className='shadow-sm hover:bg-yellow-500 hover:text-white duration-200 h-full border border-gray-400 px-1'><TiMinus /></button>
          <button className='shadow-sm h-full border duration-200 hover:bg-red-700 text-white bg-red-500 border-gray-400 px-1'><IoClose /></button>
        </div>
      </div>

      {/* ============== BOT CONTENT BODY ================== // */}
      <div></div>

      {/* =============== BOT FOOTER ================= // */}
      <div className="flex fixed bottom-0 shadow-inner py-2"></div>
    </div>
  )
}

export default bot