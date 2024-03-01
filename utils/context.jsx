import { createContext, useContext, useState } from "react";

const Context = createContext();

export const CreateUserContext = ({children}) => {

    // =================== REPORT FROM STATES ============================ //
    const [who, setWho] = useState(null)
    const [type, setType] = useState('non')
    const [info, setInfo] = useState('')



    return(
        <Context.Provider
            value={{
                who, setWho,
                type, setType,
                info, setInfo
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