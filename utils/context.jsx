import { createContext, useContext, useState } from "react";

const Context = createContext();

export const CreateUserContext = ({children}) => {

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

    // ===================== STATES FOR EVIDENCE =================== //
    const [evidenceFile, setEvidenceFile] = useState(null);

    const changeVictimAge = e => setVictimAge(e.target.value);


    // ======================== API CALLS ======================== //
    const apicaller = () => {
        const formData = new FormData();
        formData.append('who', who)
        console.log(formData)
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

                // ========= API FUNCTION =========== //
                apicaller,
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