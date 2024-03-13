import React, { useEffect, useState } from 'react'
import Header from './Headingn'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './Footing'
import { BiBot } from 'react-icons/bi'
import Bot from './bot/bot'
import { ContextUser } from '../utils/context'
import { botMsg } from '../utils/BotContextMsg'

const Layout = () => {
  const [showBot, setBot] = useState(false)
  const { botContent, setBotContent, botSug, setBotSug, setBotPlace, setInputDesabled } = ContextUser();

  const botRevealer = () => {
    setBot(true)
    setBotContent([...botContent, {
      by: 'bot',
      message: botMsg[0].msg,
      other: {
        place: botMsg[0].place,
        limite: botMsg[0].lim,
        suggest: [],
        pre: null,
        disableBtn: botMsg[0].dis
      }
    }])

  }


  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <button onClick={botRevealer} className='rounded-full bot bg-primary h-[50px] w-[50px] flex items-center justify-center fixed shadow-textSecondary md:bottom-20 bottom-10 right-10 md:right-20 shadow-sm z-30'>
        <p className="text-white absolute -top-2 -right-1 bg-red-500 rounded-full text-xs h-[20px] w-[20px] flex items-center justify-center">1</p>
        <p className="text-4xl text-white"><BiBot /></p>
      </button>
      <div className={` fixed bg-opacity-80 top-0 w-full duration-300 justify-center items-end flex h-full bg-black left-0 z-50 ${showBot ? 'scale-100' : 'scale-0'}`}>
        <Bot
          show={showBot}
          setShow={setBot}
        />
      </div>
      <ScrollRestoration />
      <Footer />
    </div>
  )
}

export default Layout