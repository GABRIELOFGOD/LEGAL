import React from 'react'
import { ContextUser } from '../../utils/context';
import BotOneMessage from './BotOneMessage';
import { BiBot } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa6';

const BotMessages = () => {
    const { botContent, setBotContent } = ContextUser();

  return (
    <div>
        {
            botContent?.map((message, i) => (
                <div className='flex gap-2' key={i}>
                    {message.by == 'bot' && <div className='h-[35px] w-[35px] rounded-full bg-greener text-white flex items-center justify-center text-xl'><BiBot /></div>}
                    <div className={`w-full flex ${message.by == 'bot' ? 'justify-start' : 'justify-end'}`}>
                        <BotOneMessage
                            message={message.message}
                            sender={message.by}
                        />
                    </div>
                    {message.by == 'user' && <div className='h-[35px] w-[35px] rounded-full bg-primary text-white flex items-center justify-center text-xl'><FaUser /></div>}
                </div>
            ))
        }
    </div>
  )
}

export default BotMessages