import { createContext,useContext } from "react";
const BGcontext = createContext();

const BGProvider = ({children}) =>{
    return (
        <BGcontext.Provider value={{}}>
            {children}
        </BGcontext.Provider>
    )
}
const Background =() => useContext()
export {
    BGProvider,
    Background,
}