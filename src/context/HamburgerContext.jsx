import { useState } from "react";
import { createContext, useContext  } from "react";


const HamburgerContext = createContext()

const HamburgerProvider = ({children})=>{

    const [ isMobile ,setIsMobile ] = useState(false)
    function hamburgerHandler(){
       setIsMobile(!isMobile)
        }
    
    
    
    return (<HamburgerContext.Provider value={{isMobile,hamburgerHandler}} >
            {children}
            </HamburgerContext.Provider>
    )


}



const useHamburger =()=> useContext(HamburgerContext)
export {HamburgerProvider,useHamburger}