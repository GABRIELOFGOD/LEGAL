import React, { useState } from 'react'
import { ReportPage } from '../../utils/constants'
import { ContextUser } from '../../utils/context'

const EvidencePage = ({activePage, setPage}) => {
  const { gotEvidence, setGotEvidence, evidence, setEvidence, evidenceFile, setEvidenceFile } = ContextUser();
  const [btnDisabled, setBtnDisabled] = useState(true)
  // const [imageFile, setImageFile] = useState(null)
  // const [audioFile, setAudioFile] = useState(null)
  // const [videoFile, setVideoFile] = useState(null)
  // const [urlFile, setUrlFile] = useState('')
  // const [otherFile, setOtherFile] = useState('')

  const fileConstance = e => {
    setEvidenceFile(e.target.files[0])
  }

  // if(!gotEvidence){
  //   setBtnDisabled(false)
  // }

  return (
    <div className='flex flex-col items-center gap-5'>
        <div className="flex flex-col">
            <p className="text-2xl mb-2 font-bold">Do you have any evidence for this your report?</p>
            <p className="text-textSecondary text-center">Uploading evidence will help us with our investigations and actions</p>
        </div>
        <div className="flex gap-10">
            <div className='flex gap-2'>
                <label htmlFor='yes' className="font-semibold">Yes</label>
                <input checked={gotEvidence} onChange={() => setGotEvidence(true)} type="radio" name="evidence" id="yes" />
            </div>
            <div className='flex gap-2'>
                <label htmlFor='no' className="font-semibold">No</label>
                <input checked={!gotEvidence} onChange={() => setGotEvidence(false)} type="radio" name="evidence" id="no" />
            </div>
        </div>
        {gotEvidence &&
          <div>
            <select defaultValue='non' value={evidence} onChange={e => setEvidence(e.target.value)} className='w-full border-none outline-none bg-gray-300 py-2 px-6 flex flex-col gap-5 rounded-sm' name="evidence" id="evidence">
              <option disabled value="non">-- Select an Option --</option>
              <option value="video">Video evidence</option>
              <option value="audio">Audio evidence</option>
              <option value="image">Image evidence</option>
              <option value="url">Website or URL</option>
              <option value="others">Others</option>
            </select>

            <div className='mt-5'>
              {evidence == 'image' && <div>
                  <p className=" font-semibold">Upload Your Image Evidence</p>
                  <input onChange={e => fileConstance(e)} type='file' accept='image/*' />
                </div>}
              {evidence == 'video' && <div>
                  <p className=" font-semibold">Upload Your Video Evidence</p>
                  <input onChange={e => fileConstance(e)} type='file' accept='video/*' />
                </div>}
              {evidence == 'audio' && <div>
                  <p className=" font-semibold">Upload Your Audio Evidence</p>
                  <input onChange={e => fileConstance(e)} type='file' accept='audio/*' />
                </div>}
              {evidence == 'url' && <div>
                  <p className=" font-semibold">Enter Your Website Evidence</p>
                  <input placeholder='Enter URL' type='text' className='w-full border-2 px-3 h-[40px] border-primary outline-none rounded-md' />
                </div>}
              {evidence == 'others' && <div>
                  <p className=" font-semibold">Please State the kind of Evidence You've Got.</p>
                  <textarea placeholder='Type Here...' className='w-full h-[100px] border-2 px-3 border-primary outline-none rounded-md' ></textarea>
                </div>}
            </div>
          </div>
        }
        {/* ============== BUTTON SECTION =================== */}
        <div className="flex gap-5 mt-10 items-center justify-center w-full ">
            {activePage > 1 && <button className='py-2 hover:bg-textSecondary hover:text-black duration-300 px-8 text-white bg-primary rounded-md' onClick={() => setPage(activePage - 1)}>Prev</button>}
            {activePage < ReportPage.length && <button onClick={() => setPage(activePage + 1)} className={`py-2 hover:bg-textSecondary hover:text-black ${btnDisabled ? 'bg-textSecondary hover:text-white' : ' bg-primary'} duration-300 px-8 text-white bg-primary rounded-md`} disabled={btnDisabled}>Next</button>}
        </div>
    </div>
  )
}

export default EvidencePage