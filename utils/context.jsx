import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { botMsg } from "./BotContextMsg";
import { isValidPhone } from "./validator";

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
    const [botPlace, setBotPlace] = useState('')
    const [botSug, setBotSug] = useState(null)
    const [botMsgStage, setBotMsgStage] = useState(1)
    const [botInputDisabled, setInputDesabled] = useState(false)
    const [botContent, setBotContent] = useState([
        // {
        //     by: 'bot',
        //     message: botMsg[0].msg,
        //     other: {
        //         place: botMsg[0].place,
        //         lim: botMsg[0].lim
        //     }
        // },
        // {
        //     by: 'user',
        //     message: 'hi',
        //     other: ''
        // },
        // {
        //     by: 'bot',
        //     message: 'Hello',
        //     other: ''
        // },
        // {
        //     by: 'user',
        //     message: 'hi',
        //     other: ''
        // },
        // {
        //     by: 'bot',
        //     message: 'Hello',
        //     other: ''
        // },
        // {
        //     by: 'user',
        //     message: 'hi',
        //     other: ''
        // },
    ])



    const [userBotMsg, setUserBotMsg] = useState('')
    const [botProceed, setBotProceed] = useState(true)

    const botUserSubmitMsg = async e => {
        e.preventDefault();
        if(botProceed){
            setBotMsgStage(botMsgStage + 1)
        } else {
            setBotMsgStage(botMsgStage - 1)
        }

        // ======================= CHECKING IF RESPONSE IS VALID ====================== //
        if(botMsg[botMsgStage - 1].atr == 'phone'){
            // setBotMsgStage(botMsgStage + 1)
            let isPhone = isValidPhone(userBotMsg)
            if(isPhone){
                setBotProceed(true)
                setBotMsgStage(botMsgStage + 1)
                setBotContent([...botContent, {
                    by: 'user',
                    message: userBotMsg,
                    other: ''
                },
                {
                    by: 'bot',
                    message: botMsg[botMsgStage].msg,
                    other: {
                        place: botMsg[botMsgStage].place,
                        limite: botMsg[botMsgStage].lim,
                        suggest: botMsg[botMsgStage].sug,
                        pre: botMsg[botMsgStage].pre,
                        disableBtn: botMsg[botMsgStage].dis
                    }
                }
                ])
            } else {
                setBotProceed(false)
                setBotContent([...botContent, {
                    by: 'user',
                    message: userBotMsg,
                    other: ''
                },
                {
                    by: 'bot',
                    message: 'This is not a valid phone number, can you please retype your number?',
                    other: {
                        place: botMsg[botMsgStage].place,
                        limite: botMsg[botMsgStage].lim,
                        suggest: botMsg[botMsgStage].sug,
                        pre: botMsg[botMsgStage].pre,
                        disableBtn: botMsg[botMsgStage].dis
                    }
                }
                ])
            }
        } else {
            setBotContent([...botContent, {
                by: 'user',
                message: userBotMsg,
                other: ''
            },
            {
                by: 'bot',
                message: botMsg[botMsgStage].msg,
                other: {
                    place: botMsg[botMsgStage].place,
                    limite: botMsg[botMsgStage].lim,
                    suggest: botMsg[botMsgStage].sug,
                    pre: botMsg[botMsgStage].pre,
                    disableBtn: botMsg[botMsgStage].dis
                }
            }
            ])
        }
        
        setUserBotMsg('')
        // await setBotContent([...botContent, {
        //     by: 'bot',
        //     message: botMsg[botMsgStage].msg,
        //     other: {
        //         place: botMsg[botMsgStage].place,
        //         limite: botMsg[botMsgStage].lim,
        //         suggest: botMsg[botMsgStage].sug,
        //         pre: botMsg[botMsgStage].pre,
        //         disableBtn: botMsg[botMsgStage].dis
        //     }
        // }])
    }


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
                userBotMsg, setUserBotMsg,
                botPlace, setBotPlace,
                botSug, setBotSug, botUserSubmitMsg,
                botInputDisabled, setInputDesabled,
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