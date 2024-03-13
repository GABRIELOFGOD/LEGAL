import React from 'react'

const BotOneMessage = ({sender, message, pre}) => {
  return (
    <div className={`my-auto py-2 px-5 rounded-[25px] max-w-[80%] mb-3 w-fit ${sender == 'bot' ? 'bg-greener text-white' : 'bg-primary text-white'}`}>
        {(pre && sender == 'bot') && <p>Welcome {pre} </p>}
        <p>{message}</p>
      </div>
  )
}

export default BotOneMessage