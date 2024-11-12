import { createContext, useReducer } from "react"

export const TitleColorContext = createContext()

export const TitleColorReducer = (state, action) => {

}

export const TitleColorContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(TitleColorReducer, {color: "purple"})

    return(
        <TitleColorContext.Provider value={{...state}}>{children}</TitleColorContext.Provider>
    )
}