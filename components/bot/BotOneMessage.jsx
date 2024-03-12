import React from 'react'

const BotOneMessage = ({sender, message}) => {
  return (
    <div className={`my-auto py-2 px-5 rounded-full max-w-[80%] mb-3 w-fit ${sender == 'bot' ? 'bg-greener text-white' : 'bg-primary text-white'}`}>{message}</div>
  )
}

export default BotOneMessage