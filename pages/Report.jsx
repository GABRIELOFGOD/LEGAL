import React from 'react'
import ReportForm from '../components/ReportForm'
import FormReview from './formPages/FormReview'
import { ContextUser } from '../utils/context'

const Report = () => {
  const {review} = ContextUser();
  return (
    <div className='my-10 px-6 md:px-32 w-full flex flex-col justify-center items-center md:my-20'>
      <div>
        <p className="text-center text-3xl font-bold text-primary">Are you abused or someone been abused around you?</p>
        <p className="text-textSecondary text-center">Don't be afraid as we are here to help you by all possible means</p>
      </div>
      <ReportForm />
      {review && <FormReview/>}
    </div>
  )
}

export default Report