import React, { useState } from 'react'
import Header from './Headingn'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './Footing'
import { BiBot } from 'react-icons/bi'
import Bot from './bot/bot'

const Layout = () => {
  const [showBot, setBot] = useState(false)
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <button onClick={() => setBot(true)} className='rounded-full bot bg-primary h-[50px] w-[50px] flex items-center justify-center fixed shadow-textSecondary bottom-20 right-20 shadow-sm z-30'>
        <p className="text-white absolute -top-2 -right-1 bg-red-500 rounded-full text-xs h-[20px] w-[20px] flex items-center justify-center">1</p>
        <p className="text-4xl text-white"><BiBot /></p>
      </button>
      <div className={` fixed bg-opacity-80 top-0 w-full duration-300 justify-center items-end flex h-full bg-black left-0 z-50 ${showBot ? 'scale-100' : 'scale-0'}`}>
        <Bot
          show={showBot}
          setShow={setBot}
        />
      </div>
      
      <Footer />
    </div>
  )
}

export default Layout