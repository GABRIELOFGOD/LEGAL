import React, { useEffect, useState } from 'react';
import { TiMinus } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { ContextUser } from '../../utils/context';
import BotMessages from './BotMessages';
import { botMsg } from '../../utils/BotContextMsg';

const bot = ({show, setShow}) => {
  const [imageUpload, setImageUpload] = useState(false);
  const { userBotMsg, setUserBotMsg, botPlace, setBotPlace, botSug, botInputDisabled, botUserSubmitMsg, setInputDesabled, botContent, setBotSug } = ContextUser();

  
  useEffect(() => {
    setBotPlace(botContent[botContent.length -1]?.other.place)
    setInputDesabled(botContent[botContent.length -1]?.other.disableBtn)
    setBotSug(botContent[botContent.length -1]?.other.suggest)
  }, [botContent])

  // useEffect(() => {
    // for(let i = 0; i < botMsg.length; i++){

    // }
  // }, [])

  return (
    <div className='w-full flex flex-col relative bg-white h-[85%] rounded-t-[20px]'>

      {/* =============== BOT HEADER ================ // */}
      <div className="shadow-md sticky w-full py-2 flex justify-between md:grid grid-cols-3 top-0">
        <div></div>
        <p className='font-extrabold text-primary text-2xl mx-auto'>SAFEBOT</p>
        <div className='flex justify-end px-3 my-auto text-xl'>
          <button onClick={() => setShow(false)} className='shadow-sm hover:bg-yellow-500 hover:text-white duration-200 h-full border border-gray-400 px-1'><TiMinus /></button>
          <button onClick={() => setShow(false)} className='shadow-sm h-full border duration-200 hover:bg-red-700 text-white bg-red-500 border-gray-400 px-1'><IoClose /></button>
        </div>
      </div>

      {/* ============== BOT CONTENT BODY ================== // */}
      <div className='h-full bg-gray-200 text-sm md:text-sm px-6 md:px-10 flex flex-col justify-end'>
        <div className="overflow-auto see">
          <BotMessages />
        </div>
        <div className='flex flex-wrap gap-2'>
          {botSug && 
            botSug?.map((msg, i) => (
              <button onClick={() => setUserBotMsg(msg)} className='border-2 border-green-500 rounded-full bg-green-200 w-fit py-1 px-3 text-green-500 text-xs' key={i}>
                {msg}
              </button>
            ))
          }
        </div>
        <p className="text-center text-gray-400 my-1 text-xs">Note that all messages will be recorded for reference purpose</p>
      </div>

      {/* =============== BOT FOOTER ================= // */}
      <form onSubmit={e => botUserSubmitMsg(e)} className="flex w-full sticky justify-between bottom-0 shadow-inner">
        {imageUpload && <input type='file' />}
        <input disabled={botInputDisabled} value={userBotMsg} onChange={e => setUserBotMsg(e.target.value)} placeholder={botPlace} className='w-full outline-none rounded-md h-12 pl-6 pr-12 md:text-sm text-xs border-secondary border-2' type="text" />
        <button disabled={userBotMsg.length < 1} className='h-10 top-1 absolute right-1 w-10 items-center justify-center flex text-2xl text-white rounded-md bg-green-500'><FiSend /></button>
      </form>
    </div>
  )
}

export default bot