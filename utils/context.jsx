import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const CreateUserContext = ({children}) => {
    const baseUrl = 'http://localhost:3000'

    // =================== REPORT FROM STATES ============================ //
    const [who, setWho] = useState(null);
    const [gender, setGender] = useState(null)
    const [type, setType] = useState('non')
    const [info, setInfo] = useState('')
    const [gotEvidence, setGotEvidence] = useState(false)
    const [victimAge, setVictimAge] = useState(null)
    const [evidence, setEvidence] = useState(null)
    const [review, setReview] = useState(false)

    const [actionTaken, setTaken] = useState('non')
    const [actionWant, setWant] = useState(null)

    const [username, setUsername] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const [phone, setPhone] = useState(null)

    // ===================== STATES FOR EVIDENCE =================== //
    const [evidenceFile, setEvidenceFile] = useState(null);

    const changeVictimAge = e => setVictimAge(e.target.value);

    const [lastPrompt, setPrompt] = useState(false)

    const [lastLoad, setLastLoad] = useState(false)

    const [caseCode, setCaseCode] = useState(null)

    const [recMail, setMail] = useState(null)

    const [recName, setName] = useState(null)

    // ==================================== WORKING ON CHATBOT =================================== //
    const [botContent, setBotContent] = useState([
        {
            by: 'bot',
            message: 'Hello',
            other: ''
        },
        {
            by: 'user',
            message: 'hi',
            other: ''
        },
        {
            by: 'bot',
            message: 'Hello',
            other: ''
        },
        {
            by: 'user',
            message: 'hi',
            other: ''
        },
        {
            by: 'bot',
            message: 'Hello',
            other: ''
        },
        {
            by: 'user',
            message: 'hi',
            other: ''
        },
    ])
    // ==================================== WORKING ON CHATBOT =================================== //


    // ================================ WORKING ON CASE TRACKING ============================== //

    const [trackMail, setTrackMail] = useState('')
    const [trackCode, setTrackCode] = useState('')
    
    const caseTrackingRequest = async e => {
        e.preventDefault();

        const res = await fetch(`${baseUrl}/abuse/track`, {
            method: 'POST',
            body: JSON.stringify({
                email: trackMail,
                caseCode: trackCode
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await res.json();

        if(!res.ok){
            toast.error(response.error, {
                duration: 5000,
                className: 'text-[12px]',
                position: 'top-right'
            })
        }

        if(res.ok){
            location.assign('track')
        }

        console.log(response)
    }
    
    // ================================ WORKING ON CASE TRACKING ============================== //



    // ======================== API CALLS ======================== //
    const apicaller = () => {
        const formData = new FormData();
        formData.append('who', who)
        console.log(formData)
    }

    
    // ================= SUBMITING REPORT ================= //
    const reportFunction = async (e) => {
        setLastLoad(true)
        e.preventDefault();
        // const [togoEvi, setTogo] = useState(null)
        // if(evidence == 'url' || evidence == 'others') ''
        if(!username) setUsername('Anonymous')
        const formData = new FormData();
        formData.append('name', username)
        formData.append('email', userEmail)
        formData.append('who', who)
        formData.append('phone', phone)
        formData.append('age', victimAge)
        formData.append('gender', gender)
        formData.append('abuse', type)
        formData.append('evidenceType', evidence)
        formData.append('evidence', evidenceFile)
        formData.append('actionTaken', actionTaken)
        formData.append('actionWant', actionWant)
        formData.append('reportMeans', 'form')

        const res = await fetch(`${baseUrl}/abuse/post`, {
            method: 'POST',
            body: formData,
            credentials: 'include'
        })

        const response = await res.json()

        if(!res.ok){
            toast.error(response.error, {
                duration: 5000,
                className: 'text-[12px]',
                position: 'top-right'
            })
            setLastLoad(false)
        }

        if(res.ok){
            setCaseCode(response.caseCode)
            setMail(response.email)
            setName(response.name)
            setPrompt(true)
        }

    }

    return(
        <Context.Provider
            value={{
                who, setWho,
                type, setType,
                info, setInfo,
                gotEvidence, setGotEvidence,
                victimAge, changeVictimAge,
                evidence, setEvidence,
                evidenceFile, setEvidenceFile,
                actionTaken, setTaken,
                actionWant, setWant,
                review, setReview,
                gender, setGender,
                username, setUsername,
                userEmail, setUserEmail,
                phone, setPhone,
                setPrompt, lastPrompt,
                lastLoad, setLastLoad,
                caseCode, recMail, recName,

                // ========== TRACK =========== //
                trackCode, setTrackCode,
                trackMail, setTrackMail,
                // ========== TRACK =========== //

                // =========== BOT ============= //
                botContent, setBotContent,
                // =========== BOT ============= //

                // ========= API FUNCTION =========== //
                apicaller,
                reportFunction,
                caseTrackingRequest,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const ContextUser = () => {
    const context = useContext(Context)
    return context;
}