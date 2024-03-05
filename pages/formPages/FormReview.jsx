import React from 'react';
import { ContextUser } from '../../utils/context';
import { IoMdClose } from "react-icons/io";

const FormReview = () => {
  const {review, setReview} = ContextUser();

  return (
    <div className={`fixed flex flex-col items-center justify-center top-0 left-0 bg-white bg-opacity-85 w-[100vw] h-[100vh] z-50 ${review ? 'flex' : 'hidden'}`}>
      <div className="bg-white px-20 py-10 rounded-md shadow-md relative max-w-[75%] max-h-[90%]">
        <div><IoMdClose /></div>
        <p className="text-4xl text-primary font-bold text-center">Review Your Report Before Submit</p>
      </div>
    </div>
  )
}

export default FormReview