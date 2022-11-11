import { createContext, useContext, useEffect, useReducer } from "react";
import { WatchLaterReducer } from "../Utils/WatchLaterReducer";

const WatchLaterContext = createContext()

const WatchLaterProvider = ({children}) =>{

    function getDataFromLocalStorage2(){
        const getData = localStorage.getItem("WatchLater")
        return getData ? JSON.parse(getData):[]
    }

    const [WatchLaterState,WatchLaterDispatch] = useReducer(WatchLaterReducer ,{WatchLater:getDataFromLocalStorage2()})

    useEffect(() => {
        localStorage.setItem("WatchLater",JSON.stringify(WatchLaterState.WatchLater))
      }, [WatchLaterState])
      
      
      


    return (
        <WatchLaterContext.Provider value={{WatchLaterState,WatchLaterDispatch}}>
            {children}
        </WatchLaterContext.Provider>
    )
}
const useWatchLater = () => useContext(WatchLaterContext)
 export {WatchLaterProvider,useWatchLater};