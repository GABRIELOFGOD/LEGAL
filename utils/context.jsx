import { createContext, useContext, useState } from "react";

const Context = createContext();

export const CreateUserContext = ({children}) => {

    // =================== REPORT FROM STATES ============================ //
    const [who, setWho] = useState(null)
    const [type, setType] = useState('non')
    const [info, setInfo] = useState('')
    const [gotEvidence, setGotEvidence] = useState(false)
    const [victimAge, setVictimAge] = useState(null)
    const [evidence, setEvidence] = useState(null)

    const changeVictimAge = e => setVictimAge(e.target.value)

    return(
        <Context.Provider
            value={{
                who, setWho,
                type, setType,
                info, setInfo,
                gotEvidence, setGotEvidence,
                victimAge, changeVictimAge,
                evidence, setEvidence
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