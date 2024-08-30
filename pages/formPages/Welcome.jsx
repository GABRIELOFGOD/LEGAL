import React from 'react'

const Welcome = ({activePage, setPage}) => {
  return (
    <div>
      <p className="text-4xl mb-5 font-bold text-center" data-aos="fade-right">We are here to help </p>
      <p data-aos="fade-left">If you're concerned about child abuse, we're here to support you. Your safety and well-being are our top priorities. Please don't hesitate to reach out if you have any questions, need assistance, or want to report a suspected case of child abuse.</p>

      <p data-aos="fade-left">Your privacy and confidentiality are important to us. Rest assured that your information will be handled with the utmost care and sensitivity.</p>

      <p data-aos="fade-left">Together, we can make a difference and help ensure the safety and well-being of children in our community.</p>

      <p data-aos="fade-left">Thank you for your trust.</p>

      <div className="flex mt-5 justify-end items-end" data-aos="fade-up">
        <button onClick={() => setPage(activePage + 1)} className='w-[150px] text-white duration-300 py-3 rounded-md flex items-center justify-center border text-[14px] font-semibold border-white bg-secondary hover:bg-textSecondary'>Continue to Report</button>
      </div>
    </div>
  )
}

export default Welcome